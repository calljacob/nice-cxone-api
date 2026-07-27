import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface ReportingReporting_contactsActive { totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; contacts?: Array<{ agentId?: number; agentStartDate?: string; campaignId?: number; campaignName?: string; contactId?: number; contactStartDate?: number; contactStateCategory?: string; digitalContactStateId?: number; digitalContactStateName?: string; fileName?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; isLogged?: boolean; isOutbound?: boolean; isTakeover?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: string; routingAttribute?: number; skillId?: number; skillName?: string; stateId?: number; stateName?: string; targetAgentId?: number; teamId?: number; teamName?: string; toAddress?: string; transferIndicatorId?: number; transferIndicatorName?: string; }>; }

export interface ReportingReporting_contactsCompeleted { totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; contacts?: Array<{ abandoned?: boolean; abandonSeconds?: number; acwSeconds?: number; agentId?: number; agentSeconds?: number; analyticsProcessedDate?: string; callbackTime?: number; campaignId?: number; campaignName?: string; conferenceSeconds?: number; contactId?: number; contactStartDate?: string; dateACWWarehoused?: string; dateContactWarehoused?: string; digitalContactStateId?: number; digitalContactStateName?: string; dispositionNotes?: string; endReason?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; holdSeconds?: number; inQueueSeconds?: number; isActive?: boolean; isAnalyticsProcessed?: boolean; isLogged?: boolean; isOutbound?: boolean; isRefused?: boolean; isShortAbandon?: boolean; isTakeover?: boolean; isWarehoused?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: number; postQueueSeconds?: number; preQueueSeconds?: number; primaryDispositionId?: number; refuseReason?: string; refuseTime?: number; releaseSeconds?: number; routingAttribute?: number; routingTime?: number; secondaryDispositionId?: number; serviceLevelFlag?: number; skillId?: number; skillName?: string; stateId?: number; stateName?: string; teamId?: number; teamName?: string; toAddress?: string; totalDurationSeconds?: number; transferIndicatorId?: number; transferIndicatorName?: number; tags?: Array<Record<string, any>>; }>; }

export interface ReportingReporting_contactActive { businessUnitId?: number; lastPollTime?: string; contactId?: { agentId?: number; agentStartDate?: string; campaignId?: number; campaignName?: string; contactId?: number; contactStartDate?: number; contactStateCategory?: string; digitalContactStateId?: number; digitalContactStateName?: string; fileName?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; isLogged?: boolean; isOutbound?: boolean; isTakeover?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: string; routingAttribute?: number; skillId?: number; skillName?: string; stateId?: number; stateName?: string; targetAgentId?: number; teamId?: number; teamName?: string; toAddress?: string; transferIndicatorId?: number; transferIndicatorName?: string; }; }

export interface ReportingReporting_contactCompeleted { businessUnitId?: number; lastPollTime?: string; contactId?: { abandoned?: boolean; abandonSeconds?: number; acwSeconds?: number; agentId?: number; agentSeconds?: number; analyticsProcessedDate?: string; callbackTime?: number; campaignId?: number; campaignName?: string; conferenceSeconds?: number; contactId?: number; contactStartDate?: string; dateACWWarehoused?: string; dateContactWarehoused?: string; digitalContactStateId?: number; digitalContactStateName?: string; dispositionNotes?: string; endReason?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; holdSeconds?: number; inQueueSeconds?: number; isActive?: boolean; isAnalyticsProcessed?: boolean; isLogged?: boolean; isOutbound?: boolean; isRefused?: boolean; isShortAbandon?: boolean; isTakeover?: boolean; isWarehoused?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: number; postQueueSeconds?: number; preQueueSeconds?: number; primaryDispositionId?: number; refuseReason?: string; refuseTime?: number; releaseSeconds?: number; routingAttribute?: number; routingTime?: number; secondaryDispositionId?: number; serviceLevelFlag?: number; skillId?: number; skillName?: string; stateId?: number; stateName?: string; teamId?: number; teamName?: string; toAddress?: string; totalDurationSeconds?: number; transferIndicatorId?: number; transferIndicatorName?: number; tags?: Array<Record<string, any>>; }; }

export class ReportingReportingService {
  constructor(private client: HttpClient) {}

  /**
   * Returns Contact history for all Agents
   * GET /agents/interaction-history
   */
  public async getAgentsInteractionHistory(options?: RequestOptions & { query?: { startDate?: string; endDate?: string; updatedSince?: string; mediaTypeId?: number; mediaSubTypeId?: number; fields?: string; skip?: number; top?: number; orderBy?: string; } }): Promise<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; contactStates?: Array<{ contactId?: number; masterContactId?: number; contactStartDate?: string; targetAgentId?: number; fileName?: string; pointOfContact?: string; lastUpdateTime?: string; mediaTypeId?: number; mediaTypeName?: string; mediaSubTypeId?: number; mediaSubTypeName?: string; agentId?: number; firstName?: string; lastName?: string; teamId?: number; teamName?: string; campaignId?: number; campaignName?: string; skillId?: number; skillName?: string; isOutbound?: boolean; fromAddr?: string; toAddr?: string; primaryDispositionId?: number; secondaryDispositionId?: number; transferIndicatorId?: number; }>; }> {
    const path = `/agents/interaction-history`;
    return this.client.get<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; contactStates?: Array<{ contactId?: number; masterContactId?: number; contactStartDate?: string; targetAgentId?: number; fileName?: string; pointOfContact?: string; lastUpdateTime?: string; mediaTypeId?: number; mediaTypeName?: string; mediaSubTypeId?: number; mediaSubTypeName?: string; agentId?: number; firstName?: string; lastName?: string; teamId?: number; teamName?: string; campaignId?: number; campaignName?: string; skillId?: number; skillName?: string; isOutbound?: boolean; fromAddr?: string; toAddr?: string; primaryDispositionId?: number; secondaryDispositionId?: number; transferIndicatorId?: number; }>; }>(path, options);
  }

  /**
   *  Returns Contact history for an Agent
   * GET /agents/{agentId}/interaction-history
   */
  public async getAgentHistoryByid(agentId: number, options?: RequestOptions & { query?: { startDate: string; endDate: string; updatedSince?: string; mediaTypeId: number; fields?: string; skip?: number; top?: number; orderBy?: string; mediaSubTypeId?: number; } }): Promise<{ lastPollTime?: string; businessUnitId?: number; contactStates?: Array<{ transferIndicatorId?: number; transferIndicatorName?: "None" | "ReSkill" | "ReAgent" | "Consult" | "TakeOver" | "External"; contactId?: number; masterContactId?: number; contactStartDate?: string; targetAgentId?: number; fileName?: string; pointOfContact?: string; lastUpdateTime?: string; mediaTypeId?: number; mediaTypeName?: string; agentId?: number; firstName?: string; lastName?: string; teamId?: number; teamName?: string; campaignId?: number; campaignName?: string; skillId?: number; skillName?: string; isOutbound?: boolean; fromAddr?: string; toAddr?: string; primaryDispositionId?: string; secondaryDispositionId?: string; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/interaction-history`;
    return this.client.get<{ lastPollTime?: string; businessUnitId?: number; contactStates?: Array<{ transferIndicatorId?: number; transferIndicatorName?: "None" | "ReSkill" | "ReAgent" | "Consult" | "TakeOver" | "External"; contactId?: number; masterContactId?: number; contactStartDate?: string; targetAgentId?: number; fileName?: string; pointOfContact?: string; lastUpdateTime?: string; mediaTypeId?: number; mediaTypeName?: string; agentId?: number; firstName?: string; lastName?: string; teamId?: number; teamName?: string; campaignId?: number; campaignName?: string; skillId?: number; skillName?: string; isOutbound?: boolean; fromAddr?: string; toAddr?: string; primaryDispositionId?: string; secondaryDispositionId?: string; }>; }>(path, options);
  }

  /**
   * Returns info on Recent Contacts
   * GET /agents/{agentId}/interaction-recent
   */
  public async recentContactHistory(agentId: number, options?: RequestOptions & { query?: { mediaTypeId?: number; top?: number; fields?: string; startDate: string; endDate: string; } }): Promise<{ resultSet?: { agentId?: number; firstName?: string; lastName?: string; contactData?: Array<Record<string, any>>; }; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/interaction-recent`;
    return this.client.get<{ resultSet?: { agentId?: number; firstName?: string; lastName?: string; contactData?: Array<Record<string, any>>; }; }>(path, options);
  }

  /**
   * Returns State duration for an Agent
   * GET /agents/{agentId}/login-history
   */
  public async agentLoginHistory(agentId: number, options?: RequestOptions & { query?: { startDate: string; endDate: string; searchString?: string; fields?: string; skip?: number; top?: number; orderBy?: string; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; agentLogins?: Array<{ stationPhoneNumber?: string; stationCallerId?: string; stationId?: number; stationName?: string; loginDate?: string; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/login-history`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; agentLogins?: Array<{ stationPhoneNumber?: string; stationCallerId?: string; stationId?: number; stationName?: string; loginDate?: string; }>; }>(path, options);
  }

  /**
   * Returns State duration for all Agents
   * GET /agents/state-history
   */
  public async getAgentsStateHistory(options?: RequestOptions & { query?: { startDate?: string; endDate?: string; updatedSince?: string; top?: number; skip?: number; fields?: string; orderBy?: string; searchString?: string; mediaTypeId?: string; outboundStrategy?: string; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; agentStateHistory?: Array<{ stateIndex?: number; startDate?: string; agentId?: number; agentStateId?: number; agentStateName?: string; agentSessionId?: number; contactId?: number; skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; fromAddress?: string; toAddress?: string; outStateId?: number; outStateDescription?: number; duration?: string; isOutbound?: boolean; isNaturalCalling?: boolean; stationId?: number; stationName?: string; teamId?: number; }>; }> {
    const path = `/agents/state-history`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; agentStateHistory?: Array<{ stateIndex?: number; startDate?: string; agentId?: number; agentStateId?: number; agentStateName?: string; agentSessionId?: number; contactId?: number; skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; fromAddress?: string; toAddress?: string; outStateId?: number; outStateDescription?: number; duration?: string; isOutbound?: boolean; isNaturalCalling?: boolean; stationId?: number; stationName?: string; teamId?: number; }>; }>(path, options);
  }

  /**
   * Returns State duration for an Agent
   * GET /agents/{agentId}/state-history
   */
  public async getAgentsAgentIdStateHistory(agentId: number, options?: RequestOptions & { query?: { startDate?: string; endDate?: string; updatedSince?: string; top?: number; skip?: number; fields?: string; orderBy?: string; searchString?: string; mediaTypeId?: string; outboundStrategy?: string; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; agentStateHistory?: Array<{ stateIndex?: number; startDate?: string; agentId?: number; agentStateId?: number; agentStateName?: string; agentSessionId?: number; contactId?: number; skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; fromAddress?: string; toAddress?: string; outStateId?: number; outStateDescription?: number; duration?: string; isOutbound?: boolean; isNaturalCalling?: boolean; stationId?: number; stationName?: string; teamId?: number; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/state-history`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; agentStateHistory?: Array<{ stateIndex?: number; startDate?: string; agentId?: number; agentStateId?: number; agentStateName?: string; agentSessionId?: number; contactId?: number; skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; fromAddress?: string; toAddress?: string; outStateId?: number; outStateDescription?: number; duration?: string; isOutbound?: boolean; isNaturalCalling?: boolean; stationId?: number; stationName?: string; teamId?: number; }>; }>(path, options);
  }

  /**
   * Returns a performance summary of all Agents 
   * GET /agents/performance
   */
  public async performanceSummary(options?: RequestOptions & { query?: { startDate: string; endDate: string; fields?: string; } }): Promise<{ agentPerformance?: Array<{ agentId?: number; teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: string; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: string; availableTime?: string; unavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }> {
    const path = `/agents/performance`;
    return this.client.get<{ agentPerformance?: Array<{ agentId?: number; teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: string; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: string; availableTime?: string; unavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }>(path, options);
  }

  /**
   * Returns performance summary for a specific agent
   * GET /agents/{agentId}/performance
   */
  public async agentPerformanceSummary(agentId: number, options?: RequestOptions & { query?: { startDate: string; endDate: string; fields?: string; } }): Promise<{ businessUnitId?: number; lastPollTime?: string; agentPerformance?: Array<{ agentId?: number; teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: number; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: number; availableTime?: string; unavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/performance`;
    return this.client.get<{ businessUnitId?: number; lastPollTime?: string; agentPerformance?: Array<{ agentId?: number; teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: number; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: number; availableTime?: string; unavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }>(path, options);
  }

  /**
   * Returns details for all Contacts
   * GET /contacts
   */
  public async getContacts(options?: RequestOptions & { query?: { startDate?: string; endDate?: string; fields?: string; top?: number; skip?: number; orderBy?: string; } }): Promise<ReportingReporting_contactsActive | ReportingReporting_contactsCompeleted> {
    const path = `/contacts`;
    return this.client.get<ReportingReporting_contactsActive | ReportingReporting_contactsCompeleted>(path, options);
  }

  /**
   * Returns Contacts details
   * GET /contacts/{contactId}
   */
  public async getContactsContactId(contactId: number, options?: RequestOptions & { query?: { fields?: string; } }): Promise<ReportingReporting_contactActive | ReportingReporting_contactCompeleted> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}`;
    return this.client.get<ReportingReporting_contactActive | ReportingReporting_contactCompeleted>(path, options);
  }

  /**
   * Returns SMS Transcripts for a date range and transport code.
   * GET /contacts/sms-transcripts
   */
  public async smsTranscripts(options?: RequestOptions & { query?: { transportCode: string; startDate: string; endDate: string; skip?: number; top?: number; orderBy?: string; agentId: number; } }): Promise<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; totalRecords?: number; smsTranscripts?: Array<{ messageStart?: string; messageBody?: string; from?: string; contactId?: number; }>; }> {
    const path = `/contacts/sms-transcripts`;
    return this.client.get<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; totalRecords?: number; smsTranscripts?: Array<{ messageStart?: string; messageBody?: string; from?: string; contactId?: number; }>; }>(path, options);
  }

  /**
   * Returns SMS Transcripts for a contactId.
   * GET /contacts/{contactId}/sms-transcripts
   */
  public async contactIdSmsTranscripts(contactId: number, options?: RequestOptions & { query?: { transportCode: string; startDate: string; endDate: string; skip?: number; top?: number; } }): Promise<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; totalRecords?: number; smsTranscripts?: Array<{ messageStart?: string; messageBody?: string; from?: string; }>; }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/sms-transcripts`;
    return this.client.get<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; totalRecords?: number; smsTranscripts?: Array<{ messageStart?: string; messageBody?: string; from?: string; }>; }>(path, options);
  }

  /**
   * Completed Contacts
   * GET /contacts/completed
   */
  public async completedContactDetails(options?: RequestOptions & { query?: { startDate?: string; endDate?: string; updatedSince?: string; fields?: string; top?: number; skip?: number; orderBy?: string; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; skillId?: number; campaignId?: number; agentId?: number; teamId?: number; toAddress?: string; fromAddress?: string; isLogged?: boolean; isRefused?: boolean; isTakeover?: boolean; tags?: boolean; analyticsProcessed?: boolean; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; completedContacts?: Array<{ abandoned?: boolean; abandonSeconds?: number; acwSeconds?: number; agentId?: number; agentSeconds?: number; analyticsProcessedDate?: string; callbackTime?: number; campaignId?: number; campaignName?: string; conferenceSeconds?: number; contactId?: number; contactStartDate?: string; dateACWWarehoused?: string; dateContactWarehoused?: string; dispositionNotes?: string; endReason?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; holdSeconds?: number; inQueueSeconds?: number; isAnalyticsProcessed?: boolean; isLogged?: boolean; isOutbound?: boolean; isRefused?: boolean; isShortAbandon?: boolean; isTakeover?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: string; postQueueSeconds?: number; preQueueSeconds?: number; primaryDispositionId?: number; refuseReason?: string; refuseTime?: string; releaseSeconds?: number; routingAttribute?: number; routingTime?: number; secondaryDispositionId?: number; serviceLevelFlag?: number; skillId?: number; skillName?: string; teamId?: number; teamName?: string; toAddress?: string; totalDurationSeconds?: number; transferIndicatorId?: number; transferIndicatorName?: string; tags?: Array<Record<string, any>>; divisionNo?: number; }>; }> {
    const path = `/contacts/completed`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; completedContacts?: Array<{ abandoned?: boolean; abandonSeconds?: number; acwSeconds?: number; agentId?: number; agentSeconds?: number; analyticsProcessedDate?: string; callbackTime?: number; campaignId?: number; campaignName?: string; conferenceSeconds?: number; contactId?: number; contactStartDate?: string; dateACWWarehoused?: string; dateContactWarehoused?: string; dispositionNotes?: string; endReason?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; holdSeconds?: number; inQueueSeconds?: number; isAnalyticsProcessed?: boolean; isLogged?: boolean; isOutbound?: boolean; isRefused?: boolean; isShortAbandon?: boolean; isTakeover?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: string; postQueueSeconds?: number; preQueueSeconds?: number; primaryDispositionId?: number; refuseReason?: string; refuseTime?: string; releaseSeconds?: number; routingAttribute?: number; routingTime?: number; secondaryDispositionId?: number; serviceLevelFlag?: number; skillId?: number; skillName?: string; teamId?: number; teamName?: string; toAddress?: string; totalDurationSeconds?: number; transferIndicatorId?: number; transferIndicatorName?: string; tags?: Array<Record<string, any>>; divisionNo?: number; }>; }>(path, options);
  }

  /**
   * Returns State duration for all Agents
   * GET /contacts/state-history
   */
  public async getContactsStateHistory(options?: RequestOptions & { query?: { startDate: string; endDate: string; updatedSince?: string; skip?: number; top?: number; orderBy?: string; } }): Promise<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; lastPollTime?: string; businessUnit?: number; contactStateHistory?: Array<{ stateIndex?: number; contactId?: string; contactStateId?: number; contactStateName?: string; digitalContactStateName?: string; digitalContactStateId?: string; startDate?: string; isWarehoused?: boolean; agentId?: number; skillId?: number; skillName?: string; duration?: string; }>; }> {
    const path = `/contacts/state-history`;
    return this.client.get<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; lastPollTime?: string; businessUnit?: number; contactStateHistory?: Array<{ stateIndex?: number; contactId?: string; contactStateId?: number; contactStateName?: string; digitalContactStateName?: string; digitalContactStateId?: string; startDate?: string; isWarehoused?: boolean; agentId?: number; skillId?: number; skillName?: string; duration?: string; }>; }>(path, options);
  }

  /**
   * Returns Contact State History
   * GET /contacts/{contactId}/state-history
   */
  public async contactStateHistory(contactId: number, options?: RequestOptions): Promise<{ contactStateHistory?: Array<{ stateIndex?: number; contactId?: string; contactStateId?: number; contactStateName?: string; digitalContactStateName?: string; digitalContactStateId?: string; startDate?: string; isWarehoused?: boolean; agentId?: number; skillId?: number; skillName?: string; duration?: string; divisionNo?: number; }>; }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/state-history`;
    return this.client.get<{ contactStateHistory?: Array<{ stateIndex?: number; contactId?: string; contactStateId?: number; contactStateName?: string; digitalContactStateName?: string; digitalContactStateId?: string; startDate?: string; isWarehoused?: boolean; agentId?: number; skillId?: number; skillName?: string; duration?: string; divisionNo?: number; }>; }>(path, options);
  }

  /**
   * This method will return any custom data by date range of maximum 15 days.
   * GET /contacts/custom-data
   */
  public async getContactsCustomData(options?: RequestOptions & { query?: { startDate: string; endDate?: string; top?: number; skip?: number; } }): Promise<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; ContactCustomData?: Array<{ contactId?: number; name?: string; value?: string; }>; }> {
    const path = `/contacts/custom-data`;
    return this.client.get<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; ContactCustomData?: Array<{ contactId?: number; name?: string; value?: string; }>; }>(path, options);
  }

  /**
   * Returns Contact Custom Data
   * GET /contacts/{contactId}/custom-data
   */
  public async contactCustomData(contactId: number, options?: RequestOptions): Promise<{ contactCustomData?: Array<{ name?: string; value?: string; }>; }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/custom-data`;
    return this.client.get<{ contactCustomData?: Array<{ name?: string; value?: string; }>; }>(path, options);
  }

  /**
   * Returns statistics for all Skills
   * GET /skills/summary
   */
  public async getFullSkillSummaries(options?: RequestOptions & { query?: { startDate: string; endDate: string; mediaTypeId?: number; isOutbound?: boolean; fields?: string; } }): Promise<{ skillSummaries?: Array<{ businessUnitId?: number; businessUnitName?: string; abandonCount?: number; abandonRate?: number; agentsAcw?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; averageHandleTime?: string; averageInqueueTime?: string; averageSpeedToAnswer?: string; averageTalkTime?: string; averageWrapTime?: string; campaignId?: number; campaignName?: string; contactsActive?: number; contactsHandled?: number; contactsOffered?: number; contactsQueued?: number; contactsOutOfSLA?: number; contactsWithinSLA?: number; holdTime?: string; isOutbound?: boolean; longestQueueDur?: string; mediaTypeId?: number; mediaTypeName?: string; queueCount?: number; serviceLevel?: number; skillName?: string; skillId?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; totalContactTime?: string; dials?: number; connects?: number; connectsAHT?: string; rightPartyConnects?: number; rightPartyConnectsAHT?: string; }>; }> {
    const path = `/skills/summary`;
    return this.client.get<{ skillSummaries?: Array<{ businessUnitId?: number; businessUnitName?: string; abandonCount?: number; abandonRate?: number; agentsAcw?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; averageHandleTime?: string; averageInqueueTime?: string; averageSpeedToAnswer?: string; averageTalkTime?: string; averageWrapTime?: string; campaignId?: number; campaignName?: string; contactsActive?: number; contactsHandled?: number; contactsOffered?: number; contactsQueued?: number; contactsOutOfSLA?: number; contactsWithinSLA?: number; holdTime?: string; isOutbound?: boolean; longestQueueDur?: string; mediaTypeId?: number; mediaTypeName?: string; queueCount?: number; serviceLevel?: number; skillName?: string; skillId?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; totalContactTime?: string; dials?: number; connects?: number; connectsAHT?: string; rightPartyConnects?: number; rightPartyConnectsAHT?: string; }>; }>(path, options);
  }

  /**
   * Returns statistics for a Skill
   * GET /skills/{skillId}/summary
   */
  public async getSkillsSkillIdSummary(skillId: number, options?: RequestOptions & { query?: { startDate: string; endDate: string; fields?: string; } }): Promise<{ skillSummaries?: Array<{ businessUnitId?: number; businessUnitName?: string; abandonCount?: number; abandonRate?: number; agentsAcw?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; averageHandleTime?: string; averageInqueueTime?: string; averageSpeedToAnswer?: string; averageTalkTime?: string; averageWrapTime?: string; campaignId?: number; campaignName?: string; contactsActive?: number; contactsHandled?: number; contactsOffered?: number; contactsQueued?: number; contactsOutOfSLA?: number; contactsWithinSLA?: number; holdTime?: string; isOutbound?: boolean; longestQueueDur?: string; mediaTypeId?: number; mediaTypeName?: string; queueCount?: number; serviceLevel?: number; skillName?: string; skillId?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; totalContactTime?: string; dials?: number; connects?: number; connectsAHT?: string; rightPartyConnects?: number; rightPartyConnectsAHT?: string; }>; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/summary`;
    return this.client.get<{ skillSummaries?: Array<{ businessUnitId?: number; businessUnitName?: string; abandonCount?: number; abandonRate?: number; agentsAcw?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; averageHandleTime?: string; averageInqueueTime?: string; averageSpeedToAnswer?: string; averageTalkTime?: string; averageWrapTime?: string; campaignId?: number; campaignName?: string; contactsActive?: number; contactsHandled?: number; contactsOffered?: number; contactsQueued?: number; contactsOutOfSLA?: number; contactsWithinSLA?: number; holdTime?: string; isOutbound?: boolean; longestQueueDur?: string; mediaTypeId?: number; mediaTypeName?: string; queueCount?: number; serviceLevel?: number; skillName?: string; skillId?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; totalContactTime?: string; dials?: number; connects?: number; connectsAHT?: string; rightPartyConnects?: number; rightPartyConnectsAHT?: string; }>; }>(path, options);
  }

  /**
   * Returns SLA summary for all Skills
   * GET /skills/sla-summary
   */
  public async getFullSLASummaries(options?: RequestOptions & { query?: { startDate: string; endDate: string; skip?: number; top?: number; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; serviceLevelSummaries?: Array<{ BusinessUnitId?: number; SkillId?: number; SkillName?: string; ContactsWithinSLA?: number; ContactsOutOfSLA?: number; TotalContacts?: number; ServiceLevel?: number; }>; }> {
    const path = `/skills/sla-summary`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; serviceLevelSummaries?: Array<{ BusinessUnitId?: number; SkillId?: number; SkillName?: string; ContactsWithinSLA?: number; ContactsOutOfSLA?: number; TotalContacts?: number; ServiceLevel?: number; }>; }>(path, options);
  }

  /**
   * Returns single SLA summary for specified skill
   * GET /skills/{skillId}/sla-summary
   */
  public async getFullSLASkillSummary(skillId: number, options?: RequestOptions & { query?: { startDate: string; endDate: string; } }): Promise<{ serviceLevelSummaries?: Array<{ BusinessUnitId?: number; SkillId?: number; SkillName?: string; ContactsWithinSLA?: number; ContactsOutOfSLA?: number; TotalContacts?: number; ServiceLevel?: number; }>; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/sla-summary`;
    return this.client.get<{ serviceLevelSummaries?: Array<{ BusinessUnitId?: number; SkillId?: number; SkillName?: string; ContactsWithinSLA?: number; ContactsOutOfSLA?: number; TotalContacts?: number; ServiceLevel?: number; }>; }>(path, options);
  }

  /**
   * Returns performance summary of all Teams
   * GET /teams/performance-total
   */
  public async teamPerformanceSummaryTotalsAll(options?: RequestOptions & { query?: { startDate: string; endDate: string; fields?: string; } }): Promise<{ teamPerformanceTotal?: Array<{ teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: string; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalAvgHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: string; availableTime?: string; unavailableTime?: string; avgAvailableTime?: string; avgUnavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }> {
    const path = `/teams/performance-total`;
    return this.client.get<{ teamPerformanceTotal?: Array<{ teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: string; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalAvgHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: string; availableTime?: string; unavailableTime?: string; avgAvailableTime?: string; avgUnavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }>(path, options);
  }

  /**
   * Returns performance summary of a Team
   * GET /teams/{teamId}/performance-total
   */
  public async teamPerformanceSummaryTotals(teamId: number, options?: RequestOptions & { query?: { startDate: string; endDate: string; fields?: string; } }): Promise<{ teamPerformanceTotal?: Array<{ teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: string; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalAvgHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: string; availableTime?: string; unavailableTime?: string; avgAvailableTime?: string; avgUnavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/performance-total`;
    return this.client.get<{ teamPerformanceTotal?: Array<{ teamId?: number; agentOffered?: number; inboundHandled?: number; inboundTime?: string; inboundTalkTime?: string; inboundAvgTalkTime?: string; outboundHandled?: number; outboundTime?: string; outboundTalkTime?: string; outboundAvgTalkTime?: string; totalHandled?: number; totalAvgHandled?: number; totalTalkTime?: string; totalAvgTalkTime?: string; totalAvgHandleTime?: string; consultTime?: string; availableTime?: string; unavailableTime?: string; avgAvailableTime?: string; avgUnavailableTime?: string; acwTime?: string; refused?: number; percentRefused?: number; loginTime?: string; workingRate?: number; occupancy?: number; }>; }>(path, options);
  }

  /**
   *  Returns a list of Custom Reports
   * GET /reports
   */
  public async customReports(options?: RequestOptions & { query?: { reportType?: string; } }): Promise<{ reports?: Array<{ businessUnitId?: number; reportId?: number; reportName?: string; reportType?: string; reportSubType?: string; reportDescription?: string; url?: string; }>; }> {
    const path = `/reports`;
    return this.client.get<{ reports?: Array<{ businessUnitId?: number; reportId?: number; reportName?: string; reportType?: string; reportSubType?: string; reportDescription?: string; url?: string; }>; }>(path, options);
  }

  /**
   * Returns a list of Reporting Jobs
   * GET /report-jobs
   */
  public async reportJobs(options?: RequestOptions & { query?: { fields?: string; reportId?: number; jobStatus?: string; jobSpan?: number; } }): Promise<{ runningJobs?: Array<{ jobId?: number; reportId?: number; reportName?: string; jobStart?: string; }>; completedJobs?: Array<{ jobId?: number; reportId?: number; reportName?: string; jobStart?: string; jobEnd?: string; fileName?: string; resultFileURL?: string; deleteTime?: string; }>; }> {
    const path = `/report-jobs`;
    return this.client.get<{ runningJobs?: Array<{ jobId?: number; reportId?: number; reportName?: string; jobStart?: string; }>; completedJobs?: Array<{ jobId?: number; reportId?: number; reportName?: string; jobStart?: string; jobEnd?: string; fileName?: string; resultFileURL?: string; deleteTime?: string; }>; }>(path, options);
  }

  /**
   * Returns a Reporting Job
   * GET /report-jobs/{jobId}
   */
  public async reportJobByID(jobId: number, options?: RequestOptions & { query?: { fields?: string; } }): Promise<{ jobId?: number; reportId?: number; reportName?: string; jobStart?: string; jobEnd?: string; fileName?: string; resultFileURL?: string; state?: string; deleteTime?: string; }> {
    const path = `/report-jobs/${encodeURIComponent(String(jobId))}`;
    return this.client.get<{ jobId?: number; reportId?: number; reportName?: string; jobStart?: string; jobEnd?: string; fileName?: string; resultFileURL?: string; state?: string; deleteTime?: string; }>(path, options);
  }

  /**
   * Start a Custom Reporting Job
   * POST /report-jobs/{reportId}
   */
  public async startReportJob(reportId: number, options?: RequestOptions & { query?: { fileType?: "CSV" | "PDF" | "XML" | "Excel"; includeHeaders?: boolean; appendDate?: boolean; deleteAfter?: number; overwrite?: boolean; } }): Promise<{ jobId?: number; }> {
    const path = `/report-jobs/${encodeURIComponent(String(reportId))}`;
    return this.client.post<{ jobId?: number; }>(path, undefined, options);
  }

  /**
   * Generates a link to a datadownload report
   * POST /report-jobs/datadownload/{reportId}
   */
  public async generateADatadownloadReportFile(reportId: number, options?: RequestOptions & { query?: { fileName?: string; startDate: string; endDate: string; saveAsFile?: boolean; includeHeaders?: boolean; } }): Promise<{ errorMessage?: string; fileName?: string; file?: string; fileType?: string; URI?: string; }> {
    const path = `/report-jobs/datadownload/${encodeURIComponent(String(reportId))}`;
    return this.client.post<{ errorMessage?: string; fileName?: string; file?: string; fileType?: string; URI?: string; }>(path, undefined, options);
  }

  /**
   * Returns contact statistics for WFM
   * GET /wfm-data/skills/contacts
   */
  public async wfmskillscontacts(options?: RequestOptions & { query?: { fields?: string; startDate: string; endDate: string; mediaTypeId: number; } }): Promise<{ businessUnitId?: number; businessUnitName?: string; intervalStartDate?: string; skillId?: number; skillName?: string; isOutbound?: boolean; serviceLevel?: number; mediaTypeId?: number; MediaTypeName?: string; totalContacts?: number; totalHandled?: number; averageHandleTime?: number; abandonCount?: number; averageSpeedOfAnswer?: number; totalContactTime?: number; }> {
    const path = `/wfm-data/skills/contacts`;
    return this.client.get<{ businessUnitId?: number; businessUnitName?: string; intervalStartDate?: string; skillId?: number; skillName?: string; isOutbound?: boolean; serviceLevel?: number; mediaTypeId?: number; MediaTypeName?: string; totalContacts?: number; totalHandled?: number; averageHandleTime?: number; abandonCount?: number; averageSpeedOfAnswer?: number; totalContactTime?: number; }>(path, options);
  }

  /**
   * Returns agent metadata
   * GET /wfm-data/agents
   */
  public async wfmDataAgent(options?: RequestOptions & { query?: { fields?: string; startDate: string; endDate: string; } }): Promise<{ wfM_Data_Agents?: Array<{ agentNo?: number; teamName?: string; teamNo?: number; businessUnitId?: number; businessUnitName?: string; firstName?: string; middleName?: string; lastName?: string; status?: string; createDate?: string; modDateTime?: string; productId?: number; ntLoginName?: string; }>; }> {
    const path = `/wfm-data/agents`;
    return this.client.get<{ wfM_Data_Agents?: Array<{ agentNo?: number; teamName?: string; teamNo?: number; businessUnitId?: number; businessUnitName?: string; firstName?: string; middleName?: string; lastName?: string; status?: string; createDate?: string; modDateTime?: string; productId?: number; ntLoginName?: string; }>; }>(path, options);
  }

  /**
   * Returns dailer contact statistics
   * GET /wfm-data/skills/dialer-contacts
   */
  public async wfmDailerContactStatistics(options?: RequestOptions & { query?: { fields?: string; startDate: string; endDate: string; mediaTypeId: number; } }): Promise<{ wfM_OB_StatsV9?: Array<{ businessUnitId?: number; businessUnitName?: string; intervalStartDate?: string; skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; dials?: number; connects?: number; connectsAHT?: number; rightPartyConnects?: number; rightPartyConnectsAHT?: number; abandons?: number; }>; }> {
    const path = `/wfm-data/skills/dialer-contacts`;
    return this.client.get<{ wfM_OB_StatsV9?: Array<{ businessUnitId?: number; businessUnitName?: string; intervalStartDate?: string; skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; dials?: number; connects?: number; connectsAHT?: number; rightPartyConnects?: number; rightPartyConnectsAHT?: number; abandons?: number; }>; }>(path, options);
  }

  /**
   * Returns adherence statistics
   * GET /wfm-data/agents/schedule-adherence
   */
  public async wfmAdherenceStatistics(options?: RequestOptions & { query?: { fields?: string; startDate: string; endDate: string; } }): Promise<{ agentStateHistory?: Array<{ businessUnitId?: number; businessUnitName?: string; agentId?: number; stateIndex?: number; startDate?: string; agentStateId?: number; agentSessionId?: number; skillId?: number; outStateId?: number; outStateDescription?: string; duration?: number; }>; }> {
    const path = `/wfm-data/agents/schedule-adherence`;
    return this.client.get<{ agentStateHistory?: Array<{ businessUnitId?: number; businessUnitName?: string; agentId?: number; stateIndex?: number; startDate?: string; agentStateId?: number; agentSessionId?: number; skillId?: number; outStateId?: number; outStateDescription?: string; duration?: number; }>; }>(path, options);
  }

  /**
   * Returns scorecard statistics
   * GET /wfm-data/agents/scorecards
   */
  public async wfmAgentScorecard(options?: RequestOptions & { query?: { fields?: string; startDate: string; endDate: string; } }): Promise<{ agentStateHistory?: Array<{ businessUnitId?: number; businessUnitName?: string; agentId?: number; stateIndex?: number; startDate?: string; agentStateId?: number; agentSessionId?: number; skillId?: number; outStateId?: number; outStateDescription?: string; duration?: number; }>; }> {
    const path = `/wfm-data/agents/scorecards`;
    return this.client.get<{ agentStateHistory?: Array<{ businessUnitId?: number; businessUnitName?: string; agentId?: number; stateIndex?: number; startDate?: string; agentStateId?: number; agentSessionId?: number; skillId?: number; outStateId?: number; outStateDescription?: string; duration?: number; }>; }>(path, options);
  }

  /**
   * Returns agent-performance
   * GET /wfm-data/skills/agent-performance
   */
  public async wfmAgentPerformance(options?: RequestOptions & { query?: { startDate: string; endDate: string; fields?: string; } }): Promise<{ businessUnitId?: number; businessUnitName?: string; skillId?: number; skillName?: string; agentId?: number; firstName?: string; lastName?: string; halfHour?: number; totalHandled?: number; totalHandledTime?: number; totalACWTime?: number; }> {
    const path = `/wfm-data/skills/agent-performance`;
    return this.client.get<{ businessUnitId?: number; businessUnitName?: string; skillId?: number; skillName?: string; agentId?: number; firstName?: string; lastName?: string; halfHour?: number; totalHandled?: number; totalHandledTime?: number; totalACWTime?: number; }>(path, options);
  }

  /**
   * List of associated contacts by ID
   * GET /contacts/{contactId}/hierarchy
   */
  public async getContactsIdHierarchy(contactId: number, options?: RequestOptions): Promise<{ masterContactId?: number; childContacts?: Array<{ contactId?: number; startTime?: string; endTime?: string; }>; }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/hierarchy`;
    return this.client.get<{ masterContactId?: number; childContacts?: Array<{ contactId?: number; startTime?: string; endTime?: string; }>; }>(path, options);
  }
}
