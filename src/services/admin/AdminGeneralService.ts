import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AdminGeneral_postUploadFile {
  fileName: string;
  file: string;
  overwrite?: boolean;
}

export interface AdminGeneral_deleteFile {
  fileName: string;
}

export interface AdminGeneral_getBrandingProfilesResponse {
  resultSet: {
    profileId: number;
    profileName: string;
    brandName: string;
    adminEmail: string;
    active: boolean;
    subdomain: string;
    stylePackName: string;
    coBrand: boolean;
    centralLogo?: string;
    centralFavicon?: string;
    agentLogo?: string;
    chatLogo?: string;
    sfdcAgentLogo?: string;
    maxAgentLogo?: string;
    maxGlanceLogo?: string;
  };
}

export interface AdminGeneral_getBusinessUnitResponse {
  businessUnits?: Array<{
    businessUnitId?: number;
    businessUnitName?: string;
    globalCallerId?: string;
    phoneTimeout?: number;
    userSessionTimeout?: number;
    startDayOfWeek?: number;
    defaultTimeZone?: string;
    agentsUseDefaultTimeZone?: boolean;
    maxScriptHistory?: number;
    authGUID?: string;
    coBrand?: boolean;
    coBrandProfileId?: number;
    coBrandProfileName?: string;
    connectivityType?: string;
    clientConnectorPort?: number;
    callSuppression?: boolean;
    priorityBasedBlending?: boolean;
    enableFiltering?: boolean;
    allowPredictiveDialing?: boolean;
    enableTrueBlending?: boolean;
    enableSkillAbandonRate?: boolean;
    abandonRateScope?: number;
    defaultConfirmationDeliveryModeId?: number;
    defaultConfirmationDeliveryMode?: string;
    defaultComplianceRecordTypeId?: number;
    defaultComplianceRecordType?: string;
    defaultContactExpirationMinutes?: number;
    daysUntilListSourceIsFlaggedForDeletion?: number;
    scriptNamespace?: string;
    apiPublishedLimit?: number;
    concurrentPortLimit?: number;
    ivrSurveyCallbackLimit?: number;
    stationLimit?: number;
    userLimit?: number;
    concurrentAgentLimit?: number;
    outboundPortLimit?: number;
    agentlessPortLimit?: number;
    maxConferenceParties?: number;
    custom1?: string;
    custom2?: string;
    custom3?: string;
    custom4?: string;
    custom5?: string;
    isActive?: boolean;
    presenceMasterId?: number;
    tenantId?: string;
    parentTenantId?: string;
    features?: Array<Record<string, any>>;
    fileExtensions?: Array<Record<string, any>>;
    timeZones?: Array<Record<string, any>>;
    parentBusinessUnitID?: number;
    isIntegratedTenant?: boolean;
    niceEngageConfigId?: number;
    niceWFMConfigID?: number;
    niceQMTenantID?: number;
    niceWFMTenantId?: number;
    ieX_CustomerName?: string;
    isMultiContactHandling?: boolean;
    enableMaxReleasePreview?: boolean;
    isVFMEnabled?: boolean;
    maxClientVersion?: number;
    permitPerAgentVersioning?: boolean;
    permitDevVersion?: boolean;
    defaultToPrevious?: boolean;
    emergencyCallNotificationEmail?: string;
  }>;
}

export interface AdminGeneral_getCountriesResponse {
  countries: Array<{ countryId: number; countryCode: string; countryName: string }>;
}

export interface AdminGeneral_getCountryStatesResponse {
  resultSet: { countryId: number; countryName: string; states?: Array<Record<string, any>> };
}

export interface AdminGeneral_getDataDefinitionsDataTypesResponse {
  dataTypes: Array<{ dataTypeId: number; dataTypeName: string }>;
}

export interface AdminGeneral_getFilesResponse {
  files: { file: string; fileName: string };
}

export interface AdminGeneral_getFeedbackCategoriesAndPrioritiesResponse {
  categoriesAndPriorities?: {
    feedbackCategories: Array<Record<string, any>>;
    feedbackPriorities: Array<Record<string, any>>;
  };
}

export interface AdminGeneral_getHiringSourcesResponse {
  sources: Array<{ sourceId: number; sourceName: string }>;
}

export interface AdminGeneral_postHiringSourcesResponse {
  sourceId: number;
}

export interface AdminGeneral_getLocationsResponse {
  locations: Array<{
    locationId?: number;
    locationName: string;
    agents?: Array<Record<string, any>>;
  }>;
}

export interface AdminGeneral_getMediaTypesResponse {
  mediaTypes: Array<{
    mediaTypeName?: string;
    mediaTypeId?: number;
    subTypes?: Array<Record<string, any>>;
  }>;
}

export interface AdminGeneral_postMessageTemplatesResponse {
  templateId: number;
}

export interface AdminGeneral_getMessageTemplatesResponse {
  messageTemplates: Array<{
    templateId: number;
    templateName: string;
    templateTypeId: number;
    templateTypeDesc: string;
    isActive: boolean;
    isHTML?: boolean;
    ccAddress?: string;
    bccAddress?: string;
    replyToAddress?: string;
    fromName?: string;
    fromAddress?: string;
    body?: string;
    subject?: string;
    isRTL?: boolean;
  }>;
}

export interface AdminGeneral_getMessageTemplateResponse {
  messageTemplate: {
    templateId: number;
    templateName: string;
    templateTypeId: number;
    templateTypeDesc: string;
    isActive: boolean;
    isHTML?: boolean;
    ccAddress?: string;
    bccAddress?: string;
    replyToAddress?: string;
    fromName?: string;
    fromAddress?: string;
    body?: string;
    subject?: string;
    isRTL?: boolean;
  };
}

export interface AdminGeneral_getPermissionsResponse {
  permissions: Array<{ BusinessUnitId: number; Key: string; Value: string }>;
}

export interface AdminGeneral_getPhoneCodesResponse {
  phoneCodes: Array<{
    transportCode: number;
    transportTypeId: number;
    transportTypeDesc: string;
    note: string;
  }>;
}

export interface AdminGeneral_getPointsOfContactResponse {
  businessUnitId?: number;
  lastPollTime?: string;
  pointsOfContact: Array<{
    businessUnitId?: number;
    contactAddress?: string;
    contactCode?: number;
    contactDescription?: string;
    defaultSkillId?: number;
    isActive?: boolean;
    mediaTypeId?: number;
    subType?: string;
    mediaTypeName?: string;
    notes?: string;
    outboundSkill?: boolean;
    scriptName?: string;
  }>;
}

export interface AdminGeneral_ApiErrorResponse {
  error?: string;
  errorDescription?: string;
}

export interface AdminGeneral_SecurityProfile {
  roleId?: string;
  securityProfileId?: number;
  securityProfileName?: string;
  description?: string;
  securityProfileStatusName?: string;
  isInternal?: boolean;
  permissions?: Array<{ permissionKey?: string; optionKeys?: Array<string> }>;
  dataRestrictions?: Array<{
    dataRoleEntityTypeName?: string;
    accessibilityType?: string;
    entityIds?: Array<number>;
  }>;
}

export interface AdminGeneral_SecurityProfiles {
  _links?: { self?: string; next?: string; previous?: string };
  profiles?: Array<AdminGeneral_SecurityProfile>;
}

export type AdminGeneral_BadRequest = AdminGeneral_ApiErrorResponse;

export type AdminGeneral_Unauthorized = AdminGeneral_ApiErrorResponse;

export type AdminGeneral_Forbidden = AdminGeneral_ApiErrorResponse;

export interface AdminGeneral_getSecurityProfileResponse {
  profile: {
    profileId: number;
    profileName: string;
    description: string;
    isActive: boolean;
    isExternal: boolean;
    pwUseRandom: boolean;
    pwMinLength: number;
    pwMinLower: number;
    pwMinUpper: number;
    pwMinNumeric: number;
    pwMinNonAlpha: number;
    assignedAgents?: Array<Record<string, any>>;
  };
}

export interface AdminGeneral_getServerTimeResponse {
  ServerTime: string;
}

export interface AdminGeneral_getTagsResponse {
  tags: Array<{ tagId: number; tagName: string; isActive: boolean; notes: string }>;
}

export interface AdminGeneral_postTagsResponse {
  tagId: number;
}

export interface AdminGeneral_getTimeZonesResponse {
  timeZones: Array<{ displayName: string; standardName: string; offset: string }>;
}

export class AdminGeneralService {
  constructor(private client: HttpClient) {}

  /**
   * Get All API version
   * GET /apiversion
   */
  public async getApiversion(
    options?: RequestOptions & { query?: { searchUriText?: string; verb?: string } },
  ): Promise<{ apiInfo?: Array<{ uri?: string; version?: number; verb?: string }> }> {
    const path = `/apiversion`;
    return this.client.get<{ apiInfo?: Array<{ uri?: string; version?: number; verb?: string }> }>(
      path,
      options,
    );
  }

  /**
   * Get API version release information
   * GET /apiversionreleaseinfo
   */
  public async getApiversionreleaseinfo(
    options?: RequestOptions & { query?: { apiversion?: string } },
  ): Promise<{ versionInfo?: Array<{ version?: number; release?: string }> }> {
    const path = `/apiversionreleaseinfo`;
    return this.client.get<{ versionInfo?: Array<{ version?: number; release?: string }> }>(
      path,
      options,
    );
  }

  /**
   * Returns Branding Profile
   * GET /branding-profiles
   */
  public async brandingProfiles(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getBrandingProfilesResponse> {
    const path = `/branding-profiles`;
    return this.client.get<AdminGeneral_getBrandingProfilesResponse>(path, options);
  }

  /**
   * Returns Business Unit config
   * GET /business-unit
   */
  public async businessUnitInfo(
    options?: RequestOptions & { query?: { includeTrustedBusinessUnits?: boolean } },
  ): Promise<AdminGeneral_getBusinessUnitResponse> {
    const path = `/business-unit`;
    return this.client.get<AdminGeneral_getBusinessUnitResponse>(path, options);
  }

  /**
   *  Get business unit outbound routes available for skills
   * GET /business-unit/outbound-routes
   */
  public async getBusinessUnitOutboundRoutes(options?: RequestOptions): Promise<{
    outboundRoutes?: Array<{ outboundTelecomRouteId?: number; routeDescription?: string }>;
  }> {
    const path = `/business-unit/outbound-routes`;
    return this.client.get<{
      outboundRoutes?: Array<{ outboundTelecomRouteId?: number; routeDescription?: string }>;
    }>(path, options);
  }

  /**
   * Get Agent Settings
   * GET /agents/{agentId}/agent-settings
   */
  public async getAgentsIdAgentSettings(
    agentId: string,
    options?: RequestOptions,
  ): Promise<{
    maxConferenceParties?: number;
    deleteCommitmentId?: number;
    deleteCommitmentString?: string;
    persistentPanels?: Array<{ persistentPanelId?: number; persistentPanelURI?: string }>;
    raygunApiKeyMAX?: string;
    raygunApiKeySupervisor?: string;
    googleAccountNumberMAX?: string;
    googleAccountNumberSupervisor?: string;
    wfoWebsiteUrl?: string;
    wfoWebServiceUrl?: string;
    wfoApiUrl?: string;
    maxClientVersion?: number;
    webRTCWSSUrls?: Array<{ urlName?: string; weight?: string }>;
    emergencyPhoneNumbers?: Array<string>;
  }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/agent-settings`;
    return this.client.get<{
      maxConferenceParties?: number;
      deleteCommitmentId?: number;
      deleteCommitmentString?: string;
      persistentPanels?: Array<{ persistentPanelId?: number; persistentPanelURI?: string }>;
      raygunApiKeyMAX?: string;
      raygunApiKeySupervisor?: string;
      googleAccountNumberMAX?: string;
      googleAccountNumberSupervisor?: string;
      wfoWebsiteUrl?: string;
      wfoWebServiceUrl?: string;
      wfoApiUrl?: string;
      maxClientVersion?: number;
      webRTCWSSUrls?: Array<{ urlName?: string; weight?: string }>;
      emergencyPhoneNumbers?: Array<string>;
    }>(path, options);
  }

  /**
   * Returns Countries
   * GET /countries
   */
  public async getCountries(options?: RequestOptions): Promise<AdminGeneral_getCountriesResponse> {
    const path = `/countries`;
    return this.client.get<AdminGeneral_getCountriesResponse>(path, options);
  }

  /**
   * Returns States or Provinces
   * GET /countries/{countryId}/states
   */
  public async getsStatesProvinces(
    countryId: string,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getCountryStatesResponse> {
    const path = `/countries/${encodeURIComponent(String(countryId))}/states`;
    return this.client.get<AdminGeneral_getCountryStatesResponse>(path, options);
  }

  /**
   * Returns Data Types
   * GET /data-definitions/data-types
   */
  public async dataDefinitions(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getDataDefinitionsDataTypesResponse> {
    const path = `/data-definitions/data-types`;
    return this.client.get<AdminGeneral_getDataDefinitionsDataTypesResponse>(path, options);
  }

  /**
   * Get a File
   * GET /files
   */
  public async retrieveAFile(
    options?: RequestOptions & { query?: { fileName: string } },
  ): Promise<AdminGeneral_getFilesResponse> {
    const path = `/files`;
    return this.client.get<AdminGeneral_getFilesResponse>(path, options);
  }

  /**
   * Uploads a File
   * POST /files
   */
  public async uploadFile(
    data?: AdminGeneral_postUploadFile,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/files`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Moves or Renames a File
   * PUT /files
   */
  public async moveFile(
    options?: RequestOptions & {
      query?: { oldPath: string; newPath: string; overwrite?: boolean };
    },
  ): Promise<any> {
    const path = `/files`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Deletes a File
   * DELETE /files
   */
  public async deleteFile(data?: AdminGeneral_deleteFile, options?: RequestOptions): Promise<any> {
    const path = `/files`;
    return this.client.delete<any>(path, data, options);
  }

  /**
   * Returns a list of unprocessed files
   * GET /files/external
   */
  public async getExternalfiles(
    options?: RequestOptions & { query?: { folderPath?: string } },
  ): Promise<{
    files?: Array<{ fileName?: string; fileNameWithPath?: string; needsProcessing?: boolean }>;
  }> {
    const path = `/files/external`;
    return this.client.get<{
      files?: Array<{ fileName?: string; fileNameWithPath?: string; needsProcessing?: boolean }>;
    }>(path, options);
  }

  /**
   * Marks a file to be processed.
   * POST /files/external
   */
  public async postexternalfiles(
    options?: RequestOptions & {
      query?: { fileName: string; file: string; overwrite?: boolean; needsProcessing?: boolean };
    },
  ): Promise<any> {
    const path = `/files/external`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Marks a file as processed.
   * PUT /files/external
   */
  public async putexteranlfiles(
    options?: RequestOptions & { query?: { fileName: string; needsProcessing: boolean } },
  ): Promise<any> {
    const path = `/files/external`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Returns a Directory Listing
   * GET /folders
   */
  public async returnFolder(
    options?: RequestOptions & { query?: { folderName: string } },
  ): Promise<any> {
    const path = `/folders`;
    return this.client.get<any>(path, options);
  }

  /**
   * Deletes a Folder
   * DELETE /folders
   */
  public async deleteFolder(
    options?: RequestOptions & { query?: { folderName: string } },
  ): Promise<any> {
    const path = `/folders`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Get all feedback categories and priorities
   * GET /feedback-categories-and-priorities
   */
  public async categoriesAndPriorities(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getFeedbackCategoriesAndPrioritiesResponse> {
    const path = `/feedback-categories-and-priorities`;
    return this.client.get<AdminGeneral_getFeedbackCategoriesAndPrioritiesResponse>(path, options);
  }

  /**
   * Returns Hiring Sources
   * GET /hiring-sources
   */
  public async getHiringSources(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getHiringSourcesResponse> {
    const path = `/hiring-sources`;
    return this.client.get<AdminGeneral_getHiringSourcesResponse>(path, options);
  }

  /**
   * Create a Hiring Source
   * POST /hiring-sources
   */
  public async createHiringScource(
    options?: RequestOptions & { query?: { sourceName: string } },
  ): Promise<AdminGeneral_postHiringSourcesResponse> {
    const path = `/hiring-sources`;
    return this.client.post<AdminGeneral_postHiringSourcesResponse>(path, undefined, options);
  }

  /**
   * Get the list of hours of operations paginated
   * GET /hours-of-operation
   */
  public async getHoursOfOperation(
    options?: RequestOptions & {
      query?: {
        searchString?: string;
        fields?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
        isDeleted: boolean;
      };
    },
  ): Promise<{
    businessUnit?: number;
    totalRecords?: number;
    hoursOfOperation?: Array<{
      hoursOfOperationProfileId?: number;
      hoursOfOperationProfileName?: string;
      description?: string;
      isDeleted?: boolean;
    }>;
  }> {
    const path = `/hours-of-operation`;
    return this.client.get<{
      businessUnit?: number;
      totalRecords?: number;
      hoursOfOperation?: Array<{
        hoursOfOperationProfileId?: number;
        hoursOfOperationProfileName?: string;
        description?: string;
        isDeleted?: boolean;
      }>;
    }>(path, options);
  }

  /**
   *   Creates an hours of operation profile
   * POST /hours-of-operation
   */
  public async postHoursOfOperation(
    data?: {
      profileName: string;
      description?: string;
      notes?: string;
      days?: Array<{
        day?: string;
        openTime?: string;
        closeTime?: string;
        hasAdditionalHours?: boolean;
        additionalOpenTime?: string;
        additionalCloseTime?: string;
        isClosedAllDay?: boolean;
      }>;
      holidays?: Array<{
        holidayName?: string;
        date?: string;
        openTime?: string;
        closeTime?: string;
        hasAdditionalHours?: boolean;
        additionalOpenTime?: string;
        additionalCloseTime?: string;
        isClosedAllDay?: boolean;
      }>;
      overrideBranch?: string;
      overrideExpirationDate?: string;
      skills?: Array<{ skillId?: number }>;
    },
    options?: RequestOptions,
  ): Promise<{ profileId?: string; profileName?: string }> {
    const path = `/hours-of-operation`;
    return this.client.post<{ profileId?: string; profileName?: string }>(path, data, options);
  }

  /**
   * Get the list of hours of operations for identities
   * GET /hours-of-operation/identities
   */
  public async getHoursOfOperationIdentities(
    options?: RequestOptions & {
      query?: { searchString?: string; skip?: number; top?: number; orderBy?: string };
    },
  ): Promise<{
    businessUnitId?: number;
    totalRecords?: number;
    hoursOfOperation?: Array<{ hooId?: number; hooName?: string }>;
  }> {
    const path = `/hours-of-operation/identities`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      hoursOfOperation?: Array<{ hooId?: number; hooName?: string }>;
    }>(path, options);
  }

  /**
   * Get an hour of operation detail by id
   * GET /hours-of-operation/{hoursOfOperationProfileId}
   */
  public async getHoursOfOperationById(
    hoursOfOperationProfileId: string,
    options?: RequestOptions,
  ): Promise<{
    hoursOfOperationProfileId?: number;
    hoursOfOperationProfileName?: string;
    description?: string;
    notes?: string;
    overrideBranch?: string;
    overrideExpirationDate?: string;
    lastUpdateTime?: string;
    days?: Array<{
      day?: string;
      openTime?: string;
      closeTime?: string;
      hasAdditionalHours?: boolean;
      additionalOpenTime?: string;
      additionalCloseTime?: string;
      isClosedAllDay?: boolean;
    }>;
    holidays?: Array<{
      name?: string;
      date?: string;
      openTime?: string;
      closeTime?: string;
      hasAdditionalHours?: boolean;
      additionalOpenTime?: string;
      additionalCloseTime?: string;
      isClosedAllDay?: boolean;
    }>;
    skills?: Array<{ skillId?: number; skillName?: string }>;
    scripts?: Array<{ scriptId?: number; scriptName?: string }>;
  }> {
    const path = `/hours-of-operation/${encodeURIComponent(String(hoursOfOperationProfileId))}`;
    return this.client.get<{
      hoursOfOperationProfileId?: number;
      hoursOfOperationProfileName?: string;
      description?: string;
      notes?: string;
      overrideBranch?: string;
      overrideExpirationDate?: string;
      lastUpdateTime?: string;
      days?: Array<{
        day?: string;
        openTime?: string;
        closeTime?: string;
        hasAdditionalHours?: boolean;
        additionalOpenTime?: string;
        additionalCloseTime?: string;
        isClosedAllDay?: boolean;
      }>;
      holidays?: Array<{
        name?: string;
        date?: string;
        openTime?: string;
        closeTime?: string;
        hasAdditionalHours?: boolean;
        additionalOpenTime?: string;
        additionalCloseTime?: string;
        isClosedAllDay?: boolean;
      }>;
      skills?: Array<{ skillId?: number; skillName?: string }>;
      scripts?: Array<{ scriptId?: number; scriptName?: string }>;
    }>(path, options);
  }

  /**
   * Update the information of an Hour of operation
   * PUT /hours-of-operation/{hoursOfOperationProfileId}
   */
  public async updateHoursOfOperation(
    hoursOfOperationProfileId: number,
    data: {
      hoursOfOperationProfileName: string;
      description?: string;
      notes?: string;
      overrideBranch?: string;
      overrideExpirationDate?: string;
      days: Array<{
        day?: string;
        openTime?: string;
        closeTime?: string;
        hasAdditionalHours?: boolean;
        additionalOpenTime?: string;
        additionalCloseTime?: string;
        isClosedAllDay?: boolean;
      }>;
      holidays: Array<{
        holidayName?: string;
        date?: string;
        openTime?: string;
        closeTime?: string;
        hasAdditionalHours?: boolean;
        additionalOpenTime?: string;
        additionalCloseTime?: string;
        isClosedAllDay?: boolean;
      }>;
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/hours-of-operation/${encodeURIComponent(String(hoursOfOperationProfileId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Delete an hour of operation from the list
   * DELETE /hours-of-operation/{hoursOfOperationProfileId}
   */
  public async deleteHoursOfOperation(
    hoursOfOperationProfileId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/hours-of-operation/${encodeURIComponent(String(hoursOfOperationProfileId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Updated in v33.0 Update an hour of operation skill list
   * PUT /hours-of-operation/{hoursOfOperationProfileId}/skills
   */
  public async updateHoursOfOperationSkills(
    hoursOfOperationProfileId: string,
    data: { assign?: boolean; all?: boolean; skills?: Array<number> },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/hours-of-operation/${encodeURIComponent(String(hoursOfOperationProfileId))}/skills`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns Locations
   * GET /locations
   */
  public async returnsLocations(
    options?: RequestOptions & { query?: { includeAgents?: boolean } },
  ): Promise<AdminGeneral_getLocationsResponse> {
    const path = `/locations`;
    return this.client.get<AdminGeneral_getLocationsResponse>(path, options);
  }

  /**
   * Returns a list of media types
   * GET /media-types
   */
  public async getMediaTypes(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getMediaTypesResponse> {
    const path = `/media-types`;
    return this.client.get<AdminGeneral_getMediaTypesResponse>(path, options);
  }

  /**
   * Returns a single media type
   * GET /media-types/{mediaTypeId}
   */
  public async getMediaTypeById(
    mediaTypeId: number,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getMediaTypesResponse> {
    const path = `/media-types/${encodeURIComponent(String(mediaTypeId))}`;
    return this.client.get<AdminGeneral_getMediaTypesResponse>(path, options);
  }

  /**
   * Gets all Message Templates
   * GET /message-templates
   */
  public async messageTemplates(
    options?: RequestOptions & { query?: { templateTypeId?: number } },
  ): Promise<AdminGeneral_getMessageTemplatesResponse> {
    const path = `/message-templates`;
    return this.client.get<AdminGeneral_getMessageTemplatesResponse>(path, options);
  }

  /**
   * Creates a Message Template
   * POST /message-templates
   */
  public async createsMessageTemplate(
    options?: RequestOptions & {
      query?: {
        templateName: string;
        templateTypeId: number;
        subject: string;
        body: string;
        isHTML?: boolean;
        ccAddress?: string;
        bccAddress?: string;
        replyToAddress?: string;
        fromName?: string;
        fromAddress?: string;
        isRTL?: boolean;
      };
    },
  ): Promise<AdminGeneral_postMessageTemplatesResponse> {
    const path = `/message-templates`;
    return this.client.post<AdminGeneral_postMessageTemplatesResponse>(path, undefined, options);
  }

  /**
   * Returns a Message Template
   * GET /message-templates/{templateId}
   */
  public async messageTemplate(
    templateId: string,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getMessageTemplateResponse> {
    const path = `/message-templates/${encodeURIComponent(String(templateId))}`;
    return this.client.get<AdminGeneral_getMessageTemplateResponse>(path, options);
  }

  /**
   * Updates a Message Template
   * PUT /message-templates/{templateId}
   */
  public async updatesMessageTemplate(
    templateId: string,
    options?: RequestOptions & {
      query?: {
        templateName?: string;
        isActive?: boolean;
        subject?: string;
        body?: string;
        isHTML?: boolean;
        ccAddress?: string;
        bccAddress?: string;
        replyToAddress?: string;
        fromName?: string;
        fromAddress?: string;
        isRTL?: boolean;
      };
    },
  ): Promise<any> {
    const path = `/message-templates/${encodeURIComponent(String(templateId))}`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Returns a list of permissions
   * GET /permissions
   */
  public async getPermissions(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getPermissionsResponse> {
    const path = `/permissions`;
    return this.client.get<AdminGeneral_getPermissionsResponse>(path, options);
  }

  /**
   * Returns a list of permissions for an agent
   * GET /permissions/{agentId}
   */
  public async agentPermissionsList(
    agentId: string,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getPermissionsResponse> {
    const path = `/permissions/${encodeURIComponent(String(agentId))}`;
    return this.client.get<AdminGeneral_getPermissionsResponse>(path, options);
  }

  /**
   * Returns SMS Phone Codes
   * GET /phone-codes
   */
  public async phoneCodes(options?: RequestOptions): Promise<AdminGeneral_getPhoneCodesResponse> {
    const path = `/phone-codes`;
    return this.client.get<AdminGeneral_getPhoneCodesResponse>(path, options);
  }

  /**
   * Returns a list of points of contact
   * GET /points-of-contact
   */
  public async getPointsOfContact(
    options?: RequestOptions & { query?: { mediaTypeId?: number; skip?: number; top?: number } },
  ): Promise<AdminGeneral_getPointsOfContactResponse> {
    const path = `/points-of-contact`;
    return this.client.get<AdminGeneral_getPointsOfContactResponse>(path, options);
  }

  /**
   *  Creates a point of contact
   * POST /points-of-contact
   */
  public async postPointsOfContact(
    data?: {
      pointOfContact: string;
      pointOfContactName: string;
      skillId: number;
      isActive?: boolean;
      mediaTypeId?: number;
      scriptName: string;
      ivrReportingEnabled?: boolean;
      chatProfileId?: number;
    },
    options?: RequestOptions,
  ): Promise<{ error?: string; error_Description?: string }> {
    const path = `/points-of-contact`;
    return this.client.post<{ error?: string; error_Description?: string }>(path, data, options);
  }

  /**
   * Returns a single point of contact
   * GET /points-of-contact/{pointOfContactId}
   */
  public async getPointOfContactById(
    pointOfContactId: number,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getPointsOfContactResponse> {
    const path = `/points-of-contact/${encodeURIComponent(String(pointOfContactId))}`;
    return this.client.get<AdminGeneral_getPointsOfContactResponse>(path, options);
  }

  /**
   *   Updates a point of contact
   * PUT /points-of-contact/{pointOfContactId}
   */
  public async putPointsOfContactId(
    pointOfContactId: number,
    data?: {
      pointOfContactName: string;
      skillId: number;
      isActive?: boolean;
      scriptName: string;
      ivrReportingEnabled?: boolean;
      chatProfileId?: number;
    },
    options?: RequestOptions,
  ): Promise<{ error?: string; error_Description?: string }> {
    const path = `/points-of-contact/${encodeURIComponent(String(pointOfContactId))}`;
    return this.client.put<{ error?: string; error_Description?: string }>(path, data, options);
  }

  /**
   * Return all or selected security profiles
   * GET /security-profiles
   */
  public async getSecurityProfiles(
    options?: RequestOptions,
  ): Promise<AdminGeneral_SecurityProfiles> {
    const path = `/security-profiles`;
    return this.client.get<AdminGeneral_SecurityProfiles>(path, options);
  }

  /**
   * Returns a Security Profile
   * GET /security-profiles/{profileId}
   */
  public async getSecurityProfilesID(
    profileId: number,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getSecurityProfileResponse> {
    const path = `/security-profiles/${encodeURIComponent(String(profileId))}`;
    return this.client.get<AdminGeneral_getSecurityProfileResponse>(path, options);
  }

  /**
   * Open a JSON script
   * GET /scripts
   */
  public async getScript(
    options?: RequestOptions & {
      query?: { scriptPath?: string; scriptId?: number; libraryId?: string };
    },
  ): Promise<{
    header?: {
      masterId?: number;
      scriptName?: string;
      busNo?: number;
      mediaType?: number;
      mediaTypeName?: string;
      purposeType?: string;
      variableRedaction?: string;
      libraryId?: string;
      lockInfo?: { lockedName?: string; lockedId?: string; lockedDate?: string };
      nextActionId?: number;
      status?: string;
      lastSavedIn?: string;
    };
    actions?: {
      "{actionId}"?: {
        actionId?: number;
        libraryId?: string;
        name?: string;
        version?: number;
        label?: string;
        dependencyOrder?: string;
        implType?: string;
        x?: number;
        y?: number;
      };
    };
    properties?: { "{actionId}"?: { "{propertyNumber}"?: Record<string, any> } };
    branches?: { "{actionId}"?: Array<Record<string, any>> };
  }> {
    const path = `/scripts`;
    return this.client.get<{
      header?: {
        masterId?: number;
        scriptName?: string;
        busNo?: number;
        mediaType?: number;
        mediaTypeName?: string;
        purposeType?: string;
        variableRedaction?: string;
        libraryId?: string;
        lockInfo?: { lockedName?: string; lockedId?: string; lockedDate?: string };
        nextActionId?: number;
        status?: string;
        lastSavedIn?: string;
      };
      actions?: {
        "{actionId}"?: {
          actionId?: number;
          libraryId?: string;
          name?: string;
          version?: number;
          label?: string;
          dependencyOrder?: string;
          implType?: string;
          x?: number;
          y?: number;
        };
      };
      properties?: { "{actionId}"?: { "{propertyNumber}"?: Record<string, any> } };
      branches?: { "{actionId}"?: Array<Record<string, any>> };
    }>(path, options);
  }

  /**
   * Save a JSON script
   * POST /scripts
   */
  public async createScript(
    data: {
      scriptContent?: {
        header?: {
          scriptName?: string;
          busNo?: number;
          libraryId?: string;
          masterId?: number;
          mediaType?: number;
          mediaTypeName?: string;
          variableRedaction?: string;
          nextActionId?: number;
          timestamp?: string;
          purposeType?: string;
          lockInfo?: Record<string, any>;
          lastSavedIn?: string;
        };
        actions?: { "{actionId}"?: Record<string, any> };
        properties?: { "{actionId}"?: Record<string, any> };
        branches?: { "{actionId}"?: Array<Record<string, any>> };
      };
    },
    options?: RequestOptions,
  ): Promise<{ errorCount?: number; results?: Array<{ success?: boolean; libraryId?: string }> }> {
    const path = `/scripts`;
    return this.client.post<{
      errorCount?: number;
      results?: Array<{ success?: boolean; libraryId?: string }>;
    }>(path, data, options);
  }

  /**
   * Update an existing script
   * PUT /scripts
   */
  public async updateScript(
    options?: RequestOptions & { query?: { scriptPath: string; lockScript: boolean } },
  ): Promise<{ errorState?: boolean; errorMessage?: string; lockUnlockResult?: string }> {
    const path = `/scripts`;
    return this.client.put<{
      errorState?: boolean;
      errorMessage?: string;
      lockUnlockResult?: string;
    }>(path, undefined, options);
  }

  /**
   * Deletes script
   * DELETE /scripts
   */
  public async deleteScript(
    options?: RequestOptions & { query?: { scriptPath: string } },
  ): Promise<void> {
    const path = `/scripts`;
    return this.client.delete<void>(path, options);
  }

  /**
   *  Returns a Script
   * GET /scripts/{scriptId}
   */
  public async getScriptsId(
    scriptId: string,
    options?: RequestOptions,
  ): Promise<{
    name?: string;
    filePath?: string;
    scriptId?: number;
    status?: string;
    scriptContent?: string;
  }> {
    const path = `/scripts/${encodeURIComponent(String(scriptId))}`;
    return this.client.get<{
      name?: string;
      filePath?: string;
      scriptId?: number;
      status?: string;
      scriptContent?: string;
    }>(path, options);
  }

  /**
   * Search Script
   * GET /scripts/search
   */
  public async getSearchScript(
    options?: RequestOptions & {
      query?: {
        mediaType?: number;
        scriptName?: string;
        includeInactive?: boolean;
        includeTrusted?: boolean;
        modStartDate?: string;
        modEndDate?: string;
        toolName?: string;
        caption?: string;
        parameters?: string;
        fields?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
      };
    },
  ): Promise<{
    totalRecords?: number;
    busNo?: number;
    _links?: { self?: string; next?: string; previous?: string };
    scriptName?: string;
    scriptSearchDetails?: Array<{
      masterID?: number;
      busNo?: number;
      scriptName?: string;
      status?: string;
      mediaType?: number;
      modifyDate?: string;
      mUser?: string;
      actions?: Array<Record<string, any>>;
    }>;
  }> {
    const path = `/scripts/search`;
    return this.client.get<{
      totalRecords?: number;
      busNo?: number;
      _links?: { self?: string; next?: string; previous?: string };
      scriptName?: string;
      scriptSearchDetails?: Array<{
        masterID?: number;
        busNo?: number;
        scriptName?: string;
        status?: string;
        mediaType?: number;
        modifyDate?: string;
        mUser?: string;
        actions?: Array<Record<string, any>>;
      }>;
    }>(path, options);
  }

  /**
   * Get file configuration info and content
   * GET /scripts/files
   */
  public async getScriptsFiles(
    options?: RequestOptions & { query?: { fileFullName: string; includeFileContent?: string } },
  ): Promise<any> {
    const path = `/scripts/files`;
    return this.client.get<any>(path, options);
  }

  /**
   * Save file in file server
   * POST /scripts/files
   */
  public async postScriptsFiles(
    data?: { fileFullName: string; fileContent: string },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/scripts/files`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Update File configuration
   * PUT /scripts/files
   */
  public async putScriptsFiles(options?: RequestOptions): Promise<any> {
    const path = `/scripts/files`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Delete a File from the file server
   * DELETE /scripts/files
   */
  public async deleteScriptsFiles(
    options?: RequestOptions & { query?: { fileFullName: string } },
  ): Promise<any> {
    const path = `/scripts/files`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Return a list of Files and Folders from the file server
   * GET /scripts/files/search
   */
  public async getScriptsFilesSearch(
    options?: RequestOptions & {
      query?: { rootFolder: string; filter?: string; inclusionFilePurposeTypeList?: string };
    },
  ): Promise<any> {
    const path = `/scripts/files/search`;
    return this.client.get<any>(path, options);
  }

  /**
   * Kick a locked script
   * POST /scripts/kick
   */
  public async postKickScript(
    options?: RequestOptions & { query?: { scriptPath: string } },
  ): Promise<{
    kickDate?: string;
    ErrorMessage?: string;
    ErrorState?: boolean;
    KickResult?: string;
    MasterID?: number;
    CurrLockedBy?: number;
  }> {
    const path = `/scripts/kick`;
    return this.client.post<{
      kickDate?: string;
      ErrorMessage?: string;
      ErrorState?: boolean;
      KickResult?: string;
      MasterID?: number;
      CurrLockedBy?: number;
    }>(path, undefined, options);
  }

  /**
   * Return a history of a script
   * GET /scripts/historyByName
   */
  public async getScriptHistory(
    options?: RequestOptions & { query?: { scriptPath: string } },
  ): Promise<{
    name?: string;
    versions?: Array<{
      scriptId?: number;
      modifyDate?: string;
      modifyUser?: string;
      status?: string;
    }>;
  }> {
    const path = `/scripts/historyByName`;
    return this.client.get<{
      name?: string;
      versions?: Array<{
        scriptId?: number;
        modifyDate?: string;
        modifyUser?: string;
        status?: string;
      }>;
    }>(path, options);
  }

  /**
   * Starts a Script
   * POST /scripts/start
   */
  public async postStartScript(
    options?: RequestOptions & {
      query?: {
        skillId: number;
        scriptId: string;
        scriptPath: string;
        Parameters?: string;
        startDate?: string;
      };
    },
  ): Promise<{ contactId?: number }> {
    const path = `/scripts/start`;
    return this.client.post<{ contactId?: number }>(path, undefined, options);
  }

  /**
   * Get the list of folders and scripts
   * GET /script-folders
   */
  public async getScriptsFolders(
    options?: RequestOptions & {
      query?: { folder?: string; skip?: number; top?: number; orderBy?: string; status?: string };
    },
  ): Promise<{
    totalRecords?: number;
    businessUnitId?: number;
    _links?: { self?: string; next?: string; previous?: string };
    scriptList?: Array<{
      scriptName?: string;
      status?: string;
      masterID?: number;
      createDate?: string;
      modifyDate?: string;
      mediaType?: number;
      mediaTypeName?: string;
      size?: number;
      isFolder?: boolean;
      hidden?: boolean;
      readOnly?: boolean;
      scriptLockingType?: string;
      lockedBy?: string;
      modifiedBy?: string;
    }>;
  }> {
    const path = `/script-folders`;
    return this.client.get<{
      totalRecords?: number;
      businessUnitId?: number;
      _links?: { self?: string; next?: string; previous?: string };
      scriptList?: Array<{
        scriptName?: string;
        status?: string;
        masterID?: number;
        createDate?: string;
        modifyDate?: string;
        mediaType?: number;
        mediaTypeName?: string;
        size?: number;
        isFolder?: boolean;
        hidden?: boolean;
        readOnly?: boolean;
        scriptLockingType?: string;
        lockedBy?: string;
        modifiedBy?: string;
      }>;
    }>(path, options);
  }

  /**
   * Returns the server time in ISO 8601
   * GET /server-time
   */
  public async getServerTime(
    options?: RequestOptions,
  ): Promise<AdminGeneral_getServerTimeResponse> {
    const path = `/server-time`;
    return this.client.get<AdminGeneral_getServerTimeResponse>(path, options);
  }

  /**
   * Returns a list of Tags
   * GET /tags
   */
  public async returnsTags(options?: RequestOptions): Promise<AdminGeneral_getTagsResponse> {
    const path = `/tags`;
    return this.client.get<AdminGeneral_getTagsResponse>(path, options);
  }

  /**
   * Creates a Tag
   * POST /tags
   */
  public async createsTag(
    options?: RequestOptions & { query?: { tagName: string; notes?: string } },
  ): Promise<AdminGeneral_postTagsResponse> {
    const path = `/tags`;
    return this.client.post<AdminGeneral_postTagsResponse>(path, undefined, options);
  }

  /**
   * Returns a Tag
   * GET /tags/{tagId}
   */
  public async getTagDetailsById(
    tagId: string,
    options?: RequestOptions,
  ): Promise<AdminGeneral_getTagsResponse> {
    const path = `/tags/${encodeURIComponent(String(tagId))}`;
    return this.client.get<AdminGeneral_getTagsResponse>(path, options);
  }

  /**
   * Updates a Tag
   * PUT /tags/{tagId}
   */
  public async updatesTag(
    tagId: string,
    options?: RequestOptions & { query?: { tagName?: string; notes?: string; isActive?: boolean } },
  ): Promise<any> {
    const path = `/tags/${encodeURIComponent(String(tagId))}`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * List of suppressed contacts
   * GET /suppressed-contact
   */
  public async getSuppressedContact(options?: RequestOptions): Promise<{
    suppressedContacts?: Array<{
      suppressedContactId?: number;
      bus_No?: number;
      startDate?: string;
      endDate?: string;
      value?: string;
      source?: string;
      fileName?: string;
      createDate?: string;
      createdBy?: number;
      modifiedDate?: string;
      modifiedBy?: number;
      suppressedContactMappings?: Array<Record<string, any>>;
    }>;
  }> {
    const path = `/suppressed-contact`;
    return this.client.get<{
      suppressedContacts?: Array<{
        suppressedContactId?: number;
        bus_No?: number;
        startDate?: string;
        endDate?: string;
        value?: string;
        source?: string;
        fileName?: string;
        createDate?: string;
        createdBy?: number;
        modifiedDate?: string;
        modifiedBy?: number;
        suppressedContactMappings?: Array<Record<string, any>>;
      }>;
    }>(path, options);
  }

  /**
   * Create a suppressed contact
   * POST /suppressed-contact
   */
  public async postSuppressedContact(
    data?: {
      suppressedContactData: {
        startDate?: string;
        endDate?: string;
        value?: string;
        skills?: string;
      };
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/suppressed-contact`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Returns possible Timezones
   * GET /timezones
   */
  public async timezones(options?: RequestOptions): Promise<AdminGeneral_getTimeZonesResponse> {
    const path = `/timezones`;
    return this.client.get<AdminGeneral_getTimeZonesResponse>(path, options);
  }

  /**
   * Returns a list of enabled timezones
   * GET /business-unit/time-zones
   */
  public async getBusinessUnitTimeZones(options?: RequestOptions): Promise<any> {
    const path = `/business-unit/time-zones`;
    return this.client.get<any>(path, options);
  }

  /**
   * Updates the enabled time zones
   * PUT /business-unit/time-zones
   */
  public async putBusinessUnitTimeZones(
    data?: { timezones?: string; items?: string },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/business-unit/time-zones`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * This API Returns a list of paginated Unavailable Codes
   * GET /unavailable-codes
   */
  public async getUnavailableCodes(
    options?: RequestOptions & {
      query?: {
        isActive?: boolean;
        searchString?: string;
        fields?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
      };
    },
  ): Promise<{
    totalRecords?: number;
    businessUnitId?: number;
    unavailableCodes?: Array<{
      id?: number;
      name?: string;
      isActive?: boolean;
      isACW?: boolean;
      agentTimeout?: number;
    }>;
    _links?: { self?: string; next?: string; previous?: string };
  }> {
    const path = `/unavailable-codes`;
    return this.client.get<{
      totalRecords?: number;
      businessUnitId?: number;
      unavailableCodes?: Array<{
        id?: number;
        name?: string;
        isActive?: boolean;
        isACW?: boolean;
        agentTimeout?: number;
      }>;
      _links?: { self?: string; next?: string; previous?: string };
    }>(path, options);
  }

  /**
   *  Creates an Unavailable Code
   * POST /unavailable-codes
   */
  public async postUnavailableCodes(
    data: { name: string; isACW?: boolean; agentTimeout?: number; notes?: string },
    options?: RequestOptions,
  ): Promise<{ id?: number }> {
    const path = `/unavailable-codes`;
    return this.client.post<{ id?: number }>(path, data, options);
  }

  /**
   *   Returns a list of configurable phone number
   * GET /phone-numbers
   */
  public async getPhoneNumbers(options?: RequestOptions): Promise<{
    _links?: { self: string; next?: string; previous?: string };
    totalRecords?: number;
    phoneCollection?: Array<{ phonenumber?: string }>;
  }> {
    const path = `/phone-numbers`;
    return this.client.get<{
      _links?: { self: string; next?: string; previous?: string };
      totalRecords?: number;
      phoneCollection?: Array<{ phonenumber?: string }>;
    }>(path, options);
  }

  /**
   * Returns a suppressed contact by ID
   * GET /suppressed-contact/{suppressedContactId}
   */
  public async getSuppressedContactId(
    suppressedContactId: string,
    options?: RequestOptions,
  ): Promise<{
    suppressedContactId?: number;
    bus_No?: number;
    startDate?: string;
    endDate?: string;
    value?: string;
    source?: string;
    fileName?: string;
    createDate?: string;
    createdBy?: number;
    modifiedDate?: string;
    modifiedBy?: number;
    suppressedContactMappings?: Array<{
      suppressedContactId?: number;
      skill_No?: number;
      bus_No?: number;
      createDate?: string;
      createdBy?: number;
      modifiedDate?: string;
      modifiedBy?: number;
    }>;
  }> {
    const path = `/suppressed-contact/${encodeURIComponent(String(suppressedContactId))}`;
    return this.client.get<{
      suppressedContactId?: number;
      bus_No?: number;
      startDate?: string;
      endDate?: string;
      value?: string;
      source?: string;
      fileName?: string;
      createDate?: string;
      createdBy?: number;
      modifiedDate?: string;
      modifiedBy?: number;
      suppressedContactMappings?: Array<{
        suppressedContactId?: number;
        skill_No?: number;
        bus_No?: number;
        createDate?: string;
        createdBy?: number;
        modifiedDate?: string;
        modifiedBy?: number;
      }>;
    }>(path, options);
  }

  /**
   * Updates a suppressed contact by ID
   * PUT /suppressed-contact/{suppressedContactId}
   */
  public async putSuppressedContactId(
    suppressedContactId: string,
    data?: {
      suppressedContactData: {
        startDate?: string;
        endDate?: string;
        value?: string;
        skills?: string;
      };
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/suppressed-contact/${encodeURIComponent(String(suppressedContactId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Deletes a suppressed contact by ID
   * DELETE /suppressed-contact/{suppressedContactId}
   */
  public async deleteSuppressedContactId(
    suppressedContactId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/suppressed-contact/${encodeURIComponent(String(suppressedContactId))}`;
    return this.client.delete<any>(path, options);
  }
}
