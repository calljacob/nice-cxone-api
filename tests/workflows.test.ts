import { describe, it, expect, vi } from "vite-plus/test";
import NiceCXoneClient from "../src/index.js";

describe("Workflow & Advanced Scenarios", () => {
  it("isolates headers and query options across concurrent requests", async () => {
    const capturedRequests: Array<{ url: string; headers: Record<string, string> }> = [];

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedRequests.push({
        url,
        headers: (init?.headers as Record<string, string>) || {},
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({
      accessToken: "global-token",
      correlationId: "global-corr-id",
      fetch: mockFetch as any,
    });

    // Run 3 concurrent requests with different parameters and correlation IDs
    await Promise.all([
      client.admin.agents.getAgents({
        correlationId: "req-1-corr",
        query: { top: "5" },
      }),
      client.admin.skills.getSkills({
        correlationId: "req-2-corr",
        query: { mediaTypeId: 1 },
      }),
      client.admin.addressbook.getAddressBooks({
        headers: { "X-Custom-Header": "custom-val" },
      }),
    ]);

    expect(capturedRequests).toHaveLength(3);

    const req1 = capturedRequests.find((r) => r.url.includes("/agents"));
    expect(req1?.url).toContain("top=5");
    expect(req1?.headers["CorrelationId"]).toBe("req-1-corr");
    expect(req1?.headers["Authorization"]).toBe("Bearer global-token");

    const req2 = capturedRequests.find((r) => r.url.includes("/skills"));
    expect(req2?.url).toContain("mediaTypeId=1");
    expect(req2?.headers["CorrelationId"]).toBe("req-2-corr");

    const req3 = capturedRequests.find((r) => r.url.includes("/address-books"));
    expect(req3?.headers["CorrelationId"]).toBe("global-corr-id");
    expect(req3?.headers["X-Custom-Header"]).toBe("custom-val");
  });

  it("handles token refresh workflow seamlessly", async () => {
    let currentToken = "initial-token-v1";
    const refreshCallback = async () => currentToken;

    const authHeaders: string[] = [];

    const mockFetch = vi.fn().mockImplementation(async (_url: string, init?: RequestInit) => {
      const auth = (init?.headers as Record<string, string>)["Authorization"];
      authHeaders.push(auth);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({
      accessToken: refreshCallback,
      fetch: mockFetch as any,
    });

    await client.admin.agents.getAgents();
    expect(authHeaders[0]).toBe("Bearer initial-token-v1");

    // Simulate OAuth token refresh
    currentToken = "refreshed-token-v2";

    await client.admin.agents.getAgents();
    expect(authHeaders[1]).toBe("Bearer refreshed-token-v2");
  });
});
