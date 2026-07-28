import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class RecordingBusinessdataService {
  constructor(private client: HttpClient) {}

  /**
   * Allow Business data update during ongoing interaction.
   * POST /interaction-recording-management-service/v1/interactions/business-data-update
   */
  public async postInteractionRecordingManagementServiceV1InteractionsBusinessDataUpdate(
    data: Array<{ "business-data-key-name"?: string }>,
    options?: RequestOptions & { query?: { userId: string } },
  ): Promise<{
    contactId?: string;
    description?: string;
    segmentId?: string;
    interactionId?: string;
    httpStatus?: string;
  }> {
    const path = `/interaction-recording-management-service/v1/interactions/business-data-update`;
    return this.client.post<{
      contactId?: string;
      description?: string;
      segmentId?: string;
      interactionId?: string;
      httpStatus?: string;
    }>(path, data, options);
  }
}
