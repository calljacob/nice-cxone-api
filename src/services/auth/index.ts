import { HttpClient } from "../../http.js";
import { AuthenticationAuthenticateService } from "./AuthenticationAuthenticateService.js";
import { AuthenticationGlobalauthenticationService } from "./AuthenticationGlobalauthenticationService.js";
import { AuthenticationIntegrationsService } from "./AuthenticationIntegrationsService.js";
import { AuthenticationUniversalapplicationService } from "./AuthenticationUniversalapplicationService.js";

export * from "./AuthenticationAuthenticateService.js";
export * from "./AuthenticationGlobalauthenticationService.js";
export * from "./AuthenticationIntegrationsService.js";
export * from "./AuthenticationUniversalapplicationService.js";

export class AuthDomain {
  public readonly authenticate: AuthenticationAuthenticateService;
  public readonly globalauthentication: AuthenticationGlobalauthenticationService;
  public readonly integrations: AuthenticationIntegrationsService;
  public readonly universalapplication: AuthenticationUniversalapplicationService;

  constructor(client: HttpClient) {
    this.authenticate = new AuthenticationAuthenticateService(client);
    this.globalauthentication = new AuthenticationGlobalauthenticationService(client);
    this.integrations = new AuthenticationIntegrationsService(client);
    this.universalapplication = new AuthenticationUniversalapplicationService(client);
  }
}
