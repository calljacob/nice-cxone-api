import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export type PrivacyGdpr_GdprErasureRequest = {
  subjectIdentifier: string;
  subjectIdentifierType: "PHONENO" | "EMAIL" | "USER";
};

export type PrivacyGdpr_GdprErasureRequestAdmin = {
  tenantId?: string;
  subjectIdentifier: string;
  subjectIdentifierType: "PHONENO" | "EMAIL" | "USER";
};

export interface PrivacyGdpr_GdprErasureRequestResponse {
  requestId?: string;
}

export interface PrivacyGdpr_GdprErasureRequestResponseUnauthorized {
  message?: string;
}

export interface PrivacyGdpr_GdprErasureRequestResponseError {
  code?: string;
  details?: string;
  hostName?: string;
  entityType?: string;
  errors?: Record<string, any>;
}

export class PrivacyGdprService {
  constructor(private client: HttpClient) {}

  /**
   * create GDPR Erasure Request
   * POST /privacy/v1/erasure
   */
  public async createGdprErasureRequest(
    data: PrivacyGdpr_GdprErasureRequest | PrivacyGdpr_GdprErasureRequestAdmin,
    options?: RequestOptions,
  ): Promise<PrivacyGdpr_GdprErasureRequestResponse> {
    const path = `/privacy/v1/erasure`;
    return this.client.post<PrivacyGdpr_GdprErasureRequestResponse>(path, data, options);
  }
}
