import { HttpClient } from "../../http.js";
import { DataextractionDataextractionService } from "./DataextractionDataextractionService.js";

export * from "./DataextractionDataextractionService.js";

export class DataExtractionDomain {
  public readonly dataextraction: DataextractionDataextractionService;

  constructor(client: HttpClient) {
    this.dataextraction = new DataextractionDataextractionService(client);
  }
}
