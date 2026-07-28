import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface ReportingReportingDl_ActivityAuditResult {
  application: string;
  entity: string;
  activity: string;
  eventTime: string;
  eventId: string;
  triggeredBy: string;
  instance: string;
  outcome: string;
  comments: string;
}

export interface ReportingReportingDl_Links {
  self: string;
  next?: string;
}

export interface ReportingReportingDl_ResponseBaseOfActivityAuditResult {
  links: ReportingReportingDl_Links;
  values: Array<ReportingReportingDl_ActivityAuditResult>;
}

export interface ReportingReportingDl_ErrorResponse {
  Message?: string;
}

export class ReportingReportingDlService {
  constructor(private client: HttpClient) {}

  /**
   * New in 26.3: Retrieve activity audit events
   * GET /activity/audit
   */
  public async getActivityAudit(
    options?: RequestOptions & {
      query?: { From?: string; To?: string; Top?: number; Ref?: string };
    },
  ): Promise<ReportingReportingDl_ResponseBaseOfActivityAuditResult> {
    const path = `/activity/audit`;
    return this.client.get<ReportingReportingDl_ResponseBaseOfActivityAuditResult>(path, options);
  }
}
