import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface CxoneAuthorizationmanagement_Page { pageSize?: number; pageNo?: number; totalRecords?: number; }

export type CxoneAuthorizationmanagement_SearchCritera = { filter?: Record<string, Array<string>>; operations?: Record<string, "LIKE" | "BETWEEN" | "NOT">; page?: CxoneAuthorizationmanagement_Page; metrices?: CxoneAuthorizationmanagement_Metrices; orderBy?: Record<string, "ASC" | "DESC">; };

export interface CxoneAuthorizationmanagement_Metrices { columns?: Array<string>; }

export interface CxoneAuthorizationmanagement_RoleSearchResponseV1 { roles?: Array<CxoneAuthorizationmanagement_RoleV1>; }

export type CxoneAuthorizationmanagement_RoleV1 = { roleId?: string; roleName?: string; permissions?: Array<CxoneAuthorizationmanagement_Permission>; applications?: Array<CxoneAuthorizationmanagement_Application>; displayName?: string; sequence?: number; description?: string; modifiable?: number; internal?: number; status?: "ACTIVE" | "INACTIVE" | "DELETED" | "DRAFT"; lastModifiedTime?: string; parentAccess?: boolean; loginAuthenticatorId?: string; };

export interface CxoneAuthorizationmanagement_Permission { permission?: string; }

export interface CxoneAuthorizationmanagement_Privilege { privilegeId?: string; actions?: Array<string>; }

export interface CxoneAuthorizationmanagement_Application { applicationId?: string; privileges?: Array<CxoneAuthorizationmanagement_Privilege>; features?: Array<CxoneAuthorizationmanagement_Feature>; }

export interface CxoneAuthorizationmanagement_Feature { featureId?: string; privileges?: Array<CxoneAuthorizationmanagement_Privilege>; }

export class CxoneAuthorizationmanagementService {
  constructor(private client: HttpClient) {}

  /**
   * Get role details as per given filter and metrices
   * POST /authorization/v1/roles/search
   */
  public async searchRole(data?: CxoneAuthorizationmanagement_SearchCritera, options?: RequestOptions): Promise<CxoneAuthorizationmanagement_RoleSearchResponseV1> {
    const path = `/authorization/v1/roles/search`;
    return this.client.post<CxoneAuthorizationmanagement_RoleSearchResponseV1>(path, data, options);
  }
}
