import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AdminLists_postListUpload {
  listFile: string;
  fileName?: string;
  skillId?: number;
  defaultTimeZone?: string;
  forceOverwrite: boolean;
  expirationDate: string;
  startSkill: boolean;
  sendEmail: boolean;
}

export type AdminLists_getCallingListsResponse = {
  totalRecords?: number;
  _links?: { self?: string; next?: string; previous?: string };
  callingLists: Array<{
    listId: number;
    listName: string;
    prospectiveContactCount: number;
    status: "Active" | "Inactive";
    totalRecords: number;
    invalidRecords: number;
    validRecords: number;
    finalizedRecords: number;
    createDate: string;
    uploadDate: string;
    updateDate: string;
    removeDate: string;
    skills?: Array<Record<string, any>>;
  }>;
};

export interface AdminLists_getCallingListjobResponse {
  _links?: { self?: string; next?: string; previous?: string };
  businessUnitId?: number;
  lastPollTime?: string;
  totalRecords?: number;
  uploadJobs?: Array<{
    jobId?: number;
    listId?: number;
    listName?: string;
    startDate?: string;
    submitDate?: string;
    isComplete?: boolean;
    isCancelled?: boolean;
    completedDate?: string;
  }>;
}

export interface AdminLists_getCallingListResponseById {
  resultSet?: {
    listName?: string;
    lastPollTime?: string;
    prospectiveContactCount?: number;
    status?: string;
    totalRecords?: number;
    invalidRecords?: number;
    validRecords?: number;
    finalizedRecords?: number;
    createDate?: string;
    uploadDate?: string;
    updateDate?: string;
    removeDate?: string;
    listExpirationDate?: string;
    skills?: Array<Record<string, any>>;
    contactRecords?: Array<Record<string, any>>;
  };
}

export interface AdminLists_getCallingListAttemptsResponse {
  resultSet?: {
    listName?: string;
    prospectiveContactCount?: number;
    status?: string;
    totalRecords?: number;
    validRecords?: number;
    invalidRecords?: number;
    finalizedRecords?: number;
    createDate?: string;
    uploadDate?: string;
    updateDate?: string;
    removeDate?: string;
    contactAttempts?: Array<Record<string, any>>;
  };
}

export interface AdminLists_GetCallingListByJobIDResponse {
  uploadJobs?: Array<{
    jobId?: number;
    listId?: number;
    listName?: string;
    startDate?: string;
    submitDate?: string;
    isComplete?: boolean;
    isCancelled?: boolean;
    completedDate?: string;
  }>;
}

export interface AdminLists_getDNCGroupsResponse {
  resultSet: { totalGroups: number; dncGroups?: Array<Record<string, any>> };
}

export interface AdminLists_postDNCGroupsResponse {
  dncGroups: Array<{
    dncGroupId: number;
    dncGroupName: string;
    dncGroupDescription: string;
    validRecords: number;
    isActive: boolean;
    isRemoved: boolean;
    createDate: string;
    lastUpdateTime: string;
  }>;
}

export interface AdminLists_getDNCGroupContributingSkillsResponse {
  totalRecords?: number;
  _links?: { self?: string; next?: string; previous?: string };
  contributingSkills: Array<{ skillId: number; skillName: string }>;
}

export interface AdminLists_getDNCGroupScrubbedSkillsResponse {
  totalRecords?: number;
  _links?: { self?: string; next?: string; previous?: string };
  scrubbedSkills: Array<{ skillId: number; skillName: string }>;
}

export interface AdminLists_getDNCGroupResponseById {
  resultSet?: { dncGroups?: Array<Record<string, any>> };
}

export interface AdminLists_getDNCGroupRecordsResponseById {
  resultSet?: { totalRecords?: number; dncRecords?: Array<Record<string, any>> };
}

export interface AdminLists_postDNCGroupRecordsResponse {
  resultSet?: { errorCount?: number; recordResults?: Array<Record<string, any>> };
}

export interface AdminLists_deleteDNCGroupRecordsResponse {
  errorCount: number;
  recordResults: Array<{ success?: boolean; error?: string; formattedPhone?: string }>;
}

export interface AdminLists_getSearchDNCGroupsResponse {
  searchResults: Array<{
    dncGroupId: number;
    dncGroupName: string;
    dncGroupDescription: number;
    formattedPhone: string;
    expiredDate: string;
    dateCollected: string;
    lastUpdateTime: string;
  }>;
}

export class AdminListsService {
  constructor(private client: HttpClient) {}

  /**
   * Returns list of DNC Groups
   * GET /dnc-groups
   */
  public async dncGroupsResultSet(
    options?: RequestOptions,
  ): Promise<AdminLists_getDNCGroupsResponse> {
    const path = `/dnc-groups`;
    return this.client.get<AdminLists_getDNCGroupsResponse>(path, options);
  }

  /**
   * Create a DNC Group
   * POST /dnc-groups
   */
  public async postDncGroups(
    data: { dncGroupName: string; dncGroupDescription?: string },
    options?: RequestOptions,
  ): Promise<{
    dncGroups?: Array<{
      dncGroupId?: number;
      dncGroupName?: string;
      dncGroupDescription?: string;
      validRecords?: number;
      isActive?: boolean;
      isRemoved?: boolean;
      createDate?: string;
      lastUpdateTime?: string;
    }>;
  }> {
    const path = `/dnc-groups`;
    return this.client.post<{
      dncGroups?: Array<{
        dncGroupId?: number;
        dncGroupName?: string;
        dncGroupDescription?: string;
        validRecords?: number;
        isActive?: boolean;
        isRemoved?: boolean;
        createDate?: string;
        lastUpdateTime?: string;
      }>;
    }>(path, data, options);
  }

  /**
   * Returns a DNC Group
   * GET /dnc-groups/{groupId}
   */
  public async getDNCgroupByID(
    groupId: string,
    options?: RequestOptions,
  ): Promise<AdminLists_getDNCGroupResponseById> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}`;
    return this.client.get<AdminLists_getDNCGroupResponseById>(path, options);
  }

  /**
   * Update a DNC Group
   * PUT /dnc-groups/{groupId}
   */
  public async putDNCgroupByID(
    groupId: string,
    options?: RequestOptions & {
      query?: { dncGroupName?: string; dncGroupDescription?: string; isActive?: boolean };
    },
  ): Promise<AdminLists_postDNCGroupsResponse> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}`;
    return this.client.put<AdminLists_postDNCGroupsResponse>(path, undefined, options);
  }

  /**
   *  Returns Contributing Skills for a DNC Group
   * GET /dnc-groups/{groupId}/contributing-skills
   */
  public async getDncGroupsContribSkills(
    groupId: string,
    options?: RequestOptions,
  ): Promise<AdminLists_getDNCGroupContributingSkillsResponse> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/contributing-skills`;
    return this.client.get<AdminLists_getDNCGroupContributingSkillsResponse>(path, options);
  }

  /**
   * Assign a Contributing Skill
   * POST /dnc-groups/{groupId}/contributing-skills/{skillId}
   */
  public async postDncGroupsContribSkillsById(
    groupId: string,
    skillId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/contributing-skills/${encodeURIComponent(String(skillId))}`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *  Removes a Contributing Skill
   * DELETE /dnc-groups/{groupId}/contributing-skills/{skillId}
   */
  public async deleteDncGroupsContribSkillsById(
    groupId: string,
    skillId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/contributing-skills/${encodeURIComponent(String(skillId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Returns Records in a DNC Group
   * GET /dnc-groups/{groupId}/records
   */
  public async dncGroupsRecords(
    groupId: string,
    options?: RequestOptions,
  ): Promise<AdminLists_getDNCGroupRecordsResponseById> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/records`;
    return this.client.get<AdminLists_getDNCGroupRecordsResponseById>(path, options);
  }

  /**
   * Add Records to a DNC Group
   * POST /dnc-groups/{groupId}/records
   */
  public async createDncGroupRecords(
    groupId: string,
    data: { dncGroupRecords: Array<{ phoneNumber: number; expiredDate?: string }> },
    options?: RequestOptions,
  ): Promise<AdminLists_postDNCGroupRecordsResponse> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/records`;
    return this.client.post<AdminLists_postDNCGroupRecordsResponse>(path, data, options);
  }

  /**
   *  Expire Records from a DNC Group
   * DELETE /dnc-groups/{groupId}/records
   */
  public async deleteDncGroupRecords(
    groupId: string,
    data: { dncGroupRecords: Array<{ phoneNumber: string; expiredDate?: string }> },
    options?: RequestOptions,
  ): Promise<AdminLists_deleteDNCGroupRecordsResponse> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/records`;
    return this.client.delete<AdminLists_deleteDNCGroupRecordsResponse>(path, data, options);
  }

  /**
   *  Returns Scrubbed Skills for a DNC Group
   * GET /dnc-groups/{groupId}/scrubbed-skills
   */
  public async getDncGroupsScrubbedSkills(
    groupId: string,
    options?: RequestOptions,
  ): Promise<AdminLists_getDNCGroupScrubbedSkillsResponse> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/scrubbed-skills`;
    return this.client.get<AdminLists_getDNCGroupScrubbedSkillsResponse>(path, options);
  }

  /**
   * Assign a Scrubbed Skill
   * POST /dnc-groups/{groupId}/scrubbed-skills/{skillId}
   */
  public async postDncGroupsScrubbedSkills(
    groupId: string,
    skillId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/scrubbed-skills/${encodeURIComponent(String(skillId))}`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *  Remove a Scrubbed Skill
   * DELETE /dnc-groups/{groupId}/scrubbed-skills/{skillId}
   */
  public async deleteDncGroupsScrubbedSkills(
    groupId: string,
    skillId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/dnc-groups/${encodeURIComponent(String(groupId))}/scrubbed-skills/${encodeURIComponent(String(skillId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Search for a Phone Number
   * POST /dnc-groups/search
   */
  public async returnAListOfGroupsByPhonenumber(
    options?: RequestOptions & { query?: { phoneNumber: string } },
  ): Promise<AdminLists_getSearchDNCGroupsResponse> {
    const path = `/dnc-groups/search`;
    return this.client.post<AdminLists_getSearchDNCGroupsResponse>(path, undefined, options);
  }

  /**
   * Get DNIS entries
   * GET /dnis
   */
  public async getDnis(options?: RequestOptions): Promise<{
    totalRecords?: number;
    _links?: { self?: string; next?: string; previous?: string };
    dnisEntries?: Array<{ dnis?: string; isActive?: boolean }>;
  }> {
    const path = `/dnis`;
    return this.client.get<{
      totalRecords?: number;
      _links?: { self?: string; next?: string; previous?: string };
      dnisEntries?: Array<{ dnis?: string; isActive?: boolean }>;
    }>(path, options);
  }

  /**
   *  Returns all Calling Lists
   * GET /lists/call-lists
   */
  public async returnCallList(
    options?: RequestOptions,
  ): Promise<AdminLists_getCallingListsResponse> {
    const path = `/lists/call-lists`;
    return this.client.get<AdminLists_getCallingListsResponse>(path, options);
  }

  /**
   * Create a Calling List mapping
   * POST /lists/call-lists
   */
  public async postListsCallLists(
    data: { destinationMappings: Array<{ fieldName: string; fieldValue: string }> },
    options?: RequestOptions & {
      query?: {
        listName: string;
        externalIdColumn: string;
        listExpirationDate?: string;
        scoreColumn?: string;
        customer1Column?: string;
        customer2Column?: string;
        callerIdColumn?: string;
        priorityColumn?: string;
        complianceReqColumn?: string;
        firstNameColumn?: string;
        lastNameColumn?: string;
        addressColumn?: string;
        cityColumn?: string;
        stateColumn?: string;
        zipColumn?: string;
        timeZoneColumn?: string;
        confirmReqColumn?: string;
        overrideFinalizationColumn?: string;
        agentIdColumn?: string;
        callRequestTimeColumn?: string;
        callRequestStaleColumn?: string;
        notesColumn?: string;
        expirationDateColumn?: string;
      };
    },
  ): Promise<{ listId: number }> {
    const path = `/lists/call-lists`;
    return this.client.post<{ listId: number }>(path, data, options);
  }

  /**
   * Download a Calling List
   * GET /lists/call-lists/{listId}
   */
  public async downloadACallList(
    listId: string,
    options?: RequestOptions & { query?: { finalized?: boolean; includeRecords?: boolean } },
  ): Promise<AdminLists_getCallingListResponseById> {
    const path = `/lists/call-lists/${encodeURIComponent(String(listId))}`;
    return this.client.get<AdminLists_getCallingListResponseById>(path, options);
  }

  /**
   *  Remove a Calling List
   * DELETE /lists/call-lists/{listId}
   */
  public async deleteListsCallListsListId(
    listId: string,
    options?: RequestOptions & { query?: { forceInactive?: boolean; forceDelete?: boolean } },
  ): Promise<any> {
    const path = `/lists/call-lists/${encodeURIComponent(String(listId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Download a Calling List's attempts
   * GET /lists/call-lists/{listId}/attempts
   */
  public async downloadACallListAttempts(
    listId: string,
    options?: RequestOptions & { query?: { finalized?: boolean } },
  ): Promise<AdminLists_getCallingListAttemptsResponse> {
    const path = `/lists/call-lists/${encodeURIComponent(String(listId))}/attempts`;
    return this.client.get<AdminLists_getCallingListAttemptsResponse>(path, options);
  }

  /**
   * Upload new records to a call list
   * POST /lists/call-lists/{listId}/upload
   */
  public async uploadingCallingList(
    listId: string,
    data?: AdminLists_postListUpload,
    options?: RequestOptions,
  ): Promise<{ jobId?: number }> {
    const path = `/lists/call-lists/${encodeURIComponent(String(listId))}/upload`;
    return this.client.post<{ jobId?: number }>(path, data, options);
  }

  /**
   *  Remove Prospects from a Source
   * DELETE /lists/call-lists/{sourceName}/removeProspects
   */
  public async deleteListsCallListsIdRemoveProspects(
    sourceName: string,
    data?: { prospectsToRemove?: Array<{ externalId?: number }> },
    options?: RequestOptions,
  ): Promise<{
    successfulRecords?: Array<{ externalId?: string; resultCode?: string }>;
    failedRecords?: Array<{ externalId?: string; resultCode?: string }>;
  }> {
    const path = `/lists/call-lists/${encodeURIComponent(String(sourceName))}/removeProspects`;
    return this.client.delete<{
      successfulRecords?: Array<{ externalId?: string; resultCode?: string }>;
      failedRecords?: Array<{ externalId?: string; resultCode?: string }>;
    }>(path, data, options);
  }

  /**
   * Returns the status of calling list upload jobs
   * GET /lists/call-lists/jobs
   */
  public async getListJob(options?: RequestOptions): Promise<AdminLists_getCallingListjobResponse> {
    const path = `/lists/call-lists/jobs`;
    return this.client.get<AdminLists_getCallingListjobResponse>(path, options);
  }

  /**
   * Returns the status of calling list upload job
   * GET /lists/call-lists/jobs/{jobId}
   */
  public async getCallingList(
    jobId: number,
    options?: RequestOptions,
  ): Promise<AdminLists_GetCallingListByJobIDResponse> {
    const path = `/lists/call-lists/jobs/${encodeURIComponent(String(jobId))}`;
    return this.client.get<AdminLists_GetCallingListByJobIDResponse>(path, options);
  }

  /**
   *  Cancel Pending/Processing List Process
   * DELETE /lists/call-lists/jobs/{jobId}
   */
  public async cancelList(jobId: number, options?: RequestOptions): Promise<any> {
    const path = `/lists/call-lists/jobs/${encodeURIComponent(String(jobId))}`;
    return this.client.delete<any>(path, options);
  }
}
