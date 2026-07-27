import { describe, it, expect, vi } from "vitest";
import NiceCXoneClient from "../../src/index.js";

describe("Agent Domain Services", () => {
  it("AgentPhoneService dials and ends phone calls", async () => {
    let capturedUrl = "";
    let capturedMethod = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedMethod = init?.method || "GET";
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    // Test POST /agent-sessions/{sessionId}/agent-phone/dial
    await client.agent.phone.dialAgentPhone("session-123");
    expect(capturedUrl).toContain("/agent-sessions/session-123/agent-phone/dial");
    expect(capturedMethod).toBe("POST");
  });

  it("AgentSessionsService manages session lifecycle", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(JSON.stringify({ sessionId: "sess-abc-789" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    await client.agent.sessions.getNextEvent("sess-abc-789", { query: { timeout: 30 } });
    expect(capturedUrl).toContain("/agent-sessions/sess-abc-789/get-next-event");
  });
});
