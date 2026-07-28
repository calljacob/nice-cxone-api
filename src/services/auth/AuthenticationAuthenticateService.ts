import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class AuthenticationAuthenticateService {
  constructor(private client: HttpClient) {}

  /**
   * Resets an agent's password
   * PUT /agents/{agentId}/reset-password
   */
  public async passwordReset(
    agentId: number,
    options?: RequestOptions & {
      query?: { requestedPassword?: string; forceChangeOnLogon?: boolean };
    },
  ): Promise<{ resetResult?: { passwordComplexityResult?: string } }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/reset-password`;
    return this.client.put<{ resetResult?: { passwordComplexityResult?: string } }>(
      path,
      undefined,
      options,
    );
  }

  /**
   * Changes an Agent's Password
   * PUT /agents/change-password
   */
  public async passwordChange(
    options?: RequestOptions & { query?: { currentPassword: string; newPassword: string } },
  ): Promise<{ changeResult?: { passwordComplexityResult?: string } }> {
    const path = `/agents/change-password`;
    return this.client.put<{ changeResult?: { passwordComplexityResult?: string } }>(
      path,
      undefined,
      options,
    );
  }
}
