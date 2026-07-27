import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface DigitalThread_ApiError { field?: string; message: string; parameters?: Record<string, any>; errorCode?: string; }

export interface DigitalThread_ApiErrorCollection { errors: Array<DigitalThread_ApiError>; uid?: string; }

export interface DigitalThread_Links { self?: string; next?: string; previous?: string; }

export type DigitalThread_MessageDetail = { id?: string; idOnExternalPlatform?: string; isDeletedOnExternalPlatform?: boolean; isHiddenOnExternalPlatform?: boolean; isReplyAllowed?: boolean; url?: string; direction?: "inbound" | "outbound"; createdAt?: string; createdAtWithMilliseconds?: string; authorEndUserIdentity?: DigitalThread_AuthorCustomerIdentity; reactionStatistics?: DigitalThread_ReactionStatistics; messageContent?: DigitalThread_MessageContent; hasAdditionalMessageContent?: boolean; attachments?: Array<DigitalThread_Attachment>; authorNameRemoved?: DigitalThread_ContentRemoved; contentRemoved?: DigitalThread_ContentRemoved; authorUser?: DigitalThread_User; contactNumber?: string; customerStatistics?: { seenAt?: string; }; recipients?: Array<DigitalThread_Recipient>; replyChannel?: DigitalThread_ChannelV2; channel?: { id?: string; }; replyToMessage?: DigitalThread_PlatformBackendReplyToMessage; sentiment?: DigitalThread_Sentiment; tags?: Array<DigitalThread_Tag>; threadId?: string; threadIdOnExternalPlatform?: string; title?: string; userStatistics?: { createdToReadSeconds?: { notReflectingBusinessHours?: number; reflectingBusinessHours?: number; }; readAt?: string; seenAt?: string; }; };

export type DigitalThread_Channel = { id: string; idOnExternalPlatform: string; name: string; channelIntegrationId: string; integrationBoxIdentifier?: string; realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom"; externalPlatformAvatar?: string; externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube"; isPrivate: boolean; hasTreeStructure: boolean; isDeleted?: boolean; isHidden?: boolean; contentFormat: "html" | "plain"; hasReply?: boolean; replyPrefixMentionTemplate?: string; nicknameOnExternalPlatform?: string; hasCustomerOnThirdParty?: boolean; hasAbilityToSendFiles?: boolean; hasOutboundFlow?: boolean; hasOutboundTemplates?: boolean; translationGroup?: "default" | "email" | "phone"; ownerUserId?: number; isLiveChat?: boolean; canSaveResponse?: boolean; hasAbilityToShare?: boolean; hasAbilityToLike?: boolean; hasAbilityToTag?: boolean; hasAbilityToHide?: boolean; hasAbilityToDelete?: boolean; hasAbilityToQuoteMessage?: boolean; hasAbilityToChangeFrom?: boolean; wysiwygEnabled?: boolean; hasAbilityToChangeRecipient?: boolean; hasMultipleRecipient?: boolean; hasMultipleThreadsPerEndUser?: boolean; hasCcAndBcc?: boolean; hasVisibleTitle?: boolean; hasEditableTitle?: boolean; hasVisibleRecipients?: boolean; hasAbilityToForwardMessage?: boolean; canAgentInviteCustomersToContact?: boolean; canReplyToAnyMessage?: boolean; isAutomaticSignatureAttached?: boolean; isPostWritable?: boolean; hasPublishing?: boolean; studioScript?: string; defaultSkillId?: number; mediaType?: number; hasAgentsAsRecipients?: boolean; canSendSenderActions?: boolean; };

export interface DigitalThread_AuthorCustomerIdentity { idOnExternalPlatform: string; firstName?: string; lastName?: string; nickname?: string; image?: string; customFields?: Array<DigitalThread_CustomField>; }

export interface DigitalThread_CustomField { ident: string; value: string; updatedAt?: string; }

export interface DigitalThread_ReactionStatistics { likes?: number; shares?: number; isLikedByChannel?: boolean; isSharedByChannel?: boolean; }

export type DigitalThread_MessageContent = { type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD"; payload: DigitalThread_TextPayload | DigitalThread_ElementsPayload | DigitalThread_QuickRepliesPayload | DigitalThread_ListPickerPayload | DigitalThread_RichLinkPayload | DigitalThread_AdaptiveCardPayload; fallbackText: string; postback: string; };

export interface DigitalThread_Attachment { friendlyName: string; url: string; }

export interface DigitalThread_ContentRemoved { reason?: DigitalThread_ContentRemovedReason; removedAt?: string; }

export interface DigitalThread_User { id: number; incontactId?: string; emailAddress: string; loginUsername: string; firstName: string; surname: string; nickname?: string; imageUrl?: string; isBotUser: boolean; isSurveyUser: boolean; }

export interface DigitalThread_Recipient { idOnExternalPlatform: string; name?: string; isPrimary?: boolean; isPrivate?: boolean; anonymizedAt?: string; anonymizedReason?: DigitalThread_ContentRemovedReason; }

export type DigitalThread_ChannelV2 = { id: string; idOnExternalPlatform: string; realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom"; name: string; externalPlatformAvatar?: string; externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube"; channelIntegrationId: string; hasReply?: boolean; hasTreeStructure: boolean; contentFormat: "html" | "plain"; hasCustomerOnThirdParty?: boolean; isPostWritable?: boolean; hasAbilityToQuoteMessage?: boolean; hasAbilityToLike?: boolean; isPrivate: boolean; isHidden?: boolean; wysiwygEnabled?: boolean; hasAbilityToTag?: boolean; ownerUserId?: number; hasPublishing?: boolean; hasAbilityToSendFiles?: boolean; hasOutboundFlow?: boolean; hasAbilityToShare?: boolean; hasAbilityToHide?: boolean; hasAbilityToDelete?: boolean; replyPrefixMentionTemplate?: string; nicknameOnExternalPlatform?: string; isLiveChat?: boolean; hasAbilityToChangeRecipient?: boolean; hasMultipleRecipient?: boolean; hasCcAndBcc?: boolean; hasVisibleTitle?: boolean; hasEditableTitle?: boolean; hasVisibleRecipients?: boolean; hasAbilityToForwardMessage?: boolean; canSaveResponse?: boolean; hasAbilityToChangeFrom?: boolean; isAutomaticSignatureAttached?: boolean; hasOutboundTemplates?: boolean; hasManualOutboundFlow?: boolean; hasMultipleThreadsPerEndUser?: boolean; translationGroup?: "default" | "email" | "phone"; studioScript?: string; defaultSkillId?: number; canAgentInviteCustomersToContact?: boolean; canReplyToAnyMessage?: boolean; hasAgentsAsRecipients?: boolean; canSendSenderActions?: boolean; };

export interface DigitalThread_PlatformBackendReplyToMessage { idOnExternalPlatform?: string; }

export type DigitalThread_ContentRemovedReason = "GDPR" | "TTL" | "other";

export type DigitalThread_Sentiment = "neutral" | "positive" | "negative";

export interface DigitalThread_Tag { id: number; color?: string; title: string; }

export interface DigitalThread_Thread { id: string; idOnExternalPlatform: string; threadName: string; channelId: string; canAddMoreMessages?: boolean; }

export interface DigitalThread_TextPayload { text?: string; }

export interface DigitalThread_ElementsPayload { postback?: string; elements?: Array<DigitalThread_MessageContentElement>; }

export interface DigitalThread_QuickRepliesPayload { text: DigitalThread_PayloadTextField; actions: Array<DigitalThread_ActionButton>; }

export interface DigitalThread_RichLinkPayload { media: DigitalThread_PayloadMediaField; title: DigitalThread_PayloadTextField; url: string; }

export interface DigitalThread_AdaptiveCardPayload { type: string; version: string; }

export interface DigitalThread_ListPickerPayload { title: DigitalThread_PayloadTextField; text: DigitalThread_PayloadTextField; actions: Array<DigitalThread_ActionButton>; }

export interface DigitalThread_PayloadMediaField { fileName: string; mimeType: string; url: string; }

export interface DigitalThread_PayloadTextField { content: string; }

export interface DigitalThread_ActionButton { text: string; type: "REPLY_BUTTON"; postback?: string; icon?: DigitalThread_PayloadMediaField; description?: string; }

export type DigitalThread_MessageContentElement = { id?: string; text?: string; type?: "TEXT" | "BUTTON" | "MENU" | "TITLE"; elements?: Array<DigitalThread_MessageContentElement>; };

export class DigitalThreadService {
  constructor(private client: HttpClient) {}

  /**
   * Get list of threads based on a filter
   * GET /threads
   */
  public async searchThreads(options?: RequestOptions & { query?: { withContext?: number; query?: string; } }): Promise<{ totalRecords?: number; data?: Array<DigitalThread_Thread>; _links?: DigitalThread_Links; _context?: { messages?: Array<DigitalThread_MessageDetail>; channels?: Array<DigitalThread_Channel>; }; }> {
    const path = `/threads`;
    return this.client.get<{ totalRecords?: number; data?: Array<DigitalThread_Thread>; _links?: DigitalThread_Links; _context?: { messages?: Array<DigitalThread_MessageDetail>; channels?: Array<DigitalThread_Channel>; }; }>(path, options);
  }

  /**
   * Send sender action
   * POST /channels/{channelId}/threads/{threadIdOnExternalPlatform}/sender-actions
   */
  public async sendSenderAction(channelId: string, threadIdOnExternalPlatform: string, data: { action?: "isTypingOn" | "isTypingOff"; }, options?: RequestOptions): Promise<void> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/threads/${encodeURIComponent(String(threadIdOnExternalPlatform))}/sender-actions`;
    return this.client.post<void>(path, data, options);
  }

  /**
   * Update thread
   * PUT /channels/{channelId}/threads/{threadIdOnExternalPlatform}
   */
  public async updateThread(channelId: string, threadIdOnExternalPlatform: string, data: { canAddMoreMessages?: boolean; }, options?: RequestOptions): Promise<void> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/threads/${encodeURIComponent(String(threadIdOnExternalPlatform))}`;
    return this.client.put<void>(path, data, options);
  }
}
