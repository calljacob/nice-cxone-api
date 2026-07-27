import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface CxoneDocuments_DocumentSnapshotResponse { documents: Array<CxoneDocuments_DocumentInfo>; nextPageToken?: string; }

export type CxoneDocuments_DocumentInfo = { documentIdentifier: string; lastUpdatedTimestamp: string; ingestionStatus: "INDEXED" | "PARTIALLY_INDEXED" | "PENDING" | "FAILED" | "METADATA_PARTIALLY_INDEXED" | "METADATA_UPDATE_FAILED" | "IGNORED" | "NOT_FOUND" | "STARTING" | "IN_PROGRESS" | "DELETING" | "DELETE_IN_PROGRESS"; };

export interface CxoneDocuments_SnapshotErrorResponse { code: string; error?: string; message: string; }

export interface CxoneDocuments_Documents { documents: Array<CxoneDocuments_Document>; }

export type CxoneDocuments_Document = { content: { documentIdentifier: string; parseImage?: boolean; deleted?: boolean; inlineContent: { type: "TEXT" | "HTML"; byteContent?: Record<string, any>; textContent: Record<string, any>; }; }; metadata: { inlineAttributes?: Array<Record<string, any>>; }; };

export interface CxoneDocuments_DocumentParseConfig { conditionalContent?: { contentTags?: Array<string>; permissionAttributeNames?: Array<string>; cssClassName?: Array<string>; }; }

export class CxoneDocumentsService {
  constructor(private client: HttpClient) {}

  /**
   * Process documents
   * POST /eai-knowledge-hub-services/ingestion-service/v1/documents
   */
  public async createKnowledgeHubConfiguration(data: { clientToken: string; dataSourceId: string; knowledgeHubId: string; documents: string; documentParseConfig?: string; }, options?: RequestOptions): Promise<{ documentDetails?: Array<{ documentIdentifier?: string; status?: "SUBMITTED_SUCCESSFULLY" | "VALIDATION_ERROR" | "UNKNOWN_ERROR"; statusReason?: string; updatedAt?: string; }>; }> {
    const path = `/eai-knowledge-hub-services/ingestion-service/v1/documents`;
    return this.client.post<{ documentDetails?: Array<{ documentIdentifier?: string; status?: "SUBMITTED_SUCCESSFULLY" | "VALIDATION_ERROR" | "UNKNOWN_ERROR"; statusReason?: string; updatedAt?: string; }>; }>(path, data, options);
  }

  /**
   * New in 26.1 release - Get snapshot of ingested documents
   * POST /eai-knowledge-hub-services/ingestion-service/v1/{khId}/documents/snapshot
   */
  public async getDocumentSnapshot(khId: string, data: { dataSourceId: string; pageToken?: string; }, options?: RequestOptions): Promise<CxoneDocuments_DocumentSnapshotResponse> {
    const path = `/eai-knowledge-hub-services/ingestion-service/v1/${encodeURIComponent(String(khId))}/documents/snapshot`;
    return this.client.post<CxoneDocuments_DocumentSnapshotResponse>(path, data, options);
  }
}
