import { HttpClient } from "./http.js";
import type { ClientConfig } from "./types.js";
import { AdminDomain } from "./services/admin/index.js";
import { AgentDomain } from "./services/agent/index.js";
import { AuthDomain } from "./services/auth/index.js";
import { PatronDomain } from "./services/patron/index.js";
import { RealtimeDomain } from "./services/realtime/index.js";
import { ReportingDomain } from "./services/reporting/index.js";
import { UserhubDomain } from "./services/userhub/index.js";
import { DataExtractionDomain } from "./services/dataExtraction/index.js";
import { MediaPlaybackDomain } from "./services/mediaPlayback/index.js";
import { DigitalEngagementDomain } from "./services/digitalEngagement/index.js";
import { BusinessDataDomain } from "./services/businessData/index.js";
import { WfmDomain } from "./services/wfm/index.js";
import { RecordingDomain } from "./services/recording/index.js";
import { InteractionAnalyticsDomain } from "./services/interactionAnalytics/index.js";
import { PrivacyDomain } from "./services/privacy/index.js";
import { DataPolicyDomain } from "./services/dataPolicy/index.js";
import { VoiceBiometricsDomain } from "./services/voiceBiometrics/index.js";
import { FeedbackManagementDomain } from "./services/feedbackManagement/index.js";

export * from "./types.js";
export * from "./errors.js";
export * from "./http.js";
export * from "./services/admin/index.js";
export * from "./services/agent/index.js";
export * from "./services/auth/index.js";
export * from "./services/patron/index.js";
export * from "./services/realtime/index.js";
export * from "./services/reporting/index.js";
export * from "./services/userhub/index.js";
export * from "./services/dataExtraction/index.js";
export * from "./services/mediaPlayback/index.js";
export * from "./services/digitalEngagement/index.js";
export * from "./services/businessData/index.js";
export * from "./services/wfm/index.js";
export * from "./services/recording/index.js";
export * from "./services/interactionAnalytics/index.js";
export * from "./services/privacy/index.js";
export * from "./services/dataPolicy/index.js";
export * from "./services/voiceBiometrics/index.js";
export * from "./services/feedbackManagement/index.js";

export class NiceCXoneClient {
  public readonly http: HttpClient;
  public readonly admin: AdminDomain;
  public readonly agent: AgentDomain;
  public readonly auth: AuthDomain;
  public readonly patron: PatronDomain;
  public readonly realtime: RealtimeDomain;
  public readonly reporting: ReportingDomain;
  public readonly userhub: UserhubDomain;
  public readonly dataExtraction: DataExtractionDomain;
  public readonly mediaPlayback: MediaPlaybackDomain;
  public readonly digitalEngagement: DigitalEngagementDomain;
  public readonly businessData: BusinessDataDomain;
  public readonly wfm: WfmDomain;
  public readonly recording: RecordingDomain;
  public readonly interactionAnalytics: InteractionAnalyticsDomain;
  public readonly privacy: PrivacyDomain;
  public readonly dataPolicy: DataPolicyDomain;
  public readonly voiceBiometrics: VoiceBiometricsDomain;
  public readonly feedbackManagement: FeedbackManagementDomain;

  constructor(config: ClientConfig = {}) {
    this.http = new HttpClient(config);
    this.admin = new AdminDomain(this.http);
    this.agent = new AgentDomain(this.http);
    this.auth = new AuthDomain(this.http);
    this.patron = new PatronDomain(this.http);
    this.realtime = new RealtimeDomain(this.http);
    this.reporting = new ReportingDomain(this.http);
    this.userhub = new UserhubDomain(this.http);
    this.dataExtraction = new DataExtractionDomain(this.http);
    this.mediaPlayback = new MediaPlaybackDomain(this.http);
    this.digitalEngagement = new DigitalEngagementDomain(this.http);
    this.businessData = new BusinessDataDomain(this.http);
    this.wfm = new WfmDomain(this.http);
    this.recording = new RecordingDomain(this.http);
    this.interactionAnalytics = new InteractionAnalyticsDomain(this.http);
    this.privacy = new PrivacyDomain(this.http);
    this.dataPolicy = new DataPolicyDomain(this.http);
    this.voiceBiometrics = new VoiceBiometricsDomain(this.http);
    this.feedbackManagement = new FeedbackManagementDomain(this.http);
  }
}

export default NiceCXoneClient;
