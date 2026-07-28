import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface DigitalVerificationtoken_ApiError {
  field?: string;
  message: string;
  parameters?: Record<string, any>;
  errorCode?: string;
}

export interface DigitalVerificationtoken_ApiErrorCollection {
  errors: Array<DigitalVerificationtoken_ApiError>;
  uid?: string;
}

export interface DigitalVerificationtoken_Brand {
  id: number;
  friendlyName: string;
  timezone: string;
  brandHash: string;
  tenantId?: string;
  businessUnitId?: number;
  acdClusterId?: string;
}

export interface DigitalVerificationtoken_User {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
}

export class DigitalVerificationtokenService {
  constructor(private client: HttpClient) {}

  /**
   * Authenticate redirect URL for one-time token
   * GET /one-time-token/authentication
   */
  public async getOneTimeToken(
    options?: RequestOptions & { query?: { redirectUrl: string; state: string } },
  ): Promise<any> {
    const path = `/one-time-token/authentication`;
    return this.client.get<any>(path, options);
  }

  /**
   * Verify one-time token and get CXone JWT authentication token
   * POST /one-time-token/verification
   */
  public async verifyOneTimeToken(
    data: {
      brandId: number;
      userId: number;
      token: string;
      purpose: "login" | "channel-integration" | "custom-component-login";
    },
    options?: RequestOptions,
  ): Promise<{
    brand: DigitalVerificationtoken_Brand;
    user: DigitalVerificationtoken_User;
    accessToken: string;
  }> {
    const path = `/one-time-token/verification`;
    return this.client.post<{
      brand: DigitalVerificationtoken_Brand;
      user: DigitalVerificationtoken_User;
      accessToken: string;
    }>(path, data, options);
  }
}
