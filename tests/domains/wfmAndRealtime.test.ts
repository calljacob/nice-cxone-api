import { describe, it, expect, vi } from "vitest";
import NiceCXoneClient from "../../src/index.js";

describe("WFM and Realtime Services", () => {
  it("WfmExportscheduleService exports schedules", async () => {
    let capturedUrl = "";
    let capturedMethod = "";
    let capturedBody = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedMethod = init?.method || "GET";
      capturedBody = (init?.body as string) || "";
      return new Response(
        JSON.stringify({ agentSchedules: [], start: "2026-07-01", end: "2026-07-07" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const result = await client.wfm.exportschedule.exportScheduleAsList({
      startDate: "2026-07-01",
      endDate: "2026-07-07",
      userID: "usr-wfm-1",
    });

    expect(capturedUrl).toContain("/schedules/export");
    expect(capturedMethod).toBe("POST");
    expect(capturedBody).toContain("usr-wfm-1");
    expect(result.start).toBe("2026-07-01");
  });

  it("RealtimedataRealtimeService queries agent states", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(
        JSON.stringify({ agentStates: [{ agentId: 101, agentStateName: "Available" }] }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const result = await client.realtime.dataRealtime.getAgentStates({
      query: { top: 10 },
    });

    expect(capturedUrl).toContain("/agents/states");
    expect(capturedUrl).toContain("top=10");
    expect(result.agentStates).toHaveLength(1);
  });
});
