import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface AdminCommitments_getTargetScheduledCallbacksResponse { callbacks?: Array<{ callbackId: number; target: string; agentId: number; skillId: number; dialNumber: string; origNumber: string; firstName: string; lastName: string; notes: string; callbackTime: string; }>; }

export class AdminCommitmentsService {
  constructor(private client: HttpClient) {}

  /**
   * Updated in v33.0 Returns Scheduled Callbacks for an Agent
   * GET /agents/{agentId}/scheduled-callbacks
   */
  public async agentScheduledCallbacks(agentId: number, options?: RequestOptions): Promise<{ callbacks?: Array<{ callbackId?: number; target?: string; agentId?: number; skillId?: number; dialNumber?: string; origNumber?: string; firstName?: string; lastName?: string; notes?: string; callbackTime?: string; msteamsclientid?: string; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/scheduled-callbacks`;
    return this.client.get<{ callbacks?: Array<{ callbackId?: number; target?: string; agentId?: number; skillId?: number; dialNumber?: string; origNumber?: string; firstName?: string; lastName?: string; notes?: string; callbackTime?: string; msteamsclientid?: string; }>; }>(path, options);
  }

  /**
   * Updated in v33.0 Creates a Scheduled Callback
   * POST /scheduled-callbacks
   */
  public async createScheduledCallback(options?: RequestOptions & { query?: { msCalendarEventId?: string; } }): Promise<{ callbackId?: number; }> {
    const path = `/scheduled-callbacks`;
    return this.client.post<{ callbackId?: number; }>(path, undefined, options);
  }

  /**
   * Updated in v33.0 Updates a Scheduled Callback
   * PUT /scheduled-callbacks/{callbackId}
   */
  public async updateScheduledCallback(callbackId: string, options?: RequestOptions & { query?: { msCalendarEventId?: string; } }): Promise<Record<string, any>> {
    const path = `/scheduled-callbacks/${encodeURIComponent(String(callbackId))}`;
    return this.client.put<Record<string, any>>(path, undefined, options);
  }

  /**
   * Deletes a Scheduled Callback
   * DELETE /scheduled-callbacks/{callbackId}
   */
  public async deleteScheduledCallback(callbackId: string, options?: RequestOptions): Promise<any> {
    const path = `/scheduled-callbacks/${encodeURIComponent(String(callbackId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Returns Scheduled Callbacks for a Skill
   * GET /skills/{skillId}/scheduled-callbacks
   */
  public async skillScheduledCallbacks(skillId: string, options?: RequestOptions): Promise<AdminCommitments_getTargetScheduledCallbacksResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/scheduled-callbacks`;
    return this.client.get<AdminCommitments_getTargetScheduledCallbacksResponse>(path, options);
  }
}
