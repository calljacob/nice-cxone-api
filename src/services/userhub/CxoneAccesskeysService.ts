import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface CxoneAccesskeys_postAccessKeysResponse {
  resultSet?: {
    accessKeyId?: string;
    accessKeySecret?: string;
    userId?: string;
    tenantId?: string;
    agentId?: number;
    billingId?: number;
    isActive?: boolean;
  };
}

export interface CxoneAccesskeys_getAccessKeysResponse {
  totalRecords?: number;
  _links?: CxoneAccesskeys_getAccessKeysResponse__links;
  accessKeys?: Array<CxoneAccesskeys_getAccessKeysResponse_accessKeys>;
}

export interface CxoneAccesskeys_GetAccessKeyIDResponse {
  resultSet?: {
    accessKeySecret?: string;
    userId?: string;
    tenantId?: string;
    agentId?: number;
    billingId?: number;
    isActive?: boolean;
    lastUsedDate?: string;
  };
}

export interface CxoneAccesskeys_body {
  userId?: string;
  tenantId?: string;
}

export interface CxoneAccesskeys_body_1 {
  isActive?: boolean;
}

export interface CxoneAccesskeys_getAccessKeysResponse__links {
  self?: string;
  next?: string;
  previous?: string;
}

export interface CxoneAccesskeys_getAccessKeysResponse_accessKeys {
  accessKeyId?: string;
  userId?: string;
  tenantId?: string;
  agentId?: number;
  billingId?: number;
  isActive?: boolean;
  lastUsedDate?: string;
}

export class CxoneAccesskeysService {
  constructor(private client: HttpClient) {}

  /**
   * Returns a list of access keys
   * GET /access-key-management/v1/access-keys
   */
  public async returnsAListOfAccessKeys(
    options?: RequestOptions & { query?: { userId?: string; agentId?: number } },
  ): Promise<CxoneAccesskeys_getAccessKeysResponse> {
    const path = `/access-key-management/v1/access-keys`;
    return this.client.get<CxoneAccesskeys_getAccessKeysResponse>(path, options);
  }

  /**
   * Create an access key for a user
   * POST /access-key-management/v1/access-keys
   */
  public async createAnAccessKeyForAUser(
    data?: CxoneAccesskeys_body,
    options?: RequestOptions,
  ): Promise<CxoneAccesskeys_postAccessKeysResponse> {
    const path = `/access-key-management/v1/access-keys`;
    return this.client.post<CxoneAccesskeys_postAccessKeysResponse>(path, data, options);
  }

  /**
   * Updates an access key for a user
   * PATCH /access-key-management/v1/access-keys
   */
  public async updatesAnAccessKeyForAUser(
    data?: CxoneAccesskeys_body_1,
    options?: RequestOptions & {
      query?: { tenantId?: string; userId?: string; accessKeyId: string };
    },
  ): Promise<any> {
    const path = `/access-key-management/v1/access-keys`;
    return this.client.patch<any>(path, data, options);
  }

  /**
   * Returns an access key config
   * GET /access-key-management/v1/access-keys/{accessKeyId}
   */
  public async returnsAnAccessKeyConfig(
    accessKeyId: string,
    options?: RequestOptions,
  ): Promise<CxoneAccesskeys_GetAccessKeyIDResponse> {
    const path = `/access-key-management/v1/access-keys/${encodeURIComponent(String(accessKeyId))}`;
    return this.client.get<CxoneAccesskeys_GetAccessKeyIDResponse>(path, options);
  }

  /**
   * Deletes an access key
   * DELETE /access-key-management/v1/access-keys/{accessKeyId}
   */
  public async deletesAnAccessKey(accessKeyId: string, options?: RequestOptions): Promise<any> {
    const path = `/access-key-management/v1/access-keys/${encodeURIComponent(String(accessKeyId))}`;
    return this.client.delete<any>(path, options);
  }
}
