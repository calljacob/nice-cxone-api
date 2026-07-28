import { describe, it, expect, vi } from "vite-plus/test";
import NiceCXoneClient from "../../src/index.js";

describe("Authentication Domain Services", () => {
  it("AuthenticationAuthenticateService resets and changes password", async () => {
    let capturedUrl = "";
    let capturedMethod = "";

    const mockFetch = vi.fn().mockImplementation(async (url: string, init?: RequestInit) => {
      capturedUrl = url;
      capturedMethod = init?.method || "GET";
      return new Response(
        JSON.stringify({
          resetResult: { passwordComplexityResult: "SUCCESS" },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    });

    const client = new NiceCXoneClient({ fetch: mockFetch as any });

    const resp = await client.auth.authenticate.passwordReset(42, {
      query: { forceChangeOnLogon: true },
    });

    expect(capturedUrl).toContain("/agents/42/reset-password");
    expect(capturedMethod).toBe("PUT");
    expect(resp.resetResult?.passwordComplexityResult).toBe("SUCCESS");
  });
});
