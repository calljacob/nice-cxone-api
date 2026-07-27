import { HttpClient } from "../../http.js";
import { AgentphoneService } from "./AgentphoneService.js";
import { ChatrequestsService } from "./ChatrequestsService.js";
import { EmailsService } from "./EmailsService.js";
import { PersonalconService } from "./PersonalconService.js";
import { PhonecallsService } from "./PhonecallsService.js";
import { ScheduledcallbacksService } from "./ScheduledcallbacksService.js";
import { SessionsService } from "./SessionsService.js";
import { SupervisorService } from "./SupervisorService.js";
import { VoicemailsService } from "./VoicemailsService.js";
import { WorkitemsService } from "./WorkitemsService.js";

export * from "./AgentphoneService.js";
export * from "./ChatrequestsService.js";
export * from "./EmailsService.js";
export * from "./PersonalconService.js";
export * from "./PhonecallsService.js";
export * from "./ScheduledcallbacksService.js";
export * from "./SessionsService.js";
export * from "./SupervisorService.js";
export * from "./VoicemailsService.js";
export * from "./WorkitemsService.js";

export class AgentDomain {
  public readonly phone: AgentphoneService;
  public readonly chatrequests: ChatrequestsService;
  public readonly emails: EmailsService;
  public readonly personalcon: PersonalconService;
  public readonly phonecalls: PhonecallsService;
  public readonly scheduledcallbacks: ScheduledcallbacksService;
  public readonly sessions: SessionsService;
  public readonly supervisor: SupervisorService;
  public readonly voicemails: VoicemailsService;
  public readonly workitems: WorkitemsService;

  constructor(client: HttpClient) {
    this.phone = new AgentphoneService(client);
    this.chatrequests = new ChatrequestsService(client);
    this.emails = new EmailsService(client);
    this.personalcon = new PersonalconService(client);
    this.phonecalls = new PhonecallsService(client);
    this.scheduledcallbacks = new ScheduledcallbacksService(client);
    this.sessions = new SessionsService(client);
    this.supervisor = new SupervisorService(client);
    this.voicemails = new VoicemailsService(client);
    this.workitems = new WorkitemsService(client);
  }
}
