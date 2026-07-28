import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface WfmExportschedule_ExportScheduleRequest {
  startDate: string;
  endDate: string;
  userID: string;
}

export interface WfmExportschedule_ExportScheduleResponse {
  agentSchedules: Array<{ userId?: string; shifts?: Array<Record<string, any>> }>;
  start: string;
  end: string;
}

export class WfmExportscheduleService {
  constructor(private client: HttpClient) {}

  /**
   * Get agent’s schedules from CXone WFM
   * POST /schedules/export
   */
  public async exportScheduleAsList(
    data: WfmExportschedule_ExportScheduleRequest,
    options?: RequestOptions,
  ): Promise<WfmExportschedule_ExportScheduleResponse> {
    const path = `/schedules/export`;
    return this.client.post<WfmExportschedule_ExportScheduleResponse>(path, data, options);
  }
}
