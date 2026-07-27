import { HttpClient } from "../../http.js";
import { PrivacyGdprService } from "./PrivacyGdprService.js";

export * from "./PrivacyGdprService.js";

export class PrivacyDomain {
  public readonly gdpr: PrivacyGdprService;

  constructor(client: HttpClient) {
    this.gdpr = new PrivacyGdprService(client);
  }
}
