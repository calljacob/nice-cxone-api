import { HttpClient } from "../../http.js";
import { ReportingReportingService } from "./ReportingReportingService.js";
import { ReportingReportingDlService } from "./ReportingReportingDlService.js";

export * from "./ReportingReportingService.js";
export * from "./ReportingReportingDlService.js";

export class ReportingDomain {
  public readonly reporting: ReportingReportingService;
  public readonly reportingDl: ReportingReportingDlService;

  constructor(client: HttpClient) {
    this.reporting = new ReportingReportingService(client);
    this.reportingDl = new ReportingReportingDlService(client);
  }
}
