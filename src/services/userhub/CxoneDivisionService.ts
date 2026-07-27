import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export type CxoneDivision_CreateDivisionRequest = { name: string; description?: string; parentDivisionId?: number; status: "ACTIVE" | "INACTIVE"; isDefault: boolean; divisionType?: string; billingCode?: number; };

export interface CxoneDivision_CreateDivisionResponse { divisionId?: number; }

export type CxoneDivision_DivisionResponse = { name?: string; divisionId?: number; description?: string; parentDivisionId?: number; status?: "ACTIVE" | "INACTIVE"; isDefault?: boolean; divisionType?: string; parentDivisionName?: string; billingCode?: number; level?: number; };

export type CxoneDivision_DivisionSearchRequest = { filter?: Record<string, Array<string>>; fields?: Array<string>; skip?: number; top?: number; operations?: Record<string, "LIKE" | "BETWEEN" | "NOT">; orderBy?: Record<string, "ASC" | "DESC">; };

export interface CxoneDivision_DivisionSearchResponse { totalRecords?: number; skip?: number; top?: number; division?: Array<CxoneDivision_DivisionResponse>; }

export interface CxoneDivision_DivisionIdentitiesResponse { totalRecords?: number; skip?: number; top?: number; divisions?: Array<CxoneDivision_DivisionResponse>; }

export interface CxoneDivision_BillingCodeResponse { billingCodes?: Array<number>; }

export type CxoneDivision_UpdateDivisionRequest = { divisionId?: number; name: string; description?: string; parentDivisionId?: number; status: "ACTIVE" | "INACTIVE"; isDefault: boolean; divisionType?: string; billingCode?: number; };

export interface CxoneDivision_UpdateDivisionResponse { success?: boolean; }

export interface CxoneDivision_UnauthorizedErrorResponse { timestamp?: string; status?: number; error?: string; path?: string; }

export interface CxoneDivision_ErrorResponse { code?: string; details?: string; hostname?: string; entityType?: string; errors?: Record<string, any>; }

export class CxoneDivisionService {
  constructor(private client: HttpClient) {}

  /**
   * Create division
   * POST /division-management/v1/division
   */
  public async postDivisionManagementV1Division(data: CxoneDivision_CreateDivisionRequest, options?: RequestOptions): Promise<CxoneDivision_CreateDivisionResponse> {
    const path = `/division-management/v1/division`;
    return this.client.post<CxoneDivision_CreateDivisionResponse>(path, data, options);
  }

  /**
   * Update division
   * PUT /division-management/v1/division
   */
  public async putDivisionManagementV1Division(data: CxoneDivision_UpdateDivisionRequest, options?: RequestOptions): Promise<CxoneDivision_UpdateDivisionResponse> {
    const path = `/division-management/v1/division`;
    return this.client.put<CxoneDivision_UpdateDivisionResponse>(path, data, options);
  }

  /**
   * Get division by ID
   * GET /division-management/v1/division/{divisionId}
   */
  public async getDivisionManagementV1DivisionDivisionId(divisionId: string, options?: RequestOptions): Promise<CxoneDivision_DivisionResponse> {
    const path = `/division-management/v1/division/${encodeURIComponent(String(divisionId))}`;
    return this.client.get<CxoneDivision_DivisionResponse>(path, options);
  }

  /**
   * Search divisions
   * POST /division-management/v1/division/search
   */
  public async postDivisionManagementV1DivisionSearch(data: CxoneDivision_DivisionSearchRequest, options?: RequestOptions): Promise<CxoneDivision_DivisionSearchResponse> {
    const path = `/division-management/v1/division/search`;
    return this.client.post<CxoneDivision_DivisionSearchResponse>(path, data, options);
  }

  /**
   * API search divisions identities by filter
   * POST /division-management/v1/division/identities
   */
  public async postDivisionManagementV1DivisionIdentities(data: CxoneDivision_DivisionSearchRequest, options?: RequestOptions): Promise<CxoneDivision_DivisionIdentitiesResponse> {
    const path = `/division-management/v1/division/identities`;
    return this.client.post<CxoneDivision_DivisionIdentitiesResponse>(path, data, options);
  }

  /**
   * Get All Billing Codes
   * GET /division-management/v1/division/{divisionId}/getAllBillingCodes
   */
  public async getDivisionManagementV1DivisionDivisionIdGetAllBillingCodes(divisionId: string, options?: RequestOptions): Promise<CxoneDivision_BillingCodeResponse> {
    const path = `/division-management/v1/division/${encodeURIComponent(String(divisionId))}/getAllBillingCodes`;
    return this.client.get<CxoneDivision_BillingCodeResponse>(path, options);
  }

  /**
   * Validate Billing Code
   * GET /division-management/v1/division/billingCode/{billingCode}/validate
   */
  public async getDivisionManagementV1DivisionBillingCodeBillingCodeValidate(billingCode: string, options?: RequestOptions): Promise<CxoneDivision_UpdateDivisionResponse> {
    const path = `/division-management/v1/division/billingCode/${encodeURIComponent(String(billingCode))}/validate`;
    return this.client.get<CxoneDivision_UpdateDivisionResponse>(path, options);
  }
}
