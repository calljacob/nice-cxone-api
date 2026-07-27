import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export type AdminAgents_postAgentsMessagesRequest = { agentMessages: Array<{ expireMinutes?: number; message: string; startDate?: string; subject: string; targetId?: number; targetType: "Agent" | "Team" | "Everyone" | "Station"; validUntil?: string; }>; };

export interface AdminAgents_postAgentSkillsResponse { resultSet: { errorCount: number; skillResults: Array<Record<string, any>>; }; }

export interface AdminAgents_getAgentSkillsResponse { totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; businessUnitId?: number; agentSkillAssignments?: Array<{ agentID_alt?: number; userId?: string; firstName?: string; middleName?: string; lastName?: string; agentProficiencyValue?: number; agentProficiencyName?: string; campaignId?: number; campaignName?: string; emailFromAddress?: string; internalId?: string; isActive?: boolean; isSkillActive?: boolean; teamId?: number; teamName?: string; isDialer?: boolean; isNaturalCalling?: boolean; isNaturalCallingRunning?: boolean; isOutbound?: boolean; lastUpdateTime?: string; mediaTypeId?: number; mediaTypeName?: string; notes?: string; requireDisposition?: boolean; scriptDisposition?: boolean; skillId?: number; skillName?: string; useACW?: boolean; useDisposition?: boolean; useSecondaryDispositions?: boolean; outboundStrategy?: string; priorityBlending?: boolean; screenPopTriggerEvent?: string; isRestricted?: boolean; digitalPOC?: string; digitalPOCName?: string; requireCustomerId?: boolean; }>; }

export interface AdminAgents_getAgentUnassignedSkillsResponse { resultSet: { _links?: { self?: string; next?: string; previous?: string; }; businessUnitId: number; totalRecords: number; skills: Array<Record<string, any>>; }; }

export interface AdminAgents_getAgentSkillsDataResponse { totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; agentSkillData: { agents: Array<Record<string, any>>; }; }

export interface AdminAgents_getAgentsQuickRepliesResponse { totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; quickReplies?: Array<{ quickReplyId?: number; title?: string; keyWords?: string; content?: string; isFavorite?: boolean; skills?: Array<Record<string, any>>; }>; }

export interface AdminAgents_getAgentQuickRepliesResponse { quickReplies: Array<{ quickReplyId: number; title: string; keyWords: string; content: string; isFavorite: number; skills: Array<Record<string, any>>; }>; }

export interface AdminAgents_getAgentMessagesResponse { messages: Array<{ messageId: number; messageText: string; expireTimer: number; messageHint: string; indicatorId: number; subject: string; validUntil: string; startDate: string; }>; }

export interface AdminAgents_getAgentIndicatorsResponse { indicators: Array<{ indicatorName: string; senderContactId: number; imageFile: string; actionType: string; action: string; toolTip: string; enable: boolean; }>; }

export interface AdminAgents_getAgentPatternsResponse { dialingPatterns: Array<{ patternId: number; patternName: string; input: string; output: string; }>; }

export interface AdminAgents_getAgentStatesResponse { agentStates: Array<{ agentID_alt?: number; agentStateId: number; agentStateName: string; businessUnitId?: number; contactId?: number; isActive?: boolean; isAcw?: boolean; isOutbound?: boolean; firstName?: string; fromAddress?: string; lastName?: string; lastPollTime?: string; lastUpdateTime?: string; mediaName?: string; mediaType?: number; openContacts?: number; outStateDescription?: number; outStateId?: number; skillId?: number; skillName?: string; startDate?: string; stationId?: number; stationPhoneNumber?: string; teamId?: number; teamName?: string; toAddress?: string; userName?: string; }>; }

export interface AdminAgents_getagentagentidgroups { agentGroups?: Array<{ groupId?: number; groupName?: string; isActive?: boolean; notes?: string; lastUpdated?: string; }>; }

export interface AdminAgents_postAgentSearchResponse { totalRecords?: number; businessUnitId?: number; lastPollTime?: string; hiddenAgents?: number; errorCount?: number; agentResults?: Array<Array<Record<string, any>>>; }

export class AdminAgentsService {
  constructor(private client: HttpClient) {}

  /**
   * Updated in v34.0 Get Agents List
   * GET /agents
   */
  public async getAgents(options?: RequestOptions & { query?: { updateSince?: string; isActive?: boolean; isLocked?: boolean; searchString?: string; fields?: string; skip?: string; top?: string; orderBy?: string; } }): Promise<{ businessUnitId?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; totalRecords?: number; hiddenAgents?: number; agents?: Array<{ agentId?: number; userName?: string; firstName?: string; middleName?: string; lastName?: string; userID?: string; emailAddress?: string; isActive?: boolean; teamId?: number; teamName?: string; reportToId?: number; reportToName?: string; isSupervisor?: boolean; lastLogin?: string; lastUpdated?: string; location?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; internalId?: string; profileId?: number; profileName?: string; timeZone?: string; country?: string; countryName?: string; state?: string; city?: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; defaultDialingPattern?: number; defaultDialingPatternName?: string; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; notes?: string; createDate?: string; inactiveDate?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; employmentTypeName?: string; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: string; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; timeZoneOffset?: string; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; customerCard?: boolean; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; locked?: boolean; userNameDomain?: string; combinedUserNameDomain?: string; rowNumber?: number; smsThreshold?: number; useTeamSmsThreshold?: boolean; digitalThreshold?: number; LoginAuthenticatorId?: string; useTeamDigitalThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; voiceThreshold?: number; subject?: string; issuer?: string; useTeamVoiceThreshold?: boolean; recordingNumbers?: Array<Record<string, any>>; isOpenIdProfileComplete?: boolean; teamUuId?: string; maxPreview?: boolean; deliveryMode?: string; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeout?: number; voicemailRefusalTimeout?: number; isBillable?: boolean; agentVoiceThreshold?: number; agentEmailThreshold?: number; agentWorkItemThreshold?: number; agentDeliveryMode?: string; agentTotalContactCount?: number; agentContactAutoFocus?: boolean; smsRefusalTimeout?: number; agentRequestContact?: boolean; agentMaxVersion?: number; agentPhoneTimeout?: number; agentPhoneTimeoutSeconds?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; digitalRefusalTimeout?: number; agentCxaClientVersion?: number; agentCxaReleasePrevious?: boolean; stateCode?: string; agentIntegration?: boolean; channelLock?: boolean; DigitalEngagementEnabled?: boolean; Teams_channel_Id?: string; DivisionNo?: number; ACWEnabled?: boolean; ACWRange?: number; IsDirectVoicemailTransferEnabled?: boolean; AttendantUserStatus?: number; }>; }> {
    const path = `/agents`;
    return this.client.get<{ businessUnitId?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; totalRecords?: number; hiddenAgents?: number; agents?: Array<{ agentId?: number; userName?: string; firstName?: string; middleName?: string; lastName?: string; userID?: string; emailAddress?: string; isActive?: boolean; teamId?: number; teamName?: string; reportToId?: number; reportToName?: string; isSupervisor?: boolean; lastLogin?: string; lastUpdated?: string; location?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; internalId?: string; profileId?: number; profileName?: string; timeZone?: string; country?: string; countryName?: string; state?: string; city?: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; defaultDialingPattern?: number; defaultDialingPatternName?: string; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; notes?: string; createDate?: string; inactiveDate?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; employmentTypeName?: string; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: string; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; timeZoneOffset?: string; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; customerCard?: boolean; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; locked?: boolean; userNameDomain?: string; combinedUserNameDomain?: string; rowNumber?: number; smsThreshold?: number; useTeamSmsThreshold?: boolean; digitalThreshold?: number; LoginAuthenticatorId?: string; useTeamDigitalThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; voiceThreshold?: number; subject?: string; issuer?: string; useTeamVoiceThreshold?: boolean; recordingNumbers?: Array<Record<string, any>>; isOpenIdProfileComplete?: boolean; teamUuId?: string; maxPreview?: boolean; deliveryMode?: string; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeout?: number; voicemailRefusalTimeout?: number; isBillable?: boolean; agentVoiceThreshold?: number; agentEmailThreshold?: number; agentWorkItemThreshold?: number; agentDeliveryMode?: string; agentTotalContactCount?: number; agentContactAutoFocus?: boolean; smsRefusalTimeout?: number; agentRequestContact?: boolean; agentMaxVersion?: number; agentPhoneTimeout?: number; agentPhoneTimeoutSeconds?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; digitalRefusalTimeout?: number; agentCxaClientVersion?: number; agentCxaReleasePrevious?: boolean; stateCode?: string; agentIntegration?: boolean; channelLock?: boolean; DigitalEngagementEnabled?: boolean; Teams_channel_Id?: string; DivisionNo?: number; ACWEnabled?: boolean; ACWRange?: number; IsDirectVoicemailTransferEnabled?: boolean; AttendantUserStatus?: number; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 Create an agent
   * POST /agents
   */
  public async operationsAgentsPostAgents(data?: { agents: Array<{ firstName: string; middleName?: string; lastName: string; teamId: string; teamUuid?: string; reportToId?: number; internalId?: string; profileId: number; roleId?: string; password?: string; forceChangeOnLogon?: boolean; emailAddress: string; userName: string; userId?: string; timeZone: string; country: string; state?: string; city: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; digitalRefusalTimeout?: number; defaultDialingPattern?: number; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; isActive?: boolean; locationId?: number; notes?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: number; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; voiceThreshold?: number; useTeamVoiceThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; recordingNumbers?: Array<Record<string, any>>; subject?: string; issuer?: string; isOpenIdProfileComplete?: boolean; maxPreview?: boolean; deliveryMode?: string; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeOut?: number; voicemailRefusalTimeOut?: number; smsRefusalTimeout?: number; isBillable?: boolean; useTeamDefaults?: boolean; agentVoiceThreshold?: number; agentChatThreshold?: number; agentEmailThreshold?: number; agentWorkItemthreshold?: number; agentDeliveryMode?: string; agentTotalContactCount?: number; agentContactAutoFocus?: boolean; agentRequestContact?: boolean; integratedSoftphoneWebRtcUrls?: Array<Record<string, any>>; customerCard?: boolean; loginAuthenticatorId?: string; smsThreshold?: number; useTeamSmsThreshold?: boolean; agentSmsThreshold?: boolean; digitalThreshold?: number; useTeamDigitalThreshold?: boolean; agentDigitalThreshold?: boolean; agentPhoneTimeout?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; agentSyncTime?: string; agentCxaClientVersion?: number; agentCxaReleasePrevious?: boolean; agentIntegration?: boolean; channelLock?: boolean; digitalEngagementEnabled?: boolean; ACWEnabled?: boolean; ACWRange?: number; }>; }, options?: RequestOptions): Promise<{ errorCount?: number; agentResults?: Array<{ agentId?: number; success?: boolean; error?: string; }>; }> {
    const path = `/agents`;
    return this.client.post<{ errorCount?: number; agentResults?: Array<{ agentId?: number; success?: boolean; error?: string; }>; }>(path, data, options);
  }

  /**
   * Updated in v34.0 Update an array of agents
   * PUT /agents
   */
  public async operationsAgentsPutAgents(data?: { agents: Array<{ agentId: string; firstName?: string; middleName?: string; lastName?: string; teamId?: string; teamUuid?: string; reportToId?: number; internalId?: string; profileId?: number; roleId?: string; emailAddress?: string; userName?: string; userId?: string; timeZone?: string; country?: string; state?: string; city?: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; defaultDialingPattern?: number; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; isActive?: boolean; locationId?: number; notes?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; customerCard?: boolean; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: number; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; smsThreshold?: number; useTeamSmsThreshold?: boolean; digitalThreshold?: number; useTeamDigitalThreshold?: boolean; voiceThreshold?: number; useTeamVoiceThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; recordingNumbers?: Array<Record<string, any>>; subject?: string; issuer?: string; isOpenIdProfileComplete?: boolean; deliveryMode?: string; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeOut?: number; voicemailRefusalTimeOut?: number; smsRefusalTimeout?: number; isBillable?: boolean; useTeamDefaults?: boolean; agentVoiceThreshold?: number; agentChatThreshold?: number; agentEmailThreshold?: number; agentWorkItemThreshold?: number; agentSmsThreshold?: number; agentDeliveryMode?: string; agentTotalContactCount?: number; agentRequestContact?: boolean; agentContactAutoFocus?: boolean; integratedSoftphoneWebRtcUrls?: Array<Record<string, any>>; agentMaxVersion?: number; agentPhoneTimeout?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; digitalRefusalTimeout?: number; agentSyncTime?: string; agentIntegration?: boolean; channelLock?: boolean; digitalEngagementEnabled?: boolean; teams_channel_Id?: string; divisionNo?: number; ACWEnabled?: boolean; ACWRange?: number; }>; }, options?: RequestOptions): Promise<{ errorCount?: number; agentResults?: Array<{ agentId?: string; success?: boolean; error?: string; }>; }> {
    const path = `/agents`;
    return this.client.put<{ errorCount?: number; agentResults?: Array<{ agentId?: string; success?: boolean; error?: string; }>; }>(path, data, options);
  }

  /**
   * Updated in v34.0 Returns agent details by Agent ID
   * GET /agents/{agentId|userId}
   */
  public async operationsAgentsGetAgentsId(agentId: string, options?: RequestOptions & { query?: { fields?: string; } }): Promise<{ agents?: Array<{ agentId?: number; userName?: string; firstName?: string; middleName?: string; lastName?: string; userID?: string; emailAddress?: string; isActive?: boolean; teamId?: number; teamName?: string; reportToId?: number; reportToName?: string; isSupervisor?: boolean; lastLogin?: string; lastUpdated?: string; location?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; internalId?: string; profileId?: number; profileName?: string; timeZone?: string; country?: string; countryName?: string; state?: string; city?: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; defaultDialingPattern?: number; defaultDialingPatternName?: string; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; notes?: string; createDate?: string; inactiveDate?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; employmentTypeName?: string; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: string; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; timeZoneOffset?: string; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; smsThreshold?: number; useTeamSmsThreshold?: boolean; digitalThreshold?: number; useTeamDigitalThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; subject?: string; issuer?: string; recordingNumbers?: Array<Record<string, any>>; isOpenIdProfileComplete?: boolean; teamUuId?: string; maxPreview?: boolean; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeout?: number; voicemailRefusalTimeout?: number; smsRefusalTimeout?: number; agentMaxVersion?: number; agentPhoneTimeout?: number; agentPhoneTimeoutSeconds?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; digitalRefusalTimeout?: number; agentCxaClientVersion?: number; agentCxaReleasePrevious?: boolean; agentIntegration?: boolean; channelLock?: boolean; digitalEngagementEnabled?: boolean; teams_channel_Id?: string; divisionNo?: number; ACWEnabled?: boolean; ACWRange?: number; AttendantUserStatus?: number; IsDirectVoicemailTransferEnabled?: boolean; }>; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}`;
    return this.client.get<{ agents?: Array<{ agentId?: number; userName?: string; firstName?: string; middleName?: string; lastName?: string; userID?: string; emailAddress?: string; isActive?: boolean; teamId?: number; teamName?: string; reportToId?: number; reportToName?: string; isSupervisor?: boolean; lastLogin?: string; lastUpdated?: string; location?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; internalId?: string; profileId?: number; profileName?: string; timeZone?: string; country?: string; countryName?: string; state?: string; city?: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; defaultDialingPattern?: number; defaultDialingPatternName?: string; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; notes?: string; createDate?: string; inactiveDate?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; employmentTypeName?: string; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: string; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; timeZoneOffset?: string; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; smsThreshold?: number; useTeamSmsThreshold?: boolean; digitalThreshold?: number; useTeamDigitalThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; subject?: string; issuer?: string; recordingNumbers?: Array<Record<string, any>>; isOpenIdProfileComplete?: boolean; teamUuId?: string; maxPreview?: boolean; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeout?: number; voicemailRefusalTimeout?: number; smsRefusalTimeout?: number; agentMaxVersion?: number; agentPhoneTimeout?: number; agentPhoneTimeoutSeconds?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; digitalRefusalTimeout?: number; agentCxaClientVersion?: number; agentCxaReleasePrevious?: boolean; agentIntegration?: boolean; channelLock?: boolean; digitalEngagementEnabled?: boolean; teams_channel_Id?: string; divisionNo?: number; ACWEnabled?: boolean; ACWRange?: number; AttendantUserStatus?: number; IsDirectVoicemailTransferEnabled?: boolean; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 Update Agent by Agent ID
   * PUT /agents/{agentId|userId}
   */
  public async operationsAgentsPutAgentsId(agentId: string, data?: { agent?: { agentId: string; firstName?: string; middleName?: string; lastName?: string; teamId?: string; teamUuid?: string; reportToId?: number; internalId?: string; profileId?: number; roleId?: string; emailAddress?: string; userName?: string; userId?: string; timeZone?: string; country?: string; state?: string; city?: string; chatRefusalTimeout?: number; phoneRefusalTimeout?: number; workItemRefusalTimeout?: number; defaultDialingPattern?: number; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; isActive?: boolean; locationId?: number; notes?: string; hireDate?: string; terminationDate?: string; hourlyCost?: number; rehireStatus?: boolean; employmentType?: number; referral?: string; atHome?: boolean; hiringSource?: number; ntLoginName?: string; customerCard?: boolean; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; scheduleNotification?: number; federatedId?: string; useTeamEmailAutoParkingLimit?: boolean; maxEmailAutoParkingLimit?: number; sipUser?: string; systemUser?: string; systemDomain?: string; crmUserName?: string; useAgentTimeZone?: boolean; timeDisplayFormat?: number; sendEmailNotifications?: boolean; apiKey?: string; telephone1?: string; telephone2?: string; userType?: string; isWhatIfAgent?: boolean; requestContact?: boolean; chatThreshold?: number; useTeamChatThreshold?: boolean; emailThreshold?: number; useTeamEmailThreshold?: boolean; workItemThreshold?: number; useTeamWorkItemThreshold?: boolean; smsThreshold?: number; useTeamSmsThreshold?: boolean; digitalThreshold?: number; useTeamDigitalThreshold?: boolean; voiceThreshold?: number; useTeamVoiceThreshold?: boolean; contactAutoFocus?: boolean; useTeamContactAutoFocus?: boolean; useTeamRequestContact?: boolean; recordingNumbers?: Array<Record<string, any>>; subject?: string; issuer?: string; isOpenIdProfileComplete?: boolean; deliveryMode?: string; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; emailRefusalTimeOut?: number; voicemailRefusalTimeOut?: number; smsRefusalTimeout?: number; isBillable?: boolean; useTeamDefaults?: boolean; agentVoiceThreshold?: number; agentChatThreshold?: number; agentEmailThreshold?: number; agentWorkItemThreshold?: number; agentSmsThreshold?: number; agentDeliveryMode?: string; agentTotalContactCount?: number; agentRequestContact?: boolean; agentContactAutoFocus?: boolean; integratedSoftphoneWebRtcUrls?: Array<Record<string, any>>; agentMaxVersion?: number; agentPhoneTimeout?: number; address1?: string; address2?: string; zipCode?: string; noFixedAddress?: boolean; digitalRefusalTimeout?: number; agentSyncTime?: string; agentIntegration?: boolean; channelLock?: boolean; digitalEngagementEnabled?: boolean; ACWEnabled?: boolean; ACWRange?: number; }; }, options?: RequestOptions): Promise<{ error?: string; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}`;
    return this.client.put<{ error?: string; }>(path, data, options);
  }

  /**
   * Sets an Agent's State
   * POST /agents/{agentId}/state
   */
  public async setAgentState(agentId: string, options?: RequestOptions & { query?: { state: "Available" | "Unavailable"; outStateId?: number; } }): Promise<any> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/state`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Returns Skills assigned to all agents
   * GET /agents/skills
   */
  public async getAgentsSkills(options?: RequestOptions & { query?: { UpdatedSince?: string; fields?: string; searchString?: string; mediaTypeId?: number; outboundStrategy?: string; isSkillActive?: boolean; isAgentActive: boolean; isActive: boolean; skip?: number; top?: number; orderBy?: string; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; businessUnitId?: string; agentSkillAssignments?: Array<{ isActive?: boolean; agentProficiencyValue?: number; agentProficiencyName?: string; internalId?: string; agentId?: number; teamId?: number; agentName?: string; campaignId?: number; emailFromAddress?: string; isSkillActive?: boolean; isDialer?: boolean; isNaturalCalling?: boolean; isOutbound?: boolean; lastUpdateTime?: string; mediaType?: number; notes?: string; requireDisposition?: boolean; scriptDisposition?: boolean; skillId?: number; skillName?: string; useACW?: boolean; useDisposition?: boolean; useSecondaryDispositions?: boolean; outboundStrategy?: string; campaignName?: string; priorityBlending?: boolean; isNaturalCallingRunning?: number; mediaTypeName?: string; screenPopTriggerEvent?: string; lastPollTime?: string; isAgentActive?: boolean; }>; }> {
    const path = `/agents/skills`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; lastPollTime?: string; businessUnitId?: string; agentSkillAssignments?: Array<{ isActive?: boolean; agentProficiencyValue?: number; agentProficiencyName?: string; internalId?: string; agentId?: number; teamId?: number; agentName?: string; campaignId?: number; emailFromAddress?: string; isSkillActive?: boolean; isDialer?: boolean; isNaturalCalling?: boolean; isOutbound?: boolean; lastUpdateTime?: string; mediaType?: number; notes?: string; requireDisposition?: boolean; scriptDisposition?: boolean; skillId?: number; skillName?: string; useACW?: boolean; useDisposition?: boolean; useSecondaryDispositions?: boolean; outboundStrategy?: string; campaignName?: string; priorityBlending?: boolean; isNaturalCallingRunning?: number; mediaTypeName?: string; screenPopTriggerEvent?: string; lastPollTime?: string; isAgentActive?: boolean; }>; }>(path, options);
  }

  /**
   * Add or Modify skill assignments for multiple agent
   * POST /agents/skills
   */
  public async postAgentsSkills(data?: { agentAndSkillDetails?: Array<{ agentIds?: Array<string>; skills?: Array<Record<string, any>>; }>; }, options?: RequestOptions): Promise<{ resultSet?: { errorCount?: string; skillResults?: Array<Record<string, any>>; }; }> {
    const path = `/agents/skills`;
    return this.client.post<{ resultSet?: { errorCount?: string; skillResults?: Array<Record<string, any>>; }; }>(path, data, options);
  }

  /**
   * Get Agents that are assigned to Multiple agents
   * POST /agents/search
   */
  public async postAgentsSearch(data: { agentIds?: Array<string>; updatedSince?: string; isActive?: boolean; isLocked?: boolean; searchString?: string; fields?: string; orderby?: string; }, options?: RequestOptions): Promise<AdminAgents_postAgentSearchResponse> {
    const path = `/agents/search`;
    return this.client.post<AdminAgents_postAgentSearchResponse>(path, data, options);
  }

  /**
   * Get Agents that are assigned to Multiple Skills
   * POST /skills/agents/search
   */
  public async postSkillsAgentsSearch(data: { skillIds?: Array<number>; updatedSince?: string; searchString?: string; fields?: string; orderby?: string; skip?: string; top?: string; campaignIds?: Array<number>; isAssigned?: boolean; }, options?: RequestOptions): Promise<{ businessUnitId?: number; lastPollTime?: string; hiddenAgents?: number; errorCount?: number; totalRecords?: number; agentAndSkillRecords?: Array<{ success?: boolean; skillId?: string; agentSkillAssignment?: Array<Record<string, any>>; }>; }> {
    const path = `/skills/agents/search`;
    return this.client.post<{ businessUnitId?: number; lastPollTime?: string; hiddenAgents?: number; errorCount?: number; totalRecords?: number; agentAndSkillRecords?: Array<{ success?: boolean; skillId?: string; agentSkillAssignment?: Array<Record<string, any>>; }>; }>(path, data, options);
  }

  /**
   * Returns agent configuration details for an agent with generic properties
   * GET /agents/{agentId}/agent-configuration
   */
  public async getAgentConfiguration(agentId: number, options?: RequestOptions & { query?: { fields?: string; } }): Promise<{ maxConferenceParties?: number; deleteCommitmentId?: number; deleteCommitmentString?: string; persistentPanels?: Array<{ persistentPanelId?: number; persistentPanelLabel?: string; persistentPanelURI?: string; }>; webRTCType?: string; wfoWebsiteUrl?: string; wfoWebServiceUrl?: string; wfoApiUrl?: string; webRTCWSSUrls?: Array<{ urlName?: string; weight?: string; }>; webRTCServerDomain?: string; webRTCDNIS?: string; helpSiteVersion?: string; digitalEngagementUrl?: string; emergencyPhoneNumbers?: Array<string>; isExternalDirConfigure?: boolean; }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/agent-configuration`;
    return this.client.get<{ maxConferenceParties?: number; deleteCommitmentId?: number; deleteCommitmentString?: string; persistentPanels?: Array<{ persistentPanelId?: number; persistentPanelLabel?: string; persistentPanelURI?: string; }>; webRTCType?: string; wfoWebsiteUrl?: string; wfoWebServiceUrl?: string; wfoApiUrl?: string; webRTCWSSUrls?: Array<{ urlName?: string; weight?: string; }>; webRTCServerDomain?: string; webRTCDNIS?: string; helpSiteVersion?: string; digitalEngagementUrl?: string; emergencyPhoneNumbers?: Array<string>; isExternalDirConfigure?: boolean; }>(path, options);
  }

  /**
   * Returns a list of groups an agent is assigned
   * GET /agents/{agentId}/groups
   */
  public async getagentbyagentidgroups(agentId: string, options?: RequestOptions): Promise<AdminAgents_getagentagentidgroups> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/groups`;
    return this.client.get<AdminAgents_getagentagentidgroups>(path, options);
  }

  /**
   * Returns Skills assigned to an agent
   * GET /agents/{agentId|userId}/skills
   */
  public async getSkillsByAgentId(agentId: string, options?: RequestOptions & { query?: { isAssignedSkillActive?: boolean; } }): Promise<AdminAgents_getAgentSkillsResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/skills`;
    return this.client.get<AdminAgents_getAgentSkillsResponse>(path, options);
  }

  /**
   * Assigns Skills to an Agent
   * POST /agents/{agentId|userId}/skills
   */
  public async assignsSkillsToAnAgent(agentId: string, data?: { skills?: Array<{ skillId: string; proficiency?: number; isActive?: boolean; }>; }, options?: RequestOptions): Promise<AdminAgents_postAgentSkillsResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/skills`;
    return this.client.post<AdminAgents_postAgentSkillsResponse>(path, data, options);
  }

  /**
   * Modify Skill assignments for an Agent
   * PUT /agents/{agentId|userId}/skills
   */
  public async modifySkillAssignmentsForAgent(agentId: string, data?: { skills?: Array<{ skillId: string; proficiency?: number; isActive: boolean; }>; }, options?: RequestOptions): Promise<AdminAgents_postAgentSkillsResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/skills`;
    return this.client.put<AdminAgents_postAgentSkillsResponse>(path, data, options);
  }

  /**
   * Remove Skill assignments for an Agent
   * DELETE /agents/{agentId|userId}/skills
   */
  public async removeSkillAssignmentsForAgent(agentId: string, options?: RequestOptions): Promise<AdminAgents_postAgentSkillsResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/skills`;
    return this.client.delete<AdminAgents_postAgentSkillsResponse>(path, options);
  }

  /**
   * Returns Skills not assigned to an Agent
   * GET /agents/{agentId}/skills/unassigned
   */
  public async getSkillsNotAssignedToAgent(agentId: string, options?: RequestOptions): Promise<AdminAgents_getAgentUnassignedSkillsResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/skills/unassigned`;
    return this.client.get<AdminAgents_getAgentUnassignedSkillsResponse>(path, options);
  }

  /**
   * Returns summary of all agent's contacts by skill
   * GET /agents/skill-data
   */
  public async agentSkillData(options?: RequestOptions): Promise<AdminAgents_getAgentSkillsDataResponse> {
    const path = `/agents/skill-data`;
    return this.client.get<AdminAgents_getAgentSkillsDataResponse>(path, options);
  }

  /**
   *  Returns summary of an agent's contacts by skill
   * GET /agents/{agentId}/skill-data
   */
  public async agentSkillDataForSkillid(agentId: string, options?: RequestOptions & { query?: { isOutbound?: boolean; } }): Promise<AdminAgents_getAgentSkillsDataResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/skill-data`;
    return this.client.get<AdminAgents_getAgentSkillsDataResponse>(path, options);
  }

  /**
   * Creates a Custom Agent Event
   * PUT /agents/{agentId}/custom-event
   */
  public async putAgentsAgentIdCustomEvent(agentId: string, options?: RequestOptions & { query?: { eventName?: string; persistInMemory?: boolean; data?: string; } }): Promise<any> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/custom-event`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   *  Returns a list of Quick Replies
   * GET /agents/quick-replies
   */
  public async quickReplies(options?: RequestOptions): Promise<AdminAgents_getAgentsQuickRepliesResponse> {
    const path = `/agents/quick-replies`;
    return this.client.get<AdminAgents_getAgentsQuickRepliesResponse>(path, options);
  }

  /**
   * Returns a list of Quick Replies for an Agent
   * GET /agents/{agentId}/quick-replies
   */
  public async quickRepliesByAgent(agentId: string, options?: RequestOptions & { query?: { skillId: string; contactId?: string; } }): Promise<AdminAgents_getAgentQuickRepliesResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/quick-replies`;
    return this.client.get<AdminAgents_getAgentQuickRepliesResponse>(path, options);
  }

  /**
   * Create an Agent message
   * POST /agents/messages
   */
  public async createMessage(data?: AdminAgents_postAgentsMessagesRequest, options?: RequestOptions): Promise<{ errorCount?: number; agentMessageResults?: Array<{ agentMessageId?: number; success?: boolean; error?: string; }>; }> {
    const path = `/agents/messages`;
    return this.client.post<{ errorCount?: number; agentMessageResults?: Array<{ agentMessageId?: number; success?: boolean; error?: string; }>; }>(path, data, options);
  }

  /**
   * Delete agent message
   * DELETE /agents/messages/{messageId}
   */
  public async deleteMessagebyMessageId(messageId: number, options?: RequestOptions): Promise<any> {
    const path = `/agents/messages/${encodeURIComponent(String(messageId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Returns an Agent Message List
   * GET /agents/{agentId}/messages
   */
  public async agentMessageList(agentId: string, options?: RequestOptions): Promise<AdminAgents_getAgentMessagesResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/messages`;
    return this.client.get<AdminAgents_getAgentMessagesResponse>(path, options);
  }

  /**
   * Returns an Agent Indicator List
   * GET /agents/{agentId}/indicators
   */
  public async agentIndicatorList(agentId: string, options?: RequestOptions): Promise<AdminAgents_getAgentIndicatorsResponse> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/indicators`;
    return this.client.get<AdminAgents_getAgentIndicatorsResponse>(path, options);
  }

  /**
   * Forces an agent session to end
   * POST /agents/{agentId}/logout
   */
  public async agentLogout(agentId: string, options?: RequestOptions): Promise<any> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/logout`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Returns Agent Dialing patterns
   * GET /agent-patterns
   */
  public async getAgentDialingPatterns(options?: RequestOptions): Promise<AdminAgents_getAgentPatternsResponse> {
    const path = `/agent-patterns`;
    return this.client.get<AdminAgents_getAgentPatternsResponse>(path, options);
  }

  /**
   *  Transform Input Number
   * POST /agent-patterns/{agentpatternId}/transform-phonenumbers
   */
  public async postAgentPatternsIdTransformPhonenumbers(agentpatternId: number, options?: RequestOptions & { query?: { "inputPhoneNum "?: string; externalId?: string; } }): Promise<{ transformNumOut?: Array<{ inputNumber?: string; outputNumber?: string; externalId?: string; errorDescription?: string; isTransformed?: boolean; }>; }> {
    const path = `/agent-patterns/${encodeURIComponent(String(agentpatternId))}/transform-phonenumbers`;
    return this.client.post<{ transformNumOut?: Array<{ inputNumber?: string; outputNumber?: string; externalId?: string; errorDescription?: string; isTransformed?: boolean; }>; }>(path, undefined, options);
  }

  /**
   * Returns a list of Agent States
   * GET /agents-states
   */
  public async getAgentStates(options?: RequestOptions & { query?: { reqBUIds?: string; } }): Promise<AdminAgents_getAgentStatesResponse> {
    const path = `/agents-states`;
    return this.client.get<AdminAgents_getAgentStatesResponse>(path, options);
  }

  /**
   * Get Agents Extended
   * GET /agents/extended
   */
  public async getAgentsExtended(options?: RequestOptions & { query?: { activeUsersOnly?: boolean; } }): Promise<{ totalRecords?: number; hiddenAgents?: number; agents?: Array<{ userID?: number; firstName?: string; lastName?: string; middleName?: string; team_no?: number; reportTo?: number; secondaryID?: string; securityProfileID?: number; email?: string; combinedUserNameDomain?: string; isActive?: boolean; notes?: string; chatRefusalTimeout?: number; emailRefusalTimeout?: number; phoneCallRefusalTimeout?: number; smsRefusalTimeout?: number; voiceMailRefusalTimeout?: number; workItemRefusalTimeout?: number; skillInfo?: string; agentDialingPatternID?: number; timeZone?: string; country?: string; state?: string; city?: string; wfmNotificationEnabled?: boolean; wfmNotificationInterval?: number; sipUserId?: string; agentPhoneOther?: string; hireDate?: string; terminationDate?: string; employmentType?: number; hourlyCost?: number; rehireStatus?: boolean; location?: number; hiringSourceId?: number; atHomeWorker?: boolean; referral?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; crmUsername?: string; systemDomain?: string; systemUsername?: string; shiftTimes?: boolean; display24Hour?: boolean; userType?: string; maxEmailInboxCount?: number; mchVoice?: number; mchChat?: number; mchEmail?: number; mchSocial?: number; mchWorkitem?: number; mchRequestContact?: boolean; useTeamMCHChat?: boolean; useTeamMCHEmail?: boolean; useTeamMCHWorkItem?: boolean; useTeamMCHRequestContact?: boolean; schRequestContact?: boolean; useDefaultEmail?: boolean; useDefaultRequestContact?: boolean; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; mchContactAutoFocus?: boolean; useTeamMCHContactAutoFocus?: boolean; deliveryMode?: number; locationNo?: number; locationname?: string; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; ntLoginName?: string; hiringSourceDesc?: string; federatedId?: string; externalIdentity?: string; autoAttendantAccessType?: number; groupIds?: string; phones?: string; integratedSoftphoneWebRtcUrls?: string; agentPhoneHome?: string; useTeamMaxEmailInboxCount?: boolean; }>; }> {
    const path = `/agents/extended`;
    return this.client.get<{ totalRecords?: number; hiddenAgents?: number; agents?: Array<{ userID?: number; firstName?: string; lastName?: string; middleName?: string; team_no?: number; reportTo?: number; secondaryID?: string; securityProfileID?: number; email?: string; combinedUserNameDomain?: string; isActive?: boolean; notes?: string; chatRefusalTimeout?: number; emailRefusalTimeout?: number; phoneCallRefusalTimeout?: number; smsRefusalTimeout?: number; voiceMailRefusalTimeout?: number; workItemRefusalTimeout?: number; skillInfo?: string; agentDialingPatternID?: number; timeZone?: string; country?: string; state?: string; city?: string; wfmNotificationEnabled?: boolean; wfmNotificationInterval?: number; sipUserId?: string; agentPhoneOther?: string; hireDate?: string; terminationDate?: string; employmentType?: number; hourlyCost?: number; rehireStatus?: boolean; location?: number; hiringSourceId?: number; atHomeWorker?: boolean; referral?: string; custom1?: string; custom2?: string; custom3?: string; custom4?: string; custom5?: string; crmUsername?: string; systemDomain?: string; systemUsername?: string; shiftTimes?: boolean; display24Hour?: boolean; userType?: string; maxEmailInboxCount?: number; mchVoice?: number; mchChat?: number; mchEmail?: number; mchSocial?: number; mchWorkitem?: number; mchRequestContact?: boolean; useTeamMCHChat?: boolean; useTeamMCHEmail?: boolean; useTeamMCHWorkItem?: boolean; useTeamMCHRequestContact?: boolean; schRequestContact?: boolean; useDefaultEmail?: boolean; useDefaultRequestContact?: boolean; totalContactCount?: number; useTeamDeliveryModeSettings?: boolean; mchContactAutoFocus?: boolean; useTeamMCHContactAutoFocus?: boolean; deliveryMode?: number; locationNo?: number; locationname?: string; useTeamMaxConcurrentChats?: boolean; maxConcurrentChats?: number; ntLoginName?: string; hiringSourceDesc?: string; federatedId?: string; externalIdentity?: string; autoAttendantAccessType?: number; groupIds?: string; phones?: string; integratedSoftphoneWebRtcUrls?: string; agentPhoneHome?: string; useTeamMaxEmailInboxCount?: boolean; }>; }>(path, options);
  }

  /**
   * Lists all agent issues
   * GET /agents/issues
   */
  public async getAgentsIssues(options?: RequestOptions & { query?: { isClosed: boolean; agentName?: string; issueType?: string; teamName?: string; } }): Promise<{ hiddenAgents?: number; agentIssue?: Array<{ rowNumber?: number; agentIssueId?: number; agent_Name?: string; contact_ID?: number; issueTypeName?: string; scriptName?: string; description?: string; salesForceCaseID?: string; submitTime?: string; team_Name?: string; }>; }> {
    const path = `/agents/issues`;
    return this.client.get<{ hiddenAgents?: number; agentIssue?: Array<{ rowNumber?: number; agentIssueId?: number; agent_Name?: string; contact_ID?: number; issueTypeName?: string; scriptName?: string; description?: string; salesForceCaseID?: string; submitTime?: string; team_Name?: string; }>; }>(path, options);
  }

  /**
   * Lists agent group messages
   * GET /agent-messages/{messageGroupId}
   */
  public async getAgentMessagesId(messageGroupId: string, options?: RequestOptions): Promise<{ totalRecords?: number; hiddenAgents?: number; agentMessage?: Array<{ userID?: number; firstName?: string; lastName?: string; userName?: string; userNameDomain?: string; combinedUserNameDomain?: string; email?: string; team?: string; team_no?: number; isActive?: boolean; subject?: string; date?: string; sentOn?: string; sentTo?: string; duration?: number; expireDate?: string; msgText?: string; msgId?: number; msgType?: string; delivered?: number; messageGroupGuid?: string; }>; }> {
    const path = `/agent-messages/${encodeURIComponent(String(messageGroupId))}`;
    return this.client.get<{ totalRecords?: number; hiddenAgents?: number; agentMessage?: Array<{ userID?: number; firstName?: string; lastName?: string; userName?: string; userNameDomain?: string; combinedUserNameDomain?: string; email?: string; team?: string; team_no?: number; isActive?: boolean; subject?: string; date?: string; sentOn?: string; sentTo?: string; duration?: number; expireDate?: string; msgText?: string; msgId?: number; msgType?: string; delivered?: number; messageGroupGuid?: string; }>; }>(path, options);
  }

  /**
   * Lists existing skills for download
   * GET /agents/skills-download
   */
  public async getGentsSkillsDownload(options?: RequestOptions & { query?: { skillRecordTypeID?: string; fields?: string; skip?: number; top?: number; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; agentSkillDownload?: Array<{ skill_Name?: string; skill_No?: number; divisionId?: number; divisionName?: string; media_Type?: number; status?: string; campaign_No?: number; isOutbound?: boolean; service_Threshold?: number; service_Goal?: number; interruptible?: boolean; screen_Pops?: boolean; custom_Screen_Pops?: boolean; isActive?: boolean; initial_Priority?: number; max_Priority?: number; acceleration?: number; dispositionsRequired?: string; emailFromAddress?: string; enlightenAIEquityLevel?: number; fallbackTime?: number; finalizeWhenExhausted?: boolean; focusLock?: number; focusMetric?: number; shortAbandonThreshold?: number; useShortAbandonThreshold?: boolean; includeShortAbandons?: boolean; includeOtherAbandons?: boolean; hoursOfOperation?: number; timeBeforeInterrupt?: number; isDialer?: boolean; isNaturalCalling?: boolean; callerID?: string; skillRecordTypeID?: number; defaultRoutingCriteria?: string; queueDefaultMasterID?: number; wfiMinimumAgentsLevel?: number; wfiMinimumAvailableAgentsLevel?: number; emailParking?: boolean; chatWarningThreshold?: number; agentTypingIndicator?: boolean; patronTypingPreview?: boolean; emailBccAddress?: string; notes?: string; enableChatMessagingTimeout?: boolean; timetoInactiveChatMessage?: number; inactiveChatMessage?: string; chatTerminationCountDown?: number; chatTerminatedMessage?: string; media_Name?: string; campaign_Name?: string; custom_Screen_Pop_Application?: string; hoursOfOperationName?: string; customScript?: string; assignedAgents?: string; assignedUserIds?: string; assignedPOCs?: string; callingLists?: string; multiNumberSerialDeliveryId?: number; agentless?: boolean; agentlessPortsUsed?: number; smsMessageTemplateId?: number; treatProgressAsRinging?: boolean; preConnectCPAEnabled?: boolean; agentOverrideButtonOptions?: number; ansMachineOverrideSeconds?: number; screenPopTriggerEvent?: number; ratio?: number; maximumRingingDuration?: number; minimumPercentageHopDestinations?: number; ansMachineDetMode?: number; ansMachineMsg?: string; abandonMsg?: string; abandonMsgMode?: number; customerLiveSilenceSeconds?: number; machineEndSilenceSeconds?: number; machineMinimumWithoutAgentSeconds?: number; machineEndTimeoutSeconds?: number; utteranceMinimumSeconds?: number; machineMinimumWithAgentSeconds?: number; agentNoResponseSeconds?: number; agentResponseUtteranceMinimumSeconds?: number; agentVoiceThreshold?: number; customerVoiceThreshold?: number; recordPlaceCallAudio?: boolean; cpaPatternForLogging?: string; blockMultipleCalls?: boolean; notifyAgentsWhenListIsEmpty?: boolean; endOfListNotificationDelaySeconds?: number; confirmationRequiredDeliveryTypeID?: number; confirmationRequiredTimeout?: number; confirmationRequiredTimeoutSubsequent?: number; confirmationRequiredDefaultAccept?: boolean; complianceRecordsDeliveryTypeID?: number; complianceRecordsTimeout?: number; complianceRecordsTimeoutSubsequent?: number; complianceRecordsDefaultAccept?: boolean; overrideBUAbandonRate?: boolean; beginDampenPercentage?: number; abandonRateCutoff?: number; abandonRateThreshold?: number; aggressiveRatioFactor?: number; abandonTimeout?: number; isScheduled?: boolean; enableDialingByProficiency?: boolean; proficiencyFactor?: number; waitTimeFactor?: number; maxConcurrentCallsPerAgent?: number; maxWaitTimeSeconds?: number; complianceButtonOptions?: number; previewButtonOptions?: number; smsMessageTemplate?: string; transportCode?: string; enableBlending?: boolean; inactiveBlendingTimerSeconds?: number; callbackInitialPriority?: number; priorityInitialPriority?: number; externalOutboundSkill_No?: string; minCallbackMinutes?: number; maximumAttempts?: number; loadFresh?: boolean; loadCallbacks?: boolean; loadNonFresh?: boolean; defaultContactExpirationMinutes?: number; restrictedCallingMaxAttempts?: number; restrictedCallingMinutes?: number; confirmationRequiredDefault?: boolean; runGetPriorityContactsOnContactInsertion?: boolean; scheduleDayOfWeek?: number; scheduleDurationMinutes?: number; scheduleIsActive?: number; scheduleSkillNo?: number; scheduleStartTime?: number; scheduleStartTimeMinutes?: number; xsGetContactsActive?: boolean; xsReadyThreshold?: number; xsFreshThreshold?: number; xsAvailableThreshold?: number; xsNumberToRetrieve?: number; xsSkillChangedActive?: boolean; complianceRecordsDisabled?: boolean; confirmationRequiredDisabled?: boolean; maxBlendingAttempts?: number; maxNumAnsweredCalls?: number; maxNumCallbacks?: number; callbackRestMinutes?: number; unassignAgentSpecificCallbacks?: boolean; staleMinutesCallbacks?: number; staleMinutesGeneral?: number; xsScriptID?: number; xsCheckinScriptID?: number; skillSchedule?: Array<Record<string, any>>; isPersistentWorkItem?: boolean; isRequireManualAccept?: boolean; evaluationCriteria?: number; oldEnlightenAIFocusMetric?: number; deliverCallbacksOnDNCHolidays?: boolean; deliverPrioritiesOnDNCHolidays?: boolean; agentlessDeliveryDelaySeconds?: number; }>; }> {
    const path = `/agents/skills-download`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; agentSkillDownload?: Array<{ skill_Name?: string; skill_No?: number; divisionId?: number; divisionName?: string; media_Type?: number; status?: string; campaign_No?: number; isOutbound?: boolean; service_Threshold?: number; service_Goal?: number; interruptible?: boolean; screen_Pops?: boolean; custom_Screen_Pops?: boolean; isActive?: boolean; initial_Priority?: number; max_Priority?: number; acceleration?: number; dispositionsRequired?: string; emailFromAddress?: string; enlightenAIEquityLevel?: number; fallbackTime?: number; finalizeWhenExhausted?: boolean; focusLock?: number; focusMetric?: number; shortAbandonThreshold?: number; useShortAbandonThreshold?: boolean; includeShortAbandons?: boolean; includeOtherAbandons?: boolean; hoursOfOperation?: number; timeBeforeInterrupt?: number; isDialer?: boolean; isNaturalCalling?: boolean; callerID?: string; skillRecordTypeID?: number; defaultRoutingCriteria?: string; queueDefaultMasterID?: number; wfiMinimumAgentsLevel?: number; wfiMinimumAvailableAgentsLevel?: number; emailParking?: boolean; chatWarningThreshold?: number; agentTypingIndicator?: boolean; patronTypingPreview?: boolean; emailBccAddress?: string; notes?: string; enableChatMessagingTimeout?: boolean; timetoInactiveChatMessage?: number; inactiveChatMessage?: string; chatTerminationCountDown?: number; chatTerminatedMessage?: string; media_Name?: string; campaign_Name?: string; custom_Screen_Pop_Application?: string; hoursOfOperationName?: string; customScript?: string; assignedAgents?: string; assignedUserIds?: string; assignedPOCs?: string; callingLists?: string; multiNumberSerialDeliveryId?: number; agentless?: boolean; agentlessPortsUsed?: number; smsMessageTemplateId?: number; treatProgressAsRinging?: boolean; preConnectCPAEnabled?: boolean; agentOverrideButtonOptions?: number; ansMachineOverrideSeconds?: number; screenPopTriggerEvent?: number; ratio?: number; maximumRingingDuration?: number; minimumPercentageHopDestinations?: number; ansMachineDetMode?: number; ansMachineMsg?: string; abandonMsg?: string; abandonMsgMode?: number; customerLiveSilenceSeconds?: number; machineEndSilenceSeconds?: number; machineMinimumWithoutAgentSeconds?: number; machineEndTimeoutSeconds?: number; utteranceMinimumSeconds?: number; machineMinimumWithAgentSeconds?: number; agentNoResponseSeconds?: number; agentResponseUtteranceMinimumSeconds?: number; agentVoiceThreshold?: number; customerVoiceThreshold?: number; recordPlaceCallAudio?: boolean; cpaPatternForLogging?: string; blockMultipleCalls?: boolean; notifyAgentsWhenListIsEmpty?: boolean; endOfListNotificationDelaySeconds?: number; confirmationRequiredDeliveryTypeID?: number; confirmationRequiredTimeout?: number; confirmationRequiredTimeoutSubsequent?: number; confirmationRequiredDefaultAccept?: boolean; complianceRecordsDeliveryTypeID?: number; complianceRecordsTimeout?: number; complianceRecordsTimeoutSubsequent?: number; complianceRecordsDefaultAccept?: boolean; overrideBUAbandonRate?: boolean; beginDampenPercentage?: number; abandonRateCutoff?: number; abandonRateThreshold?: number; aggressiveRatioFactor?: number; abandonTimeout?: number; isScheduled?: boolean; enableDialingByProficiency?: boolean; proficiencyFactor?: number; waitTimeFactor?: number; maxConcurrentCallsPerAgent?: number; maxWaitTimeSeconds?: number; complianceButtonOptions?: number; previewButtonOptions?: number; smsMessageTemplate?: string; transportCode?: string; enableBlending?: boolean; inactiveBlendingTimerSeconds?: number; callbackInitialPriority?: number; priorityInitialPriority?: number; externalOutboundSkill_No?: string; minCallbackMinutes?: number; maximumAttempts?: number; loadFresh?: boolean; loadCallbacks?: boolean; loadNonFresh?: boolean; defaultContactExpirationMinutes?: number; restrictedCallingMaxAttempts?: number; restrictedCallingMinutes?: number; confirmationRequiredDefault?: boolean; runGetPriorityContactsOnContactInsertion?: boolean; scheduleDayOfWeek?: number; scheduleDurationMinutes?: number; scheduleIsActive?: number; scheduleSkillNo?: number; scheduleStartTime?: number; scheduleStartTimeMinutes?: number; xsGetContactsActive?: boolean; xsReadyThreshold?: number; xsFreshThreshold?: number; xsAvailableThreshold?: number; xsNumberToRetrieve?: number; xsSkillChangedActive?: boolean; complianceRecordsDisabled?: boolean; confirmationRequiredDisabled?: boolean; maxBlendingAttempts?: number; maxNumAnsweredCalls?: number; maxNumCallbacks?: number; callbackRestMinutes?: number; unassignAgentSpecificCallbacks?: boolean; staleMinutesCallbacks?: number; staleMinutesGeneral?: number; xsScriptID?: number; xsCheckinScriptID?: number; skillSchedule?: Array<Record<string, any>>; isPersistentWorkItem?: boolean; isRequireManualAccept?: boolean; evaluationCriteria?: number; oldEnlightenAIFocusMetric?: number; deliverCallbacksOnDNCHolidays?: boolean; deliverPrioritiesOnDNCHolidays?: boolean; agentlessDeliveryDelaySeconds?: number; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 Returns list of Teams
   * GET /teams
   */
  public async getTeams(options?: RequestOptions & { query?: { fields?: string; updateSince?: string; isActive?: boolean; searchString?: string; skip?: string; top?: string; orderBy?: string; } }): Promise<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; totalRecords?: number; teams?: Array<{ unavailableCodes?: Array<Array<Record<string, any>>>; teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; inViewEnabled?: boolean; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; maxConcurrentChats?: number; agentCount?: number; maxEmailAutoParkingLimit?: number; inViewGamificationEnabled?: boolean; inViewChatEnabled?: boolean; inViewWallboardEnabled?: boolean; inViewLMSEnabled?: boolean; analyticsEnabled?: boolean; requestContact?: boolean; contactAutoFocus?: boolean; chatThreshold?: number; emailThreshold?: number; workItemThreshold?: number; smsThreshold?: number; digitalThreshold?: number; voiceThreshold?: number; teamLeadId?: string; deliveryMode?: string; totalContactCount?: number; niceAudioRecordingEnabled?: boolean; niceDesktopAnalyticsEnabled?: boolean; niceQmEnabled?: boolean; niceScreenRecordingEnabled?: boolean; niceSpeechAnalyticsEnabled?: boolean; niceWfmEnabled?: boolean; niceQualityOptimizationEnabled?: boolean; niceSurvey_CustomerEnabled?: boolean; nicePerformanceManagementEnabled?: boolean; niceAnalyticsEnabled?: boolean; niceLessonManagementEnabled?: boolean; niceCoachingEnabled?: boolean; niceStrategicPlannerEnabled?: boolean; niceShiftBiddingEnabled?: boolean; niceWfoAdvancedEnabled?: boolean; niceWfoEssentialsEnabled?: boolean; cxoneCustomerAuthenticationEnabled?: boolean; socialThreshold?: number; teamUuid?: string; channelLock?: boolean; divisionNo?: number; }>; }> {
    const path = `/teams`;
    return this.client.get<{ _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; lastPollTime?: string; totalRecords?: number; teams?: Array<{ unavailableCodes?: Array<Array<Record<string, any>>>; teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; inViewEnabled?: boolean; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; maxConcurrentChats?: number; agentCount?: number; maxEmailAutoParkingLimit?: number; inViewGamificationEnabled?: boolean; inViewChatEnabled?: boolean; inViewWallboardEnabled?: boolean; inViewLMSEnabled?: boolean; analyticsEnabled?: boolean; requestContact?: boolean; contactAutoFocus?: boolean; chatThreshold?: number; emailThreshold?: number; workItemThreshold?: number; smsThreshold?: number; digitalThreshold?: number; voiceThreshold?: number; teamLeadId?: string; deliveryMode?: string; totalContactCount?: number; niceAudioRecordingEnabled?: boolean; niceDesktopAnalyticsEnabled?: boolean; niceQmEnabled?: boolean; niceScreenRecordingEnabled?: boolean; niceSpeechAnalyticsEnabled?: boolean; niceWfmEnabled?: boolean; niceQualityOptimizationEnabled?: boolean; niceSurvey_CustomerEnabled?: boolean; nicePerformanceManagementEnabled?: boolean; niceAnalyticsEnabled?: boolean; niceLessonManagementEnabled?: boolean; niceCoachingEnabled?: boolean; niceStrategicPlannerEnabled?: boolean; niceShiftBiddingEnabled?: boolean; niceWfoAdvancedEnabled?: boolean; niceWfoEssentialsEnabled?: boolean; cxoneCustomerAuthenticationEnabled?: boolean; socialThreshold?: number; teamUuid?: string; channelLock?: boolean; divisionNo?: number; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 This method will create a new Team in the business unit
   * POST /teams
   */
  public async postTeams(data?: { teams: Array<{ teamName: string; isActive?: boolean; maxConcurrentChats?: number; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; inViewEnabled?: boolean; inViewGamificationEnabled?: boolean; inViewWallboardEnabled?: boolean; inViewLMSEnabled?: boolean; notes?: string; maxEmailAutoParkingLimit?: number; analyticsEnabled?: boolean; requestContact?: boolean; contactAutoFocus?: boolean; chatThreshold?: number; emailThreshold?: number; workItemThreshold?: number; voiceThreshold?: number; smsThreshold?: number; digitalThreshold?: number; teamUuid?: string; teamLeadId?: string; deliveryMode?: string; totalContactCount?: number; niceAudioRecordingEnabled?: boolean; niceCoachingEnabled?: boolean; niceDesktopAnalyticsEnabled?: boolean; niceLessonManagementEnabled?: boolean; nicePerformanceManagementEnabled?: boolean; niceQmEnabled?: boolean; niceQualityOptimizationEnabled?: boolean; niceScreenRecordingEnabled?: boolean; niceShiftBiddingEnabled?: boolean; niceSpeechAnalyticsEnabled?: boolean; niceStrategicPlannerEnabled?: boolean; niceSurvey_CustomerEnabled?: boolean; niceWfmEnabled?: boolean; niceWfoAdvancedEnabled?: boolean; cxOneCustomerAuthenticationEnabled?: boolean; niceWfoEssentialsEnabled?: boolean; description?: string; channelLock?: boolean; divisionNo?: number; }>; }, options?: RequestOptions): Promise<{ errorCount?: number; results?: Array<{ success?: boolean; teamId?: number; error?: string; }>; }> {
    const path = `/teams`;
    return this.client.post<{ errorCount?: number; results?: Array<{ success?: boolean; teamId?: number; error?: string; }>; }>(path, data, options);
  }

  /**
   * Updated in v34.0 Get Team by TeamId
   * GET /teams/{teamId}
   */
  public async getTeamsId(teamId: number, options?: RequestOptions & { query?: { fields?: string; } }): Promise<{ businessUnitId?: number; lastPollTime?: string; teams?: Array<{ UnavailableCodes?: Array<Array<Record<string, any>>>; teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; inViewEnabled?: boolean; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; maxConcurrentChats?: number; agentCount?: number; maxEmailAutoParkingLimit?: number; inViewGamificationEnabled?: boolean; inViewChatEnabled?: boolean; inViewWallboardEnabled?: boolean; inViewLMSEnabled?: boolean; analyticsEnabled?: boolean; requestContact?: boolean; contactAutoFocus?: boolean; chatThreshold?: number; emailThreshold?: number; workItemThreshold?: number; smsThreshold?: number; digitalThreshold?: number; socialThreshold?: number; voiceThreshold?: number; evolveTeamId?: string; teamUuid?: string; teamLeadId?: string; deliveryMode?: string; totalContactCount?: number; niceAudioRecordingEnabled?: boolean; niceDesktopAnalyticsEnabled?: boolean; niceQmEnabled?: boolean; niceScreenRecordingEnabled?: boolean; niceSpeechAnalyticsEnabled?: boolean; niceWfmEnabled?: boolean; niceQualityOptimizationEnabled?: boolean; niceSurvey_CustomerEnabled?: boolean; nicePerformanceManagementEnabled?: boolean; niceAnalyticsEnabled?: boolean; niceLessonManagementEnabled?: boolean; niceCoachingEnabled?: boolean; niceStrategicPlannerEnabled?: boolean; niceShiftBiddingEnabled?: boolean; niceWfoAdvancedEnabled?: boolean; cxOneCustomerAuthenticationEnabled?: boolean; niceWfoEssentialsEnabled?: boolean; agents?: Array<Record<string, any>>; channelLock?: boolean; divisionNo?: number; }>; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}`;
    return this.client.get<{ businessUnitId?: number; lastPollTime?: string; teams?: Array<{ UnavailableCodes?: Array<Array<Record<string, any>>>; teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; inViewEnabled?: boolean; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; maxConcurrentChats?: number; agentCount?: number; maxEmailAutoParkingLimit?: number; inViewGamificationEnabled?: boolean; inViewChatEnabled?: boolean; inViewWallboardEnabled?: boolean; inViewLMSEnabled?: boolean; analyticsEnabled?: boolean; requestContact?: boolean; contactAutoFocus?: boolean; chatThreshold?: number; emailThreshold?: number; workItemThreshold?: number; smsThreshold?: number; digitalThreshold?: number; socialThreshold?: number; voiceThreshold?: number; evolveTeamId?: string; teamUuid?: string; teamLeadId?: string; deliveryMode?: string; totalContactCount?: number; niceAudioRecordingEnabled?: boolean; niceDesktopAnalyticsEnabled?: boolean; niceQmEnabled?: boolean; niceScreenRecordingEnabled?: boolean; niceSpeechAnalyticsEnabled?: boolean; niceWfmEnabled?: boolean; niceQualityOptimizationEnabled?: boolean; niceSurvey_CustomerEnabled?: boolean; nicePerformanceManagementEnabled?: boolean; niceAnalyticsEnabled?: boolean; niceLessonManagementEnabled?: boolean; niceCoachingEnabled?: boolean; niceStrategicPlannerEnabled?: boolean; niceShiftBiddingEnabled?: boolean; niceWfoAdvancedEnabled?: boolean; cxOneCustomerAuthenticationEnabled?: boolean; niceWfoEssentialsEnabled?: boolean; agents?: Array<Record<string, any>>; channelLock?: boolean; divisionNo?: number; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 This method updates the Team specified by teamId
   * PUT /teams/{teamId}
   */
  public async putTeamsId(teamId: string, data?: { forceInactive?: boolean; team: { teamName: string; isActive?: boolean; maxConcurrentChats?: number; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; inViewEnabled?: boolean; inViewGamificationEnabled?: boolean; inViewWallboardEnabled?: boolean; inViewLMSEnabled?: boolean; notes?: string; maxEmailAutoParkingLimit?: number; analyticsEnabled?: boolean; requestContact?: boolean; contactAutoFocus?: boolean; chatThreshold?: number; emailThreshold?: number; workItemThreshold?: number; smsThreshold?: number; digitalThreshold?: number; voiceThreshold?: number; teamUuid?: string; teamLeadId?: string; deliveryMode?: string; totalContactCount?: number; niceAudioRecordingEnabled?: boolean; niceCoachingEnabled?: boolean; niceDesktopAnalyticsEnabled?: boolean; niceLessonManagementEnabled?: boolean; nicePerformanceManagementEnabled?: boolean; niceQmEnabled?: boolean; niceQualityOptimizationEnabled?: boolean; niceScreenRecordingEnabled?: boolean; niceShiftBiddingEnabled?: boolean; niceSpeechAnalyticsEnabled?: boolean; niceStrategicPlannerEnabled?: boolean; niceSurvey_CustomerEnabled?: boolean; niceWfmEnabled?: boolean; niceWfoAdvancedEnabled?: boolean; cxOneCustomerAuthenticationEnabled?: boolean; niceWfoEssentialsEnabled?: boolean; description?: string; channelLock?: boolean; divisionNo?: number; }; }, options?: RequestOptions): Promise<any> {
    const path = `/teams/${encodeURIComponent(String(teamId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Updated in v34.0 Get list of teams and their agents
   * GET /teams/agents
   */
  public async teamsAgents(options?: RequestOptions & { query?: { fields?: string; updateSince?: string; } }): Promise<{ lastPollTime?: string; teams?: Array<{ teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; inViewEnabled?: boolean; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; maxConcurrentChats?: number; agentCount?: number; maxEmailAutoParkingLimit?: number; inViewGamificationEnabled?: boolean; inViewChatEnabled?: boolean; inViewLMSEnabled?: boolean; analyticsEnabled?: boolean; voiceThreshold?: number; chatThreshold?: number; emailThreshold?: number; socialThreshold?: number; workItemThreshold?: number; requestContact?: boolean; contactAutoFocus?: boolean; divisionNo?: number; agents?: Array<Record<string, any>>; }>; }> {
    const path = `/teams/agents`;
    return this.client.get<{ lastPollTime?: string; teams?: Array<{ teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; inViewEnabled?: boolean; wfoEnabled?: boolean; wfm2Enabled?: boolean; qm2Enabled?: boolean; maxConcurrentChats?: number; agentCount?: number; maxEmailAutoParkingLimit?: number; inViewGamificationEnabled?: boolean; inViewChatEnabled?: boolean; inViewLMSEnabled?: boolean; analyticsEnabled?: boolean; voiceThreshold?: number; chatThreshold?: number; emailThreshold?: number; socialThreshold?: number; workItemThreshold?: number; requestContact?: boolean; contactAutoFocus?: boolean; divisionNo?: number; agents?: Array<Record<string, any>>; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 Get list of teams and their agents
   * GET /teams/{teamId}/agents
   */
  public async getTeamsIdAgents(teamId: string, options?: RequestOptions & { query?: { searchString?: string; fields?: string; skip?: string; top?: string; orderBy?: string; updateSince?: string; isActive?: boolean; } }): Promise<{ businessUnitId?: number; _links?: { self?: string; next?: string; previous?: string; }; totalRecords?: number; lastPollTime?: string; teams?: Array<{ teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; agentCount?: number; wfoEnabled?: boolean; wfmEnabled?: boolean; qmEnabled?: boolean; inViewEnabled?: boolean; maxConcurrentChats?: number; analyticsEnabled?: boolean; maxEmailInboxCount?: number; inViewGamificationEnabled?: boolean; inViewChatMessagingEnabled?: boolean; inViewLMSEnabled?: boolean; voiceThreshold?: number; chatThreshold?: number; emailThreshold?: number; socialThreshold?: number; workItemThreshold?: number; requestContact?: boolean; contactAutoFocus?: boolean; smsThreshold?: number; digitalThreshold?: number; inViewWallboardEnabled?: boolean; channelLock?: boolean; divisionNo?: number; agents?: Array<Record<string, any>>; }>; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/agents`;
    return this.client.get<{ businessUnitId?: number; _links?: { self?: string; next?: string; previous?: string; }; totalRecords?: number; lastPollTime?: string; teams?: Array<{ teamId?: number; teamName?: string; isActive?: boolean; description?: string; notes?: string; lastUpdateTime?: string; agentCount?: number; wfoEnabled?: boolean; wfmEnabled?: boolean; qmEnabled?: boolean; inViewEnabled?: boolean; maxConcurrentChats?: number; analyticsEnabled?: boolean; maxEmailInboxCount?: number; inViewGamificationEnabled?: boolean; inViewChatMessagingEnabled?: boolean; inViewLMSEnabled?: boolean; voiceThreshold?: number; chatThreshold?: number; emailThreshold?: number; socialThreshold?: number; workItemThreshold?: number; requestContact?: boolean; contactAutoFocus?: boolean; smsThreshold?: number; digitalThreshold?: number; inViewWallboardEnabled?: boolean; channelLock?: boolean; divisionNo?: number; agents?: Array<Record<string, any>>; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 Assign Agents to a Team
   * POST /teams/{teamId}/agents
   */
  public async assignAgentsToTeam(teamId: string, data?: { agents: Array<{ agentId: string; }>; }, options?: RequestOptions): Promise<{ resultSet?: { errorCount?: number; agentResults?: Array<Record<string, any>>; }; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/agents`;
    return this.client.post<{ resultSet?: { errorCount?: number; agentResults?: Array<Record<string, any>>; }; }>(path, data, options);
  }

  /**
   *  Updated in v34.0 Remove Agents from a Team
   * DELETE /teams/{teamId}/agents
   */
  public async removeAgentsFromTeam(teamId: string, data?: { agents: Array<{ agentId: string; }>; }, options?: RequestOptions & { query?: { transferTeamId: string; } }): Promise<{ errorCount?: string; agentResults?: Array<{ success?: string; agentId?: string; }>; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/agents`;
    return this.client.delete<{ errorCount?: string; agentResults?: Array<{ success?: string; agentId?: string; }>; }>(path, data, options);
  }

  /**
   * Updated in v34.0 Gets all outstates that are valid for a team
   * GET /teams/{teamId}/unavailable-codes
   */
  public async getTeamsIdUnavailableCodes(teamId: string, options?: RequestOptions & { query?: { activeOnly?: string; } }): Promise<{ teamId: number; teamName: string; teamUuid?: string; divisionNo?: number; unavailableCodes?: Array<{ outstateId: number; outstateName: string; isActive: boolean; isAcw: boolean; agentTimeoutMins?: string; }>; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/unavailable-codes`;
    return this.client.get<{ teamId: number; teamName: string; teamUuid?: string; divisionNo?: number; unavailableCodes?: Array<{ outstateId: number; outstateName: string; isActive: boolean; isAcw: boolean; agentTimeoutMins?: string; }>; }>(path, options);
  }

  /**
   * Updated in v34.0 Assign an Unavailable Code to a Team.
   * POST /teams/{teamId}/unavailable-codes
   */
  public async assignUnavailableCode(teamId: number, data: { codes: Array<{ outstateId: number; }>; }, options?: RequestOptions): Promise<{ resultSet?: { errorCount?: string; codeResults?: Array<Record<string, any>>; }; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/unavailable-codes`;
    return this.client.post<{ resultSet?: { errorCount?: string; codeResults?: Array<Record<string, any>>; }; }>(path, data, options);
  }

  /**
   * Updated in v34.0 Updates an Unavailable Code for a Team
   * PUT /teams/{teamId}/unavailable-codes
   */
  public async putTeamsIdUnavailableCodes(teamId: number, data: { unavailableCodes: Array<{ outStateId: string; }>; }, options?: RequestOptions & { query?: { securityUser?: any; } }): Promise<any> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/unavailable-codes`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Updated in v34.0 Remove an Unavailable Code from a Team
   * DELETE /teams/{teamId}/unavailable-codes
   */
  public async removeUnavailableCodeTeam(teamId: string, data?: { codes: Array<{ outstateId: string; }>; }, options?: RequestOptions): Promise<{ errorCount?: number; codeResults?: Array<{ outstateId?: number; success?: boolean; error?: string; }>; }> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/unavailable-codes`;
    return this.client.delete<{ errorCount?: number; codeResults?: Array<{ outstateId?: number; success?: boolean; error?: string; }>; }>(path, data, options);
  }

  /**
   *   Returns a list of access keys
   * GET /access-keys
   */
  public async getAccessKeys(options?: RequestOptions & { query?: { agentId: string; } }): Promise<{ totalRecords?: number; accesskeys?: Array<{ accessKeyId?: string; agentId?: number; billingId?: number; isActive?: boolean; lastUsedDate?: string; }>; }> {
    const path = `/access-keys`;
    return this.client.get<{ totalRecords?: number; accesskeys?: Array<{ accessKeyId?: string; agentId?: number; billingId?: number; isActive?: boolean; lastUsedDate?: string; }>; }>(path, options);
  }

  /**
   *   Creates an accessKey
   * POST /access-keys
   */
  public async postAccessKeys(options?: RequestOptions & { query?: { agentId?: number; } }): Promise<{ accesskeys?: Array<{ accessKeyId?: string; accessKeySecret?: string; agentId?: number; billingId?: number; isActive?: boolean; }>; }> {
    const path = `/access-keys`;
    return this.client.post<{ accesskeys?: Array<{ accessKeyId?: string; accessKeySecret?: string; agentId?: number; billingId?: number; isActive?: boolean; }>; }>(path, undefined, options);
  }

  /**
   *   Returns the configuration of an accessKey
   * GET /access-keys/{accessKeyId}
   */
  public async getAccessKeysId(accessKeyId: string, options?: RequestOptions): Promise<{ accessKey?: { accessKeyId?: string; agentId?: number; billingId?: number; isActive?: boolean; lastUsedDate?: string; }; }> {
    const path = `/access-keys/${encodeURIComponent(String(accessKeyId))}`;
    return this.client.get<{ accessKey?: { accessKeyId?: string; agentId?: number; billingId?: number; isActive?: boolean; lastUsedDate?: string; }; }>(path, options);
  }

  /**
   *   Deletes an accessKey
   * DELETE /access-keys/{accessKeyId}
   */
  public async deleteAccessKeysId(accessKeyId: string, options?: RequestOptions): Promise<any> {
    const path = `/access-keys/${encodeURIComponent(String(accessKeyId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   *   Updates an accessKey by Id
   * PATCH /access-keys/{accessKeyId}
   */
  public async patchAccessKeysId(accessKeyId: string, options?: RequestOptions): Promise<any> {
    const path = `/access-keys/${encodeURIComponent(String(accessKeyId))}`;
    return this.client.patch<any>(path, undefined, options);
  }

  /**
   * Returns Active supervisors status
   * GET /activesupervisors
   */
  public async getActivesupervisors(options?: RequestOptions & { query?: { teamIds?: string; } }): Promise<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; supervisorStatuslist?: Array<{ initiatingAgentNo?: number; contactEventTypeId?: number; eventStateDescription?: string; targetAgentNo?: number; contactId?: number; startTimeStamp?: string; }>; }> {
    const path = `/activesupervisors`;
    return this.client.get<{ totalRecords?: number; _links?: { self?: string; next?: string; previous?: string; }; businessUnitId?: number; supervisorStatuslist?: Array<{ initiatingAgentNo?: number; contactEventTypeId?: number; eventStateDescription?: string; targetAgentNo?: number; contactId?: number; startTimeStamp?: string; }>; }>(path, options);
  }

  /**
   * New in v33.0 A New proxy API endpoint within the monolith application that connects to the ECC Lambda.
   * POST /enhancedcustomercard
   */
  public async enhancedCustomerCard(data: { tenantId?: string; payload?: { action?: string; customerPoc?: string; ani?: string; startTime?: string; interactionType?: string; interactionSubtype?: string; result?: string; firstName?: string; lastName?: string; text?: string; messagingBusinessPoc?: string; externalAgentId?: string; externalInteractionId?: string; externalThreadId?: string; }; }, options?: RequestOptions): Promise<{ message?: string; data?: { interactionId?: string; }; }> {
    const path = `/enhancedcustomercard`;
    return this.client.post<{ message?: string; data?: { interactionId?: string; }; }>(path, data, options);
  }
}
