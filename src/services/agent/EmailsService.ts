import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class EmailsService {
  constructor(private client: HttpClient) {}

  /**
   * Add an Email Contact
   * POST /agent-sessions/{sessionId}/interactions/add-email
   */
  public async addEmail(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/add-email`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Creates an outbound Email Contact
   * POST /agent-sessions/{sessionId}/interactions/email-outbound
   */
  public async emailOutbound(sessionId: string, options?: RequestOptions & { query?: { skillId: number; toAddress: string; parentContactId?: number; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/email-outbound`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Forwards an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-forward
   */
  public async postAgentSessionsSessionIdInteractionsContactIdEmailForward(sessionId: string, contactId: number, options?: RequestOptions & { query?: { skillId?: number; toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; originalAttachmentNames?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-forward`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Reply to an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-reply
   */
  public async emailReply(sessionId: string, contactId: number, options?: RequestOptions & { query?: { skillId?: number; toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-reply`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Sends an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-send
   */
  public async emailSend(sessionId: string, contactId: number, options?: RequestOptions & { query?: { skillId?: number; toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-send`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * End an Email Contact
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/end
   */
  public async endContact(sessionId: string, contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Transfer Email to Agent
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-agent
   */
  public async postAgentSessionsIdInteractionsIdTransferEmailToAgent(sessionId: string, contactId: number, data: { targetAgentId?: string; toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; isDraft?: boolean; draftEmailGuidStr?: string; primaryDispositionId?: string; secondaryDispositionId?: string; tags?: string; notes?: string; originalAttachmentNames?: string; }, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/transfer-email-to-agent`;
    return this.client.post<any>(path, data, options);
  }

  /**
   *   Transfer an Email to a skill
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/transfer-email-to-skill
   */
  public async postAgentSessionsIdInteractionsIdTransferEmailToSkill(sessionId: string, contactId: number, data: { targetSkillID?: string; toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; isDraft?: boolean; draftEmailGuidStr?: string; primaryDispositionId?: string; secondaryDispositionId?: string; tags?: string; notes?: string; originalAttachmentNames?: string; }, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/transfer-email-to-skill`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Parks an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-park
   */
  public async parkEmail(sessionId: string, contactId: number, options?: RequestOptions & { query?: { toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; isDraft?: boolean; primaryDispositionId?: string; secondaryDispositionId?: string; tags?: string; notes?: string; originalAttachmentNames?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-park`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Unparks an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-unpark
   */
  public async unParkEmail(sessionId: string, contactId: number, options?: RequestOptions & { query?: { isImmediate?: boolean; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-unpark`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Preview an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-preview
   */
  public async preveiwEmail(sessionId: string, contactId: number, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-preview`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Restore an Email
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-restore
   */
  public async restoreEmail(sessionId: string, contactId: number, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-restore`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Email Save Draft
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/email-save-draft
   */
  public async postAgentSessionsIdInteractionsIdEmailSaveDraft(sessionId: string, contactId: number, options?: RequestOptions & { query?: { toAddress?: string; fromAddress?: string; ccAddress?: string; bccAddress?: string; subject?: string; bodyHtml?: string; attachments?: string; attachmentNames?: string; draftEmailGuidStr?: string; primaryDispositionId?: string; secondaryDispositionId?: string; tags?: string; notes?: string; originalAttachmentNames?: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/email-save-draft`;
    return this.client.post<any>(path, undefined, options);
  }
}
