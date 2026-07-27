import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export type CxoneCorrelationmanagement_CreateCorrelationRequest = { correlationId: string; entity: string; domain: string; entityId: string; entityName: string; version?: number; isPrimary: boolean; status?: "ACTIVE" | "INACTIVE" | "PENDING"; syncDone?: boolean; };

export interface CxoneCorrelationmanagement_CorrelationResponse { correlationId?: string; entity?: string; domain?: string; entityId?: string; entityName?: string; version?: number; isPrimary?: boolean; status?: string; syncDone?: boolean; createdAt?: string; updatedAt?: string; }

export type CxoneCorrelationmanagement_UpdateCorrelationRequest = { version?: number; status?: "ACTIVE" | "INACTIVE" | "PENDING"; syncDone?: boolean; entityName?: string; };

export interface CxoneCorrelationmanagement_UpdateCorrelationResponse { success?: boolean; message?: string; }

export type CxoneCorrelationmanagement_SearchCorrelationRequest = { correlationId?: string; entityType?: string; domain?: string; entityId?: string; status?: "ACTIVE" | "INACTIVE" | "PENDING"; tenantId?: string; page?: number; pageSize?: number; };

export interface CxoneCorrelationmanagement_SearchCorrelationResponse { totalRecords?: number; page?: number; pageSize?: number; correlations?: Array<CxoneCorrelationmanagement_CorrelationResponse>; }

export interface CxoneCorrelationmanagement_UnauthorizedErrorResponse { timestamp?: string; status?: number; error?: string; path?: string; }

export interface CxoneCorrelationmanagement_ErrorResponse { code?: string; details?: string; hostname?: string; entityType?: string; errors?: Record<string, any>; }

export class CxoneCorrelationmanagementService {
  constructor(private client: HttpClient) {}

  /**
   * Create correlation
   * POST /correlation-manager/v1/correlations
   */
  public async createCorrelation(data: CxoneCorrelationmanagement_CreateCorrelationRequest, options?: RequestOptions): Promise<CxoneCorrelationmanagement_CorrelationResponse> {
    const path = `/correlation-manager/v1/correlations`;
    return this.client.post<CxoneCorrelationmanagement_CorrelationResponse>(path, data, options);
  }

  /**
   * Update correlation
   * PUT /correlation-manager/v1/correlations/{correlationId}/{entityId}
   */
  public async updateCorrelation(correlationId: string, entityId: string, data: CxoneCorrelationmanagement_UpdateCorrelationRequest, options?: RequestOptions): Promise<CxoneCorrelationmanagement_UpdateCorrelationResponse> {
    const path = `/correlation-manager/v1/correlations/${encodeURIComponent(String(correlationId))}/${encodeURIComponent(String(entityId))}`;
    return this.client.put<CxoneCorrelationmanagement_UpdateCorrelationResponse>(path, data, options);
  }

  /**
   * Search correlations
   * POST /correlation-manager/v1/correlations/search
   */
  public async searchCorrelations(data: CxoneCorrelationmanagement_SearchCorrelationRequest, options?: RequestOptions): Promise<CxoneCorrelationmanagement_SearchCorrelationResponse> {
    const path = `/correlation-manager/v1/correlations/search`;
    return this.client.post<CxoneCorrelationmanagement_SearchCorrelationResponse>(path, data, options);
  }
}
