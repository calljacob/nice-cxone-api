import { HttpClient } from "../../http.js";
import { FeedbackmanagementService } from "./FeedbackmanagementService.js";

export * from "./FeedbackmanagementService.js";

export class FeedbackManagementDomain {
  public readonly feedbackmanagement: FeedbackmanagementService;

  constructor(client: HttpClient) {
    this.feedbackmanagement = new FeedbackmanagementService(client);
  }
}
