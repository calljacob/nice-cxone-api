import { describe, it, expect, vi } from "vite-plus/test";
import NiceCXoneClient from "../../src/index.js";

describe("Patron Domain Services", () => {
  it("PatronCallbackService requests and schedules callbacks", async () => {
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

    await client.patron.callback.requestACallback({
      query: { phoneNumber: "+18005550100", skill: 10 },
    });

    expect(capturedUrl).toContain("/queuecallback");
    expect(capturedUrl).toContain("phoneNumber");
    expect(capturedMethod).toBe("POST");
  });
});
