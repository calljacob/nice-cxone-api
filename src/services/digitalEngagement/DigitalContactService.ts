import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface DigitalContact_ApiError { field?: string; message: string; parameters?: Record<string, any>; errorCode?: string; }

export interface DigitalContact_ApiErrorCollection { errors: Array<DigitalContact_ApiError>; uid?: string; }

export interface DigitalContact_Pagination { previous?: string; next?: string; }

export type DigitalContact_ChannelV2 = { id: string; idOnExternalPlatform: string; realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom"; name: string; externalPlatformAvatar?: string; externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube"; channelIntegrationId: string; hasReply?: boolean; hasTreeStructure: boolean; contentFormat: "html" | "plain"; hasCustomerOnThirdParty?: boolean; isPostWritable?: boolean; hasAbilityToQuoteMessage?: boolean; hasAbilityToLike?: boolean; isPrivate: boolean; isHidden?: boolean; wysiwygEnabled?: boolean; hasAbilityToTag?: boolean; ownerUserId?: number; hasPublishing?: boolean; hasAbilityToSendFiles?: boolean; hasOutboundFlow?: boolean; hasAbilityToShare?: boolean; hasAbilityToHide?: boolean; hasAbilityToDelete?: boolean; replyPrefixMentionTemplate?: string; nicknameOnExternalPlatform?: string; isLiveChat?: boolean; hasAbilityToChangeRecipient?: boolean; hasMultipleRecipient?: boolean; hasCcAndBcc?: boolean; hasVisibleTitle?: boolean; hasEditableTitle?: boolean; hasVisibleRecipients?: boolean; hasAbilityToForwardMessage?: boolean; canSaveResponse?: boolean; hasAbilityToChangeFrom?: boolean; isAutomaticSignatureAttached?: boolean; hasOutboundTemplates?: boolean; hasManualOutboundFlow?: boolean; hasMultipleThreadsPerEndUser?: boolean; translationGroup?: "default" | "email" | "phone"; studioScript?: string; defaultSkillId?: number; canAgentInviteCustomersToContact?: boolean; canReplyToAnyMessage?: boolean; hasAgentsAsRecipients?: boolean; canSendSenderActions?: boolean; };

export interface DigitalContact_User { id: number; incontactId?: string; emailAddress: string; loginUsername: string; firstName: string; surname: string; nickname?: string; imageUrl?: string; isBotUser: boolean; isSurveyUser: boolean; }

export type DigitalContact_MessageDetail = { id?: string; idOnExternalPlatform?: string; isDeletedOnExternalPlatform?: boolean; isHiddenOnExternalPlatform?: boolean; isReplyAllowed?: boolean; url?: string; direction?: "inbound" | "outbound"; createdAt?: string; createdAtWithMilliseconds?: string; authorEndUserIdentity?: DigitalContact_AuthorCustomerIdentity; reactionStatistics?: DigitalContact_ReactionStatistics; messageContent?: DigitalContact_MessageContent; hasAdditionalMessageContent?: boolean; attachments?: Array<DigitalContact_Attachment>; authorNameRemoved?: DigitalContact_ContentRemoved; contentRemoved?: DigitalContact_ContentRemoved; authorUser?: DigitalContact_User; contactNumber?: string; customerStatistics?: { seenAt?: string; }; recipients?: Array<DigitalContact_Recipient>; replyChannel?: DigitalContact_ChannelV2; channel?: { id?: string; }; replyToMessage?: DigitalContact_PlatformBackendReplyToMessage; sentiment?: DigitalContact_Sentiment; tags?: Array<DigitalContact_Tag>; threadId?: string; threadIdOnExternalPlatform?: string; title?: string; userStatistics?: { createdToReadSeconds?: { notReflectingBusinessHours?: number; reflectingBusinessHours?: number; }; readAt?: string; seenAt?: string; }; };

export interface DigitalContact_Tag { id: number; color?: string; title: string; }

export interface DigitalContact_PlatformBackendReplyToMessage { idOnExternalPlatform?: string; }

export interface DigitalContact_ReactionStatistics { likes?: number; shares?: number; isLikedByChannel?: boolean; isSharedByChannel?: boolean; }

export interface DigitalContact_AuthorCustomerIdentity { idOnExternalPlatform: string; firstName?: string; lastName?: string; nickname?: string; image?: string; customFields?: Array<DigitalContact_CustomField>; }

export interface DigitalContact_CustomField { ident: string; value: string; updatedAt?: string; }

export interface DigitalContact_Attachment { friendlyName: string; url: string; }

export interface DigitalContact_Recipient { idOnExternalPlatform: string; name?: string; isPrimary?: boolean; isPrivate?: boolean; anonymizedAt?: string; anonymizedReason?: DigitalContact_ContentRemovedReason; }

export type DigitalContact_DeviceFingerprint = { browser?: string; browserVersion?: string; os?: string; osVersion?: string; language?: string; ip?: string; location?: string; country?: string; deviceType?: string; deviceToken?: string; applicationType?: string; supportedMessageTypes?: Array<"ADAPTIVE_CARD" | "DYNAMIC_CONTENT" | "FORM" | "LIST_PICKER" | "PLUGIN" | "POSTBACK" | "QUICK_REPLIES" | "RICH_LINK" | "TEXT" | "TIME_PICKER" | "UNSUPPORTED">; };

export interface DigitalContact_Customer { id: string; updatedAt: string; firstName?: string; surname?: string; fullName?: string; customFields?: Array<DigitalContact_CustomField>; image?: string; identities: Array<DigitalContact_AuthorCustomerIdentity>; messageStatistics: DigitalContact_CustomerMessageStatistics; sentimentStatistics: DigitalContact_CustomerSentimentStatistics; }

export interface DigitalContact_CustomerMessageStatistics { inbound?: number; outbound?: number; }

export interface DigitalContact_CustomerSentimentStatistics { positive?: number; neutral?: number; negative?: number; }

export type DigitalContact_Contact = { id?: string; contactId?: string; customerContactId?: string; interactionId?: string; abandon?: DigitalContact_ContactAbandon; authorEndUserIdentity?: DigitalContact_AuthorCustomerIdentity; consumerContactStorageId?: string; channelId?: string; direction?: "inbound" | "outbound"; detailUrl?: string; createdAt?: string; customFields?: Array<DigitalContact_CustomField>; endUser?: DigitalContact_Customer; inboxAssigneeUser?: DigitalContact_User; inboxPreAssigneeUser?: DigitalContact_User; ownerAssigneeUser?: DigitalContact_User; recipients?: Array<DigitalContact_Recipient>; routingQueueId?: string; routingQueuePriority?: number; status?: DigitalContact_ContactStatus; statusUpdatedAt?: string; threadId?: string; threadIdOnExternalPlatform?: string; userFingerprint?: DigitalContact_DeviceFingerprint; };

export type DigitalContact_ContactStatusUpdate = { status: "closed" | "escalated" | "new" | "open" | "pending" | "resolved" | "trashed"; updatedByUserId?: number; };

export type DigitalContact_ContactRoutingQueueUpdate = any | any;

export type DigitalContact_ContactInboxAssignmentUpdate = { userId: number; } | { inboxAssignee: number; } | { inboxAssigneeCxoneId: string; };

export type DigitalContact_ContactAbandon = { type: "abandon" | "expired" | "shortAbandon"; abandonedAt: string; };

export type DigitalContact_ContactStatus = "closed" | "escalated" | "new" | "open" | "pending" | "resolved" | "trashed";

export type DigitalContact_Sentiment = "neutral" | "positive" | "negative";

export type DigitalContact_MessageContent = { type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD"; payload: DigitalContact_TextPayload | DigitalContact_ElementsPayload | DigitalContact_QuickRepliesPayload | DigitalContact_ListPickerPayload | DigitalContact_RichLinkPayload | DigitalContact_AdaptiveCardPayload; fallbackText: string; postback: string; };

export interface DigitalContact_ElementsPayload { postback?: string; elements?: Array<DigitalContact_MessageContentElement>; }

export interface DigitalContact_QuickRepliesPayload { text: DigitalContact_PayloadTextField; actions: Array<DigitalContact_ActionButton>; }

export interface DigitalContact_RichLinkPayload { media: DigitalContact_PayloadMediaField; title: DigitalContact_PayloadTextField; url: string; }

export interface DigitalContact_AdaptiveCardPayload { type: string; version: string; }

export interface DigitalContact_ListPickerPayload { title: DigitalContact_PayloadTextField; text: DigitalContact_PayloadTextField; actions: Array<DigitalContact_ActionButton>; }

export interface DigitalContact_PayloadMediaField { fileName: string; mimeType: string; url: string; }

export interface DigitalContact_PayloadTextField { content: string; }

export interface DigitalContact_TextPayload { text?: string; }

export interface DigitalContact_ActionButton { text: string; type: "REPLY_BUTTON"; postback?: string; icon?: DigitalContact_PayloadMediaField; description?: string; }

export type DigitalContact_MessageContentElement = { id?: string; text?: string; type?: "TEXT" | "BUTTON" | "MENU" | "TITLE"; elements?: Array<DigitalContact_MessageContentElement>; };

export interface DigitalContact_ContentRemoved { reason?: DigitalContact_ContentRemovedReason; removedAt?: string; }

export type DigitalContact_ContentRemovedReason = "GDPR" | "TTL" | "other";

export type DigitalContact_ContactRoutingPropertiesUpdate = any | any | any | any | any | any | any | any | any | any | any | any | any | any | any | any;

export class DigitalContactService {
  constructor(private client: HttpClient) {}

  /**
   * Get list of Contacts based on filter/s
   * GET /contacts
   */
  public async searchContacts(options?: RequestOptions & { query?: { "channel[]"?: Array<string>; "tag[]"?: Array<number>; "routingQueueId[]"?: Array<string>; "status[]"?: Array<string>; "endUserIdOnExternalPlatform[]"?: Array<string>; query?: string; calculateClosedFrtNoReply?: boolean; scrollToken?: string; } }): Promise<{ hits?: number; data?: Array<DigitalContact_Contact>; }> {
    const path = `/contacts`;
    return this.client.get<{ hits?: number; data?: Array<DigitalContact_Contact>; }>(path, options);
  }

  /**
   * Get Contact detail
   * GET /contacts/{contactNumber}
   */
  public async getContact(contactNumber: string, options?: RequestOptions): Promise<DigitalContact_Contact> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}`;
    return this.client.get<DigitalContact_Contact>(path, options);
  }

  /**
   * Update of selected contact's properties
   * PUT /contacts/{contactNumber}
   */
  public async updateContact(contactNumber: string, data?: { routingQueuePriority?: number; proficiency?: { from: number; to: number; }; }, options?: RequestOptions): Promise<void> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}`;
    return this.client.put<void>(path, data, options);
  }

  /**
   * Set contact as abandoned
   * POST /contacts/{contactNumber}/abandon
   */
  public async createContactsContactnumberAbandon(contactNumber: string, data: { type: "abandon" | "expired" | "shortAbandon"; }, options?: RequestOptions): Promise<void> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/abandon`;
    return this.client.post<void>(path, data, options);
  }

  /**
   * Get pagination of contact detail
   * GET /contacts/{contactNumber}/detail/pagination
   */
  public async getContactDetailPagination(contactNumber: string, options?: RequestOptions): Promise<DigitalContact_Pagination> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/detail/pagination`;
    return this.client.get<DigitalContact_Pagination>(path, options);
  }

  /**
   * Get Contact messages
   * GET /contacts/{contactNumber}/messages
   */
  public async getContactMessages(contactNumber: string, options?: RequestOptions): Promise<{ hits?: number; data?: Array<DigitalContact_MessageDetail>; }> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/messages`;
    return this.client.get<{ hits?: number; data?: Array<DigitalContact_MessageDetail>; }>(path, options);
  }

  /**
   * Change inbox assignee for contact
   * PUT /contacts/{contactNumber}/inbox-assignment
   */
  public async changeContactInboxAssignee(contactNumber: string, data: DigitalContact_ContactInboxAssignmentUpdate, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/inbox-assignment`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Unassign inbox assignee from contact
   * DELETE /contacts/{contactNumber}/inbox-assignment
   */
  public async unassignContactInboxAssignee(contactNumber: string, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/inbox-assignment`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Change custom field values for contact
   * PUT /contacts/{contactNumber}/custom-fields
   */
  public async setContactCustomFieldValues(contactNumber: string, data: Array<DigitalContact_CustomField>, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/custom-fields`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Remove custom field value from Contact
   * DELETE /contacts/{contactNumber}/custom-fields/{customFieldIdentifier}
   */
  public async removeContactCustomFieldValue(contactNumber: string, customFieldIdentifier: string, options?: RequestOptions): Promise<void> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/custom-fields/${encodeURIComponent(String(customFieldIdentifier))}`;
    return this.client.delete<void>(path, options);
  }

  /**
   * Change routing queue for contact
   * PUT /contacts/{contactNumber}/routing-queue
   */
  public async changeContactRoutingQueue(contactNumber: string, data: DigitalContact_ContactRoutingQueueUpdate, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/routing-queue`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Update Routing Properties for Contact
   * PUT /contacts/{contactNumber}/routing-properties
   */
  public async updateContactRoutingProperties(contactNumber: string, data: DigitalContact_ContactRoutingPropertiesUpdate, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/routing-properties`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Send transcript
   * POST /contacts/{contactNumber}/transcript
   */
  public async sendContactTranscript(contactNumber: string, data: { recipients?: Array<DigitalContact_Recipient>; }, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/transcript`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Close agent contact in contact
   * PUT /contacts/{contactNumber}/agent-contacts/{agentContactId}/close
   */
  public async createContactsAgentContactsClose(agentContactId: string, contactNumber: string, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/agent-contacts/${encodeURIComponent(String(agentContactId))}/close`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Change status of contact
   * PUT /contacts/{contactNumber}/status
   */
  public async changeContactStatus(contactNumber: string, data: DigitalContact_ContactStatusUpdate, options?: RequestOptions): Promise<void> {
    const path = `/contacts/${encodeURIComponent(String(contactNumber))}/status`;
    return this.client.put<void>(path, data, options);
  }
}
