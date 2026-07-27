import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class RecordingInteractionsService {
  constructor(private client: HttpClient) {}

  /**
   * Mask voice and screen recording for privacy compliance
   * POST /interaction-recording-management-service/v1/interactions/mask
   */
  public async postInteractionMask(options?: RequestOptions & { query?: { userId: string; } }): Promise<any> {
    const path = `/interaction-recording-management-service/v1/interactions/mask`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Unmask voice and screen recording for privacy compliance
   * POST /interaction-recording-management-service/v1/interactions/unmask
   */
  public async postInteractionUnmask(options?: RequestOptions & { query?: { userId: string; } }): Promise<any> {
    const path = `/interaction-recording-management-service/v1/interactions/unmask`;
    return this.client.post<any>(path, undefined, options);
  }
}
