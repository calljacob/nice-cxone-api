import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class AuthenticationUniversalapplicationService {
  constructor(private client: HttpClient) {}

  /**
   * Universal Application Landing Page.
   * GET /GALandingPage
   */
  public async redirectToGA(options?: RequestOptions): Promise<any> {
    const path = `/GALandingPage`;
    return this.client.get<any>(path, options);
  }

  /**
   * It will receive requests with auth code and exchange actual tokens from the global authentication service
   * GET /callback
   */
  public async getCallback(options?: RequestOptions & { query?: { code: string } }): Promise<any> {
    const path = `/callback`;
    return this.client.get<any>(path, options);
  }
}
