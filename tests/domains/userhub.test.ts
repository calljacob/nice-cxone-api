import { describe, it, expect, vi } from "vitest";
import NiceCXoneClient from "../../src/index.js";

describe("UserHub Domain Services", () => {
  it("UserhubUsermanagementService queries users", async () => {
    let capturedUrl = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string) => {
      capturedUrl = url;
      return new Response(
        JSON.stringify({
          users: [{ id: "usr-1", emailAddress: "john@example.com" }],
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const result = await client.userhub.usermanagement.getUserList({
      query: { includeDeleted: false },
    });

    expect(capturedUrl).toContain("/user-management/v1/users");
    expect(capturedUrl).toContain("includeDeleted=false");
    expect(result.users).toHaveLength(1);
  });
});
