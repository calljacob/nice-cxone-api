import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class ChatrequestsService {
  constructor(private client: HttpClient) {}

  /**
   * Add a Chat Contact
   * POST /agent-sessions/{sessionId}/interactions/add-chat
   */
  public async addChatContact(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/add-chat`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Add chat or sms contact.
   * POST /agent-sessions/{sessionId}/interactions/add-text
   */
  public async postAgentSessionsIdInteractionsAddText(
    sessionId: string,
    options?: RequestOptions & { query?: { mediaType: number } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/add-text`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Accepts an incoming contact.
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/accept
   */
  public async postAgentSessionsIdInteractionsIdAccept(
    sessionId: string,
    contactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/accept`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Rejects an incoming contact.
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/reject
   */
  public async postAgentSessionsIdInteractionsIdReject(
    sessionId: string,
    contactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/reject`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Ends a contact.In the case of a voice call, this action will hang up the call.
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/end
   */
  public async postAgentSessionsIdInteractionsIdEnd(
    sessionId: string,
    contactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Restore a chat to an active state
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/activate-chat
   */
  public async activateChatContact(
    sessionId: string,
    contactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/activate-chat`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Send chat text to the patron.
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/send-chat-text
   */
  public async postAgentSessionsIdInteractionsIdSendChatText(
    sessionId: string,
    contactId: number,
    options?: RequestOptions & { query?: { chatText: string; chatTarget: string } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/send-chat-text`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *  Transfer chat to an agent
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-agent
   */
  public async postAgentSessionsIdInteractionsIdTransferChatToAgent(
    sessionId: string,
    contactId: number,
    options?: RequestOptions & { query?: { targetAgentId: number } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/transfer-chat-to-agent`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *  Transfer chat to skill
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/transfer-chat-to-skill
   */
  public async postAgentSessionsIdInteractionsIdTransferChatToSkill(
    sessionId: string,
    contactId: number,
    options?: RequestOptions & { query?: { targetSkillId: number } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/transfer-chat-to-skill`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Notify Patron Agent is Typing
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/typing
   */
  public async agentTyping(
    sessionId: string,
    contactId: number,
    options?: RequestOptions & { query?: { isTyping?: boolean; isTextEntered?: boolean } },
  ): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/typing`;
    return this.client.post<any>(path, undefined, options);
  }
}
