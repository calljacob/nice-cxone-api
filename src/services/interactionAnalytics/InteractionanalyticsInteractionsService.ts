import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export type InteractionanalyticsInteractions_sortOrder = "asc" | "desc";

export type InteractionanalyticsInteractions_queryDateField = "startTime" | "firstAnnotatedAt";

export interface InteractionanalyticsInteractions_EnlightenMetric { behaviorName?: string; indexScore?: number; rawScore?: number; enlightenPackageModels?: Array<string>; }

export interface InteractionanalyticsInteractions_Frustration { type?: string; }

export interface InteractionanalyticsInteractions_Sentiment { value?: string; }

export interface InteractionanalyticsInteractions_Category { channelName?: string; fullPaths?: Array<string>; }

export interface InteractionanalyticsInteractions_Channel { name?: string; sentiment?: InteractionanalyticsInteractions_Sentiment; beginSentiment?: InteractionanalyticsInteractions_Sentiment; endSentiment?: InteractionanalyticsInteractions_Sentiment; frustration?: InteractionanalyticsInteractions_Frustration; }

export interface InteractionanalyticsInteractions_Entity { channelName?: string; displayText?: string; type?: string; sentimentValue?: string; custom?: boolean; }

export interface InteractionanalyticsInteractions_Interaction { tenantId?: string; segmentId?: string; acdContactId?: number; agentContactId?: string; resolved?: boolean; publishedAt?: string; startTime?: string; endTime?: string; enlightenMetrics?: Array<InteractionanalyticsInteractions_EnlightenMetric>; channels?: Array<InteractionanalyticsInteractions_Channel>; categoryMatches?: Array<InteractionanalyticsInteractions_Category>; entities?: Array<InteractionanalyticsInteractions_Entity>; mediaType?: string; firstAnnotatedAt?: string; contactNo?: Array<string>; interactionId?: string; holdCount?: number; holdSeconds?: number; contactEndReason?: string; dispositionCode?: string; nonHoldNotableSilenceSeconds?: number; nonHoldNotableSilencePercentage?: number; notableSilenceSeconds?: number; notableSilencePercentage?: number; enlightenSentimentRawScore?: number; enlightenSentimentIndexScore?: number; segmentSummaryPrimaryIntentCategory?: string; segmentSummaryPrimaryIntentTopic?: string; segmentSummaryPrimaryIntentName?: string; segmentSummaryActions?: Array<string>; segmentSummaryOutcomes?: Array<string>; }

export interface InteractionanalyticsInteractions_InteractionWrapper { totalRecords?: number; interactions?: Array<InteractionanalyticsInteractions_Interaction>; links?: { self?: string; previous?: string; next?: string; }; }

export interface InteractionanalyticsInteractions_Contact { type?: string; language?: string; recordSource?: string; fromInterwovenTranscript?: boolean; annotatedDateTime?: string; voiceFile?: string; transcriptBlocks?: Array<InteractionanalyticsInteractions_TranscriptBlock>; annotations?: Array<InteractionanalyticsInteractions_TranscriptAnnotation>; enlightenMetrics?: Array<InteractionanalyticsInteractions_EnlightenMetric>; metrics?: Record<string, string>; segmentSummary?: InteractionanalyticsInteractions_SegmentSummary; }

export interface InteractionanalyticsInteractions_TranscriptBlock { channelId?: number; channelName?: string; offset?: number; length?: number; blockId?: number; text?: string; userId?: string; channelUuid?: string; channelType?: string; userType?: string; voiceMetadata?: InteractionanalyticsInteractions_VoiceMetadata; chatMetadata?: InteractionanalyticsInteractions_ChatMetadata; emailMetadata?: InteractionanalyticsInteractions_EmailMetadata; }

export interface InteractionanalyticsInteractions_TranscriptAnnotation { objectType?: string; type?: string; value?: string; offset?: number; highlightLength?: number; transcriptOffset?: number; transcriptChunk?: number; channelName?: string; categoryPath?: string; datasetIds?: Array<number>; domainRole?: string; stem?: string; displayText?: string; sentimentCueStrength?: number; }

export interface InteractionanalyticsInteractions_SegmentSummary { summary?: string; actions?: Array<InteractionanalyticsInteractions_Action>; primaryIntent?: InteractionanalyticsInteractions_Intent; outcomes?: Array<InteractionanalyticsInteractions_Outcome>; }

export interface InteractionanalyticsInteractions_VoiceMetadata { startTime?: number; endTime?: number; confidence?: number; }

export interface InteractionanalyticsInteractions_ChatMetadata { timestamp?: number; }

export interface InteractionanalyticsInteractions_EmailMetadata { sentDate?: number; subject?: string; from?: string; to?: string; }

export interface InteractionanalyticsInteractions_Action { text?: string; score?: number; snippet?: InteractionanalyticsInteractions_Snippet; }

export interface InteractionanalyticsInteractions_Intent { category?: string; score?: number; topic?: string; name?: string; snippet?: InteractionanalyticsInteractions_Snippet; }

export interface InteractionanalyticsInteractions_Outcome { name?: string; score?: number; snippet?: InteractionanalyticsInteractions_Snippet; }

export interface InteractionanalyticsInteractions_Snippet { snippet?: string; text?: string; startOffset?: number; endOffset?: number; }

export interface InteractionanalyticsInteractions_ErrorMessage { statusCode?: number; timestamp?: string; message?: string; description?: string; }

export interface InteractionanalyticsInteractions_ErrorMessage2 { status?: number; timestamp?: string; error?: string; path?: string; }

export interface InteractionanalyticsInteractions_ErrorMessage3 { message?: string; }

export class InteractionanalyticsInteractionsService {
  constructor(private client: HttpClient) {}

  /**
   * Get all analyzed interaction segments for a tenant
   * GET /interaction-analytics-gateway/v2/segments/analyzed
   */
  public async getSegmentsAnalyzed(options?: RequestOptions & { query?: { dateField?: InteractionanalyticsInteractions_queryDateField; beginningDate?: string; endingDate?: string; mediaType?: string; lang?: string; pageSize?: number; cursor?: number; order?: InteractionanalyticsInteractions_sortOrder; } }): Promise<InteractionanalyticsInteractions_InteractionWrapper> {
    const path = `/interaction-analytics-gateway/v2/segments/analyzed`;
    return this.client.get<InteractionanalyticsInteractions_InteractionWrapper>(path, options);
  }

  /**
   * Get analyzed interaction segment transcript
   * GET /interaction-analytics-gateway/v2/segments/{segmentId}/analyzed-transcript
   */
  public async getSegmentsSegmentIdAnalyzedTranscript(segmentId: string, options?: RequestOptions & { query?: { wordLevel?: boolean; } }): Promise<InteractionanalyticsInteractions_Contact> {
    const path = `/interaction-analytics-gateway/v2/segments/${encodeURIComponent(String(segmentId))}/analyzed-transcript`;
    return this.client.get<InteractionanalyticsInteractions_Contact>(path, options);
  }
}
