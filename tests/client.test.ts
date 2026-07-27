import { describe, it, expect, vi } from "vitest";
import NiceCXoneClient, { NiceCXoneAPIError } from "../src/index.js";

describe("NiceCXoneClient", () => {
  it("instantiates with default configuration and exposes all domain services", () => {
    const client = new NiceCXoneClient({ accessToken: "test-token" });

    expect(client.admin).toBeDefined();
    expect(client.admin.agents).toBeDefined();
    expect(client.admin.addressbook).toBeDefined();
    expect(client.admin.skills).toBeDefined();

    expect(client.agent).toBeDefined();
    expect(client.agent.phone).toBeDefined();
    expect(client.agent.sessions).toBeDefined();

    expect(client.auth).toBeDefined();
    expect(client.auth.authenticate).toBeDefined();

    expect(client.patron).toBeDefined();
    expect(client.realtime).toBeDefined();
    expect(client.reporting).toBeDefined();
    expect(client.userhub).toBeDefined();
    expect(client.dataExtraction).toBeDefined();
    expect(client.mediaPlayback).toBeDefined();
    expect(client.digitalEngagement).toBeDefined();
    expect(client.businessData).toBeDefined();
    expect(client.wfm).toBeDefined();
    expect(client.recording).toBeDefined();
    expect(client.interactionAnalytics).toBeDefined();
    expect(client.privacy).toBeDefined();
    expect(client.dataPolicy).toBeDefined();
    expect(client.voiceBiometrics).toBeDefined();
    expect(client.feedbackManagement).toBeDefined();
  });

  it("passes Authorization token and custom CorrelationId in headers", async () => {
    let capturedUrl = "";
    let capturedHeaders: Record<string, string> = {};

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedHeaders = (init?.headers as Record<string, string>) || {};
      return new Response(JSON.stringify({ agents: [{ agentId: 1001, firstName: "Jane", lastName: "Doe" }] }), {
        status: 200,
        headers: { "Content-Type": "application/json", "CorrelationId": "corr-resp-123" }
      });
    });

    const client = new NiceCXoneClient({
      baseUrl: "https://api-na1.niceincontact.com/inContactAPI/services/v3.0",
      accessToken: "my-secret-access-token",
      correlationId: "corr-req-789",
      fetch: mockFetch as any,
    });

    const response = await client.admin.agents.getAgents({
      query: { top: "10", skip: "0" }
    });

    expect(mockFetch).toHaveBeenCalledOnce();
    expect(capturedUrl).toContain("https://api-na1.niceincontact.com/inContactAPI/services/v3.0/agents");
    expect(capturedUrl).toContain("top=10");
    expect(capturedUrl).toContain("skip=0");
    expect(capturedHeaders["Authorization"]).toBe("Bearer my-secret-access-token");
    expect(capturedHeaders["CorrelationId"]).toBe("corr-req-789");
    expect(response).toEqual({ agents: [{ agentId: 1001, firstName: "Jane", lastName: "Doe" }] });
  });

  it("supports dynamic async token resolution", async () => {
    let tokenCounter = 0;
    const tokenProvider = async () => {
      tokenCounter++;
      return `dynamic-token-${tokenCounter}`;
    };

    let capturedToken = "";
    const mockFetch = vi.fn().mockImplementation(async (_url: string, init?: RequestInit) => {
      capturedToken = (init?.headers as Record<string, string>)["Authorization"];
      return new Response(JSON.stringify({ addressBooks: [] }), { status: 200, headers: { "Content-Type": "application/json" } });
    });

    const client = new NiceCXoneClient({
      accessToken: tokenProvider,
      fetch: mockFetch as any,
    });

    await client.admin.addressbook.getAddressBooks();
    expect(capturedToken).toBe("Bearer dynamic-token-1");

    await client.admin.addressbook.getAddressBooks();
    expect(capturedToken).toBe("Bearer dynamic-token-2");
  });

  it("throws NiceCXoneAPIError on non-2xx responses with correlation ID", async () => {
    const mockFetch = vi.fn().mockImplementation(async () => {
      return new Response(
        JSON.stringify({ error: "unauthorized", error_description: "Access token has expired", correlationId: "corr-err-999" }),
        { status: 401, statusText: "Unauthorized", headers: { "Content-Type": "application/json" } }
      );
    });

    const client = new NiceCXoneClient({
      accessToken: "expired-token",
      fetch: mockFetch as any,
    });

    await expect(client.admin.agents.getAgents()).rejects.toThrow(NiceCXoneAPIError);

    try {
      await client.admin.agents.getAgents();
    } catch (err: any) {
      expect(err).toBeInstanceOf(NiceCXoneAPIError);
      expect(err.status).toBe(401);
      expect(err.message).toContain("Access token has expired");
      expect(err.correlationId).toBe("corr-err-999");
    }
  });

  it("formats path parameters correctly in endpoints", async () => {
    let capturedUrl = "";
    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(JSON.stringify({ addressBookId: 123 }), { status: 200, headers: { "Content-Type": "application/json" } });
    });

    const client = new NiceCXoneClient({
      fetch: mockFetch as any,
    });

    await client.admin.addressbook.deleteAddressbook(123);
    expect(capturedUrl).toContain("/address-books/123");
  });
});
