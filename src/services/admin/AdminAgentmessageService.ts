import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export type AdminAgentmessage_agents = Array<{ userId?: number; firstName?: string; lastName?: string; team?: string; teamNumber?: number; }>;

export type AdminAgentmessage_teams = Array<{ rowNumber?: number; teamId?: number; teamName?: string; }>;

export type AdminAgentmessage_stations = Array<{ stationId?: number; stationName?: string; phoneNumber?: string; callerId?: string; status?: boolean; profile?: number; }>;

export class AdminAgentmessageService {
  constructor(private client: HttpClient) {}

  /**
   * Returns a list of paginated Messages for a determined Agent
   * GET /communications/agent-messages
   */
  public async getAgentMessages(options?: RequestOptions): Promise<{ totalRecords?: number; businessUnitId?: number; agentMessaging?: Array<{ messageGroupGuid?: string; subject?: string; startDate?: string; target?: string; }>; }> {
    const path = `/communications/agent-messages`;
    return this.client.get<{ totalRecords?: number; businessUnitId?: number; agentMessaging?: Array<{ messageGroupGuid?: string; subject?: string; startDate?: string; target?: string; }>; }>(path, options);
  }

  /**
   * Creates a new Agent Message
   * POST /communications/agent-messages
   */
  public async postAgentMessages(data: { expireMinutes: number; message: string; subject: string; targetIds?: Array<number>; targetType: "agent" | "team" | "station" | "everyone"; validUntil: string; }, options?: RequestOptions): Promise<{ messageGroupGuid?: string; assignedTargetIds?: Array<number>; invalidTargetIds?: Array<number>; }> {
    const path = `/communications/agent-messages`;
    return this.client.post<{ messageGroupGuid?: string; assignedTargetIds?: Array<number>; invalidTargetIds?: Array<number>; }>(path, data, options);
  }

  /**
   * Deletes Agent Messages in Batch according to group of guids
   * DELETE /communications/agent-messages
   */
  public async deleteCommunicationsAgentMessages(data: { groupMessageIds?: Array<string>; }, options?: RequestOptions): Promise<{ deletedGroupMessageIds?: string; invalidGroupMessageIds?: string; }> {
    const path = `/communications/agent-messages`;
    return this.client.delete<{ deletedGroupMessageIds?: string; invalidGroupMessageIds?: string; }>(path, data, options);
  }

  /**
   * Returns a list of paginated agent group messages
   * GET /communications/agent-messages/{messageGroupId}
   */
  public async getAgentMessagesId(messageGroupId: string, options?: RequestOptions & { query?: { authContext?: string; } }): Promise<{ messageGroupGuid?: string; sentOn?: string; expireDate?: string; duration?: number; subject?: string; message?: string; targetType?: string; totalRowCount?: number; hiddenAgents?: number; agents?: AdminAgentmessage_agents; teams?: AdminAgentmessage_teams; stations?: AdminAgentmessage_stations; }> {
    const path = `/communications/agent-messages/${encodeURIComponent(String(messageGroupId))}`;
    return this.client.get<{ messageGroupGuid?: string; sentOn?: string; expireDate?: string; duration?: number; subject?: string; message?: string; targetType?: string; totalRowCount?: number; hiddenAgents?: number; agents?: AdminAgentmessage_agents; teams?: AdminAgentmessage_teams; stations?: AdminAgentmessage_stations; }>(path, options);
  }

  /**
   * Deletes an Agent Message by Group Message Guid
   * DELETE /communications/agent-messages/{messageGroupId}
   */
  public async deleteAgentMessagesId(messageGroupId: string, options?: RequestOptions): Promise<any> {
    const path = `/communications/agent-messages/${encodeURIComponent(String(messageGroupId))}`;
    return this.client.delete<any>(path, options);
  }
}
