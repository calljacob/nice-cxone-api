import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface WfmExportsummary_TimeOffSummaryByActivityCodeNameResponse {
  totalRecords?: number;
  top?: number;
  skip?: number;
  timeOffUserSummaryList?: Array<{
    userName?: string;
    activityCodeName?: string;
    timeZone?: string;
    hireDateInUtc?: string;
    daysPerYear?: number;
    daysTaken?: number;
    scheduled?: number;
    remaining?: number;
    earned?: number;
    carriedOver?: string;
    accrualValueInDays?: number;
    accrualType?: string;
    hoursPerDay?: number;
    totalHours?: string;
    hoursTaken?: string;
    hoursScheduled?: string;
    hoursRemaining?: string;
    hoursEarned?: string;
    hoursCarriedOver?: string;
    accrualValueInHours?: string;
  }>;
}

export interface WfmExportsummary_TimeOffSummaryByActivityCodeNameErrorCodeResponse {
  code?: string;
  details?: string;
}

export class WfmExportsummaryService {
  constructor(private client: HttpClient) {}

  /**
   * Get Time Off Summary by Activity Code Name
   * GET /timeoff-manager/summary/{activityCodeName}
   */
  public async getSummary(
    activityCodeName: string,
    options?: RequestOptions & { query?: { top?: number; skip?: number } },
  ): Promise<WfmExportsummary_TimeOffSummaryByActivityCodeNameResponse> {
    const path = `/timeoff-manager/summary/${encodeURIComponent(String(activityCodeName))}`;
    return this.client.get<WfmExportsummary_TimeOffSummaryByActivityCodeNameResponse>(
      path,
      options,
    );
  }
}
