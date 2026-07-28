import { describe, it, expect, vi } from "vite-plus/test";
import NiceCXoneClient from "../../src/index.js";

describe("Admin Domain Services", () => {
  it("AdminAgentsService fetches and creates agents", async () => {
    let capturedUrl = "";
    let capturedMethod = "";
    let capturedBody = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedMethod = init?.method || "GET";
      capturedBody = (init?.body as string) || "";
      return new Response(JSON.stringify({ agents: [{ agentId: 42, firstName: "Alice" }] }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    // Test GET /agents
    const getResp = await client.admin.agents.getAgents({ query: { top: "5" } });
    expect(capturedUrl).toContain("/agents");
    expect(capturedUrl).toContain("top=5");
    expect(getResp.agents).toHaveLength(1);

    // Test GET /agents/{agentId}
    await client.admin.agents.operationsAgentsGetAgentsId("42");
    expect(capturedUrl).toContain("/agents/42");

    // Test POST /agents
    await client.admin.agents.operationsAgentsPostAgents({
      agents: [
        {
          firstName: "Alice",
          lastName: "Smith",
          userName: "alice@company.com",
          emailAddress: "alice@company.com",
          teamId: "100",
          profileId: 1,
          timeZone: "UTC",
          country: "US",
          city: "Salt Lake",
        },
      ],
    });
    expect(capturedMethod).toBe("POST");
    expect(capturedBody).toContain('"firstName":"Alice"');
  });

  it("AdminAddressbookService manages address books", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(
        JSON.stringify({
          addressBooks: [{ addressBookId: 10, addressBookName: "Corp Directory" }],
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const result = await client.admin.addressbook.getAddressBooks();
    expect(capturedUrl).toContain("/address-books");
    expect(result.addressBooks).toHaveLength(1);

    await client.admin.addressbook.deleteAddressbook("10");
    expect(capturedUrl).toContain("/address-books/10");
  });

  it("AdminSkillsService manages agent skills", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(
        JSON.stringify({ skills: [{ skillId: 5, skillName: "Support_Inbound" }] }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const skills = await client.admin.skills.getSkills();
    expect(capturedUrl).toContain("/skills");
    expect(skills.skills).toBeDefined();

    await client.admin.skills.getSkillsId("5");
    expect(capturedUrl).toContain("/skills/5");
  });

  it("AdminUnavailablecodesService fetches unavailable code details", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(JSON.stringify({ unavailableCode: { id: 1, name: "Lunch" } }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const codes = await client.admin.unavailablecodes.getUnavailableCodesId(1);
    expect(capturedUrl).toContain("/unavailable-codes/1");
    expect(codes.unavailableCode?.name).toBe("Lunch");
  });
});
