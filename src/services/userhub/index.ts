import { HttpClient } from "../../http.js";
import { CxoneUsermanagementService } from "./CxoneUsermanagementService.js";
import { CxoneAuthorizationmanagementService } from "./CxoneAuthorizationmanagementService.js";
import { CxoneScimService } from "./CxoneScimService.js";
import { CxoneBillingService } from "./CxoneBillingService.js";
import { CxoneAccesskeysService } from "./CxoneAccesskeysService.js";
import { CxoneDesktopprofilesService } from "./CxoneDesktopprofilesService.js";
import { CxoneDocumentsService } from "./CxoneDocumentsService.js";
import { CxoneDivisionService } from "./CxoneDivisionService.js";
import { CxoneCorrelationmanagementService } from "./CxoneCorrelationmanagementService.js";
import { CxoneExportapiService } from "./CxoneExportapiService.js";
import { CxoneDrmanagementService } from "./CxoneDrmanagementService.js";

export * from "./CxoneUsermanagementService.js";
export * from "./CxoneAuthorizationmanagementService.js";
export * from "./CxoneScimService.js";
export * from "./CxoneBillingService.js";
export * from "./CxoneAccesskeysService.js";
export * from "./CxoneDesktopprofilesService.js";
export * from "./CxoneDocumentsService.js";
export * from "./CxoneDivisionService.js";
export * from "./CxoneCorrelationmanagementService.js";
export * from "./CxoneExportapiService.js";
export * from "./CxoneDrmanagementService.js";

export class UserhubDomain {
  public readonly usermanagement: CxoneUsermanagementService;
  public readonly authorizationmanagement: CxoneAuthorizationmanagementService;
  public readonly scim: CxoneScimService;
  public readonly billing: CxoneBillingService;
  public readonly accesskeys: CxoneAccesskeysService;
  public readonly desktopprofiles: CxoneDesktopprofilesService;
  public readonly documents: CxoneDocumentsService;
  public readonly division: CxoneDivisionService;
  public readonly correlationmanagement: CxoneCorrelationmanagementService;
  public readonly exportapi: CxoneExportapiService;
  public readonly drmanagement: CxoneDrmanagementService;

  constructor(client: HttpClient) {
    this.usermanagement = new CxoneUsermanagementService(client);
    this.authorizationmanagement = new CxoneAuthorizationmanagementService(client);
    this.scim = new CxoneScimService(client);
    this.billing = new CxoneBillingService(client);
    this.accesskeys = new CxoneAccesskeysService(client);
    this.desktopprofiles = new CxoneDesktopprofilesService(client);
    this.documents = new CxoneDocumentsService(client);
    this.division = new CxoneDivisionService(client);
    this.correlationmanagement = new CxoneCorrelationmanagementService(client);
    this.exportapi = new CxoneExportapiService(client);
    this.drmanagement = new CxoneDrmanagementService(client);
  }
}
