import { HttpClient } from "../../http.js";
import { InteractionanalyticsInteractionsService } from "./InteractionanalyticsInteractionsService.js";

export * from "./InteractionanalyticsInteractionsService.js";

export class InteractionAnalyticsDomain {
  public readonly interactions: InteractionanalyticsInteractionsService;

  constructor(client: HttpClient) {
    this.interactions = new InteractionanalyticsInteractionsService(client);
  }
}
