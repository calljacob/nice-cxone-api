import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface DigitalChannel_ApiError { field: string; message: string; parameters: Record<string, any>; errorCode?: string; }

export interface DigitalChannel_ApiErrorCollection { errors: Array<DigitalChannel_ApiError>; uid?: string; }

export type DigitalChannel_ExternalPlatformTemplate = { template: string; category: "TRANSACTIONAL" | "MARKETING"; messageContent: { type: "PLUGIN"; payload: { elements: Array<Record<string, any>>; }; }; };

export interface DigitalChannel_Links { self?: string; next?: string; previous?: string; }

export type DigitalChannel_NewChannel = { id: string; idOnExternalPlatform: string; channelIntegrationId: string; realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom"; name: string; isPrivate: boolean; hasTreeStructure: boolean; hasReply?: boolean; contentFormat?: "html" | "plain"; hasAbilityToSendFiles?: boolean; hasOutboundFlow?: boolean; translationGroup?: "default" | "email" | "phone"; externalPlatformAvatar?: string; externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube"; ownerUserId?: number; hasAbilityToLike?: boolean; hasAbilityToShare?: boolean; hasAbilityToDelete?: boolean; hasAbilityToTag?: boolean; hasAbilityToChangeFrom?: boolean; wysiwygEnabled?: boolean; isAutomaticSignatureAttached?: boolean; isCaseBasedStorage?: boolean; hasOutboundTemplates?: boolean; hasManualOutboundFlow?: boolean; studioScript?: string; hasPublishing?: boolean; hasMultipleRecipient?: boolean; hasCcAndBcc?: boolean; hasVisibleTitle?: boolean; hasEditableTitle?: boolean; hasVisibleRecipients?: boolean; hasAbilityToForwardMessage?: boolean; hasAbilityToChangeRecipient?: boolean; hasMultipleThreadsPerEndUser?: boolean; hasPostAsPlaceholder?: boolean; canAgentInviteCustomersToContact?: boolean; canReplyToAnyMessage?: boolean; isLiveChat?: boolean; hasAbilityToHide?: boolean; };

export type DigitalChannel_ChannelV2 = { id: string; idOnExternalPlatform: string; realExternalPlatformId: "apple-apps-reviews" | "apple-business-chat" | "bg" | "bw" | "chat" | "congstar-forum" | "custom" | "cypress" | "discussions" | "email" | "facebook" | "fb" | "fm" | "forum" | "gcse" | "gl" | "google-business-messages" | "google-places" | "google-play" | "google-rcs" | "gp" | "ig" | "in-contact-email" | "ind" | "instagram" | "kik" | "lc" | "li" | "line" | "mediatoolkit" | "microsoft-teams" | "mock" | "monitora" | "news" | "nw" | "ok-ru" | "phpbb" | "rss" | "sandbox" | "sandbox-facebook" | "sandbox-twitter" | "sendbird" | "slack" | "smooch-io-we-chat" | "sms" | "social-watch" | "t-mobile-austria-forum" | "talkdesk" | "telegram" | "tmobile-forum" | "tw" | "twitter" | "viber" | "vk" | "vo" | "voice" | "we-chat" | "whatsapp" | "youscan" | "yt" | "zoom"; name: string; externalPlatformAvatar?: string; externalPlatformIcon?: "amazon" | "apple" | "apple-apps" | "apple-imessage" | "co-browsing" | "contact-form" | "email" | "facebook" | "facebook-dm" | "facebook-messenger" | "forum" | "google" | "google-dm" | "google-maps" | "google-play" | "google-search" | "instagram" | "instagram-dm" | "kakao-talk" | "kik" | "line-message" | "linkedin" | "listening" | "livechat" | "livechat-contact-form" | "ok-ru" | "pinterest" | "rcs" | "rss" | "slack" | "sms" | "snapchat" | "tango" | "telegram" | "tumblr" | "twitter" | "twitter-dm" | "viber" | "vkontakte" | "vkontakte-dm" | "voice" | "wechat" | "whatsapp" | "youtube"; channelIntegrationId: string; hasReply?: boolean; hasTreeStructure: boolean; contentFormat?: "html" | "plain"; hasCustomerOnThirdParty?: boolean; isPostWritable?: boolean; hasAbilityToQuoteMessage?: boolean; hasAbilityToLike?: boolean; isPrivate: boolean; isHidden?: boolean; wysiwygEnabled?: boolean; hasAbilityToTag?: boolean; ownerUserId?: number; hasPublishing?: boolean; hasAbilityToSendFiles?: boolean; hasOutboundFlow?: boolean; hasAbilityToShare?: boolean; hasAbilityToHide?: boolean; hasAbilityToDelete?: boolean; replyPrefixMentionTemplate?: string; nicknameOnExternalPlatform?: string; isLiveChat?: boolean; hasAbilityToChangeRecipient?: boolean; hasMultipleRecipient?: boolean; hasCcAndBcc?: boolean; hasVisibleTitle?: boolean; hasEditableTitle?: boolean; hasVisibleRecipients?: boolean; hasAbilityToForwardMessage?: boolean; canSaveResponse?: boolean; hasAbilityToChangeFrom?: boolean; isAutomaticSignatureAttached?: boolean; hasOutboundTemplates?: boolean; hasManualOutboundFlow?: boolean; hasMultipleThreadsPerEndUser?: boolean; translationGroup?: "default" | "email" | "phone"; studioScript?: string; canAgentInviteCustomersToContact?: boolean; canReplyToAnyMessage?: boolean; };

export class DigitalChannelService {
  constructor(private client: HttpClient) {}

  /**
   * Get list of external platform templates
   * GET /channels/{channelId}/external-platform-templates
   */
  public async getExternalTemplates(channelId: string, options?: RequestOptions): Promise<{ totalRecords?: number; data?: Array<DigitalChannel_ExternalPlatformTemplate>; _links?: DigitalChannel_Links; }> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/external-platform-templates`;
    return this.client.get<{ totalRecords?: number; data?: Array<DigitalChannel_ExternalPlatformTemplate>; _links?: DigitalChannel_Links; }>(path, options);
  }

  /**
   * Get list of existing channels
   * GET /channels
   */
  public async getChannels(options?: RequestOptions & { query?: { "id[]"?: Array<string>; isPrivate?: boolean; hasManualOutboundFlow?: boolean; withPermissionToManualOutbound?: boolean; size?: number; page?: number; orderBy?: "id" | "title" | "createdAt"; order?: "asc" | "desc"; } }): Promise<Array<DigitalChannel_ChannelV2>> {
    const path = `/channels`;
    return this.client.get<Array<DigitalChannel_ChannelV2>>(path, options);
  }

  /**
   * Create/Update Digital Channel (Point of Contact)
   * POST /channels
   */
  public async createUpdateChannel(data: DigitalChannel_NewChannel, options?: RequestOptions): Promise<any> {
    const path = `/channels`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Delete existing channel in DFO platform
   * DELETE /channels/{channelId}
   */
  public async deleteChannel(channelId: string, options?: RequestOptions): Promise<void> {
    const path = `/channels/${encodeURIComponent(String(channelId))}`;
    return this.client.delete<void>(path, options);
  }
}
