import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface PatronChatrequests_sendText {
  label: string;
  message: string;
  chatTarget?: string;
}

export class PatronChatrequestsService {
  constructor(private client: HttpClient) {}

  /**
   *   Starts a Chat Session
   * POST /contacts/chats
   */
  public async postContactsChats(
    data?: {
      pointOfContact: string;
      fromAddress?: string;
      chatRoomId?: number;
      mediaType: number;
      parameters?: Array<string>;
    },
    options?: RequestOptions,
  ): Promise<{ chatSessionId?: string; contactId?: number }> {
    const path = `/contacts/chats`;
    return this.client.post<{ chatSessionId?: string; contactId?: number }>(path, data, options);
  }

  /**
   * Gets any inbound chat text from an active chat session
   * GET /contacts/chats/{chatSession}
   */
  public async getChatText(
    chatSession: string,
    options?: RequestOptions & { query?: { timeout: number } },
  ): Promise<{
    chatSession?: string;
    messages?: Array<{
      Label?: string;
      PartyTypeId?: number;
      PartyTypeValue?: string;
      Text?: string;
      Timestamp?: string;
    }>;
  }> {
    const path = `/contacts/chats/${encodeURIComponent(String(chatSession))}`;
    return this.client.get<{
      chatSession?: string;
      messages?: Array<{
        Label?: string;
        PartyTypeId?: number;
        PartyTypeValue?: string;
        Text?: string;
        Timestamp?: string;
      }>;
    }>(path, options);
  }

  /**
   * Ends an active Chat Session
   * DELETE /contacts/chats/{chatSession}
   */
  public async endChat(
    chatSession: string,
    options?: RequestOptions,
  ): Promise<{ errorDescription?: string }> {
    const path = `/contacts/chats/${encodeURIComponent(String(chatSession))}`;
    return this.client.delete<{ errorDescription?: string }>(path, options);
  }

  /**
   *   Sends a text to members of the chat session
   * POST /contacts/chats/{chatSession}/send-text
   */
  public async postContactsChatsIdSendText(
    chatSession: string,
    data: PatronChatrequests_sendText,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/contacts/chats/${encodeURIComponent(String(chatSession))}/send-text`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Notify Agent Patron is Typing
   * POST /contacts/chats/{chatSession}/typing
   */
  public async patronTyping(
    chatSession: string,
    options?: RequestOptions & {
      query?: { isTyping?: boolean; isTextEntered?: boolean; label?: string };
    },
  ): Promise<any> {
    const path = `/contacts/chats/${encodeURIComponent(String(chatSession))}/typing`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Sends Agent a Chat Preview
   * POST /contacts/chats/{chatSession}/typing-preview
   */
  public async patronTypingPreview(
    chatSession: string,
    options?: RequestOptions & { query?: { previewText?: string; label?: string } },
  ): Promise<any> {
    const path = `/contacts/chats/${encodeURIComponent(String(chatSession))}/typing-preview`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Sends chat transcript via email.
   * POST /contacts/chats/send-email
   */
  public async postContactsChatsSendEmail(
    data: { toAddress: string; fromAddress: string; emailBody: string },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/contacts/chats/send-email`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Return Chat Profile config
   * GET /points-of-contact/{pointsOfContactId}/chat-profile
   */
  public async getPointChatProfile(
    pointsOfContactId: string,
    options?: RequestOptions,
  ): Promise<{
    chatProfile?: {
      chatProfileId?: number;
      chatProfileName?: string;
      chatInterfaceTypeId?: number;
      "topBarColor "?: string;
      "topBarTextColor "?: string;
      "agentChatBubbleColor "?: string;
      "agentChatBubbleTextColor "?: string;
      chatAppearance?: {
        primaryColor?: string;
        primaryTextColor?: string;
        agentColor?: string;
        agentInitialColor?: string;
        font?: string;
        chatButtonPosition?: string;
      };
      preChatFormEnabled?: boolean;
      preChatWelcomeMessage?: string;
      preChatFields?: Array<Record<string, any>>;
      waitingEnabled?: boolean;
      waitingMessage?: string;
      waitingBackgroundColor?: string;
      waitingTextColor?: string;
      waitingLogo?: string;
      heroImage?: string;
      legacyAppearance?: Array<Record<string, any>>;
    };
  }> {
    const path = `/points-of-contact/${encodeURIComponent(String(pointsOfContactId))}/chat-profile`;
    return this.client.get<{
      chatProfile?: {
        chatProfileId?: number;
        chatProfileName?: string;
        chatInterfaceTypeId?: number;
        "topBarColor "?: string;
        "topBarTextColor "?: string;
        "agentChatBubbleColor "?: string;
        "agentChatBubbleTextColor "?: string;
        chatAppearance?: {
          primaryColor?: string;
          primaryTextColor?: string;
          agentColor?: string;
          agentInitialColor?: string;
          font?: string;
          chatButtonPosition?: string;
        };
        preChatFormEnabled?: boolean;
        preChatWelcomeMessage?: string;
        preChatFields?: Array<Record<string, any>>;
        waitingEnabled?: boolean;
        waitingMessage?: string;
        waitingBackgroundColor?: string;
        waitingTextColor?: string;
        waitingLogo?: string;
        heroImage?: string;
        legacyAppearance?: Array<Record<string, any>>;
      };
    }>(path, options);
  }
}
