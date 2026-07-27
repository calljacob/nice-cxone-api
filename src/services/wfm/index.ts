import { HttpClient } from "../../http.js";
import { WfmExportscheduleService } from "./WfmExportscheduleService.js";
import { WfmImportallotmentService } from "./WfmImportallotmentService.js";
import { WfmExportsummaryService } from "./WfmExportsummaryService.js";

export * from "./WfmExportscheduleService.js";
export * from "./WfmImportallotmentService.js";
export * from "./WfmExportsummaryService.js";

export class WfmDomain {
  public readonly exportschedule: WfmExportscheduleService;
  public readonly importallotment: WfmImportallotmentService;
  public readonly exportsummary: WfmExportsummaryService;

  constructor(client: HttpClient) {
    this.exportschedule = new WfmExportscheduleService(client);
    this.importallotment = new WfmImportallotmentService(client);
    this.exportsummary = new WfmExportsummaryService(client);
  }
}
