import { describe, it, expect, vi } from "vitest";
import NiceCXoneClient from "../../src/index.js";

describe("Reporting Domain Services", () => {
  it("ReportingReportingService fetches report data", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(
        JSON.stringify({
          contacts: [{ contactId: 98765, skillId: 10, duration: 120 }],
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const result = await client.reporting.reporting.getContacts({
      query: { startDate: "2026-07-01T00:00:00Z", endDate: "2026-07-27T00:00:00Z" },
    });

    expect(capturedUrl).toContain("/contacts");
    expect(capturedUrl).toContain("startDate=");
    expect(result.contacts).toHaveLength(1);
  });
});
