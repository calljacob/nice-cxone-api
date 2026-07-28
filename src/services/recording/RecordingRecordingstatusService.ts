import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class RecordingRecordingstatusService {
  constructor(private client: HttpClient) {}

  /**
   * Get recording status
   * GET /interaction-recording-management-service/v1/interactions/get-recording-status
   */
  public async getRecordingStatus(
    options?: RequestOptions & { query?: { userId: string } },
  ): Promise<{
    contactId?: string;
    segmentId?: string;
    interactionId?: string;
    statusReason?:
      | "Policy"
      | "Hold"
      | "Mask"
      | "RecordOnDemand"
      | "BusinessData"
      | "StopOnDemand"
      | "CustomerDisconsent";
    recordingStatusToAgent?:
      | "Recording"
      | "Stopped"
      | "RecordingFailure"
      | "NoRecording"
      | "PoorRecordingQuality";
    recordingStatusFromAgent?: "Recording" | "Stopped" | "RecordingFailure" | "NoRecording";
  }> {
    const path = `/interaction-recording-management-service/v1/interactions/get-recording-status`;
    return this.client.get<{
      contactId?: string;
      segmentId?: string;
      interactionId?: string;
      statusReason?:
        | "Policy"
        | "Hold"
        | "Mask"
        | "RecordOnDemand"
        | "BusinessData"
        | "StopOnDemand"
        | "CustomerDisconsent";
      recordingStatusToAgent?:
        | "Recording"
        | "Stopped"
        | "RecordingFailure"
        | "NoRecording"
        | "PoorRecordingQuality";
      recordingStatusFromAgent?: "Recording" | "Stopped" | "RecordingFailure" | "NoRecording";
    }>(path, options);
  }
}
