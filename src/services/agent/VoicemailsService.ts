import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class VoicemailsService {
  constructor(private client: HttpClient) {}

  /**
   * Play a Voicemail
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/play-voicemail
   */
  public async playVoicemail(
    sessionId: string,
    contactId: string,
    data?: { position?: number; playTimestamp?: { continueReskill?: boolean } },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/play-voicemail`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Pause a Voicemail
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/pause-voicemail
   */
  public async pauseVoicemail(
    sessionId: string,
    contactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/pause-voicemail`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * End a Voicemail Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/end
   */
  public async endContact(
    sessionId: string,
    contactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Transfer Voicemail to an Agent.
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-agent
   */
  public async voicemailTransferAgent(
    sessionId: string,
    contactId: string,
    options?: RequestOptions & { query?: { targetAgentId: number } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/transfer-voicemail-to-agent`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Transfer Voicemail to a Skill
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/transfer-voicemail-to-skill
   */
  public async voicemailTransferSkill(
    sessionId: string,
    contactId: string,
    options?: RequestOptions & { query?: { targetSkillId: number } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/transfer-voicemail-to-skill`;
    return this.client.post<any>(path, undefined, options);
  }
}
