import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface AdminSkills_GetOutBoundSkillSettingsResponse { minimumRetryMinutes?: number; maximumAttempts?: number; defaultContactExpiration?: number; getPriorityContactsOnContactInsertion?: boolean; loadCallbacks?: boolean; loadFresh?: boolean; loadNonFresh?: boolean; overrideBusinessUnitAbandonRate?: boolean; maximumRingingDuration?: number; beginDampenPercentage?: number; abandonRateCutoff?: number; abandonRateThreshold?: number; inactiveBlenderTimer?: number; maximumRatio?: number; aggressiveness?: string; endOfListNotificationsDelay?: number; notifyAgentsWhenListIsEmpty?: boolean; percentageOfAgentsBeforeOverdial?: number; blockMultipleCalls?: boolean; consecutiveAttemptsWithoutALiveConnect?: number; enableDialingByProficiency?: boolean; proficiencyFactor?: number; waitTimeFactor?: number; maxConcurrentCallsPerAgent?: number; maxWaitTimeSeconds?: number; deliverCallbacksOnDNCHolidays?: boolean; deliverPrioritiesOnDNCHolidays?: boolean; }

export interface AdminSkills_UpdateSkillGenral { generalSettings: { minimumRetryMinutes?: number; maximumAttempts?: number; defaultContactExpiration?: number; getPriorityContactsOnContactInsertion?: boolean; loadCallbacks?: boolean; loadFresh?: boolean; loadNonFresh?: boolean; overrideBusinessUnitAbandonRate?: boolean; maximumRingingDuration?: number; beginDampenPercentage?: number; abandonRateCutoff?: number; abandonRateThreshold?: number; inactiveBlenderTimer?: number; maximumRatio?: number; aggressiveness?: string; endOfListNotificationsDelay?: number; notifyAgentsWhenListIsEmpty?: boolean; percentageOfAgentsBeforeOverdial?: number; blockMultipleCalls?: boolean; consecutiveAttemptsWithoutALiveConnect?: number; enableDialingByProficiency?: boolean; proficiencyFactor?: number; waitTimeFactor?: number; maxConcurrentCallsPerAgent?: number; maxWaitTimeSeconds?: number; deliverCallbacksOnDNCHolidays?: boolean; deliverPrioritiesOnDNCHolidays?: boolean; }; }

export interface AdminSkills_getSkillAgentsResponse { _links?: { self?: string; next?: string; previous?: string; }; lastPollTime: string; businessUnitId: number; totalRecords: number; hiddenAgents?: number; agentSkillAssignments?: Array<{ agentId: number; userId?: string; firstName: string; middleName: string; lastName: string; agentProficiencyValue: number; agentProficiencyName: string; agentSklStatus?: string; campaignId: number; campaignName: string; emailFromAddress: string; internalId: string; isActive: boolean; isAssigned?: boolean; isSkillActive: boolean; isDialer: boolean; isNaturalCalling: boolean; isNaturalCallingRunning: boolean; isOutbound: boolean; lastUpdateTime: string; mediaTypeId: number; mediaTypeName: string; notes: string; outboundStrategy: string; priorityBlending: boolean; requireDisposition: boolean; scriptDisposition: boolean; skillId: number; skillName: string; teamId: number; teamName: string; useACW: boolean; useDisposition: boolean; useSecondaryDispositions: boolean; screenPopTriggerEvent: string; }>; }

export interface AdminSkills_postSkillAgentsRequest { agents: Array<{ agentId: string; isActive?: boolean; proficiency?: number; }>; }

export interface AdminSkills_postSkillAgentsResponse { resultSet: { errorCount: number; agentResults: Array<Record<string, any>>; }; }

export interface AdminSkills_deleteSkillAgentsResponse { resultSet: { errorCount: number; agentResults: Array<Record<string, any>>; }; }

export interface AdminSkills_getSkillAgentsUnassignedResponse { resultSet: { _links?: { self?: string; next?: string; previous?: string; }; totalRecords: number; agents?: Array<Record<string, any>>; }; }

export interface AdminSkills_getSkillsCallDataResponse { SkillCallData: { SkillName: string; SkillId: number; BusinessUnitId: number; EnteredQueueContacts: number; OfferedContacts: number; AnsweredContacts: number; AnsweredServiceLevelContacts: number; AbandonedContacts: number; AbandonedTime: number; AverageAbandonedTime: number; AverageACDTime: number; AverageHandleTime: number; AverageSpeedAnswerTime: number; }; }

export interface AdminSkills_getSkillDispositionsResponse { totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; skillId?: number; skillName?: string; dispositions?: Array<{ dispositionId?: number; dispositionName?: string; displayOrder?: number; classification?: string; reportingGroup?: string; systemOutcome?: string; requireCommitmentAmount?: boolean; requireRescheduleDate?: boolean; agentSpecific?: boolean; isPreviewDisposition?: boolean; dispositionCategoryName?: string; }>; }

export interface AdminSkills_getSkillDispositionsUnassignedResponse { totalRecords?: number; dispositions?: Array<{ dispositionId: number; dispositionName: string; displayOrder?: number; classification: string; reportingGroup: string; systemOutcome: string; requireCommitmentAmount: boolean; requireRescheduleDate: boolean; agentSpecific: boolean; isPreviewDisposition?: boolean; }>; }

export interface AdminSkills_getSkillTagsResponse { totalRecords?: number; _links?: { self: string; next?: string; previous?: string; }; resultSet?: { skillId?: string; skillName?: string; tags?: Array<Record<string, any>>; }; }

export interface AdminSkills_postSkillTagsRequest { tags: Array<{ tagId: number; }>; }

export interface AdminSkills_postSkillTagsResponse { resultSet: { errorCount: number; tagResults: Array<Record<string, any>>; }; }

export interface AdminSkills_deleteSkillTagsResponse { errorCount?: string; tagResults?: Array<{ success?: string; tagId?: string; error?: string; }>; }

export class AdminSkillsService {
  constructor(private client: HttpClient) {}

  /**
   * Updated in v33.0 Returns a list of paginated Campaigns
   * GET /campaigns
   */
  public async getCampaigns(options?: RequestOptions): Promise<{ totalRecords?: number; businessUnitId?: number; campaigns?: Array<{ id?: number; name?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; }>; }> {
    const path = `/campaigns`;
    return this.client.get<{ totalRecords?: number; businessUnitId?: number; campaigns?: Array<{ id?: number; name?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; }>; }>(path, options);
  }

  /**
   * Creates a campaign
   * POST /campaigns
   */
  public async postCampaigns(data: { name: string; divisionId?: number; notes?: string; description?: string; isActive?: boolean; }, options?: RequestOptions): Promise<{ id?: number; }> {
    const path = `/campaigns`;
    return this.client.post<{ id?: number; }>(path, data, options);
  }

  /**
   * Updated in v33.0 Returns the details of a campaign by ID
   * GET /campaigns/{campaignId}
   */
  public async getCampaignsId(campaignId: string, options?: RequestOptions): Promise<{ id?: number; name?: string; divisionId?: number; notes?: string; description?: string; isActive?: boolean; lastUpdateTime?: string; }> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}`;
    return this.client.get<{ id?: number; name?: string; divisionId?: number; notes?: string; description?: string; isActive?: boolean; lastUpdateTime?: string; }>(path, options);
  }

  /**
   * Updated in v33.0 Campaign Update
   * PUT /campaigns/{campaignId}
   */
  public async putCampaignsId(campaignId: string, data: { name: string; divisionId?: number; notes?: string; description?: string; isActive?: boolean; }, options?: RequestOptions): Promise<any> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Updated in v33.0 Returns a list of unassigned skills to a campaign
   * GET /campaigns/{campaignId}/skills/unassigned
   */
  public async getCampaignsIdSkillsUnassigned(campaignId: string, options?: RequestOptions): Promise<{ businessUnitId?: number; totalRecords?: number; skills?: Array<{ mediaType?: number; mediaName?: string; skillId?: number; skillName?: string; }>; }> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/skills/unassigned`;
    return this.client.get<{ businessUnitId?: number; totalRecords?: number; skills?: Array<{ mediaType?: number; mediaName?: string; skillId?: number; skillName?: string; }>; }>(path, options);
  }

  /**
   * Updated in v33.0 Update a Campaign status
   * PATCH /campaigns/{campaignId}/status
   */
  public async patchCampaignsIdStatus(campaignId: string, options?: RequestOptions): Promise<any> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/status`;
    return this.client.patch<any>(path, undefined, options);
  }

  /**
   * Returns a list of audit entries for a campaign
   * GET /campaigns/{campaignId}/audit-history
   */
  public async getCampaignsIdAuditHistory(campaignId: string, options?: RequestOptions): Promise<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryEntries?: Array<{ auditHistoryId?: number; columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/audit-history`;
    return this.client.get<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryEntries?: Array<{ auditHistoryId?: number; columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }>(path, options);
  }

  /**
   *   Returns a list of dispositions with skill assignment
   * GET /dispositions/skills
   */
  public async getDispositionsSkills(options?: RequestOptions): Promise<{ dispositionId?: number; dispositionName?: string; isActive?: boolean; skills?: Array<{ skillId?: number; mediaTypeId?: number; mediaTypeName?: number; }>; }> {
    const path = `/dispositions/skills`;
    return this.client.get<{ dispositionId?: number; dispositionName?: string; isActive?: boolean; skills?: Array<{ skillId?: number; mediaTypeId?: number; mediaTypeName?: number; }>; }>(path, options);
  }

  /**
   * Get a Disposition By Id
   * GET /dispositions/{dispositionId}
   */
  public async getDispositionsId(dispositionId: string, options?: RequestOptions): Promise<{ dispositionId: number; dispositionName?: string; classificationId?: number; classificationName?: string; isActive?: boolean; dialerAgentOutcomeId?: number; dialerAgentOutcomeName?: string; reportingGroupId?: number; showCommitmentAmount?: boolean; showRescheduleDate?: boolean; isAgentSpecific?: boolean; notes?: string; lastUpdated?: string; systemOutcome?: string; isPreviewDisposition?: boolean; }> {
    const path = `/dispositions/${encodeURIComponent(String(dispositionId))}`;
    return this.client.get<{ dispositionId: number; dispositionName?: string; classificationId?: number; classificationName?: string; isActive?: boolean; dialerAgentOutcomeId?: number; dialerAgentOutcomeName?: string; reportingGroupId?: number; showCommitmentAmount?: boolean; showRescheduleDate?: boolean; isAgentSpecific?: boolean; notes?: string; lastUpdated?: string; systemOutcome?: string; isPreviewDisposition?: boolean; }>(path, options);
  }

  /**
   * Update an existing Disposition
   * PUT /dispositions/{dispositionId}
   */
  public async putDispositionsId(dispositionId: string, data: { dispositionName?: string; classificationId?: number; isPreviewDisposition?: boolean; isActive?: boolean; notes?: string; }, options?: RequestOptions): Promise<any> {
    const path = `/dispositions/${encodeURIComponent(String(dispositionId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Updated in v33.0 Returns a list of skills assigned to a disposition
   * GET /dispositions/{dispositionId}/skills
   */
  public async getDispositionsIdSkills(dispositionId: string, options?: RequestOptions): Promise<{ totalRecords?: number; businessUnitId?: number; skills?: Array<{ skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; campaignId?: number; campaignName?: string; direction?: string; sla?: string; skillStatus?: number; }>; }> {
    const path = `/dispositions/${encodeURIComponent(String(dispositionId))}/skills`;
    return this.client.get<{ totalRecords?: number; businessUnitId?: number; skills?: Array<{ skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; campaignId?: number; campaignName?: string; direction?: string; sla?: string; skillStatus?: number; }>; }>(path, options);
  }

  /**
   *  Returns a list of disposition classifications
   * GET /dispositions/classifications
   */
  public async dispostionClassifications(options?: RequestOptions & { query?: { classificationType?: number; direction?: number; isPreviewDisposition?: boolean; } }): Promise<{ totalRecords?: number; businessUnitId?: number; classificationResults?: Array<{ classificationId: number; businessUnitId?: number; classificationName?: string; classificationTypeID?: number; direction?: number; dialingOutcomeId?: number; reportingGroupId?: number; description?: string; showCommitmentAmount?: boolean; showRescheduleDate?: boolean; isAgentSpecific?: boolean; isDestinationFinal?: boolean; isContactFinal?: boolean; excludeFromSerialDelivery?: boolean; carryoverForCallback?: boolean; reportingGroupName?: string; isPreviewDisposition?: boolean; classificationLocalizationKey?: string; dialingOutcomeLocalizationKey?: string; reportingGroupLocalizationKey?: string; }>; }> {
    const path = `/dispositions/classifications`;
    return this.client.get<{ totalRecords?: number; businessUnitId?: number; classificationResults?: Array<{ classificationId: number; businessUnitId?: number; classificationName?: string; classificationTypeID?: number; direction?: number; dialingOutcomeId?: number; reportingGroupId?: number; description?: string; showCommitmentAmount?: boolean; showRescheduleDate?: boolean; isAgentSpecific?: boolean; isDestinationFinal?: boolean; isContactFinal?: boolean; excludeFromSerialDelivery?: boolean; carryoverForCallback?: boolean; reportingGroupName?: string; isPreviewDisposition?: boolean; classificationLocalizationKey?: string; dialingOutcomeLocalizationKey?: string; reportingGroupLocalizationKey?: string; }>; }>(path, options);
  }

  /**
   *  Change status of existing Disposition By Id
   * PATCH /dispositions/{dispositionId}/status
   */
  public async patchStatusByDispositionsId(dispositionId: string, options?: RequestOptions): Promise<any> {
    const path = `/dispositions/${encodeURIComponent(String(dispositionId))}/status`;
    return this.client.patch<any>(path, undefined, options);
  }

  /**
   *  Returns a list of audit entries for Dispositions
   * GET /dispositions/{dispositionId}/audit-history
   */
  public async getDispositionsIdAuditHistory(dispositionId: string, options?: RequestOptions): Promise<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryRecords?: Array<{ auditHistoryID?: number; columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }> {
    const path = `/dispositions/${encodeURIComponent(String(dispositionId))}/audit-history`;
    return this.client.get<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryRecords?: Array<{ auditHistoryID?: number; columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }>(path, options);
  }

  /**
   * Get Skills
   * GET /skills
   */
  public async getSkills(options?: RequestOptions & { query?: { mediaTypeId?: number; outboundStrategy?: string; } }): Promise<any> {
    const path = `/skills`;
    return this.client.get<any>(path, options);
  }

  /**
   * Creates a Skill
   * POST /skills
   */
  public async postSkills(data: { skills?: Array<{ mediaTypeId?: number; skillName?: string; divisionNo?: number; isOutbound?: boolean; outboundStrategy?: string; outboundTelecomRouteId?: number; campaignId?: number; callerIdOverride?: string; emailFromAddress?: string; emailFromEditable?: boolean; emailBccAddress?: string; FocusMetric?: number; EquityLevel?: number; FocusLock?: number; FallbackTime?: number; scriptId?: number; reskillHours?: number; minWFIAgents?: number; minWFIAvailableAgents?: number; requireManualAccept?: boolean; interruptible?: boolean; enableParking?: boolean; minWorkingTime?: number; agentless?: boolean; agentlessPorts?: number; notes?: string; acwTypeId?: number; requireDisposition?: boolean; allowSecondaryDisposition?: boolean; stateIdACW?: number; maxSecondsACW?: number; agentRestTime?: number; displayThankyou?: boolean; thankYouLink?: string; popThankYou?: boolean; popThankYouURL?: string; makeTranscriptAvailable?: boolean; transcriptFromAddress?: string; priorityBlending?: boolean; callSuppressionScriptId?: number; useScreenPops?: boolean; screenPopTriggerEvent?: number; useCustomScreenPops?: boolean; screenPopType?: string; screenPopDetails?: string; initialPriority?: number; acceleration?: number; maxPriority?: number; serviceLevelThreshold?: number; serviceLevelGoal?: number; enableShortAbandon?: boolean; shortAbandonThreshold?: number; countShortAbandons?: boolean; chatWarningThreshold?: number; agentTypingIndicator?: boolean; patronTypingPreview?: boolean; smsTransportCodeId?: number; messageTemplateId?: number; dispositions?: Array<Record<string, any>>; deliverMultipleNumbersSerially?: boolean; cradleToGrave?: boolean; priorityInterrupt?: boolean; acwPostTimeoutStateId?: number; workItemQueueType?: string; evaluationCriteria?: number; }>; }, options?: RequestOptions): Promise<{ errorCount?: number; skillsResults?: Array<{ success?: boolean; error?: string; }>; }> {
    const path = `/skills`;
    return this.client.post<{ errorCount?: number; skillsResults?: Array<{ success?: boolean; error?: string; }>; }>(path, data, options);
  }

  /**
   *  Get skills settings list
   * GET /skills/parameters
   */
  public async getSkillsParameters(options?: RequestOptions): Promise<{ skills?: Array<{ skillName?: string; skillNo?: number; generalSettings?: Record<string, any>; cadenceSettings?: Record<string, any>; deliveryPreferences?: Record<string, any>; callingLists?: Array<Record<string, any>>; cpaSettings?: Record<string, any>; retrySettings?: Record<string, any>; filterSettings?: Record<string, any>; listManagementSettings?: Record<string, any>; scheduleSettings?: Record<string, any>; timeZoneSettings?: Array<Record<string, any>>; xsSettings?: Record<string, any>; }>; }> {
    const path = `/skills/parameters`;
    return this.client.get<{ skills?: Array<{ skillName?: string; skillNo?: number; generalSettings?: Record<string, any>; cadenceSettings?: Record<string, any>; deliveryPreferences?: Record<string, any>; callingLists?: Array<Record<string, any>>; cpaSettings?: Record<string, any>; retrySettings?: Record<string, any>; filterSettings?: Record<string, any>; listManagementSettings?: Record<string, any>; scheduleSettings?: Record<string, any>; timeZoneSettings?: Array<Record<string, any>>; xsSettings?: Record<string, any>; }>; }>(path, options);
  }

  /**
   * Get Skill details
   * GET /skills/{skillId}
   */
  public async getSkillsId(skillId: string, options?: RequestOptions): Promise<{ skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; workItemQueueType?: string; isActive?: boolean; campaignId?: number; campaignName?: string; notes?: string; acwTypeId?: number; agentFirstResponseTime?: number; agentFollowOnResponseTime?: number; agentResponseEnabled?: boolean; customerIdleTime?: number; customerResponseEnabled?: boolean; IsSubSkill?: boolean; PresentAcceptReject?: boolean; routingQueueId?: number; TenantId?: string; timeExtensionEnabled?: boolean; stateIdACW?: number; stateNameACW?: string; maxSecondsACW?: number; acwPostTimeoutStateId?: number; acwPostTimeoutStateName?: string; requireDisposition?: boolean; allowSecondaryDisposition?: boolean; agentRestTime?: number; makeTranscriptAvailable?: boolean; transcriptFromAddress?: string; displayThankyou?: boolean; thankYouLink?: string; popThankYou?: boolean; popThankYouURL?: string; isOutbound?: boolean; outboundStrategy?: string; isRunning?: boolean; priorityBlending?: boolean; callerIdOverride?: string; scriptId?: number; scriptName?: string; emailFromAddress?: string; emailFromEditable?: boolean; emailBccAddress?: string; emailParking?: boolean; EquityLevel?: number; evaluationCriteria?: number; FallbackTime?: number; FocusLock?: number; FocusMetric?: number; chatWarningThreshold?: number; agentTypingIndicator?: boolean; patronTypingPreview?: boolean; interruptible?: boolean; callSuppressionScriptId?: number; reskillHours?: number; reskillHoursName?: string; countReskillHours?: boolean; minWFIAgents?: number; minWFIAvailableAgents?: number; useScreenPops?: boolean; screenPopTriggerEvent?: string; useCustomScreenPops?: boolean; screenPopDetail?: string; minWorkingTime?: number; agentless?: boolean; agentlessPorts?: number; initialPriority?: number; acceleration?: number; maxPriority?: number; serviceLevelThreshold?: number; serviceLevelGoal?: number; enableShortAbandon?: boolean; shortAbandonThreshold?: number; countShortAbandons?: boolean; messageTemplateId?: number; smsTransportCodeId?: number; smsTransportCode?: string; dispositions?: Array<{ dispositionId?: number; dispositionName?: string; priority?: number; isPreviewDisposition?: boolean; }>; deliverMultipleNumbersSerially?: boolean; cradleToGrave?: boolean; priorityInterrupt?: boolean; outboundTelecomRouteId?: number; requireManualAccept?: boolean; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}`;
    return this.client.get<{ skillId?: number; skillName?: string; mediaTypeId?: number; mediaTypeName?: string; workItemQueueType?: string; isActive?: boolean; campaignId?: number; campaignName?: string; notes?: string; acwTypeId?: number; agentFirstResponseTime?: number; agentFollowOnResponseTime?: number; agentResponseEnabled?: boolean; customerIdleTime?: number; customerResponseEnabled?: boolean; IsSubSkill?: boolean; PresentAcceptReject?: boolean; routingQueueId?: number; TenantId?: string; timeExtensionEnabled?: boolean; stateIdACW?: number; stateNameACW?: string; maxSecondsACW?: number; acwPostTimeoutStateId?: number; acwPostTimeoutStateName?: string; requireDisposition?: boolean; allowSecondaryDisposition?: boolean; agentRestTime?: number; makeTranscriptAvailable?: boolean; transcriptFromAddress?: string; displayThankyou?: boolean; thankYouLink?: string; popThankYou?: boolean; popThankYouURL?: string; isOutbound?: boolean; outboundStrategy?: string; isRunning?: boolean; priorityBlending?: boolean; callerIdOverride?: string; scriptId?: number; scriptName?: string; emailFromAddress?: string; emailFromEditable?: boolean; emailBccAddress?: string; emailParking?: boolean; EquityLevel?: number; evaluationCriteria?: number; FallbackTime?: number; FocusLock?: number; FocusMetric?: number; chatWarningThreshold?: number; agentTypingIndicator?: boolean; patronTypingPreview?: boolean; interruptible?: boolean; callSuppressionScriptId?: number; reskillHours?: number; reskillHoursName?: string; countReskillHours?: boolean; minWFIAgents?: number; minWFIAvailableAgents?: number; useScreenPops?: boolean; screenPopTriggerEvent?: string; useCustomScreenPops?: boolean; screenPopDetail?: string; minWorkingTime?: number; agentless?: boolean; agentlessPorts?: number; initialPriority?: number; acceleration?: number; maxPriority?: number; serviceLevelThreshold?: number; serviceLevelGoal?: number; enableShortAbandon?: boolean; shortAbandonThreshold?: number; countShortAbandons?: boolean; messageTemplateId?: number; smsTransportCodeId?: number; smsTransportCode?: string; dispositions?: Array<{ dispositionId?: number; dispositionName?: string; priority?: number; isPreviewDisposition?: boolean; }>; deliverMultipleNumbersSerially?: boolean; cradleToGrave?: boolean; priorityInterrupt?: boolean; outboundTelecomRouteId?: number; requireManualAccept?: boolean; }>(path, options);
  }

  /**
   * Updates a Skill
   * PUT /skills/{skillId}
   */
  public async putSkillsId(skillId: number, data?: { skill: { skillName?: string; mediatypeid?: number; divisionNo?: number; campaignId?: number; callerIdOverride?: string; emailFromAddress?: string; emailFromEditable?: boolean; emailBccAddress?: string; scriptId?: number; reskillHours?: number; minWFIAgents?: number; minWFIAvailableAgents?: number; requireManualAccept?: boolean; interruptible?: boolean; isActive?: boolean; enableParking?: boolean; minWorkingTime?: number; agentless?: boolean; agentlessPorts?: number; notes?: string; acwTypeId?: number; requireDisposition?: boolean; allowSecondaryDisposition?: boolean; stateIdACW?: number; maxSecondsACW?: number; agentRestTime?: number; displayThankyou?: boolean; thankYouLink?: string; popThankYou?: boolean; popThankYouUrl?: string; makeTranscriptAvailable?: boolean; transcriptFromAddress?: string; priorityBlending?: boolean; callSuppressionScriptId?: number; useScreenPops?: boolean; screenPopTriggerEvent?: number; useCustomScreenPops?: boolean; screenPopType?: string; screenPopDetails?: string; initialPriority?: number; acceleration?: number; maxPriority?: number; serviceLevelThreshold?: number; serviceLevelGoal?: number; enableShortAbandon?: boolean; shortAbandonThreshold?: number; countShortAbandons?: boolean; chatWarningThreshold?: number; agentTypingIndicator?: boolean; patronTypingIndicator?: boolean; smsTransportCodeId?: number; messageTemplateId?: number; dispositions?: Array<Record<string, any>>; deliverMultipleNumbersSerially?: boolean; cradleToGrave?: boolean; priorityInterrupt?: boolean; acwPostTimeoutStateId?: number; outboundTelecomRouteId?: number; evaluationCriteria?: number; EquityLevel?: number; FallbackTime?: number; FocusLock?: number; FocusMetric?: number; }; }, options?: RequestOptions): Promise<{ success?: boolean; skillId?: number; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}`;
    return this.client.put<{ success?: boolean; skillId?: number; }>(path, data, options);
  }

  /**
   *  Get skill settings
   * GET /skills/{skillId}/parameters
   */
  public async getSkillsIdParameters(skillId: number, options?: RequestOptions): Promise<{ skillName?: string; skillNo?: number; generalSettings?: { minimumRetryMinutes?: number; maximumAttempts?: number; defaultContactExpiration?: number; getPriorityContactsOnContactInsertion?: boolean; loadCallbacks?: boolean; loadFresh?: boolean; loadNonFresh?: boolean; overrideBusinessUnitAbandonRate?: boolean; maximumRingingDuration?: number; beginDampenPercentage?: number; abandonRateCutoff?: number; abandonRateThreshold?: number; inactiveBlenderTimer?: number; maximumRatio?: number; aggressiveness?: number; endOfListNotificationsDelay?: number; notifyAgentsWhenListIsEmpty?: boolean; percentageOfAgentsBeforeOverdial?: number; blockMultipleCalls?: boolean; consecutiveAttemptsWithoutALiveConnect?: number; enableDialingByProficiency?: boolean; proficiencyFactor?: number; waitTimeFactor?: boolean; maxConcurrentCallsPerAgent?: number; maxWaitTimeSeconds?: number; }; cadenceSettings?: { cadenceMaximumAttempts?: Array<Record<string, any>>; attemptMode?: number; recordRequestMode?: number; destinationRetryRestMinutes?: number; cadences?: Array<Record<string, any>>; }; deliveryPreferences?: { confirmationRequiredDisabled?: boolean; confirmationRequiredDeliveryType?: number; confirmationRequiredTimeout?: number; confirmationRequiredTimeoutSubsequent?: number; confirmationRequiredDefaultAccept?: boolean; confirmationRequiredDefault?: boolean; complianceRecordsDisabled?: boolean; complianceRecordsDeliveryType?: number; complianceRecordsTimeout?: number; complianceRecordsTimeoutSubsequent?: number; complianceRecordsDefaultAccept?: boolean; showComplianceButtonReschedule?: boolean; showComplianceButtonRequeue?: boolean; showComplianceButtonSnooze?: boolean; showComplianceButtonDisposition?: boolean; showPreviewButtonReschedule?: boolean; showPreviewButtonRequeue?: boolean; showPreviewButtonSnooze?: boolean; showPreviewButtonDisposition?: boolean; }; callingLists?: Array<{ id?: number; name?: string; }>; cpaSettings?: { abandonTimeout?: number; abandonMessagePath?: string; abandonMsgMode?: number; ansMachineDetMode?: number; ansMachineMsg?: string; exceptions?: Array<Record<string, any>>; treatProgressAsRinging?: boolean; preConnectCPAEnabled?: boolean; agentOverrideOptionFax?: boolean; agentOverrideOptionAnsweringMachine?: boolean; agentOverrideOptionBadNumber?: boolean; utteranceMinimumSeconds?: number; customerLiveSilenceSeconds?: number; machineMinimumWithAgentSeconds?: number; machineMinimumWithoutAgentSeconds?: number; machineEndSilenceSeconds?: number; machineEndTimeoutSeconds?: number; agentResponseUtteranceMinimumSeconds?: number; agentNoResponseSeconds?: number; agentVoiceThreshold?: number; customerVoiceThreshold?: number; preConnectCPARecording?: boolean; enableCPALogging?: string; }; retrySettings?: { loadNonFresh?: boolean; finalizeWhenExhausted?: boolean; maximumAttempts?: number; minimumRetryMinutes?: number; maximumNumberOfHandledCalls?: number; restrictedCallingMinutes?: number; restrictedCallingMaxAttempts?: number; generalStaleMinutes?: number; callbackRestMinutes?: number; releaseAgentSpecificCalls?: boolean; maximumNumberOfCallbacks?: number; callbackStaleMinutes?: number; }; filterSettings?: { isFilterActive?: boolean; excludePriority?: boolean; excludeCallback?: boolean; applyOptions?: number; filterConditions?: Array<Record<string, any>>; }; listManagementSettings?: { displayField1Id?: number; displayField1Name?: string; displayField2Id?: number; displayField2NAme?: string; listOrderingOptions?: Array<Record<string, any>>; }; scheduleSettings?: { isScheduled?: boolean; schedules?: Array<Record<string, any>>; }; timeZoneSettings?: Array<{ name?: string; description?: string; overrideTime?: boolean; timeZoneActiveToCall?: boolean; startTime?: string; endTime?: string; }>; xsSettings?: { xsScriptId?: number; xsCheckinScriptId?: number; externalOutboundSkill_No?: string; xsSkillChangedActive?: boolean; xsGetContactsActive?: boolean; xsFreshThreshold?: number; xsAvailableThreshold?: number; xsReadyThreshold?: number; xsNumberToRetrieve?: number; }; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters`;
    return this.client.get<{ skillName?: string; skillNo?: number; generalSettings?: { minimumRetryMinutes?: number; maximumAttempts?: number; defaultContactExpiration?: number; getPriorityContactsOnContactInsertion?: boolean; loadCallbacks?: boolean; loadFresh?: boolean; loadNonFresh?: boolean; overrideBusinessUnitAbandonRate?: boolean; maximumRingingDuration?: number; beginDampenPercentage?: number; abandonRateCutoff?: number; abandonRateThreshold?: number; inactiveBlenderTimer?: number; maximumRatio?: number; aggressiveness?: number; endOfListNotificationsDelay?: number; notifyAgentsWhenListIsEmpty?: boolean; percentageOfAgentsBeforeOverdial?: number; blockMultipleCalls?: boolean; consecutiveAttemptsWithoutALiveConnect?: number; enableDialingByProficiency?: boolean; proficiencyFactor?: number; waitTimeFactor?: boolean; maxConcurrentCallsPerAgent?: number; maxWaitTimeSeconds?: number; }; cadenceSettings?: { cadenceMaximumAttempts?: Array<Record<string, any>>; attemptMode?: number; recordRequestMode?: number; destinationRetryRestMinutes?: number; cadences?: Array<Record<string, any>>; }; deliveryPreferences?: { confirmationRequiredDisabled?: boolean; confirmationRequiredDeliveryType?: number; confirmationRequiredTimeout?: number; confirmationRequiredTimeoutSubsequent?: number; confirmationRequiredDefaultAccept?: boolean; confirmationRequiredDefault?: boolean; complianceRecordsDisabled?: boolean; complianceRecordsDeliveryType?: number; complianceRecordsTimeout?: number; complianceRecordsTimeoutSubsequent?: number; complianceRecordsDefaultAccept?: boolean; showComplianceButtonReschedule?: boolean; showComplianceButtonRequeue?: boolean; showComplianceButtonSnooze?: boolean; showComplianceButtonDisposition?: boolean; showPreviewButtonReschedule?: boolean; showPreviewButtonRequeue?: boolean; showPreviewButtonSnooze?: boolean; showPreviewButtonDisposition?: boolean; }; callingLists?: Array<{ id?: number; name?: string; }>; cpaSettings?: { abandonTimeout?: number; abandonMessagePath?: string; abandonMsgMode?: number; ansMachineDetMode?: number; ansMachineMsg?: string; exceptions?: Array<Record<string, any>>; treatProgressAsRinging?: boolean; preConnectCPAEnabled?: boolean; agentOverrideOptionFax?: boolean; agentOverrideOptionAnsweringMachine?: boolean; agentOverrideOptionBadNumber?: boolean; utteranceMinimumSeconds?: number; customerLiveSilenceSeconds?: number; machineMinimumWithAgentSeconds?: number; machineMinimumWithoutAgentSeconds?: number; machineEndSilenceSeconds?: number; machineEndTimeoutSeconds?: number; agentResponseUtteranceMinimumSeconds?: number; agentNoResponseSeconds?: number; agentVoiceThreshold?: number; customerVoiceThreshold?: number; preConnectCPARecording?: boolean; enableCPALogging?: string; }; retrySettings?: { loadNonFresh?: boolean; finalizeWhenExhausted?: boolean; maximumAttempts?: number; minimumRetryMinutes?: number; maximumNumberOfHandledCalls?: number; restrictedCallingMinutes?: number; restrictedCallingMaxAttempts?: number; generalStaleMinutes?: number; callbackRestMinutes?: number; releaseAgentSpecificCalls?: boolean; maximumNumberOfCallbacks?: number; callbackStaleMinutes?: number; }; filterSettings?: { isFilterActive?: boolean; excludePriority?: boolean; excludeCallback?: boolean; applyOptions?: number; filterConditions?: Array<Record<string, any>>; }; listManagementSettings?: { displayField1Id?: number; displayField1Name?: string; displayField2Id?: number; displayField2NAme?: string; listOrderingOptions?: Array<Record<string, any>>; }; scheduleSettings?: { isScheduled?: boolean; schedules?: Array<Record<string, any>>; }; timeZoneSettings?: Array<{ name?: string; description?: string; overrideTime?: boolean; timeZoneActiveToCall?: boolean; startTime?: string; endTime?: string; }>; xsSettings?: { xsScriptId?: number; xsCheckinScriptId?: number; externalOutboundSkill_No?: string; xsSkillChangedActive?: boolean; xsGetContactsActive?: boolean; xsFreshThreshold?: number; xsAvailableThreshold?: number; xsReadyThreshold?: number; xsNumberToRetrieve?: number; }; }>(path, options);
  }

  /**
   * Returns config for thank you page
   * GET /skills/{skillId}/thank-you-page
   */
  public async getSkillsIdThankYouPage(skillId: string, options?: RequestOptions): Promise<{ canDownloadChatTranscript?: boolean; chatThankPopURL?: string; displayChatThankPage?: boolean; thankMessage?: string; useChatThankPopURL?: boolean; fromAddress?: string; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/thank-you-page`;
    return this.client.get<{ canDownloadChatTranscript?: boolean; chatThankPopURL?: string; displayChatThankPage?: boolean; thankMessage?: string; useChatThankPopURL?: boolean; fromAddress?: string; }>(path, options);
  }

  /**
   * Start a Personal Connection Skill
   * POST /skills/{skillId}/start
   */
  public async postSkillsSkillIdStart(skillId: string, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/start`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Stop a Personal Connection Skill
   * POST /skills/{skillId}/stop
   */
  public async postSkillsSkillIdStop(skillId: string, options?: RequestOptions & { query?: { force?: boolean; } }): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/stop`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Returns Skills assignments
   * GET /skills/agents
   */
  public async getAgentsAllSkills(options?: RequestOptions & { query?: { skills: string; } }): Promise<{ lastPollTime?: string; businessUnitId?: number; agentSkillAssignments?: Array<{ agentId?: number; agentName?: string; agentProficiencyValue?: number; agentProficiencyName?: string; campaignId?: number; campaignName?: string; emailFromAddress?: string; internalId?: string; isActive?: boolean; isSkillActive?: boolean; isNaturalCalling?: boolean; isNaturalCallingRunning?: boolean; isOutbound?: boolean; lastUpdateTime?: string; mediaType?: number; mediaTypeName?: string; notes?: string; outboundStrategy?: string; priorityBlending?: boolean; requireDispositions?: boolean; scriptDisposition?: boolean; skillId?: number; skillName?: string; useACW?: boolean; useDisposition?: boolean; useSecondaryDisposition?: boolean; screenPopTriggerEvent?: string; isAssigned?: boolean; }>; invalidSkills?: Array<{ skillId?: number; }>; }> {
    const path = `/skills/agents`;
    return this.client.get<{ lastPollTime?: string; businessUnitId?: number; agentSkillAssignments?: Array<{ agentId?: number; agentName?: string; agentProficiencyValue?: number; agentProficiencyName?: string; campaignId?: number; campaignName?: string; emailFromAddress?: string; internalId?: string; isActive?: boolean; isSkillActive?: boolean; isNaturalCalling?: boolean; isNaturalCallingRunning?: boolean; isOutbound?: boolean; lastUpdateTime?: string; mediaType?: number; mediaTypeName?: string; notes?: string; outboundStrategy?: string; priorityBlending?: boolean; requireDispositions?: boolean; scriptDisposition?: boolean; skillId?: number; skillName?: string; useACW?: boolean; useDisposition?: boolean; useSecondaryDisposition?: boolean; screenPopTriggerEvent?: string; isAssigned?: boolean; }>; invalidSkills?: Array<{ skillId?: number; }>; }>(path, options);
  }

  /**
   * Returns Agents assigned to a Skill
   * GET /skills/{skillId}/agents
   */
  public async getAgentsBySkillId(skillId: string, options?: RequestOptions): Promise<AdminSkills_getSkillAgentsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/agents`;
    return this.client.get<AdminSkills_getSkillAgentsResponse>(path, options);
  }

  /**
   * Assign Agents to a Skill
   * POST /skills/{skillId}/agents
   */
  public async agentAssignmentsSkill(skillId: string, data: AdminSkills_postSkillAgentsRequest, options?: RequestOptions): Promise<AdminSkills_postSkillAgentsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/agents`;
    return this.client.post<AdminSkills_postSkillAgentsResponse>(path, data, options);
  }

  /**
   * Update Skill Agent assignments
   * PUT /skills/{skillId}/agents
   */
  public async modifyAssignmentsSkill(skillId: string, data: AdminSkills_postSkillAgentsRequest, options?: RequestOptions): Promise<AdminSkills_postSkillAgentsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/agents`;
    return this.client.put<AdminSkills_postSkillAgentsResponse>(path, data, options);
  }

  /**
   *  Remove Skill Agent assignments
   * DELETE /skills/{skillId}/agents
   */
  public async removeAgentAssignmentsSkill(skillId: string, options?: RequestOptions): Promise<AdminSkills_deleteSkillAgentsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/agents`;
    return this.client.delete<AdminSkills_deleteSkillAgentsResponse>(path, options);
  }

  /**
   * Delete skills based on skillid and agentid
   * DELETE /skills/{skillId}/agents/{agentId}
   */
  public async deleteSkillsIdAgentsId(skillId: string, agentId: string, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/agents/${encodeURIComponent(String(agentId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Get Agents that are not assigned to Skill
   * GET /skills/{skillId}/agents/unassigned
   */
  public async getAgentsThatAreNotAssignedToSkill(skillId: string, options?: RequestOptions): Promise<AdminSkills_getSkillAgentsUnassignedResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/agents/unassigned`;
    return this.client.get<AdminSkills_getSkillAgentsUnassignedResponse>(path, options);
  }

  /**
   * Returns contacts summary for all skills
   * GET /skills/call-data
   */
  public async sKILLCALLDATA(options?: RequestOptions): Promise<AdminSkills_getSkillsCallDataResponse> {
    const path = `/skills/call-data`;
    return this.client.get<AdminSkills_getSkillsCallDataResponse>(path, options);
  }

  /**
   * Returns contacts summary for a single skill
   * GET /skills/{skillId}/call-data
   */
  public async skillCallData(skillId: string, options?: RequestOptions): Promise<AdminSkills_getSkillsCallDataResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/call-data`;
    return this.client.get<AdminSkills_getSkillsCallDataResponse>(path, options);
  }

  /**
   * Returns a Skill Dispositions
   * GET /skills/{skillId}/dispositions
   */
  public async dispositionList(skillId: string, options?: RequestOptions): Promise<AdminSkills_getSkillDispositionsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/dispositions`;
    return this.client.get<AdminSkills_getSkillDispositionsResponse>(path, options);
  }

  /**
   * Returns unassigned dispositions for a Skill
   * GET /skills/{skillId}/dispositions/unassigned
   */
  public async dispositionsNotAssignedSkill(skillId: string, options?: RequestOptions): Promise<AdminSkills_getSkillDispositionsUnassignedResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/dispositions/unassigned`;
    return this.client.get<AdminSkills_getSkillDispositionsUnassignedResponse>(path, options);
  }

  /**
   *  Returns Tags for a Skill
   * GET /skills/{skillId}/tags
   */
  public async getTagsSkill(skillId: string, options?: RequestOptions): Promise<AdminSkills_getSkillTagsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/tags`;
    return this.client.get<AdminSkills_getSkillTagsResponse>(path, options);
  }

  /**
   * Assigns a Tag to a Skill
   * POST /skills/{skillId}/tags
   */
  public async assignTagSkill(skillId: string, data: AdminSkills_postSkillTagsRequest, options?: RequestOptions): Promise<AdminSkills_postSkillTagsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/tags`;
    return this.client.post<AdminSkills_postSkillTagsResponse>(path, data, options);
  }

  /**
   *  Removes Tags from a Skill
   * DELETE /skills/{skillId}/tags
   */
  public async removeTagsSkill(skillId: string, options?: RequestOptions): Promise<AdminSkills_deleteSkillTagsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/tags`;
    return this.client.delete<AdminSkills_deleteSkillTagsResponse>(path, options);
  }

  /**
   * Returns the General settings for a skill
   * GET /skills/{skillId}/parameters/general-settings
   */
  public async getSkillsIdParametersGeneralSettings(skillId: string, options?: RequestOptions): Promise<AdminSkills_GetOutBoundSkillSettingsResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/general-settings`;
    return this.client.get<AdminSkills_GetOutBoundSkillSettingsResponse>(path, options);
  }

  /**
   * Updates the General settings for a skill
   * PUT /skills/{skillId}/parameters/general-settings
   */
  public async putSkillsIdParametersGeneralSettings(skillId: string, data?: AdminSkills_UpdateSkillGenral, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/general-settings`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns CPA Management configuration for a skill
   * GET /skills/{skillId}/parameters/cpa-management
   */
  public async getSkillsIdParametersCpaManagement(skillId: string, options?: RequestOptions): Promise<{ AnsMachineOverrideSeconds?: number; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/cpa-management`;
    return this.client.get<{ AnsMachineOverrideSeconds?: number; }>(path, options);
  }

  /**
   * Updates CPA Management configuration for a skill
   * PUT /skills/{skillId}/parameters/cpa-management
   */
  public async putSkillsIdParametersCpaManagement(skillId: string, data?: { cpaSettings: { abandonMessagePath?: string; abandonMsgMode?: number; abandonTimeout?: number; agentNoResponseSeconds?: number; agentOverrideOptionAnsweringMachine?: boolean; agentOverrideOptionBadNumber?: boolean; agentOverrideOptionFax?: boolean; agentResponseUtteranceMinimumSeconds?: number; agentVoiceThreshold?: number; ansMachineDetMode?: number; ansMachineMsg?: string; ansMachineOverrideSeconds?: number; customerLiveSilenceSeconds?: number; customerVoiceThreshold?: number; enableCPALogging?: boolean; exceptions?: Array<Record<string, any>>; machineEndSilenceSeconds?: number; machineEndTimeoutSeconds?: number; machineMinimumWithAgentSeconds?: number; machineMinimumWithoutAgentSeconds?: number; preConnectCPAEnabled?: boolean; preConnectCPARecording?: boolean; treatProgressAsRinging?: boolean; utteranceMinimumSeconds?: number; }; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/cpa-management`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns the XS configuration for a skill
   * GET /skills/{skillId}/parameters/xs-settings
   */
  public async getSkillsIdParametersXsSettings(skillId: string, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/xs-settings`;
    return this.client.get<any>(path, options);
  }

  /**
   * Updates XS settings for a skill
   * PUT /skills/{skillId}/parameters/xs-settings
   */
  public async putSkillsIdParametersXsSettings(skillId: string, data?: { xsSettings: { xsScriptID?: number; xsCheckinScriptID?: number; externalOutboundSkill_No?: string; xsSkillChangedActive?: boolean; xsGetContactsActive?: boolean; xsFreshThreshold?: number; xsAvailableThreshold?: number; xsReadyThreshold?: number; xsNumberToRetrieve?: number; }; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/xs-settings`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns the Delivery Preferences configuration for a skill
   * GET /skills/{skillId}/parameters/delivery-preferences
   */
  public async getSkillsIdParametersDeliveryPreferences(skillId: string, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/delivery-preferences`;
    return this.client.get<any>(path, options);
  }

  /**
   * Updates Delivery Preferences configuration for a skill
   * PUT /skills/{skillId}/parameters/delivery-preferences
   */
  public async putSkillsIdParametersDeliveryPreferences(skillId: string, data?: { deliveryPreferences: { confirmationRequiredDisabled?: boolean; confirmationRequiredDeliveryType?: number; confirmationRequiredTimeout?: number; confirmationRequiredTimeoutSubsequent?: number; confirmationRequiredDefaultAccept?: boolean; confirmationRequiredDefault?: boolean; complianceRecordsDisabled?: boolean; complianceRecordsDeliveryType?: number; complianceRecordsTimeout?: number; complianceRecordsTimeoutSubsequent?: number; complianceRecordsDefaultAccept?: boolean; showComplianceButtonReschedule?: boolean; showComplianceButtonRequeue?: boolean; showComplianceButtonSnooze?: boolean; showComplianceButtonDisposition?: boolean; showPreviewButtonReschedule?: boolean; showPreviewButtonRequeue?: boolean; showPreviewButtonSnooze?: boolean; showPreviewButtonDisposition?: boolean; }; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/delivery-preferences`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns Retry settings for a skill
   * GET /skills/{skillId}/parameters/retry-settings
   */
  public async getSkillsIdParametersRetrySettings(skillId: string, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/retry-settings`;
    return this.client.get<any>(path, options);
  }

  /**
   * Updates Retry settings for a skill
   * PUT /skills/{skillId}/parameters/retry-settings
   */
  public async putSkillsIdParametersRetrySettings(skillId: string, data?: { retrySettings: { loadNonFresh?: boolean; finalizeWhenExhausted?: boolean; maximumAttempts?: number; minimumRetryMinutes?: number; maximumNumberOfHandledCalls?: number; restrictedCallingMinutes?: number; restrictedCallingMaxAttempts?: number; generalStaleMinutes?: number; callbackRestMinutes?: number; releaseAgentSpecificCalls?: boolean; maximumNumberOfCallbacks?: number; callbackStaleMinutes?: number; }; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/retry-settings`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns the Schedule settings for a skill
   * GET /skills/{skillId}/parameters/schedule-settings
   */
  public async getSkillsIdParametersScheduleSettings(skillId: string, options?: RequestOptions): Promise<{ isScheduled?: boolean; sundayStartTime?: string; sundayEndTime?: string; sundayIsActive?: boolean; mondayStartTime?: string; mondayEndTime?: string; mondayIsActive?: boolean; tuesdayStartTime?: string; tuesdayEndTime?: string; tuesdayIsActive?: boolean; wednesdayStartTime?: string; wednesdayEndTime?: string; wednesdayIsActive?: boolean; thursdayStartTime?: string; thursdayEndTime?: string; thursdayIsActive?: boolean; fridayStartTime?: string; fridayEndTime?: string; fridayIsActive?: boolean; saturdayStartTime?: string; saturdayEndTime?: string; saturdayIsActive?: boolean; }> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/schedule-settings`;
    return this.client.get<{ isScheduled?: boolean; sundayStartTime?: string; sundayEndTime?: string; sundayIsActive?: boolean; mondayStartTime?: string; mondayEndTime?: string; mondayIsActive?: boolean; tuesdayStartTime?: string; tuesdayEndTime?: string; tuesdayIsActive?: boolean; wednesdayStartTime?: string; wednesdayEndTime?: string; wednesdayIsActive?: boolean; thursdayStartTime?: string; thursdayEndTime?: string; thursdayIsActive?: boolean; fridayStartTime?: string; fridayEndTime?: string; fridayIsActive?: boolean; saturdayStartTime?: string; saturdayEndTime?: string; saturdayIsActive?: boolean; }>(path, options);
  }

  /**
   * Updates Schedule settings for a skill
   * PUT /skills/{skillId}/parameters/schedule-settings
   */
  public async putSkillsIdParametersScheduleSettings(skillId: string, data?: { scheduleSettings: { isScheduled?: boolean; sundayStartTime?: string; sundayEndTime?: string; sundayIsActive?: boolean; mondayStartTime?: string; mondayEndTime?: string; mondayIsActive?: boolean; tuesdayStartTime?: string; tuesdayEndTime?: string; tuesdayIsActive?: boolean; wednesdayStartTime?: string; wednesdayEndTime?: string; wednesdayIsActive?: boolean; thursdayStartTime?: string; thursdayEndTime?: string; thursdayIsActive?: boolean; fridayStartTime?: string; fridayEndTime?: string; fridayIsActive?: boolean; saturdayStartTime?: string; saturdayEndTime?: string; saturdayIsActive?: boolean; }; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/schedule-settings`;
    return this.client.put<any>(path, data, options);
  }

  /**
   *  Update Skill Cadence Settings
   * PUT /skills/{skillId}/parameters/cadence-settings
   */
  public async putSkillsIdParametersCadenceSettings(skillId: string, data?: { attemptMode?: string; recordRequestMode?: string; destinationRetryRestMinutes?: number; maximumAttempts?: Array<{ fieldName?: string; attempts?: number; }>; cadences?: Array<{ fieldName?: string; attempts?: number; timeConstraints?: Record<string, any>; }>; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/cadence-settings`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * List of the timezone boundings for the given skill
   * GET /skills/{skillId}/parameters/time-zones
   */
  public async getSkillsIdParametersTimeZones(skillId: string, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/time-zones`;
    return this.client.get<any>(path, options);
  }

  /**
   * Updates the timezone boundings for the given skill
   * PUT /skills/{skillId}/parameters/time-zones
   */
  public async putSkillsIdParametersTimeZones(skillId: string, data?: { timeZoneSettings?: Array<{ standardName?: string; startTime?: string; endTime?: string; timeZoneActiveToCall?: boolean; overrideTime?: boolean; }>; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/time-zones`;
    return this.client.put<any>(path, data, options);
  }

  /**
   *  Update Skill List Management Settings
   * PUT /skills/{skillId}/parameters/list-management
   */
  public async putSkillsIdParametersListManagement(skillId: string, data?: { displayField1Name?: string; displayField2Name?: string; listOrderingOptions?: Array<{ orderType?: string; direction?: string; }>; }, options?: RequestOptions): Promise<any> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/parameters/list-management`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Updated in v33.0 Returns a list of assigned skills to a campaign
   * GET /campaigns/{campaignId}/skills
   */
  public async getCampaignsIdSkills(campaignId: number, options?: RequestOptions): Promise<{ businessUnitId?: number; totalRecords?: number; skills?: Array<{ mediaType?: number; mediaName?: string; skillId?: number; skillName?: string; }>; }> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/skills`;
    return this.client.get<{ businessUnitId?: number; totalRecords?: number; skills?: Array<{ mediaType?: number; mediaName?: string; skillId?: number; skillName?: string; }>; }>(path, options);
  }

  /**
   * Updated in v33.0 Assign Skills to Campaign
   * POST /campaigns/{campaignId}/skills
   */
  public async postCampaignsIdSkills(campaignId: number, data: { addAll?: boolean; skills?: Array<number>; }, options?: RequestOptions): Promise<{ assignedSkills?: Array<number>; invalidSkills?: Array<number>; }> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/skills`;
    return this.client.post<{ assignedSkills?: Array<number>; invalidSkills?: Array<number>; }>(path, data, options);
  }

  /**
   * Updated in v33.0 Unassign Skills to Campaign
   * DELETE /campaigns/{campaignId}/skills
   */
  public async deleteCampaignsIdSkills(campaignId: number, options?: RequestOptions): Promise<{ assignedSkills?: Array<number>; invalidSkills?: Array<number>; }> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/skills`;
    return this.client.delete<{ assignedSkills?: Array<number>; invalidSkills?: Array<number>; }>(path, options);
  }

  /**
   * This API Returns a list of paginated Dispositions.
   * GET /dispositions
   */
  public async getDispositions(options?: RequestOptions & { query?: { skip?: number; top?: number; searchString?: string; fields?: string; orderBy?: string; isActive?: boolean; isPreviewDispositions?: boolean; updatedSince?: string; } }): Promise<{ totalRecords?: number; businessUnitId?: number; dispositions?: Array<{ dispositionId?: number; dispositionName?: string; notes?: string; lastUpdated?: string; classificationId?: number; systemOutcome?: string; isActive?: boolean; isPreviewDisposition?: boolean; }>; _links?: { self?: string; next?: string; previous?: string; }; }> {
    const path = `/dispositions`;
    return this.client.get<{ totalRecords?: number; businessUnitId?: number; dispositions?: Array<{ dispositionId?: number; dispositionName?: string; notes?: string; lastUpdated?: string; classificationId?: number; systemOutcome?: string; isActive?: boolean; isPreviewDisposition?: boolean; }>; _links?: { self?: string; next?: string; previous?: string; }; }>(path, options);
  }

  /**
   * Create Dispositions
   * POST /dispositions
   */
  public async postDispositions(data?: { dispositions: Array<{ dispositionName: string; isPreviewDisposition: boolean; classificationId?: number; }>; }, options?: RequestOptions): Promise<{ errorCount?: number; dispositionResults?: Array<{ dispositionId: number; success?: boolean; error?: string; }>; }> {
    const path = `/dispositions`;
    return this.client.post<{ errorCount?: number; dispositionResults?: Array<{ dispositionId: number; success?: boolean; error?: string; }>; }>(path, data, options);
  }
}
