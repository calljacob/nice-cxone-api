import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AuthenticationIntegrations_ERROR {
  error?: string;
  errorDescription?: string;
}

export type AuthenticationIntegrations_ID_PARAM = string;

export interface AuthenticationIntegrations_ID {
  id?: string;
}

export interface AuthenticationIntegrations_NAME {
  name?: string;
}

export interface AuthenticationIntegrations_DESCRIPTION {
  description?: string;
}

export type AuthenticationIntegrations_TYPE = { type?: "confidential" | "public" | "backend" };

export type AuthenticationIntegrations_TENANCY = { tenancy?: "single" | "all" };

export interface AuthenticationIntegrations_REDIRECTS {
  redirects?: Array<string>;
}

export interface AuthenticationIntegrations_ORIGINS {
  origins?: Array<string>;
}

export interface AuthenticationIntegrations_LOGOUTS {
  logouts?: Array<string>;
}

export interface AuthenticationIntegrations_CONTACTS {
  contacts?: Array<string>;
}

export type AuthenticationIntegrations_AUTHMETHOD = {
  authMethod?: "client_secret_post" | "client_secret_basic";
};

export interface AuthenticationIntegrations_JWKSENDPOINT {
  jwksEndpoint?: string;
}

export interface AuthenticationIntegrations_SCOPE {
  scope?: string;
}

export interface AuthenticationIntegrations_ISENABLED {
  isEnabled?: boolean;
}

export interface AuthenticationIntegrations_CREATEDBY {
  createdBy?: string;
}

export interface AuthenticationIntegrations_CREATEDTIME {
  createdTime?: string;
}

export interface AuthenticationIntegrations_LASTMODIFIEDBY {
  lastModifiedBy?: string;
}

export interface AuthenticationIntegrations_LASTMODIFIEDTIME {
  lastModifiedTime?: string;
}

export interface AuthenticationIntegrations_LASTUSEDTIME {
  lastModifiedTime?: string;
}

export interface AuthenticationIntegrations_SCHEDULEDDELETIONTIME {
  scheduledDeletionTime?: string;
}

export type AuthenticationIntegrations_CreateApplicationV1 =
  | AuthenticationIntegrations_CreateApplicationV1Full
  | AuthenticationIntegrations_CreateApplicationV1Existing;

export type AuthenticationIntegrations_CreateApplicationV1Existing = AuthenticationIntegrations_ID &
  AuthenticationIntegrations_SECRET;

export type AuthenticationIntegrations_CreateApplicationV1Full = AuthenticationIntegrations_NAME &
  AuthenticationIntegrations_DESCRIPTION &
  AuthenticationIntegrations_CONTACTS &
  AuthenticationIntegrations_TYPE &
  AuthenticationIntegrations_TENANCY &
  AuthenticationIntegrations_REDIRECTS &
  AuthenticationIntegrations_ORIGINS &
  AuthenticationIntegrations_LOGOUTS &
  AuthenticationIntegrations_AUTHMETHOD &
  AuthenticationIntegrations_JWKSENDPOINT &
  AuthenticationIntegrations_SCOPE;

export type AuthenticationIntegrations_ListApplicationV1 =
  AuthenticationIntegrations_ListOfApplicationV1;

export interface AuthenticationIntegrations_ListOfApplicationV1 {
  applications?: Array<AuthenticationIntegrations_GetApplicationV1>;
}

export type AuthenticationIntegrations_GetApplicationV1 =
  AuthenticationIntegrations_GetApplicationBaseV1;

export type AuthenticationIntegrations_GetCreatedApplicationV1 =
  AuthenticationIntegrations_GetApplicationBaseV1 & AuthenticationIntegrations_SECRET;

export interface AuthenticationIntegrations_SECRET {
  secret?: string;
}

export type AuthenticationIntegrations_GetApplicationBaseV1 = AuthenticationIntegrations_ID &
  AuthenticationIntegrations_NAME &
  AuthenticationIntegrations_DESCRIPTION &
  AuthenticationIntegrations_CONTACTS &
  AuthenticationIntegrations_TYPE &
  AuthenticationIntegrations_TENANCY &
  AuthenticationIntegrations_REDIRECTS &
  AuthenticationIntegrations_ORIGINS &
  AuthenticationIntegrations_LOGOUTS &
  AuthenticationIntegrations_AUTHMETHOD &
  AuthenticationIntegrations_JWKSENDPOINT &
  AuthenticationIntegrations_SCOPE &
  AuthenticationIntegrations_ISENABLED &
  AuthenticationIntegrations_CREATEDBY &
  AuthenticationIntegrations_CREATEDTIME &
  AuthenticationIntegrations_LASTMODIFIEDBY &
  AuthenticationIntegrations_LASTMODIFIEDTIME &
  AuthenticationIntegrations_LASTUSEDTIME &
  AuthenticationIntegrations_SCHEDULEDDELETIONTIME;

export type AuthenticationIntegrations_PatchApplicationV1 =
  AuthenticationIntegrations_PatchApplicationBaseV1;

export type AuthenticationIntegrations_PatchApplicationBaseV1 = AuthenticationIntegrations_ID &
  AuthenticationIntegrations_NAME &
  AuthenticationIntegrations_DESCRIPTION &
  AuthenticationIntegrations_CONTACTS &
  AuthenticationIntegrations_TYPE &
  AuthenticationIntegrations_TENANCY &
  AuthenticationIntegrations_REDIRECTS &
  AuthenticationIntegrations_ORIGINS &
  AuthenticationIntegrations_LOGOUTS &
  AuthenticationIntegrations_AUTHMETHOD &
  AuthenticationIntegrations_JWKSENDPOINT &
  AuthenticationIntegrations_SCOPE &
  AuthenticationIntegrations_ISENABLED &
  AuthenticationIntegrations_CREATEDBY &
  AuthenticationIntegrations_CREATEDTIME &
  AuthenticationIntegrations_LASTMODIFIEDBY &
  AuthenticationIntegrations_LASTMODIFIEDTIME &
  AuthenticationIntegrations_LASTUSEDTIME &
  AuthenticationIntegrations_SCHEDULEDDELETIONTIME;

export class AuthenticationIntegrationsService {
  constructor(private client: HttpClient) {}

  /**
   * Return all applications.
   * GET /applications
   */
  public async listApplication(
    options?: RequestOptions,
  ): Promise<AuthenticationIntegrations_ListApplicationV1> {
    const path = `/applications`;
    return this.client.get<AuthenticationIntegrations_ListApplicationV1>(path, options);
  }

  /**
   * Create a new application.
   * POST /applications
   */
  public async createApplication(
    data?: AuthenticationIntegrations_CreateApplicationV1,
    options?: RequestOptions,
  ): Promise<AuthenticationIntegrations_GetCreatedApplicationV1> {
    const path = `/applications`;
    return this.client.post<AuthenticationIntegrations_GetCreatedApplicationV1>(
      path,
      data,
      options,
    );
  }

  /**
   * Return a single application based on its identifier.
   * GET /applications/{applicationId}
   */
  public async viewApplication(
    applicationId: AuthenticationIntegrations_ID_PARAM,
    options?: RequestOptions,
  ): Promise<AuthenticationIntegrations_GetApplicationV1> {
    const path = `/applications/${encodeURIComponent(String(applicationId))}`;
    return this.client.get<AuthenticationIntegrations_GetApplicationV1>(path, options);
  }

  /**
   * Schedule the deletion of an existing application.
   * DELETE /applications/{applicationId}
   */
  public async deleteApplication(
    applicationId: AuthenticationIntegrations_ID_PARAM,
    options?: RequestOptions,
  ): Promise<AuthenticationIntegrations_GetApplicationV1> {
    const path = `/applications/${encodeURIComponent(String(applicationId))}`;
    return this.client.delete<AuthenticationIntegrations_GetApplicationV1>(path, options);
  }

  /**
   * Edit an existing application.
   * PATCH /applications/{applicationId}
   */
  public async patchApplication(
    applicationId: AuthenticationIntegrations_ID_PARAM,
    data?: AuthenticationIntegrations_PatchApplicationV1,
    options?: RequestOptions,
  ): Promise<AuthenticationIntegrations_GetApplicationV1> {
    const path = `/applications/${encodeURIComponent(String(applicationId))}`;
    return this.client.patch<AuthenticationIntegrations_GetApplicationV1>(path, data, options);
  }

  /**
   * Enable an existing application.
   * POST /applications/{applicationId}-enable
   */
  public async enableApplication(
    applicationId: AuthenticationIntegrations_ID_PARAM,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/applications/${encodeURIComponent(String(applicationId))}-enable`;
    return this.client.post<void>(path, undefined, options);
  }

  /**
   * Disable an existing application.
   * POST /applications/{applicationId}-disable
   */
  public async disableApplication(
    applicationId: AuthenticationIntegrations_ID_PARAM,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/applications/${encodeURIComponent(String(applicationId))}-disable`;
    return this.client.post<void>(path, undefined, options);
  }
}
