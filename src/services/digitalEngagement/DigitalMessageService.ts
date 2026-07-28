import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface DigitalMessage_ApiError {
  field?: string;
  message: string;
  parameters?: Record<string, any>;
  errorCode?: string;
}

export interface DigitalMessage_ApiErrorCollection {
  errors: Array<DigitalMessage_ApiError>;
  uid?: string;
}

export type DigitalMessage_ChannelV2 = {
  id: string;
  idOnExternalPlatform: string;
  realExternalPlatformId:
    | "apple-apps-reviews"
    | "apple-business-chat"
    | "bg"
    | "bw"
    | "chat"
    | "congstar-forum"
    | "custom"
    | "cypress"
    | "discussions"
    | "email"
    | "facebook"
    | "fb"
    | "fm"
    | "forum"
    | "gcse"
    | "gl"
    | "google-business-messages"
    | "google-places"
    | "google-play"
    | "google-rcs"
    | "gp"
    | "ig"
    | "in-contact-email"
    | "ind"
    | "instagram"
    | "kik"
    | "lc"
    | "li"
    | "line"
    | "mediatoolkit"
    | "microsoft-teams"
    | "mock"
    | "monitora"
    | "news"
    | "nw"
    | "ok-ru"
    | "phpbb"
    | "rss"
    | "sandbox"
    | "sandbox-facebook"
    | "sandbox-twitter"
    | "sendbird"
    | "slack"
    | "smooch-io-we-chat"
    | "sms"
    | "social-watch"
    | "t-mobile-austria-forum"
    | "talkdesk"
    | "telegram"
    | "tmobile-forum"
    | "tw"
    | "twitter"
    | "viber"
    | "vk"
    | "vo"
    | "voice"
    | "we-chat"
    | "whatsapp"
    | "youscan"
    | "yt"
    | "zoom";
  name: string;
  externalPlatformAvatar?: string;
  externalPlatformIcon?:
    | "amazon"
    | "apple"
    | "apple-apps"
    | "apple-imessage"
    | "co-browsing"
    | "contact-form"
    | "email"
    | "facebook"
    | "facebook-dm"
    | "facebook-messenger"
    | "forum"
    | "google"
    | "google-dm"
    | "google-maps"
    | "google-play"
    | "google-search"
    | "instagram"
    | "instagram-dm"
    | "kakao-talk"
    | "kik"
    | "line-message"
    | "linkedin"
    | "listening"
    | "livechat"
    | "livechat-contact-form"
    | "ok-ru"
    | "pinterest"
    | "rcs"
    | "rss"
    | "slack"
    | "sms"
    | "snapchat"
    | "tango"
    | "telegram"
    | "tumblr"
    | "twitter"
    | "twitter-dm"
    | "viber"
    | "vkontakte"
    | "vkontakte-dm"
    | "voice"
    | "wechat"
    | "whatsapp"
    | "youtube";
  channelIntegrationId: string;
  hasReply?: boolean;
  hasTreeStructure: boolean;
  contentFormat: "html" | "plain";
  hasCustomerOnThirdParty?: boolean;
  isPostWritable?: boolean;
  hasAbilityToQuoteMessage?: boolean;
  hasAbilityToLike?: boolean;
  isPrivate: boolean;
  isHidden?: boolean;
  wysiwygEnabled?: boolean;
  hasAbilityToTag?: boolean;
  ownerUserId?: number;
  hasPublishing?: boolean;
  hasAbilityToSendFiles?: boolean;
  hasOutboundFlow?: boolean;
  hasAbilityToShare?: boolean;
  hasAbilityToHide?: boolean;
  hasAbilityToDelete?: boolean;
  replyPrefixMentionTemplate?: string;
  nicknameOnExternalPlatform?: string;
  isLiveChat?: boolean;
  hasAbilityToChangeRecipient?: boolean;
  hasMultipleRecipient?: boolean;
  hasCcAndBcc?: boolean;
  hasVisibleTitle?: boolean;
  hasEditableTitle?: boolean;
  hasVisibleRecipients?: boolean;
  hasAbilityToForwardMessage?: boolean;
  canSaveResponse?: boolean;
  hasAbilityToChangeFrom?: boolean;
  isAutomaticSignatureAttached?: boolean;
  hasOutboundTemplates?: boolean;
  hasManualOutboundFlow?: boolean;
  hasMultipleThreadsPerEndUser?: boolean;
  translationGroup?: "default" | "email" | "phone";
  studioScript?: string;
  defaultSkillId?: number;
  canAgentInviteCustomersToContact?: boolean;
  canReplyToAnyMessage?: boolean;
  hasAgentsAsRecipients?: boolean;
  canSendSenderActions?: boolean;
};

export interface DigitalMessage_User {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
}

export type DigitalMessage_ContactInformation = DigitalMessage_ContactInformationBase & {
  status?: "escalated" | "pending" | "resolved";
};

export type DigitalMessage_Elevation = {
  contact?: { contactId: string; contactNumber?: DigitalMessage_ContactNumber };
  agentContact?: { id: string };
  interaction: { id: string };
  fromProvider?: "acd" | "dfo" | "em";
};

export interface DigitalMessage_MessageMinimum {
  id: string;
}

export interface DigitalMessage_ExternalAttribute {
  key: string;
  value: string;
}

export type DigitalMessage_NewMessage = {
  idOnExternalPlatform: string;
  deletedOnExternalPlatform?: boolean;
  url?: string;
  direction: "inbound" | "outbound";
  createdAtWithMilliseconds: string;
  tagIds?: Array<number>;
  reactionStatistics?: DigitalMessage_ReactionStatistics;
  thread: DigitalMessage_ThreadToCreate & { idOnExternalPlatform: string };
  replyToMessage?: DigitalMessage_PlatformBackendReplyToMessage;
  isReplyToSpecificMessage?: boolean;
  title?: string;
  messageContent: DigitalMessage_PlatformBackendMessageContentToCreate;
  authorEndUserIdentity: DigitalMessage_AuthorCustomerIdentity;
  browserFingerprint?: DigitalMessage_DeviceFingerprint;
  contact?: DigitalMessage_ContactInformation;
  attachments?: Array<DigitalMessage_Attachment>;
  recipients?: Array<DigitalMessage_Recipient>;
  authorRecipients?: Array<DigitalMessage_Recipient>;
  externalAttributes?: Array<DigitalMessage_ExternalAttribute>;
};

export interface DigitalMessage_SendInbound {
  messageContent: DigitalMessage_PlatformBackendMessageContentToCreate;
  authorCustomerIdentity: DigitalMessage_AuthorCustomerIdentity;
  thread?: DigitalMessage_PlatformBackendThreadToCreate;
  recipients?: Array<DigitalMessage_Recipient>;
  attachments?: Array<DigitalMessage_Attachment>;
  title?: string;
  contact?: { customFields?: Array<DigitalMessage_CustomFieldToCreate> };
}

export type DigitalMessage_MessageDetail = {
  id?: string;
  idOnExternalPlatform?: string;
  isDeletedOnExternalPlatform?: boolean;
  isHiddenOnExternalPlatform?: boolean;
  isReplyAllowed?: boolean;
  url?: string;
  direction?: "inbound" | "outbound";
  createdAt?: string;
  createdAtWithMilliseconds?: string;
  authorEndUserIdentity?: DigitalMessage_AuthorCustomerIdentity;
  reactionStatistics?: DigitalMessage_ReactionStatistics;
  messageContent?: DigitalMessage_MessageContent;
  hasAdditionalMessageContent?: boolean;
  attachments?: Array<DigitalMessage_Attachment>;
  authorNameRemoved?: DigitalMessage_ContentRemoved;
  contentRemoved?: DigitalMessage_ContentRemoved;
  authorUser?: DigitalMessage_User;
  contactNumber?: string;
  customerStatistics?: { seenAt?: string };
  recipients?: Array<DigitalMessage_Recipient>;
  replyChannel?: DigitalMessage_ChannelV2;
  channel?: { id?: string };
  replyToMessage?: DigitalMessage_PlatformBackendReplyToMessage;
  sentiment?: DigitalMessage_Sentiment;
  tags?: Array<DigitalMessage_Tag>;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  title?: string;
  userStatistics?: {
    createdToReadSeconds?: {
      notReflectingBusinessHours?: number;
      reflectingBusinessHours?: number;
    };
    readAt?: string;
    seenAt?: string;
  };
};

export type DigitalMessage_MessageStatus = {
  status: "delivered" | "seen" | "failed";
  updatedAt: string;
  reason?: string;
};

export interface DigitalMessage_Tag {
  id: number;
  color?: string;
  title: string;
}

export type DigitalMessage_NoteStatus = { type: "new" | "checked" };

export interface DigitalMessage_MessageNote {
  id: string;
  createdAt: string;
  updatedAt: string;
  user: DigitalMessage_User;
  currentAssignee?: DigitalMessage_User;
  message?: DigitalMessage_MessageMinimum;
  content: string;
  status: DigitalMessage_NoteStatus;
}

export interface DigitalMessage_PlatformBackendThreadToCreate {
  idOnExternalPlatform?: string;
  threadName?: string;
}

export interface DigitalMessage_PlatformBackendReplyToMessage {
  idOnExternalPlatform?: string;
}

export interface DigitalMessage_ReactionStatistics {
  likes?: number;
  shares?: number;
  isLikedByChannel?: boolean;
  isSharedByChannel?: boolean;
}

export interface DigitalMessage_AuthorCustomerIdentity {
  idOnExternalPlatform: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  image?: string;
  customFields?: Array<DigitalMessage_CustomField>;
}

export interface DigitalMessage_CustomField {
  ident: string;
  value: string;
  updatedAt?: string;
}

export interface DigitalMessage_CustomFieldToCreate {
  ident: string;
  value: string;
}

export interface DigitalMessage_Attachment {
  friendlyName: string;
  url: string;
}

export interface DigitalMessage_Recipient {
  idOnExternalPlatform: string;
  name?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
  anonymizedAt?: string;
  anonymizedReason?: DigitalMessage_ContentRemovedReason;
}

export type DigitalMessage_DeviceFingerprint = {
  browser?: string;
  browserVersion?: string;
  os?: string;
  osVersion?: string;
  language?: string;
  ip?: string;
  location?: string;
  country?: string;
  deviceType?: string;
  deviceToken?: string;
  applicationType?: string;
  supportedMessageTypes?: Array<
    | "ADAPTIVE_CARD"
    | "DYNAMIC_CONTENT"
    | "FORM"
    | "LIST_PICKER"
    | "PLUGIN"
    | "POSTBACK"
    | "QUICK_REPLIES"
    | "RICH_LINK"
    | "TEXT"
    | "TIME_PICKER"
    | "UNSUPPORTED"
  >;
};

export interface DigitalMessage_Customer {
  id: string;
  updatedAt: string;
  firstName?: string;
  surname?: string;
  fullName?: string;
  customFields?: Array<DigitalMessage_CustomField>;
  image?: string;
  identities: Array<DigitalMessage_AuthorCustomerIdentity>;
  messageStatistics: DigitalMessage_CustomerMessageStatistics;
  sentimentStatistics: DigitalMessage_CustomerSentimentStatistics;
}

export interface DigitalMessage_CustomerMessageStatistics {
  inbound?: number;
  outbound?: number;
}

export interface DigitalMessage_CustomerSentimentStatistics {
  positive?: number;
  neutral?: number;
  negative?: number;
}

export type DigitalMessage_Contact = {
  id?: string;
  contactId?: string;
  customerContactId?: string;
  interactionId?: string;
  abandon?: DigitalMessage_ContactAbandon;
  authorEndUserIdentity?: DigitalMessage_AuthorCustomerIdentity;
  consumerContactStorageId?: string;
  channelId?: string;
  direction?: "inbound" | "outbound";
  detailUrl?: string;
  createdAt?: string;
  customFields?: Array<DigitalMessage_CustomField>;
  endUser?: DigitalMessage_Customer;
  inboxAssigneeUser?: DigitalMessage_User;
  inboxPreAssigneeUser?: DigitalMessage_User;
  ownerAssigneeUser?: DigitalMessage_User;
  recipients?: Array<DigitalMessage_Recipient>;
  routingQueueId?: string;
  routingQueuePriority?: number;
  status?: DigitalMessage_ContactStatus;
  statusUpdatedAt?: string;
  threadId?: string;
  threadIdOnExternalPlatform?: string;
  userFingerprint?: DigitalMessage_DeviceFingerprint;
};

export type DigitalMessage_ContactAbandon = {
  type: "abandon" | "expired" | "shortAbandon";
  abandonedAt: string;
};

export type DigitalMessage_ContactStatus =
  | "closed"
  | "escalated"
  | "new"
  | "open"
  | "pending"
  | "resolved"
  | "trashed";

export type DigitalMessage_Sentiment = "neutral" | "positive" | "negative";

export type DigitalMessage_MessageContent = {
  type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD";
  payload:
    | DigitalMessage_TextPayload
    | DigitalMessage_ElementsPayload
    | DigitalMessage_QuickRepliesPayload
    | DigitalMessage_ListPickerPayload
    | DigitalMessage_RichLinkPayload
    | DigitalMessage_AdaptiveCardPayload;
  fallbackText: string;
  postback: string;
};

export type DigitalMessage_PlatformBackendMessageContentToCreate = {
  type: "TEXT" | "PLUGIN" | "QUICK_REPLIES" | "LIST_PICKER" | "RICH_LINK" | "ADAPTIVE_CARD";
  payload:
    | DigitalMessage_TextPayload
    | DigitalMessage_ElementsPayload
    | DigitalMessage_QuickRepliesPayload
    | DigitalMessage_ListPickerPayload
    | DigitalMessage_RichLinkPayload
    | DigitalMessage_AdaptiveCardPayload;
  fallbackText?: string;
  postback?: string;
};

export interface DigitalMessage_ElementsPayload {
  postback?: string;
  elements?: Array<DigitalMessage_MessageContentElement>;
}

export interface DigitalMessage_QuickRepliesPayload {
  text: DigitalMessage_PayloadTextField;
  actions: Array<DigitalMessage_ActionButton>;
}

export interface DigitalMessage_RichLinkPayload {
  media: DigitalMessage_PayloadMediaField;
  title: DigitalMessage_PayloadTextField;
  url: string;
}

export interface DigitalMessage_AdaptiveCardPayload {
  type: string;
  version: string;
}

export interface DigitalMessage_ListPickerPayload {
  title: DigitalMessage_PayloadTextField;
  text: DigitalMessage_PayloadTextField;
  actions: Array<DigitalMessage_ActionButton>;
}

export interface DigitalMessage_PayloadMediaField {
  fileName: string;
  mimeType: string;
  url: string;
}

export interface DigitalMessage_PayloadTextField {
  content: string;
}

export interface DigitalMessage_TextPayload {
  text?: string;
}

export interface DigitalMessage_ActionButton {
  text: string;
  type: "REPLY_BUTTON";
  postback?: string;
  icon?: DigitalMessage_PayloadMediaField;
  description?: string;
}

export type DigitalMessage_MessageContentElement = {
  id?: string;
  text?: string;
  type?: "TEXT" | "BUTTON" | "MENU" | "TITLE";
  elements?: Array<DigitalMessage_MessageContentElement>;
};

export interface DigitalMessage_SetContentRemoved {
  reason?: DigitalMessage_ContentRemovedReason;
}

export interface DigitalMessage_ContentRemoved {
  reason?: DigitalMessage_ContentRemovedReason;
  removedAt?: string;
}

export type DigitalMessage_ContentRemovedReason = "GDPR" | "TTL" | "other";

export interface DigitalMessage_ThreadToCreate {
  idOnExternalPlatform?: string;
  threadName?: string;
}

export type DigitalMessage_ContactNumber = string;

export type DigitalMessage_ContactInformationBase = {
  customFields?: Array<DigitalMessage_CustomFieldToCreate>;
  elevation?: DigitalMessage_Elevation;
  status?: string;
  direction?: "inbound" | "outbound";
  statusUpdatedAt?: string;
  skillId?: number;
};

export interface DigitalMessage_ReplyToMessage {
  idOnExternalPlatform: string;
}

export type DigitalMessage_MessageContentToCreate = {
  type:
    | "ADAPTIVE_CARD"
    | "DYNAMIC_CONTENT"
    | "FORM"
    | "LIST_PICKER"
    | "PLUGIN"
    | "POSTBACK"
    | "QUICK_REPLIES"
    | "RICH_LINK"
    | "TEXT"
    | "TIME_PICKER"
    | "UNSUPPORTED";
  payload: Record<string, any>;
  fallbackText?: string;
  postback?: string;
  parameters?: Record<string, any> | Array<any>;
};

export type DigitalMessage_AttachmentToCreate = any | any;

export interface DigitalMessage_NewRecipient {
  idOnExternalPlatform: string;
  name?: string;
  isPrimary?: boolean;
  isPrivate?: boolean;
}

export type DigitalMessage_OutboundMessageToCreateBaseSchema = { thread: any } | any;

export type DigitalMessage_OutboundMessageToCreate =
  DigitalMessage_OutboundMessageToCreateBaseSchema & {
    contact?: DigitalMessage_ContactInformation;
  };

export class DigitalMessageService {
  constructor(private client: HttpClient) {}

  /**
   * Create message in DFO
   * POST /channels/{channelId}/messages
   */
  public async channelsChannelIdCreatemessage(
    channelId: string,
    data: DigitalMessage_NewMessage,
    options?: RequestOptions,
  ): Promise<{ consumerContact?: DigitalMessage_Contact; message?: DigitalMessage_MessageDetail }> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/messages`;
    return this.client.post<{
      consumerContact?: DigitalMessage_Contact;
      message?: DigitalMessage_MessageDetail;
    }>(path, data, options);
  }

  /**
   * Update message status
   * PUT /channels/{channelId}/messages/{messageIdOnExternalPlatform}/status
   */
  public async updateMessageStatus(
    channelId: string,
    messageIdOnExternalPlatform: string,
    data: DigitalMessage_MessageStatus,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/messages/${encodeURIComponent(String(messageIdOnExternalPlatform))}/status`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Send outbound message
   * POST /channels/{channelId}/outbound
   */
  public async sendOutboundMessage(
    channelId: string,
    data: DigitalMessage_OutboundMessageToCreate,
    options?: RequestOptions,
  ): Promise<{ consumerContact?: DigitalMessage_Contact; message?: DigitalMessage_MessageDetail }> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/outbound`;
    return this.client.post<{
      consumerContact?: DigitalMessage_Contact;
      message?: DigitalMessage_MessageDetail;
    }>(path, data, options);
  }

  /**
   * Send inbound message
   * POST /channels/{channelId}/inbound
   */
  public async sendInboundMessage(
    channelId: string,
    data: DigitalMessage_SendInbound,
    options?: RequestOptions,
  ): Promise<{ contact?: DigitalMessage_Contact }> {
    const path = `/channels/${encodeURIComponent(String(channelId))}/inbound`;
    return this.client.post<{ contact?: DigitalMessage_Contact }>(path, data, options);
  }

  /**
   * Get list of Messages based on filters
   * GET /messages
   */
  public async searchMessages(
    options?: RequestOptions & {
      query?: {
        query?: string;
        "idOnExternalPlatform[]"?: Array<string>;
        "channel[]"?: Array<string>;
        "tag[]"?: Array<number>;
        "excludeTag[]"?: Array<number>;
        contactNumber?: number;
        "authorIdOnExternalPlatform[]"?: Array<string>;
        direction?: "inbound" | "outbound";
        contentContains?: string;
        contentNotContains?: string;
      };
    },
  ): Promise<{ hits?: number; data?: Array<DigitalMessage_MessageDetail> }> {
    const path = `/messages`;
    return this.client.get<{ hits?: number; data?: Array<DigitalMessage_MessageDetail> }>(
      path,
      options,
    );
  }

  /**
   * Get Message detail
   * GET /messages/{messageId}
   */
  public async getMessage(
    messageId: string,
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageDetail> {
    const path = `/messages/${encodeURIComponent(String(messageId))}`;
    return this.client.get<DigitalMessage_MessageDetail>(path, options);
  }

  /**
   * Remove author name from message
   * POST /messages/{messageId}/author-name-removal
   */
  public async removeMessageAuthorName(
    messageId: string,
    data: DigitalMessage_SetContentRemoved,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/author-name-removal`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Add tag to message
   * PUT /messages/{messageId}/tags/{tagId}
   */
  public async addMessageTag(
    messageId: string,
    tagId: string,
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageDetail> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/tags/${encodeURIComponent(String(tagId))}`;
    return this.client.put<DigitalMessage_MessageDetail>(path, undefined, options);
  }

  /**
   * Remove tag from message
   * DELETE /messages/{messageId}/tags/{tagId}
   */
  public async removeMessageTag(
    messageId: string,
    tagId: string,
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageDetail> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/tags/${encodeURIComponent(String(tagId))}`;
    return this.client.delete<DigitalMessage_MessageDetail>(path, options);
  }

  /**
   * Remove content of a message
   * POST /messages/{messageId}/content-removal
   */
  public async removeMessageContent(
    messageId: string,
    data: DigitalMessage_SetContentRemoved,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/content-removal`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * This request deletes message on external platform and also adjusts flags in DFO platform to mark that this message is deleted
   * POST /messages/{messageId}/delete
   */
  public async deleteDFOMessageBymessageId(
    messageId: string,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/delete`;
    return this.client.post<void>(path, undefined, options);
  }

  /**
   * Create new note to message
   * POST /messages/{messageId}/notes
   */
  public async createMessageNote(
    messageId: string,
    data: { content?: string },
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageNote> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/notes`;
    return this.client.post<DigitalMessage_MessageNote>(path, data, options);
  }

  /**
   * Update note of the message
   * PUT /messages/{messageId}/notes/{noteId}
   */
  public async updateMessageNote(
    messageId: string,
    noteId: string,
    data: { content: string },
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageNote> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/notes/${encodeURIComponent(String(noteId))}`;
    return this.client.put<DigitalMessage_MessageNote>(path, data, options);
  }

  /**
   * Remove note from message
   * DELETE /messages/{messageId}/notes/{noteId}
   */
  public async deleteMessageNote(
    messageId: string,
    noteId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/notes/${encodeURIComponent(String(noteId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Set read status of a message
   * PUT /messages/{messageId}/read
   */
  public async markDFOMessageRead(
    messageId: string,
    data: { isRead: boolean },
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageDetail> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/read`;
    return this.client.put<DigitalMessage_MessageDetail>(path, data, options);
  }

  /**
   * Set sentiment of a message
   * PUT /messages/{messageId}/sentiment
   */
  public async setMessageSentiment(
    messageId: string,
    data: { sentiment: DigitalMessage_Sentiment },
    options?: RequestOptions,
  ): Promise<DigitalMessage_MessageDetail> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/sentiment`;
    return this.client.put<DigitalMessage_MessageDetail>(path, data, options);
  }

  /**
   * Add reaction to a message in channel
   * POST /messages/{messageId}/react/{reactionType}
   */
  public async addDFOMessageReact(
    messageId: string,
    reactionType: "like" | "share",
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/react/${encodeURIComponent(String(reactionType))}`;
    return this.client.post<void>(path, undefined, options);
  }

  /**
   * Delete reaction from a message in channel
   * DELETE /messages/{messageId}/react/{reactionType}
   */
  public async deleteDFOMessageReact(
    messageId: string,
    reactionType: "like",
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/messages/${encodeURIComponent(String(messageId))}/react/${encodeURIComponent(String(reactionType))}`;
    return this.client.delete<void>(path, options);
  }
}
