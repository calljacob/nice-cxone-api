import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface MediaplaybackMediaplayback_categoryMatches { categoryHierarchy?: Array<string>; secondsOffsets?: Array<number>; confidence?: number; }

export type MediaplaybackMediaplayback_sentiment = { overallSentiment?: "POSITIVE" | "NEGATIVE" | "MIXED" | "NEUTRAL"; segmentStartTime?: string; channel?: number; };

export type MediaplaybackMediaplayback_segmentData = { startTime?: string; endTime?: string; acwEndTime?: string; openReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE"; closeReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE"; directionType?: "INBOUND" | "OUTBOUND" | "INTERNAL"; source?: string; firstSegment?: boolean; originalSourceFromSdr?: string; segmentId?: string; isCustomerRestricted?: boolean; channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE"; customerRestricted?: boolean; };

export type MediaplaybackMediaplayback_segmentsData = { startTime?: string; endTime?: string; acwEndTime?: string; openReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE" | "CONTACT" | "IVR" | "ELEVATED" | "TRANSFERRED_TO_EXTERNAL_NUMBER" | "EXTERNAL_TRANSFER"; closeReasonType?: "SEGMENT" | "TRANSFER" | "CONFERENCE" | "CONTACT" | "IVR" | "ELEVATED" | "TRANSFERRED_TO_EXTERNAL_NUMBER" | "EXTERNAL_TRANSFER"; directionType?: "INBOUND" | "OUTBOUND" | "INTERNAL" | "UNKNOWN"; source?: string; firstSegment?: boolean; originalSourceFromSdr?: string; segmentId?: string; channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "APPLE_BUSINESS_CHAT_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE"; customerRestricted?: boolean; };

export interface MediaplaybackMediaplayback_waveformData { channel?: number; normalizedPcmData?: Array<number>; }

export type MediaplaybackMediaplayback_voiceStage = { stageType?: "ACTIVE" | "HOLD" | "MASK" | "SOD_ROD" | "ROD" | "SOD" | "WRAP_UP" | "ThreadFocused"; startTime?: string; endTime?: string; recordingID?: string; displays?: Array<MediaplaybackMediaplayback_displayProperties>; };

export interface MediaplaybackMediaplayback_displayProperties { width?: number; height?: number; topLeftX?: number; topLeftY?: number; }

export type MediaplaybackMediaplayback_screenStage = { stageType?: "ACTIVE" | "HOLD" | "MASK" | "SOD_ROD" | "ROD" | "SOD" | "WRAP_UP" | "ThreadFocused"; startTime?: string; endTime?: string; recordingID?: string; displays?: Array<MediaplaybackMediaplayback_displayProperties>; };

export type MediaplaybackMediaplayback_dfoStage = { stageType?: "ACTIVE" | "HOLD" | "MASK" | "SOD_ROD" | "ROD" | "SOD" | "WRAP_UP" | "ThreadFocused"; startTime?: string; endTime?: string; recordingID?: string; displays?: Array<MediaplaybackMediaplayback_displayProperties>; };

export type MediaplaybackMediaplayback_VoiceAndScreenParticipant = { participantType?: "AGENT" | "CUSTOMER"; agentName?: string; participantId?: string; segmentId?: string; userId?: string; voiceStages?: Array<MediaplaybackMediaplayback_voiceStage>; screenStages?: Array<MediaplaybackMediaplayback_screenStage>; channel?: number; };

export type MediaplaybackMediaplayback_ChatParticipant = { participantType?: "AGENT" | "CUSTOMER"; participantName?: string; screenStages?: Array<MediaplaybackMediaplayback_screenStage>; };

export type MediaplaybackMediaplayback_ChatMessages = { participantType?: "AGENT" | "CUSTOMER"; participantName?: string; text?: string; timeStamp?: string; };

export type MediaplaybackMediaplayback_EmailActions = { timeStamp?: string; action?: "Send" | "EndEmail" | "Accept" | "Transfer" | "Forward" | "Park" | "UnPark" | "Reply" | "NewOutbound"; };

export type MediaplaybackMediaplayback_EmailParticipant = { participantType?: "AGENT" | "CUSTOMER"; participantName?: string; actions?: Array<MediaplaybackMediaplayback_EmailActions>; screenStages?: Array<MediaplaybackMediaplayback_screenStage>; };

export interface MediaplaybackMediaplayback_EmailContent { sentTime?: string; from?: string; to?: Array<string>; cc?: Array<string>; bcc?: Array<string>; subject?: string; body?: string; }

export interface MediaplaybackMediaplayback_DynamicBusinessData { id?: string; value?: string; }

export interface MediaplaybackMediaplayback_VoiceAndScreen { startTime?: string; endTime?: string; acwEndTime?: string; fileToPlayUrl?: string; videoImageUrl?: string; waveformDataList?: Array<MediaplaybackMediaplayback_waveformData>; participantDataList?: Array<MediaplaybackMediaplayback_VoiceAndScreenParticipant>; segmentsDataList?: Array<MediaplaybackMediaplayback_segmentsData>; categoryMatchesList?: Array<MediaplaybackMediaplayback_categoryMatches>; sentiments?: Array<MediaplaybackMediaplayback_sentiment>; dfoStages?: Array<MediaplaybackMediaplayback_dfoStage>; }

export interface MediaplaybackMediaplayback_VoiceAndScreenSegment { startTime?: string; endTime?: string; acwEndTime?: string; fileToPlayUrl?: string; videoImageUrl?: string; waveformDataList?: Array<MediaplaybackMediaplayback_waveformData>; participantDataList?: Array<MediaplaybackMediaplayback_VoiceAndScreenParticipant>; segmentsDataList?: Array<MediaplaybackMediaplayback_segmentData>; categoryMatchesList?: Array<MediaplaybackMediaplayback_categoryMatches>; sentiments?: Array<MediaplaybackMediaplayback_sentiment>; dfoStages?: Array<MediaplaybackMediaplayback_dfoStage>; }

export interface MediaplaybackMediaplayback_Chat { startTime?: string; endTime?: string; acwEndTime?: string; fileToPlayUrl?: string; transferPoints?: string; participants?: Array<MediaplaybackMediaplayback_ChatParticipant>; messages?: Array<MediaplaybackMediaplayback_ChatMessages>; segmentsDataList?: Array<MediaplaybackMediaplayback_segmentsData>; dfoStages?: Array<MediaplaybackMediaplayback_dfoStage>; }

export interface MediaplaybackMediaplayback_Email { startTime?: string; endTime?: string; acwEndTime?: string; fileToPlayUrl?: string; participants?: Array<MediaplaybackMediaplayback_EmailParticipant>; content?: MediaplaybackMediaplayback_EmailContent; segmentsDataList?: Array<MediaplaybackMediaplayback_segmentsData>; dfoStages?: Array<MediaplaybackMediaplayback_dfoStage>; }

export interface MediaplaybackMediaplayback_ChatSegment { startTime?: string; endTime?: string; acwEndTime?: string; fileToPlayUrl?: string; transferPoints?: string; participants?: Array<MediaplaybackMediaplayback_ChatParticipant>; messages?: Array<MediaplaybackMediaplayback_ChatMessages>; segmentsDataList?: Array<MediaplaybackMediaplayback_segmentData>; "dfoStages\""?: Array<MediaplaybackMediaplayback_dfoStage>; }

export interface MediaplaybackMediaplayback_EmailSegment { startTime?: string; endTime?: string; acwEndTime?: string; fileToPlayUrl?: string; participants?: Array<MediaplaybackMediaplayback_EmailParticipant>; content?: MediaplaybackMediaplayback_EmailContent; segmentsDataList?: Array<MediaplaybackMediaplayback_segmentData>; }

export type MediaplaybackMediaplayback_ApiResponse = { contactId?: string; acdcontactId?: string; elevatedInteraction?: boolean; interactions?: Array<{ mediaType?: "voice-only" | "voice-and-screen" | "chat" | "chat-and-screen" | "email" | "email-and-screen" | "BE" | "BE_AND_SCREEN" | "WORKITEM"; channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "APPLE_BUSINESS_CHAT_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE"; startTime?: string; endTime?: string; data?: MediaplaybackMediaplayback_VoiceAndScreen | MediaplaybackMediaplayback_Chat | MediaplaybackMediaplayback_Email; "@type"?: "call" | "chat" | "email"; callTaggingList?: Array<Record<string, any>>; dynamicBusinessData?: Array<MediaplaybackMediaplayback_DynamicBusinessData>; }>; };

export type MediaplaybackMediaplayback_ApiResponseSegment = { contactId?: string; acdcontactId?: string; elevatedInteraction?: boolean; Interactions?: Array<{ mediaType?: "voice-only" | "voice-and-screen" | "chat" | "chat-and-screen" | "email" | "email-and-screen" | "BE" | "BE_AND_SCREEN" | "WORKITEM"; channelType?: "PHONE_CALL" | "EMAIL" | "CHAT" | "PHONE_CALL_IVR" | "SMS" | "TW_PRIVATE" | "FB_PRIVATE" | "WHATSAPP_PRIVATE" | "TELEGRAM_PRIVATE" | "APPLE_BUSINESS_CHAT_PRIVATE" | "LINE_PRIVATE" | "VIBER_PRIVATE" | "WE_CHAT_PRIVATE" | "CUSTOM_PRIVATE" | "WORKITEM" | "GOOGLE_BUSINESS_MESSAGES_PRIVATE" | "SLACK_PRIVATE" | "MICROSOFT_TEAMS_PRIVATE"; startTime?: string; endTime?: string; data?: MediaplaybackMediaplayback_VoiceAndScreenSegment | MediaplaybackMediaplayback_ChatSegment | MediaplaybackMediaplayback_EmailSegment; "@type"?: "call" | "chat" | "email"; callTaggingList?: Array<Record<string, any>>; dynamicBusinessData?: Array<MediaplaybackMediaplayback_DynamicBusinessData>; }>; };

export interface MediaplaybackMediaplayback_ErrorApiResponse { internalCode?: string; message?: string; }

export interface MediaplaybackMediaplayback_ThrottlingApiResponse { message?: string; route?: string; }

export class MediaplaybackMediaplaybackService {
  constructor(private client: HttpClient) {}

  /**
   * Access the full contact (the entire interaction with all segments) based on ACD Contact ID.
   * GET /media-playback/v1/contacts
   */
  public async getACDContactRecordingData(options?: RequestOptions & { query?: { "acd-call-id": string; "media-type"?: Array<"voice-only" | "voice-and-screen" | "chat" | "email" | "all">; "exclude-waveforms"?: boolean; "exclude-qm-categories"?: boolean; isDownload?: boolean; } }): Promise<MediaplaybackMediaplayback_ApiResponse> {
    const path = `/media-playback/v1/contacts`;
    return this.client.get<MediaplaybackMediaplayback_ApiResponse>(path, options);
  }

  /**
   * Access a recording statement based on ACD Contact ID and Statement ID.
   * GET /media-playback/v1/acd-contacts/{acdContactId}/statements/{statementId}
   */
  public async getDataToPlayByContactStatementId(acdContactId: string, statementId: string, options?: RequestOptions & { query?: { "media-type"?: Array<"voice-only" | "voice-and-screen" | "chat" | "email" | "all">; isDownload?: boolean; "exclude-qm-categories"?: boolean; } }): Promise<MediaplaybackMediaplayback_ApiResponse> {
    const path = `/media-playback/v1/acd-contacts/${encodeURIComponent(String(acdContactId))}/statements/${encodeURIComponent(String(statementId))}`;
    return this.client.get<MediaplaybackMediaplayback_ApiResponse>(path, options);
  }

  /**
   * Access a single segment independent of the contact (voice-only, voice-and-screen, chat, or email).
   * GET /media-playback/v1/segments/{segmentId}
   */
  public async getSegmentRecordingData(segmentId: string, options?: RequestOptions & { query?: { "media-type"?: Array<"voice-only" | "voice-and-screen" | "chat" | "email" | "all">; "exclude-waveforms"?: boolean; "exclude-qm-categories"?: boolean; } }): Promise<MediaplaybackMediaplayback_ApiResponseSegment> {
    const path = `/media-playback/v1/segments/${encodeURIComponent(String(segmentId))}`;
    return this.client.get<MediaplaybackMediaplayback_ApiResponseSegment>(path, options);
  }
}
