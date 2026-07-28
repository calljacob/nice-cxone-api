import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AuthenticationGlobalauthentication_ERROR {
  error?: string;
  errorDescription?: string;
}

export type AuthenticationGlobalauthentication_oidc_discovery = {
  issuer?: "https://cxone.niceincontact.com" | "https://cxone-gov.niceincontact.com";
  authorization_endpoint?: string;
  token_endpoint?: string;
  token_endpoint_auth_methods_supported?: Array<"client_secret_basic">;
  token_endpoint_auth_signing_alg_values_supported?: Array<"RS256">;
  end_session_endpoint?: string;
  scopes_supported?: Array<"openid">;
  response_types_supported?: Array<"code">;
  subject_types_supported?: Array<"public">;
  id_token_signing_alg_values_supported?: Array<"RS256">;
  request_object_signing_alg_values_supported?: Array<"none">;
  display_values_supported?: Array<"page" | "popup">;
  claim_types_supported?: Array<"normal">;
};

export type AuthenticationGlobalauthentication_authenticateOIDCRequest = {
  tenantId?: string;
  resellerId?: string;
  scope: "openid";
  response_type: "code";
  client_id: string;
  redirect_uri: string;
  state?: string;
  nonce?: string;
  display?: "page" | "popup";
  prompt?: "none" | "login";
  max_age?: number;
  id_token_hint?: string;
  login_hint?: string;
  acr_values?: Array<string>;
  ui_locales?: Array<string>;
  code_challenge?: string;
  code_challenge_method?: "S256";
};

export interface AuthenticationGlobalauthentication_authenticateUXRequest {
  tenantFQDN: string;
  username?: string;
  state: string;
}

export interface AuthenticationGlobalauthentication_tokenAuthcodeRequest {
  client_id?: string;
  client_secret?: string;
  grant_type: "authorization_code";
  code: string;
  redirect_uri: string;
  code_verifier?: string;
}

export interface AuthenticationGlobalauthentication_tokenAccessKeyRequest {
  client_id?: string;
  client_secret?: string;
  grant_type: "password";
  username: string;
  password: string;
}

export interface AuthenticationGlobalauthentication_tokenRefreshRequest {
  client_id: string;
  grant_type: "refresh_token";
  refresh_token: string;
}

export interface AuthenticationGlobalauthentication_tokenExchangeRequest {
  grant_type: "token-exchange";
  subject_token: string;
  subject_token_type: "access_token";
}

export type AuthenticationGlobalauthentication_tokenImpersonationExchangeRequest = {
  grant_type:
    | "urn:ietf:params:oauth:grant-type:associated-user-token-exchange"
    | "urn:ietf:params:oauth:grant-type:role-impersonation-token-exchange"
    | "urn:ietf:params:oauth:grant-type:user-impersonation-token-exchange"
    | "urn:ietf:params:oauth:grant-type:impersonate-configure-token-exchange"
    | "urn:ietf:params:oauth:grant-type:impersonate-support-token-exchange";
  audience: string;
  subject_token: string;
  subject_token_type: "access_token";
};

export interface AuthenticationGlobalauthentication_logoutRequest {
  id_token_hint?: string;
  post_logout_redirect_uri?: string;
  state?: string;
  ui_locales?: Array<string>;
  yes?: string;
  no?: string;
}

export interface AuthenticationGlobalauthentication_GetAssociationsResponse {
  userId?: string;
  username?: string;
  tenantName?: string;
}

export class AuthenticationGlobalauthenticationService {
  constructor(private client: HttpClient) {}

  /**
   * Retrieve the configuration document for OpenID Connect.
   * GET /.well-known/openid-configuration
   */
  public async getOIDCConfig(
    options?: RequestOptions,
  ): Promise<AuthenticationGlobalauthentication_oidc_discovery> {
    const path = `/.well-known/openid-configuration`;
    return this.client.get<AuthenticationGlobalauthentication_oidc_discovery>(path, options);
  }

  /**
   * Retrieve the standard discovery document for a tenant.
   * GET /.well-known/cxone-configuration
   */
  public async getCXoneConfig(
    options?: RequestOptions & { query?: { tenantId: string } },
  ): Promise<{
    private: boolean;
    ui_endpoint: string;
    auth_endpoint: string;
    api_endpoint: string;
    area?: string;
    cluster?: string;
    domain: string;
    acdDomain?: string;
    uhDomain: string;
    tenantId?: string;
    globaldomain?: string;
  }> {
    const path = `/.well-known/cxone-configuration`;
    return this.client.get<{
      private: boolean;
      ui_endpoint: string;
      auth_endpoint: string;
      api_endpoint: string;
      area?: string;
      cluster?: string;
      domain: string;
      acdDomain?: string;
      uhDomain: string;
      tenantId?: string;
      globaldomain?: string;
    }>(path, options);
  }

  /**
   * Get certificate information.
   * GET /auth/jwks
   */
  public async getAuthJwks(options?: RequestOptions): Promise<{
    keys: Array<{ kty: string; use?: "sig"; alg?: string; kid?: string; n?: string; e?: string }>;
  }> {
    const path = `/auth/jwks`;
    return this.client.get<{
      keys: Array<{ kty: string; use?: "sig"; alg?: string; kid?: string; n?: string; e?: string }>;
    }>(path, options);
  }

  /**
   * Start a user authorization process.
   * GET /auth/authorize
   */
  public async getAuthAuthorize(
    options?: RequestOptions & {
      query?: {
        tenantId?: string;
        resellerId?: string;
        scope?: Array<"openid">;
        response_type?: "code";
        client_id?: string;
        redirect_uri?: string;
        state?: string;
        nonce?: string;
        display?: "page" | "popup";
        prompt?: "none" | "login";
        max_age?: number;
        id_token_hint?: string;
        login_hint?: string;
        acr_values?: Array<string>;
        ui_locales?: Array<string>;
        code_challenge?: string;
        code_challenge_method?: "S256";
        code?: string;
      };
    },
  ): Promise<string> {
    const path = `/auth/authorize`;
    return this.client.get<string>(path, options);
  }

  /**
   * Start or continue a user authorization process.
   * POST /auth/authorize
   */
  public async authAuthorize(
    data?:
      | AuthenticationGlobalauthentication_authenticateOIDCRequest
      | AuthenticationGlobalauthentication_authenticateUXRequest,
    options?: RequestOptions,
  ): Promise<string> {
    const path = `/auth/authorize`;
    return this.client.post<string>(path, data, options);
  }

  /**
   * Retrieve tokens associated with authentication.
   * POST /auth/token
   */
  public async getToken(
    data?:
      | AuthenticationGlobalauthentication_tokenAuthcodeRequest
      | AuthenticationGlobalauthentication_tokenAccessKeyRequest
      | AuthenticationGlobalauthentication_tokenRefreshRequest
      | AuthenticationGlobalauthentication_tokenExchangeRequest
      | AuthenticationGlobalauthentication_tokenImpersonationExchangeRequest,
    options?: RequestOptions,
  ): Promise<{
    access_token: string;
    token_type: string;
    issued_token_type?: string;
    refresh_token: string;
    expires_in: number;
    id_token: string;
  }> {
    const path = `/auth/token`;
    return this.client.post<{
      access_token: string;
      token_type: string;
      issued_token_type?: string;
      refresh_token: string;
      expires_in: number;
      id_token: string;
    }>(path, data, options);
  }

  /**
   * Request a logout of the CXone identity provider.
   * GET /auth/authorize/logout
   */
  public async getAuthAuthorizeLogout(
    options?: RequestOptions & {
      query?: {
        id_token_hint?: string;
        post_logout_redirect_uri?: string;
        state?: string;
        ui_locales?: Array<string>;
      };
    },
  ): Promise<string> {
    const path = `/auth/authorize/logout`;
    return this.client.get<string>(path, options);
  }

  /**
   * Request a logout of the CXone identity provider.
   * POST /auth/authorize/logout
   */
  public async postAuthAuthorizeLogout(
    data: AuthenticationGlobalauthentication_logoutRequest,
    options?: RequestOptions,
  ): Promise<string> {
    const path = `/auth/authorize/logout`;
    return this.client.post<string>(path, data, options);
  }

  /**
   * Get basic information about an authenticated user.
   * GET /auth/userinfo
   */
  public async getAuthUserinfo(options?: RequestOptions): Promise<{
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    email?: string;
  }> {
    const path = `/auth/userinfo`;
    return this.client.get<{
      sub?: string;
      name?: string;
      given_name?: string;
      family_name?: string;
      email?: string;
    }>(path, options);
  }

  /**
   * Get basic information about an authenticated user.
   * POST /auth/userinfo
   */
  public async postAuthUserinfo(options?: RequestOptions): Promise<{
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    email?: string;
  }> {
    const path = `/auth/userinfo`;
    return this.client.post<{
      sub?: string;
      name?: string;
      given_name?: string;
      family_name?: string;
      email?: string;
    }>(path, undefined, options);
  }

  /**
   * get associated/equivalent users to owner of access token
   * GET /account-access/v1/associations
   */
  public async getAccountAccessAssociations(
    options?: RequestOptions,
  ): Promise<Array<AuthenticationGlobalauthentication_GetAssociationsResponse>> {
    const path = `/account-access/v1/associations`;
    return this.client.get<Array<AuthenticationGlobalauthentication_GetAssociationsResponse>>(
      path,
      options,
    );
  }
}
