import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class RealtimedataRealtimeService {
  constructor(private client: HttpClient) {}

  /**
   * Returns the current state for all Agents
   * GET /agents/states
   */
  public async getAgentStates(options?: RequestOptions & { query?: { updatedSince?: string; reqBUIds?: string; top?: number; skip?: number; fields?: string; orderBy?: string; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; agentStates?: Array<{ agentId?: number; agentStateId?: number; agentStateName?: string; agentStateCategory?: string; businessUnitId?: number; contactId?: number; contactStartHandleTime?: string; isActive?: boolean; isACW?: boolean; isOutbound?: boolean; firstName?: string; fromAddress?: string; lastName?: string; lastUpdateTime?: string; mediaTypeName?: string; mediaTypeId?: number; openContacts?: number; outStateDescription?: string; outStateId?: number; sessionStartTime?: string; skillId?: number; skillName?: string; startDate?: string; stationId?: number; stationPhoneNumber?: string; teamId?: number; teamName?: string; toAddress?: string; userName?: string; }>; }> {
    const path = `/agents/states`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; agentStates?: Array<{ agentId?: number; agentStateId?: number; agentStateName?: string; agentStateCategory?: string; businessUnitId?: number; contactId?: number; contactStartHandleTime?: string; isActive?: boolean; isACW?: boolean; isOutbound?: boolean; firstName?: string; fromAddress?: string; lastName?: string; lastUpdateTime?: string; mediaTypeName?: string; mediaTypeId?: number; openContacts?: number; outStateDescription?: string; outStateId?: number; sessionStartTime?: string; skillId?: number; skillName?: string; startDate?: string; stationId?: number; stationPhoneNumber?: string; teamId?: number; teamName?: string; toAddress?: string; userName?: string; }>; }>(path, options);
  }

  /**
   *  Gets a JSON object client data
   * GET /agents/client-data
   */
  public async getAgentsClientData(options?: RequestOptions & { query?: { agentId?: number; errorArgList?: string; } }): Promise<{ data?: string; }> {
    const path = `/agents/client-data`;
    return this.client.get<{ data?: string; }>(path, options);
  }

  /**
   *  Updates or inserts a clientData record
   * PUT /agents/client-data
   */
  public async putAgentsClientData(options?: RequestOptions & { query?: { agentId?: number; dataSet?: string; } }): Promise<any> {
    const path = `/agents/client-data`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Returns the current state for an Agent
   * GET /agents/{agentId}/states
   */
  public async getAgentStateByid(agentId: number, options?: RequestOptions & { query?: { updatedSince?: string; fields?: string; } }): Promise<{ agentStates?: Array<{ agentId?: number; agentStateId?: number; agentStateName?: "LoggedOut" | "Available" | "Unavailable" | "InboundContact" | "OutboundContact" | "InboundConsult" | "OutboundConsult" | "Dialer" | "LoggedIn"; businessUnitId?: number; contactId?: number; isACW?: boolean; isOutbound?: boolean; firstName?: string; fromAddress?: string; lastName?: string; lastPollTime?: string; lastUpdateTime?: string; mediaName?: string; mediaType?: number; openContacts?: number; outStateDescription?: string; outStateId?: number; skillId?: number; skillName?: string; startDate?: string; stationId?: number; stationPhoneNumber?: string; teamId?: number; teamName?: string; toAddress?: string; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/states`;
    return this.client.get<{ agentStates?: Array<{ agentId?: number; agentStateId?: number; agentStateName?: "LoggedOut" | "Available" | "Unavailable" | "InboundContact" | "OutboundContact" | "InboundConsult" | "OutboundConsult" | "Dialer" | "LoggedIn"; businessUnitId?: number; contactId?: number; isACW?: boolean; isOutbound?: boolean; firstName?: string; fromAddress?: string; lastName?: string; lastPollTime?: string; lastUpdateTime?: string; mediaName?: string; mediaType?: number; openContacts?: number; outStateDescription?: string; outStateId?: number; skillId?: number; skillName?: string; startDate?: string; stationId?: number; stationPhoneNumber?: string; teamId?: number; teamName?: string; toAddress?: string; }>; }>(path, options);
  }

  /**
   * Returns Active Contacts
   * GET /contacts/active
   */
  public async activeContacts(options?: RequestOptions & { query?: { updatedSince?: string; fields?: string; mediaSubTypeId?: number; mediaTypeId?: number; skillId?: number; campaignId?: number; agentId?: number; teamId?: number; orderBy?: string; toAddress?: string; fromAddress?: string; digitalContactStateId?: number; stateId?: number; top?: number; skip?: number; contactId?: string; } }): Promise<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; activeContacts?: Array<{ agentId?: number; agentStartDate?: string; campaignId?: number; campaignName?: string; contactId?: number; contactStartDate?: number; digitalContactStateName?: string; digitalContactStateId?: number; fileName?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; isLogged?: boolean; isOutbound?: boolean; isTakeover?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: string; routingAttribute?: number; skillId?: number; skillName?: string; stateName?: string; stateId?: number; contactStateCategory?: string; targetAgentId?: number; teamId?: number; teamName?: string; toAddress?: string; transferIndicatorId?: number; transferIndicatorName?: string; }>; }> {
    const path = `/contacts/active`;
    return this.client.get<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; activeContacts?: Array<{ agentId?: number; agentStartDate?: string; campaignId?: number; campaignName?: string; contactId?: number; contactStartDate?: number; digitalContactStateName?: string; digitalContactStateId?: number; fileName?: string; firstName?: string; fromAddress?: string; highProficiency?: number; holdCount?: number; isLogged?: boolean; isOutbound?: boolean; isTakeover?: boolean; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; mediaTypeId?: number; mediaTypeName?: string; pointOfContactId?: number; pointOfContactName?: string; routingAttribute?: number; skillId?: number; skillName?: string; stateName?: string; stateId?: number; contactStateCategory?: string; targetAgentId?: number; teamId?: number; teamName?: string; toAddress?: string; transferIndicatorId?: number; transferIndicatorName?: string; }>; }>(path, options);
  }

  /**
   * Returns Parked Contacts
   * GET /contacts/parked
   */
  public async parkedContactDetails(options?: RequestOptions & { query?: { updatedSince?: string; fields?: string; mediaTypeId?: number; skillId?: number; campaignId?: number; agentId?: number; teamId?: number; toAddr?: string; fromAddr?: string; } }): Promise<{ resultSet?: { businessUnitId?: number; lastPollTime?: string; parkedContacts?: Array<Record<string, any>>; }; }> {
    const path = `/contacts/parked`;
    return this.client.get<{ resultSet?: { businessUnitId?: number; lastPollTime?: string; parkedContacts?: Array<Record<string, any>>; }; }>(path, options);
  }

  /**
   * Returns active Contacts states
   * GET /contacts/states
   */
  public async getContactsStates(options?: RequestOptions & { query?: { updatedSince?: string; fields?: string; agentId?: number; orderBy?: string; top?: number; skip?: number; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; contactStates?: Array<{ agentId?: number; campaignName?: string; campaignId?: number; contactId?: number; contactStateId?: number; contactStateName?: string; digitalContactStateName?: string; digitalContactStateId?: number; firstName?: string; fromAddress?: string; highProficiency?: number; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaTypeName?: string; mediaTypeId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; routingAttribute?: number; skillName?: string; skillId?: number; startDate?: string; teamId?: number; teamName?: string; toAddress?: string; }>; }> {
    const path = `/contacts/states`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; contactStates?: Array<{ agentId?: number; campaignName?: string; campaignId?: number; contactId?: number; contactStateId?: number; contactStateName?: string; digitalContactStateName?: string; digitalContactStateId?: number; firstName?: string; fromAddress?: string; highProficiency?: number; lastName?: string; lastUpdateTime?: string; lowProficiency?: number; masterContactId?: number; mediaTypeName?: string; mediaTypeId?: number; mediaSubTypeId?: number; mediaSubTypeName?: string; routingAttribute?: number; skillName?: string; skillId?: number; startDate?: string; teamId?: number; teamName?: string; toAddress?: string; }>; }>(path, options);
  }

  /**
   *  Returns activity for all Skills
   * GET /skills/activity
   */
  public async skillActivity(options?: RequestOptions & { query?: { mediaTypeId?: number; IsOutbound?: boolean; fields?: string; updatedSince?: string; skip?: number; top?: number; } }): Promise<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; lastPollTime?: string; skillActivity?: Array<{ serverTime?: string; businessUnitId?: number; agentsACW?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; campaignId?: number; campaignName?: string; contactsActive?: number; earliestQueueTime?: string; emailFromAddress?: string; isActive?: boolean; inSLA?: number; isNaturalCalling?: boolean; isOutbound?: boolean; mediaTypeId?: number; mediaTypeName?: string; outSLA?: number; queueCount?: number; serviceLevel?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; skillName?: string; skillId?: number; skillQueueCount?: number; personalQueueCount?: number; parkedCount?: number; divisionNo?: number; }>; }> {
    const path = `/skills/activity`;
    return this.client.get<{ totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; lastPollTime?: string; skillActivity?: Array<{ serverTime?: string; businessUnitId?: number; agentsACW?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; campaignId?: number; campaignName?: string; contactsActive?: number; earliestQueueTime?: string; emailFromAddress?: string; isActive?: boolean; inSLA?: number; isNaturalCalling?: boolean; isOutbound?: boolean; mediaTypeId?: number; mediaTypeName?: string; outSLA?: number; queueCount?: number; serviceLevel?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; skillName?: string; skillId?: number; skillQueueCount?: number; personalQueueCount?: number; parkedCount?: number; divisionNo?: number; }>; }>(path, options);
  }

  /**
   * Search current activity levels for skills or campaign
   * POST /skills/activity/search
   */
  public async postSkillsActivitySearch(data?: { fields?: string; top?: number; skip?: number; filter?: { updatedSince?: string; mediaTypeId?: string; isOutbound?: string; skillIds?: Array<number>; campaignIds?: Array<number>; }; }, options?: RequestOptions): Promise<{ serverTime?: string; businessUnitId?: number; agentsACW?: number; agentsAvaliable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavaliable?: number; agentsWorking?: number; campaignId?: number; campaignName?: string; contactsActive?: number; earliestQueueTime?: string; emailFromAddress?: string; isActive?: boolean; isNaturalCalling?: boolean; isOutbound?: boolean; mediaTypeId?: number; mediaTypeName?: string; queueCount?: number; serviceLevel?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; skillName?: string; skillId?: number; skillQueueCount?: number; personalQueueCount?: number; parkedCount?: number; divisionNo?: number; }> {
    const path = `/skills/activity/search`;
    return this.client.post<{ serverTime?: string; businessUnitId?: number; agentsACW?: number; agentsAvaliable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavaliable?: number; agentsWorking?: number; campaignId?: number; campaignName?: string; contactsActive?: number; earliestQueueTime?: string; emailFromAddress?: string; isActive?: boolean; isNaturalCalling?: boolean; isOutbound?: boolean; mediaTypeId?: number; mediaTypeName?: string; queueCount?: number; serviceLevel?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; skillName?: string; skillId?: number; skillQueueCount?: number; personalQueueCount?: number; parkedCount?: number; divisionNo?: number; }>(path, data, options);
  }

  /**
   *  Returns activity for a Skill
   * GET /skills/{skillId}/activity
   */
  public async skillActivityById(skillId: number, options?: RequestOptions & { query?: { fields?: string; updatedSince?: string; } }): Promise<{ lastPollTime?: string; skillActivity?: Array<{ serverTime?: string; businessUnitId?: number; agentsACW?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; campaignId?: number; campaignName?: string; contactsActive?: number; earliestQueueTime?: string; emailFromAddress?: string; isActive?: boolean; inSLA?: number; isNaturalCalling?: boolean; isOutbound?: boolean; mediaTypeId?: number; mediaTypeName?: string; outSLA?: number; queueCount?: number; serviceLevel?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; skillName?: string; skillId?: number; skillQueueCount?: number; personalQueueCount?: number; parkedCount?: number; }>; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/activity`;
    return this.client.get<{ lastPollTime?: string; skillActivity?: Array<{ serverTime?: string; businessUnitId?: number; agentsACW?: number; agentsAvailable?: number; agentsIdle?: number; agentsLoggedIn?: number; agentsUnavailable?: number; agentsWorking?: number; campaignId?: number; campaignName?: string; contactsActive?: number; earliestQueueTime?: string; emailFromAddress?: string; isActive?: boolean; inSLA?: number; isNaturalCalling?: boolean; isOutbound?: boolean; mediaTypeId?: number; mediaTypeName?: string; outSLA?: number; queueCount?: number; serviceLevel?: number; serviceLevelGoal?: number; serviceLevelThreshold?: number; skillName?: string; skillId?: number; skillQueueCount?: number; personalQueueCount?: number; parkedCount?: number; }>; }>(path, options);
  }

  /**
   *  Returns contact summary for personal queue
   * GET /agents/{agentId}/queues
   */
  public async agentsAgentIdQueues(agentId: number, options?: RequestOptions & { query?: { fields?: string; } }): Promise<{ resultset?: { lastPollTime?: string; queues?: Array<Record<string, any>>; }; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/queues`;
    return this.client.get<{ resultset?: { lastPollTime?: string; queues?: Array<Record<string, any>>; }; }>(path, options);
  }

  /**
   *  Returns contact detail for personal queue agent
   * GET /agents/{agentId}/queues-detail
   */
  public async agentsAgentIdsQueuesDetails(agentId: number, options?: RequestOptions & { query?: { fields?: string; } }): Promise<{ resultSet?: { contacts?: Array<Record<string, any>>; lastPollTime?: string; }; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/queues-detail`;
    return this.client.get<{ resultSet?: { contacts?: Array<Record<string, any>>; lastPollTime?: string; }; }>(path, options);
  }
}
