import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class PhonecallsService {
  constructor(private client: HttpClient) {}

  /**
   * Dials an agent's personal queue
   * POST /agent-sessions/{sessionId}/dial-agent
   */
  public async agentTransfer(sessionId: string, data: { targetAgentId?: string; parentContactId?: string; }, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/dial-agent`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Dials an outbound call
   * POST /agent-sessions/{sessionId}/dial-phone
   */
  public async dialPhone(sessionId: string, data: { phoneNumber?: string; skillId?: number; parentContactId?: number; customerId?: string; zipCode?: string; }, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/dial-phone`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Dials a skill
   * POST /agent-sessions/{sessionId}/dial-skill
   */
  public async dialSkill(sessionId: string, data: { skillId?: number; parentContactId?: number; }, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/dial-skill`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Send DTMF tones
   * POST /agent-sessions/{sessionId}/send-dtmf
   */
  public async sendDtmfTone(sessionId: string, options?: RequestOptions & { query?: { dtmfSequence: string; toneDurationMS: number; toneSpacingMS?: number; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/send-dtmf`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Dial agent consult
   * POST /agent-sessions/{sessionId}/consult-agent
   */
  public async dialAgentConsult(sessionId: string, data: { targetAgentId?: string; parentContactId?: string; }, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/consult-agent`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Transfer call
   * POST /agent-sessions/{sessionId}/interactions/transfer-calls
   */
  public async transferCall(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/transfer-calls`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Conference calls together
   * POST /agent-sessions/{sessionId}/interactions/conference-calls
   */
  public async conferenceCall(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/conference-calls`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Accept consult request
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/accept-consult
   */
  public async acceptConsultRequest(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/accept-consult`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Places a contact on hold
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/hold
   */
  public async holdCall(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/hold`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Resume call
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/resume
   */
  public async resumeCall(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/resume`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * End call
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/end
   */
  public async endCall(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Override AMD on a call
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/amd-override
   */
  public async amdOverride(sessionId: string, contactId: string, options?: RequestOptions & { query?: { type: "faxMachine" | "answeringMachine"; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/amd-override`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Record a call
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/record
   */
  public async recordACall(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/record`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Masks a recording with white noise
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/mask
   */
  public async maskACallRecording(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/mask`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Stop masking a call recording
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/unmask
   */
  public async stopMaskingACallRecording(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/unmask`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Dial an Independent call
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/independent-dial
   */
  public async independentDialed(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/independent-dial`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Disposition an Independent call
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/independent-dial-outcome
   */
  public async independentDialOutcome(sessionId: string, contactId: string, options?: RequestOptions & { query?: { outcome?: "Answered" | "Busy" | "Fax" | "Intercept" | "No Answer"; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/independent-dial-outcome`;
    return this.client.post<any>(path, undefined, options);
  }
}
