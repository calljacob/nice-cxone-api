import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface Feedbackmanagement_ErrorResponse { code?: number; errors?: Array<string>; }

export interface Feedbackmanagement_Condition { field?: string; operator?: string; value?: string; }

export interface Feedbackmanagement_SearchExportRequest { fields?: Array<string>; filter?: Record<string, Record<string, Array<Feedbackmanagement_Condition>>>; }

export interface Feedbackmanagement_ExportLimitInfo { limitRemaining?: number; resetAt?: string; }

export interface Feedbackmanagement_SelfLink { rel?: string; href?: string; }

export interface Feedbackmanagement_SearchExportResponse { links?: Array<Feedbackmanagement_SelfLink>; warnings?: Array<string>; exportLimit?: Feedbackmanagement_ExportLimitInfo; data?: Array<Record<string, any>>; nextCursor?: string; }

export interface Feedbackmanagement_InitiateExportRequest { startDate?: string; endDate?: string; surveyIdfier?: string; }

export interface Feedbackmanagement_ExportStatusResponse { exportStatus?: string; startDate?: string; endDate?: string; exportLimit?: Feedbackmanagement_ExportLimitInfo; }

export class FeedbackmanagementService {
  constructor(private client: HttpClient) {}

  /**
   * New in 26.3: Get all surveys metadata
   * GET /conversation/v1.0/metadata/surveys
   */
  public async getAllSurveysMetadata(options?: RequestOptions): Promise<Record<string, any>> {
    const path = `/conversation/v1.0/metadata/surveys`;
    return this.client.get<Record<string, any>>(path, options);
  }

  /**
   * New in 26.3: Get survey metadata
   * GET /conversation/v1.0/metadata/survey/{surveyIdfier}
   */
  public async getSurveyMetadata(surveyIdfier: string, options?: RequestOptions): Promise<Record<string, any>> {
    const path = `/conversation/v1.0/metadata/survey/${encodeURIComponent(String(surveyIdfier))}`;
    return this.client.get<Record<string, any>>(path, options);
  }

  /**
   * New in 26.3: Open search for survey invitation
   * POST /survey-data/v1.0/invitation/search
   */
  public async searchInvitationExport(data?: Feedbackmanagement_SearchExportRequest, options?: RequestOptions & { query?: { limit: number; cursor?: string; } }): Promise<Feedbackmanagement_SearchExportResponse> {
    const path = `/survey-data/v1.0/invitation/search`;
    return this.client.post<Feedbackmanagement_SearchExportResponse>(path, data, options);
  }

  /**
   * New in 26.3: Initiate invitation export
   * POST /survey-data/v1.0/invitation/export/initiate
   */
  public async initiateInvitationExport(data: Feedbackmanagement_InitiateExportRequest, options?: RequestOptions): Promise<{ exportId?: string; message?: string; }> {
    const path = `/survey-data/v1.0/invitation/export/initiate`;
    return this.client.post<{ exportId?: string; message?: string; }>(path, data, options);
  }

  /**
   * New in 26.3: Check invitation export status
   * GET /survey-data/v1.0/invitation/export/status/{exportId}
   */
  public async invitationExportStatus(exportId: string, options?: RequestOptions): Promise<Feedbackmanagement_ExportStatusResponse> {
    const path = `/survey-data/v1.0/invitation/export/status/${encodeURIComponent(String(exportId))}`;
    return this.client.get<Feedbackmanagement_ExportStatusResponse>(path, options);
  }

  /**
   * New in 26.3: Open search for feedback export
   * POST /survey-data/v1.0/feedback/search
   */
  public async searchFeedbackExport(data?: Feedbackmanagement_SearchExportRequest, options?: RequestOptions & { query?: { limit: number; cursor?: string; } }): Promise<Feedbackmanagement_SearchExportResponse> {
    const path = `/survey-data/v1.0/feedback/search`;
    return this.client.post<Feedbackmanagement_SearchExportResponse>(path, data, options);
  }

  /**
   * New in 26.3: Initiate feedback export
   * POST /survey-data/v1.0/feedback/export/initiate
   */
  public async initiateFeedbackExport(data: Feedbackmanagement_InitiateExportRequest, options?: RequestOptions): Promise<{ exportId?: string; message?: string; }> {
    const path = `/survey-data/v1.0/feedback/export/initiate`;
    return this.client.post<{ exportId?: string; message?: string; }>(path, data, options);
  }

  /**
   * New in 26.3: Check feedback export status
   * GET /survey-data/v1.0/feedback/export/status/{exportId}
   */
  public async feedbackExportStatus(exportId: string, options?: RequestOptions): Promise<Feedbackmanagement_ExportStatusResponse> {
    const path = `/survey-data/v1.0/feedback/export/status/${encodeURIComponent(String(exportId))}`;
    return this.client.get<Feedbackmanagement_ExportStatusResponse>(path, options);
  }
}
