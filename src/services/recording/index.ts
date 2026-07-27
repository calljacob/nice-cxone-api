import { HttpClient } from "../../http.js";
import { RecordingInteractionsService } from "./RecordingInteractionsService.js";
import { RecordingRecordingondemandService } from "./RecordingRecordingondemandService.js";
import { RecordingRecordingstatusService } from "./RecordingRecordingstatusService.js";
import { RecordingScreeninteractionsService } from "./RecordingScreeninteractionsService.js";
import { RecordingBusinessdataService } from "./RecordingBusinessdataService.js";

export * from "./RecordingInteractionsService.js";
export * from "./RecordingRecordingondemandService.js";
export * from "./RecordingRecordingstatusService.js";
export * from "./RecordingScreeninteractionsService.js";
export * from "./RecordingBusinessdataService.js";

export class RecordingDomain {
  public readonly interactions: RecordingInteractionsService;
  public readonly recordingondemand: RecordingRecordingondemandService;
  public readonly recordingstatus: RecordingRecordingstatusService;
  public readonly screeninteractions: RecordingScreeninteractionsService;
  public readonly businessdata: RecordingBusinessdataService;

  constructor(client: HttpClient) {
    this.interactions = new RecordingInteractionsService(client);
    this.recordingondemand = new RecordingRecordingondemandService(client);
    this.recordingstatus = new RecordingRecordingstatusService(client);
    this.screeninteractions = new RecordingScreeninteractionsService(client);
    this.businessdata = new RecordingBusinessdataService(client);
  }
}
