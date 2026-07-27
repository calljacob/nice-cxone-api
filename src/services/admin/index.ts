import { HttpClient } from "../../http.js";
import { AdminAddressbookService } from "./AdminAddressbookService.js";
import { AdminAgentmessageService } from "./AdminAgentmessageService.js";
import { AdminAgentsService } from "./AdminAgentsService.js";
import { AdminCommitmentsService } from "./AdminCommitmentsService.js";
import { AdminContactsService } from "./AdminContactsService.js";
import { AdminGeneralService } from "./AdminGeneralService.js";
import { AdminGroupsService } from "./AdminGroupsService.js";
import { AdminListsService } from "./AdminListsService.js";
import { AdminRoutingattributesService } from "./AdminRoutingattributesService.js";
import { AdminScriptschedulesService } from "./AdminScriptschedulesService.js";
import { AdminSkillsService } from "./AdminSkillsService.js";
import { AdminStationprofilesService } from "./AdminStationprofilesService.js";
import { AdminStationsService } from "./AdminStationsService.js";
import { AdminUnavailablecodesService } from "./AdminUnavailablecodesService.js";
import { AdminWorkflowdataService } from "./AdminWorkflowdataService.js";

export * from "./AdminAddressbookService.js";
export * from "./AdminAgentmessageService.js";
export * from "./AdminAgentsService.js";
export * from "./AdminCommitmentsService.js";
export * from "./AdminContactsService.js";
export * from "./AdminGeneralService.js";
export * from "./AdminGroupsService.js";
export * from "./AdminListsService.js";
export * from "./AdminRoutingattributesService.js";
export * from "./AdminScriptschedulesService.js";
export * from "./AdminSkillsService.js";
export * from "./AdminStationprofilesService.js";
export * from "./AdminStationsService.js";
export * from "./AdminUnavailablecodesService.js";
export * from "./AdminWorkflowdataService.js";

export class AdminDomain {
  public readonly addressbook: AdminAddressbookService;
  public readonly agentmessage: AdminAgentmessageService;
  public readonly agents: AdminAgentsService;
  public readonly commitments: AdminCommitmentsService;
  public readonly contacts: AdminContactsService;
  public readonly general: AdminGeneralService;
  public readonly groups: AdminGroupsService;
  public readonly lists: AdminListsService;
  public readonly routingattributes: AdminRoutingattributesService;
  public readonly scriptschedules: AdminScriptschedulesService;
  public readonly skills: AdminSkillsService;
  public readonly stationprofiles: AdminStationprofilesService;
  public readonly stations: AdminStationsService;
  public readonly unavailablecodes: AdminUnavailablecodesService;
  public readonly workflowdata: AdminWorkflowdataService;

  constructor(client: HttpClient) {
    this.addressbook = new AdminAddressbookService(client);
    this.agentmessage = new AdminAgentmessageService(client);
    this.agents = new AdminAgentsService(client);
    this.commitments = new AdminCommitmentsService(client);
    this.contacts = new AdminContactsService(client);
    this.general = new AdminGeneralService(client);
    this.groups = new AdminGroupsService(client);
    this.lists = new AdminListsService(client);
    this.routingattributes = new AdminRoutingattributesService(client);
    this.scriptschedules = new AdminScriptschedulesService(client);
    this.skills = new AdminSkillsService(client);
    this.stationprofiles = new AdminStationprofilesService(client);
    this.stations = new AdminStationsService(client);
    this.unavailablecodes = new AdminUnavailablecodesService(client);
    this.workflowdata = new AdminWorkflowdataService(client);
  }
}
