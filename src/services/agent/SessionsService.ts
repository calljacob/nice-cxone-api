import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface Sessions_Disposition { primaryDispositionId: number; primaryDispositionNotes?: string; primaryCommitmentAmount?: number; primaryCallbackTime?: string; primaryCallbackNumber?: string; secondaryDispositionId?: number; previewDispositionId?: number; }

export interface Sessions_postReskill { continueReskill?: boolean; }

export interface Sessions_getSessionsResponse { sessionId: string; }

export interface Sessions_getNextEventResponse { sessionId: string; events: Array<{ IISHost: string; VCHost: string; Type: string; eventProperty_1?: Record<string, any>; eventProperty_2?: string; eventProperty_3?: Record<string, any>; "eventProperty_..."?: Record<string, any>; eventProperty_n?: Record<string, any>; }>; }

export class SessionsService {
  constructor(private client: HttpClient) {}

  /**
   * Starts an agent session
   * POST /agent-sessions
   */
  public async startSession(options?: RequestOptions & { query?: { stationId: string; stationPhoneNumber?: string; inactivityTimeout?: number; inactivityForceLogout?: boolean; asAgentId?: number; } }): Promise<Sessions_getSessionsResponse> {
    const path = `/agent-sessions`;
    return this.client.post<Sessions_getSessionsResponse>(path, undefined, options);
  }

  /**
   * Joins an existing agent session
   * POST /agent-sessions/join
   */
  public async joinSession(options?: RequestOptions & { query?: { asAgentId: string; } }): Promise<Sessions_getSessionsResponse> {
    const path = `/agent-sessions/join`;
    return this.client.post<Sessions_getSessionsResponse>(path, undefined, options);
  }

  /**
   * Ending an agent session
   * DELETE /agent-sessions/{sessionId}
   */
  public async endSession(sessionId: string, options?: RequestOptions & { query?: { forceLogoff?: boolean; endContacts?: boolean; ignorePersonalQueue?: boolean; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   *   Gets the next agent event description
   * GET /agent-sessions/{sessionId}/get-next-event
   */
  public async getNextEvent(sessionId: string, options?: RequestOptions & { query?: { timeout: number; } }): Promise<Sessions_getNextEventResponse> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/get-next-event`;
    return this.client.get<Sessions_getNextEventResponse>(path, options);
  }

  /**
   * Continue or cancel a reskill call during closed hours
   * POST /agent-sessions/{sessionId}/continue-reskill
   */
  public async continueReskill(sessionId: string, data?: Sessions_postReskill, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/continue-reskill`;
    return this.client.post<any>(path, data, options);
  }

  /**
   *  Dispositions a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/disposition
   */
  public async dispositionContact(contactId: number, sessionId: string, data: Sessions_Disposition, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/disposition`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Set agent status
   * POST /agent-sessions/{sessionId}/state
   */
  public async setAgentStatus(sessionId: string, options?: RequestOptions & { query?: { state: "Available" | "Unavailable"; reason?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/state`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Post a Feedback
   * POST /agent-sessions/{sessionId}/submit-feedback
   */
  public async sendFeedback(sessionId: string, options?: RequestOptions & { query?: { categoryId: number; priority: string; comment: string; customData?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/submit-feedback`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Post custom data to a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/custom-data
   */
  public async postCustomData(contactId: number, sessionId: string, options?: RequestOptions & { query?: { indicatorName?: string; data?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/custom-data`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Requests an additional contact for MCH
   * POST /agent-sessions/{sessionId}/add-contact
   */
  public async agentAddContact(sessionId: string, options?: RequestOptions & { query?: { chat?: boolean; email?: boolean; workItem?: boolean; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/add-contact`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *  Creates an outbound SMS contact.
   * POST /agent-sessions/{sessionId}/interactions/sms-outbound
   */
  public async postAgentSessionsIdInteractionsSmsOutbound(sessionId: string, options?: RequestOptions & { query?: { phoneNumber?: string; skillId: number; parentContactId?: number; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/sms-outbound`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Moves contact to in focus
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/activate
   */
  public async postAgentSessionsIdInteractionsIdActivate(sessionId: string, contactId: number, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/activate`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Hold a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/hold
   */
  public async holdASession(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/hold`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Resume a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/resume
   */
  public async resumeASession(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/resume`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * End a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/end
   */
  public async endASession(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Accept a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/accept
   */
  public async acceptSession(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/accept`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Reject a Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/reject
   */
  public async rejectSession(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/reject`;
    return this.client.post<any>(path, undefined, options);
  }
}
