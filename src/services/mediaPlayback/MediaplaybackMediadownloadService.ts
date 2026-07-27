import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface MediaplaybackMediadownload_MediaDownloadRequest { entityIds: Array<string>; }

export interface MediaplaybackMediadownload_MediaDownloadRequestIdResponse { requestId?: string; }

export type MediaplaybackMediadownload_MediaDownloadResponse = { requestId?: string; status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED"; entities?: Array<MediaplaybackMediadownload_EntityResult>; downloadLocation?: string; createdAt?: string; updatedAt?: string; };

export type MediaplaybackMediadownload_EntityResult = { entityId?: string; status?: "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED"; failureReason?: string; };

export type MediaplaybackMediadownload_ErrorResponse = { code?: "INVALID_REQUEST" | "NOT_FOUND" | "SQS_PUBLISH_FAILED" | "PERSISTENCE_FAILED" | "INTERNAL_ERROR"; message?: string; };

export class MediaplaybackMediadownloadService {
  constructor(private client: HttpClient) {}

  /**
   * New in 26.3: Create bulk download request for CONTACT media files
   * POST /media-download/v1/contacts
   */
  public async createContactMediaRequest(data: MediaplaybackMediadownload_MediaDownloadRequest, options?: RequestOptions): Promise<MediaplaybackMediadownload_MediaDownloadRequestIdResponse> {
    const path = `/media-download/v1/contacts`;
    return this.client.post<MediaplaybackMediadownload_MediaDownloadRequestIdResponse>(path, data, options);
  }

  /**
   * New in 26.3: Create bulk download request for SEGMENT media files
   * POST /media-download/v1/segments
   */
  public async createSegmentMediaRequest(data: MediaplaybackMediadownload_MediaDownloadRequest, options?: RequestOptions): Promise<MediaplaybackMediadownload_MediaDownloadRequestIdResponse> {
    const path = `/media-download/v1/segments`;
    return this.client.post<MediaplaybackMediadownload_MediaDownloadRequestIdResponse>(path, data, options);
  }

  /**
   * New in 26.3: Get download request status
   * GET /media-download/v1/status/{requestId}
   */
  public async getRequestStatus(requestId: string, options?: RequestOptions): Promise<MediaplaybackMediadownload_MediaDownloadResponse> {
    const path = `/media-download/v1/status/${encodeURIComponent(String(requestId))}`;
    return this.client.get<MediaplaybackMediadownload_MediaDownloadResponse>(path, options);
  }
}
