import { HttpClient } from "../../http.js";
import { PolicyPolicyinstanceService } from "./PolicyPolicyinstanceService.js";

export * from "./PolicyPolicyinstanceService.js";

export class DataPolicyDomain {
  public readonly policyinstance: PolicyPolicyinstanceService;

  constructor(client: HttpClient) {
    this.policyinstance = new PolicyPolicyinstanceService(client);
  }
}
