import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export type WfmImportallotment_ImportUsersAllotmentRequest = {
  activityCodeName: string;
  allotmentType: "Days" | "Hours";
  allotmentByUserName: Record<string, number>;
};

export interface WfmImportallotment_ImportUsersAllotmentResponse {
  code?: string;
  details?: Record<string, any>;
}

export class WfmImportallotmentService {
  constructor(private client: HttpClient) {}

  /**
   * Import Users Allotment by Activity Code
   * PUT /timeoff-manager/allotments/import
   */
  public async putAllotments(
    data: WfmImportallotment_ImportUsersAllotmentRequest,
    options?: RequestOptions,
  ): Promise<WfmImportallotment_ImportUsersAllotmentResponse> {
    const path = `/timeoff-manager/allotments/import`;
    return this.client.put<WfmImportallotment_ImportUsersAllotmentResponse>(path, data, options);
  }
}
