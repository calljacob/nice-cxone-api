import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface CxoneScim_UserIdentityResponseV1 { user?: CxoneScim_UserIdentityV1; }

export interface CxoneScim_UserIdentityV1 { id?: string; fullName?: string; }

export interface CxoneScim_UserIdentityListResponseV2 { totalRecords?: number; users?: Array<CxoneScim_UserIdentityV2>; _links?: CxoneScim_Links; }

export type CxoneScim_UserIdentityV2 = { id?: string; displayName?: string; status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED"; };

export interface CxoneScim_Links { self?: string; next?: string; previous?: string; }

export interface CxoneScim_AssignAuthenticatorRequest { authenticatorId?: string; }

export interface CxoneScim_BulkEntityUserAssignResponse { success?: boolean; message?: string; }

export interface CxoneScim_ScimUserSearchResponse { schemas?: Array<string>; totalResults?: number; Resources?: Array<CxoneScim_UserSearchItemsResponse>; }

export interface CxoneScim_UserSearchItemsResponse { schemas?: Array<string>; id?: string; userName?: string; name?: CxoneScim_NameAttribute; emails?: Array<CxoneScim_EmailAttribute>; displayName?: string; locale?: string; externalId?: string; active?: boolean; timeZone?: string; meta?: { resourceType?: string; }; "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: CxoneScim_UserExtension; roles?: Array<CxoneScim_ScimRole>; userType?: string; }

export interface CxoneScim_ScimResponse { schemas?: Array<string>; id?: string; userName?: string; name?: CxoneScim_NameAttribute; emails?: Array<CxoneScim_EmailAttribute>; displayName?: string; locale?: string; externalId?: string; active?: boolean; meta?: { resourceType?: string; }; userType?: string; "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: CxoneScim_UserExtension; roles?: Array<CxoneScim_ScimRole>; phoneNumbers?: Array<{ type?: string; value?: string; primary?: boolean; }>; timeZone?: string; }

export interface CxoneScim_SchemaResponse { schemas?: Array<string>; totalResults?: number; startIndex?: number; itemsPerPage?: number; Resources?: Array<CxoneScim_SchemaAttribute>; }

export interface CxoneScim_ScimRequestUpdate { id: string; userName: string; name: CxoneScim_NameAttribute; emails: Array<CxoneScim_EmailAttribute>; displayName?: string; active: boolean; userType?: string; "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: CxoneScim_UserExtension; roles?: Array<CxoneScim_ScimRoleRequest>; phoneNumbers?: Array<{ type?: string; value: string; primary?: boolean; }>; timezone?: string; }

export interface CxoneScim_ScimRequestPatchUpdate { schemas: Array<string>; Operations: Array<{ path: string; value: string; }>; }

export interface CxoneScim_ScimRequestCreate { userName: string; name: CxoneScim_NameAttribute; emails: Array<CxoneScim_EmailAttribute>; "urn:ietf:params:scim:schemas:extension:nice:2.0:User"?: CxoneScim_UserExtension; roles?: Array<CxoneScim_ScimRoleRequest>; displayName?: string; active?: boolean; userType?: string; timezone?: string; phoneNumbers?: Array<{ type?: string; value: string; primary?: boolean; }>; }

export interface CxoneScim_SchemaAttribute { schemas?: Array<string>; meta?: { resourceType?: string; location?: string; }; id?: string; name?: string; description?: string; attributes?: Array<CxoneScim_Attribute>; }

export interface CxoneScim_ScimRole { display?: string; value?: string; primary?: boolean; }

export interface CxoneScim_ScimRoleRequest { display?: string; value?: string; }

export interface CxoneScim_ScimTeam { display?: string; value?: string; }

export interface CxoneScim_ScimLoginAuthenticator { display?: string; value?: string; }

export interface CxoneScim_NameAttribute { givenName: string; familyName: string; middleName?: string; }

export interface CxoneScim_UserExtension { team?: CxoneScim_ScimTeam; loginAuthenticator?: CxoneScim_ScimLoginAuthenticator; }

export interface CxoneScim_EmailAttribute { type?: string; value: string; primary?: boolean; }

export interface CxoneScim_Attribute { name?: string; type?: string; multiValued?: boolean; description?: string; required?: boolean; caseExact?: boolean; mutability?: string; returned?: string; uniqueness?: string; }

export class CxoneScimService {
  constructor(private client: HttpClient) {}

  /**
   * API to search user based on user name
   * GET /scim/v2/Users
   */
  public async searchUser(options?: RequestOptions & { query?: { filter: string; } }): Promise<CxoneScim_ScimUserSearchResponse> {
    const path = `/scim/v2/Users`;
    return this.client.get<CxoneScim_ScimUserSearchResponse>(path, options);
  }

  /**
   * API Create SCIM User
   * POST /scim/v2/Users
   */
  public async registerScimUser(data: CxoneScim_ScimRequestCreate, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/scim/v2/Users`;
    return this.client.post<CxoneScim_ScimResponse>(path, data, options);
  }

  /**
   * API to get SCIM User By ID
   * GET /scim/v2/Users/{userId}
   */
  public async getScimUserById(userId: any, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/scim/v2/Users/${encodeURIComponent(String(userId))}`;
    return this.client.get<CxoneScim_ScimResponse>(path, options);
  }

  /**
   * API Update SCIM User
   * PUT /scim/v2/Users/{userId}
   */
  public async updateScimUser(userId: any, data: CxoneScim_ScimRequestUpdate, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/scim/v2/Users/${encodeURIComponent(String(userId))}`;
    return this.client.put<CxoneScim_ScimResponse>(path, data, options);
  }

  /**
   * API for Partial Updates SCIM User
   * PATCH /scim/v2/Users/{userId}
   */
  public async updateScimUserPatch(userId: any, data: CxoneScim_ScimRequestPatchUpdate, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/scim/v2/Users/${encodeURIComponent(String(userId))}`;
    return this.client.patch<CxoneScim_ScimResponse>(path, data, options);
  }

  /**
   * Schema for User Entity
   * GET /scim/v2/Schemas
   */
  public async getSchemas(options?: RequestOptions): Promise<CxoneScim_SchemaResponse> {
    const path = `/scim/v2/Schemas`;
    return this.client.get<CxoneScim_SchemaResponse>(path, options);
  }

  /**
   * API to search user based on user name with basic auth
   * GET /basic-auth/scim/v2/Users
   */
  public async getBasicAuthUsers(options?: RequestOptions & { query?: { filter: string; } }): Promise<CxoneScim_ScimUserSearchResponse> {
    const path = `/basic-auth/scim/v2/Users`;
    return this.client.get<CxoneScim_ScimUserSearchResponse>(path, options);
  }

  /**
   * API Create SCIM User with basic auth
   * POST /basic-auth/scim/v2/Users
   */
  public async postBasicAuthUsers(data: CxoneScim_ScimRequestCreate, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/basic-auth/scim/v2/Users`;
    return this.client.post<CxoneScim_ScimResponse>(path, data, options);
  }

  /**
   * API to get SCIM User By ID with basic auth
   * GET /basic-auth/scim/v2/Users/{userId}
   */
  public async getBasicauthScimUserbyID(userId: any, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/basic-auth/scim/v2/Users/${encodeURIComponent(String(userId))}`;
    return this.client.get<CxoneScim_ScimResponse>(path, options);
  }

  /**
   * API Update SCIM User with basic auth
   * PUT /basic-auth/scim/v2/Users/{userId}
   */
  public async putBasicauthScimUserbyID(userId: any, data: CxoneScim_ScimRequestUpdate, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/basic-auth/scim/v2/Users/${encodeURIComponent(String(userId))}`;
    return this.client.put<CxoneScim_ScimResponse>(path, data, options);
  }

  /**
   * API for Partial Updates SCIM User with basic auth
   * PATCH /basic-auth/scim/v2/Users/{userId}
   */
  public async patchBasicAuthScimUserbyID(userId: any, data: CxoneScim_ScimRequestPatchUpdate, options?: RequestOptions): Promise<CxoneScim_ScimResponse> {
    const path = `/basic-auth/scim/v2/Users/${encodeURIComponent(String(userId))}`;
    return this.client.patch<CxoneScim_ScimResponse>(path, data, options);
  }

  /**
   * Schema for User Entity with basic auth
   * GET /basic-auth/scim/v2/Schemas
   */
  public async getBasicAuthSchemas(options?: RequestOptions): Promise<CxoneScim_SchemaResponse> {
    const path = `/basic-auth/scim/v2/Schemas`;
    return this.client.get<CxoneScim_SchemaResponse>(path, options);
  }
}
