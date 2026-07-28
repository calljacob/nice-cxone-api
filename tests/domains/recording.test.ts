import { describe, it, expect, vi } from "vite-plus/test";
import NiceCXoneClient from "../../src/index.js";

describe("Recording Domain Services", () => {
  it("RecordingInteractionsService masks recording for privacy compliance", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    await client.recording.interactions.postInteractionMask({
      query: { userId: "usr-777" },
    });

    expect(capturedUrl).toContain("/interaction-recording-management-service/v1/interactions/mask");
    expect(capturedUrl).toContain("userId=usr-777");
  });
});
