import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class ScheduledcallbacksService {
  constructor(private client: HttpClient) {}

  /**
   * Dial a Scheduled Callback
   * POST /agent-sessions/{sessionId}/interactions/{callbackId}/dial
   */
  public async dialCallback(
    sessionId: string,
    callbackId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(callbackId))}/dial`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Reschedule a Scheduled Callback
   * POST /agent-sessions/{sessionId}/interactions/{callbackId}/reschedule
   */
  public async rescheduleCallback(
    sessionId: string,
    callbackId: string,
    options?: RequestOptions & { query?: { rescheduleDate: string } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(callbackId))}/reschedule`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Cancels a presented scheduled callback.
   * POST /agent-sessions/{sessionId}/interactions/{callbackId}/cancel
   */
  public async agentinteractionscallbackcancel(
    sessionId: string,
    callbackId: string,
    data?: { notes?: string },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(callbackId))}/cancel`;
    return this.client.post<any>(path, data, options);
  }
}
