import { HttpClient } from "../../http.js";
import { BusinessdataBusinessdataService } from "./BusinessdataBusinessdataService.js";

export * from "./BusinessdataBusinessdataService.js";

export class BusinessDataDomain {
  public readonly businessdata: BusinessdataBusinessdataService;

  constructor(client: HttpClient) {
    this.businessdata = new BusinessdataBusinessdataService(client);
  }
}
