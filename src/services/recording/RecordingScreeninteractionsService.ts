import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class RecordingScreeninteractionsService {
  constructor(private client: HttpClient) {}

  /**
   * Start screen interaction recording
   * POST /interaction-recording-management-service/v1/interactions/start-screen-interaction-recording
   */
  public async startScreenrecord(options?: RequestOptions & { query?: { userId: string; recordingDuration: string; } }): Promise<{ description?: string; contactId?: string; interactionId?: string; httpStatus?: string; }> {
    const path = `/interaction-recording-management-service/v1/interactions/start-screen-interaction-recording`;
    return this.client.post<{ description?: string; contactId?: string; interactionId?: string; httpStatus?: string; }>(path, undefined, options);
  }

  /**
   * Stop screen interaction recording
   * POST /interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording
   */
  public async stopScreenRecording(options?: RequestOptions & { query?: { userId: string; contactId: number; } }): Promise<{ description?: string; contactId?: string; httpStatus?: string; }> {
    const path = `/interaction-recording-management-service/v1/interactions/stop-screen-interaction-recording`;
    return this.client.post<{ description?: string; contactId?: string; httpStatus?: string; }>(path, undefined, options);
  }
}
