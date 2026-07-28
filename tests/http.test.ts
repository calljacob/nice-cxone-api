import { describe, it, expect, vi } from "vite-plus/test";
import { HttpClient } from "../src/http.js";
import { NiceCXoneAPIError } from "../src/errors.js";

describe("HttpClient", () => {
  it("formats base URL and query parameters correctly", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(JSON.stringify({ data: "ok" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new HttpClient({
      baseUrl: "https://api.incontact.com/inContactAPI/services/v3.0/",
      fetch: mockFetch as any,
    });

    await client.get("/agents", {
      query: {
        top: 25,
        skip: 0,
        isActive: true,
        tags: ["tag1", "tag2"],
        nullValue: null,
        undefinedValue: undefined,
      },
    });

    expect(capturedUrl).toContain("https://api.incontact.com/inContactAPI/services/v3.0/agents");
    expect(capturedUrl).toContain("top=25");
    expect(capturedUrl).toContain("skip=0");
    expect(capturedUrl).toContain("isActive=true");
    expect(capturedUrl).toContain("tags=tag1&tags=tag2");
    expect(capturedUrl).not.toContain("nullValue");
    expect(capturedUrl).not.toContain("undefinedValue");
  });

  it("handles POST, PUT, PATCH, and DELETE requests with body", async () => {
    const calls: Array<{ method: string; body: string | undefined; contentType: string | null }> =
      [];

    const mockFetch = vi.fn().mockImplementation(async (_url: string, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      calls.push({
        method: init?.method || "GET",
        body: init?.body as string | undefined,
        contentType: headers.get("content-type"),
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new HttpClient({ fetch: mockFetch as any });

    await client.post("/test-post", { name: "test-post" });
    await client.put("/test-put", { name: "test-put" });
    await client.patch("/test-patch", { name: "test-patch" });
    await client.delete("/test-delete", { id: 123 });

    expect(calls).toHaveLength(4);
    expect(calls[0]).toEqual({
      method: "POST",
      body: '{"name":"test-post"}',
      contentType: "application/json",
    });
    expect(calls[1]).toEqual({
      method: "PUT",
      body: '{"name":"test-put"}',
      contentType: "application/json",
    });
    expect(calls[2]).toEqual({
      method: "PATCH",
      body: '{"name":"test-patch"}',
      contentType: "application/json",
    });
    expect(calls[3]).toEqual({
      method: "DELETE",
      body: '{"id":123}',
      contentType: "application/json",
    });
  });

  it("handles 204 No Content response", async () => {
    const mockFetch = vi.fn().mockImplementation(async () => {
      return new Response(null, { status: 204, statusText: "No Content" });
    });

    const client = new HttpClient({ fetch: mockFetch as any });
    const result = await client.delete("/agents/101");

    expect(result).toBeUndefined();
  });

  it("handles plain text non-JSON responses", async () => {
    const mockFetch = vi.fn().mockImplementation(async () => {
      return new Response("OK", { status: 200, headers: { "Content-Type": "text/plain" } });
    });

    const client = new HttpClient({ fetch: mockFetch as any });
    const result = await client.get<string>("/health");

    expect(result).toBe("OK");
  });

  it("throws NiceCXoneAPIError when non-2xx status code is returned", async () => {
    const mockFetch = vi.fn().mockImplementation(async () => {
      return new Response("Internal Server Error", {
        status: 500,
        statusText: "Internal Server Error",
        headers: { CorrelationId: "corr-500-test" },
      });
    });

    const client = new HttpClient({ fetch: mockFetch as any });

    try {
      await client.get("/broken");
      expect.fail("Should have thrown NiceCXoneAPIError");
    } catch (err: any) {
      expect(err).toBeInstanceOf(NiceCXoneAPIError);
      expect(err.status).toBe(500);
      expect(err.statusText).toBe("Internal Server Error");
      expect(err.correlationId).toBe("corr-500-test");
    }
  });
});
