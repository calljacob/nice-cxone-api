import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class WorkitemsService {
  constructor(private client: HttpClient) {}

  /**
   * Accept a work item
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/accept
   */
  public async acceptWorkItem(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/accept`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Reject a work item
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/reject
   */
  public async rejectWorkItem(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/reject`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Hold a work item
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/hold
   */
  public async holdAWorkItem(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/hold`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Resume a work item
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/resume
   */
  public async resumeAWorkItem(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/resume`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * End a work item
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/end
   */
  public async endAWorkItem(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }
}
