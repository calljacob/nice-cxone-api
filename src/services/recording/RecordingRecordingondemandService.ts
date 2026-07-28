import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class RecordingRecordingondemandService {
  constructor(private client: HttpClient) {}

  /**
   * Start recording on demand
   * POST /interaction-recording-management-service/v1/interactions/start-recording-on-demand
   */
  public async stopRecord(
    options?: RequestOptions & {
      query?: { userId: string; mediaType?: "voice" | "voiceAndScreen" };
    },
  ): Promise<{ description?: string; contactId?: string; httpStatus?: string }> {
    const path = `/interaction-recording-management-service/v1/interactions/start-recording-on-demand`;
    return this.client.post<{ description?: string; contactId?: string; httpStatus?: string }>(
      path,
      undefined,
      options,
    );
  }

  /**
   * Stop recording on demand
   * POST /interaction-recording-management-service/v1/interactions/stop-recording-on-demand
   */
  public async releaseRecording(
    options?: RequestOptions & { query?: { userId: string } },
  ): Promise<{ description?: string; contactId?: string; httpStatus?: string }> {
    const path = `/interaction-recording-management-service/v1/interactions/stop-recording-on-demand`;
    return this.client.post<{ description?: string; contactId?: string; httpStatus?: string }>(
      path,
      undefined,
      options,
    );
  }

  /**
   * Disable the option to record the call
   * POST /interaction-recording-management-service/v1/interactions/do-not-record
   */
  public async doNotRecord(
    options?: RequestOptions & { query?: { userId: string } },
  ): Promise<{ description?: string; contactId?: string; httpStatus?: string }> {
    const path = `/interaction-recording-management-service/v1/interactions/do-not-record`;
    return this.client.post<{ description?: string; contactId?: string; httpStatus?: string }>(
      path,
      undefined,
      options,
    );
  }
}
