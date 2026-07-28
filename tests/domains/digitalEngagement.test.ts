import { describe, it, expect, vi } from "vite-plus/test";
import NiceCXoneClient from "../../src/index.js";

describe("Digital Engagement Domain Services", () => {
  it("DigitalMessageService sends digital message", async () => {
    let capturedUrl = "";
    let capturedMethod = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedMethod = init?.method || "GET";
      return new Response(JSON.stringify({ message: { id: "msg-123", status: "SENT" } }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const result = await client.digitalEngagement.message.sendOutboundMessage("chan-999", {
      thread: { id: "th-1" },
    });

    expect(capturedUrl).toContain("/channels/chan-999/outbound");
    expect(capturedMethod).toBe("POST");
    expect(result.message?.id).toBe("msg-123");
  });
});
