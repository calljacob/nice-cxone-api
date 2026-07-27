import { HttpClient } from "../../http.js";
import { PatronCallbackService } from "./PatronCallbackService.js";
import { PatronChatrequestsService } from "./PatronChatrequestsService.js";
import { PatronWorkitemService } from "./PatronWorkitemService.js";

export * from "./PatronCallbackService.js";
export * from "./PatronChatrequestsService.js";
export * from "./PatronWorkitemService.js";

export class PatronDomain {
  public readonly callback: PatronCallbackService;
  public readonly chatrequests: PatronChatrequestsService;
  public readonly workitem: PatronWorkitemService;

  constructor(client: HttpClient) {
    this.callback = new PatronCallbackService(client);
    this.chatrequests = new PatronChatrequestsService(client);
    this.workitem = new PatronWorkitemService(client);
  }
}
