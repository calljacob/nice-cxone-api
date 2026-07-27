import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class BusinessdataBusinessdataService {
  constructor(private client: HttpClient) {}

  /**
   * Update business data for closed interactions
   * PUT /business-data-manager/v1/business-data/contact/{contactId}
   */
  public async updateBusinessDataFieldForClosedInteraction(contactId: string, data: Array<Record<string, any>>, options?: RequestOptions): Promise<void> {
    const path = `/business-data-manager/v1/business-data/contact/${encodeURIComponent(String(contactId))}`;
    return this.client.put<void>(path, data, options);
  }

  /**
   * For defined segment for the given acdContactId, replace/update the business data with the user provided business data.
   * PUT /business-data-manager/v1/business-data/contact/{contactId}/segment/{segmentId}
   */
  public async updateBusinessDataFieldAtSegmentLevelForClosedInteraction(contactId: string, segmentId: string, data: Array<Record<string, any>>, options?: RequestOptions): Promise<void> {
    const path = `/business-data-manager/v1/business-data/contact/${encodeURIComponent(String(contactId))}/segment/${encodeURIComponent(String(segmentId))}`;
    return this.client.put<void>(path, data, options);
  }
}
