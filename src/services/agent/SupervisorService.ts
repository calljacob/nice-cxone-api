import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class SupervisorService {
  constructor(private client: HttpClient) {}

  /**
   * Gives the ability to monitor an agent on a live call
   * POST /agent-sessions/{sessionId}/monitor
   */
  public async contactMonitor(
    sessionId: string,
    options?: RequestOptions & { query?: { targetAgentId: number } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/monitor`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Gives the ability to coach an agent on a live call
   * POST /agent-sessions/{sessionId}/coach
   */
  public async contactCoach(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/coach`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Gives a supervisor the ability to barge an agent on a live call
   * POST /agent-sessions/{sessionId}/barge
   */
  public async contactBarge(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/barge`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Gives the ability to take over an agent on a live call
   * POST /agent-sessions/{sessionId}/take-over
   */
  public async postAgentSessionsSessionIdTakeOver(
    sessionId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/take-over`;
    return this.client.post<any>(path, undefined, options);
  }
}
