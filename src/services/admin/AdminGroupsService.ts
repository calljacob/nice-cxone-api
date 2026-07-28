import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AdminGroups_postgroupsrequest {
  groups: Array<{ groupName?: string; isActive?: boolean; notes?: string }>;
}

export interface AdminGroups_postgroupsresponse {
  errorCount?: number;
  groupResults?: Array<{ success?: boolean; groupId?: number; error?: string }>;
}

export interface AdminGroups_getgroupsresponse {
  _links?: { self?: string; next?: string; previous?: string };
  totalRecords?: number;
  groups?: Array<{
    groupId?: number;
    groupName?: string;
    notes?: string;
    isActive?: boolean;
    lastUpdated?: string;
  }>;
}

export interface AdminGroups_getgroupgroupidresponse {
  totalRecords?: number;
  groups?: Array<{
    groupId?: number;
    groupName?: string;
    notes?: string;
    isActive?: boolean;
    lastUpdated?: string;
  }>;
}

export interface AdminGroups_deletegroupgroupidrequest {
  agents?: Array<{ agentId?: number }>;
}

export interface AdminGroups_deletegroupgroupidresponse {
  errorCount?: number;
  agentResults?: Array<{ agentId: number; success?: boolean; error?: string }>;
}

export class AdminGroupsService {
  constructor(private client: HttpClient) {}

  /**
   * Get Groups
   * GET /groups
   */
  public async getgroups(options?: RequestOptions): Promise<AdminGroups_getgroupsresponse> {
    const path = `/groups`;
    return this.client.get<AdminGroups_getgroupsresponse>(path, options);
  }

  /**
   * Create Groups
   * POST /groups
   */
  public async postgroups(
    data?: AdminGroups_postgroupsrequest,
    options?: RequestOptions,
  ): Promise<AdminGroups_postgroupsresponse> {
    const path = `/groups`;
    return this.client.post<AdminGroups_postgroupsresponse>(path, data, options);
  }

  /**
   * Returns a group config
   * GET /groups/{groupId}
   */
  public async getgroupsbygroupid(
    groupId: number,
    options?: RequestOptions,
  ): Promise<AdminGroups_getgroupgroupidresponse> {
    const path = `/groups/${encodeURIComponent(String(groupId))}`;
    return this.client.get<AdminGroups_getgroupgroupidresponse>(path, options);
  }

  /**
   * Updates a Group
   * PUT /groups/{groupId}
   */
  public async putgroupsbygroupid(
    groupId: number,
    options?: RequestOptions & { query?: { groupName: string; notes?: string } },
  ): Promise<any> {
    const path = `/groups/${encodeURIComponent(String(groupId))}`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Returns a list of agents assigned to a group
   * GET /groups/{groupId}/agents
   */
  public async getGroupAgent(
    groupId: number,
    options?: RequestOptions & { query?: { assigned?: boolean } },
  ): Promise<{
    _links?: { self?: string; next?: string; previous?: string };
    totalRecords?: number;
    agents?: Array<{
      agentId?: number;
      userName?: string;
      firstName?: string;
      middleName?: string;
      lastName?: string;
      emailAddress?: string;
      isActive?: boolean;
      teamId?: number;
      teamName?: string;
      reportToId?: number;
      reportToName?: string;
      isSupervisor?: boolean;
      lastLogin?: string;
      lastUpdated?: string;
      location?: string;
      custom1?: string;
      custom2?: string;
      custom3?: string;
      custom4?: string;
      custom5?: string;
      internalId?: string;
      profileId?: number;
      profileName?: string;
      timeZone?: string;
      country?: string;
      countryName?: string;
      state?: string;
      city?: string;
      chatRefusalTimeout?: number;
      phoneRefusalTimeout?: number;
      workItemRefusalTimeout?: number;
      defaultDialingPattern?: number;
      defaultDialingPatternName?: string;
      useTeamMaxConcurrentChats?: boolean;
      maxConcurrentChats?: number;
      notes?: string;
      createDate?: string;
      inactiveDate?: string;
      hireDate?: string;
      terminationDate?: string;
      hourlyCost?: number;
      rehireStatus?: boolean;
      employmentType?: number;
      employmentTypeName?: string;
      referral?: string;
      atHome?: boolean;
      hiringSource?: number;
      ntLoginName?: string;
      scheduleNotification?: number;
      federatedId?: string;
      useTeamEmailAutoParkingLimit?: boolean;
      maxEmailAutoParkingLimit?: number;
      sipUser?: string;
      systemUser?: string;
      systemDomain?: string;
      crmUserName?: string;
      useAgentTimeZone?: boolean;
      timeDisplayFormat?: string;
      sendEmailNotifications?: boolean;
      apiKey?: string;
      telephone1?: string;
      telephone2?: string;
      userType?: string;
      isWhatIfAgent?: boolean;
      timeZoneOffset?: string;
      requestContact?: boolean;
      chatThreshold?: number;
      useTeamChatThreshold?: boolean;
      emailThreshold?: number;
      useTeamEmailThreshold?: boolean;
      workItemThreshold?: number;
      useTeamWorkItemThreshold?: boolean;
      contactAutoFocus?: boolean;
      useTeamContactAutoFocus?: boolean;
      useTeamRequestContact?: boolean;
      subject?: string;
      issuer?: string;
      recordingNumbers?: Array<Record<string, any>>;
      isOpenIdProfileComplete?: boolean;
    }>;
  }> {
    const path = `/groups/${encodeURIComponent(String(groupId))}/agents`;
    return this.client.get<{
      _links?: { self?: string; next?: string; previous?: string };
      totalRecords?: number;
      agents?: Array<{
        agentId?: number;
        userName?: string;
        firstName?: string;
        middleName?: string;
        lastName?: string;
        emailAddress?: string;
        isActive?: boolean;
        teamId?: number;
        teamName?: string;
        reportToId?: number;
        reportToName?: string;
        isSupervisor?: boolean;
        lastLogin?: string;
        lastUpdated?: string;
        location?: string;
        custom1?: string;
        custom2?: string;
        custom3?: string;
        custom4?: string;
        custom5?: string;
        internalId?: string;
        profileId?: number;
        profileName?: string;
        timeZone?: string;
        country?: string;
        countryName?: string;
        state?: string;
        city?: string;
        chatRefusalTimeout?: number;
        phoneRefusalTimeout?: number;
        workItemRefusalTimeout?: number;
        defaultDialingPattern?: number;
        defaultDialingPatternName?: string;
        useTeamMaxConcurrentChats?: boolean;
        maxConcurrentChats?: number;
        notes?: string;
        createDate?: string;
        inactiveDate?: string;
        hireDate?: string;
        terminationDate?: string;
        hourlyCost?: number;
        rehireStatus?: boolean;
        employmentType?: number;
        employmentTypeName?: string;
        referral?: string;
        atHome?: boolean;
        hiringSource?: number;
        ntLoginName?: string;
        scheduleNotification?: number;
        federatedId?: string;
        useTeamEmailAutoParkingLimit?: boolean;
        maxEmailAutoParkingLimit?: number;
        sipUser?: string;
        systemUser?: string;
        systemDomain?: string;
        crmUserName?: string;
        useAgentTimeZone?: boolean;
        timeDisplayFormat?: string;
        sendEmailNotifications?: boolean;
        apiKey?: string;
        telephone1?: string;
        telephone2?: string;
        userType?: string;
        isWhatIfAgent?: boolean;
        timeZoneOffset?: string;
        requestContact?: boolean;
        chatThreshold?: number;
        useTeamChatThreshold?: boolean;
        emailThreshold?: number;
        useTeamEmailThreshold?: boolean;
        workItemThreshold?: number;
        useTeamWorkItemThreshold?: boolean;
        contactAutoFocus?: boolean;
        useTeamContactAutoFocus?: boolean;
        useTeamRequestContact?: boolean;
        subject?: string;
        issuer?: string;
        recordingNumbers?: Array<Record<string, any>>;
        isOpenIdProfileComplete?: boolean;
      }>;
    }>(path, options);
  }

  /**
   * Assigns Agents to a Group
   * POST /groups/{groupId}/agents
   */
  public async blank(
    groupId: number,
    data?: { agents?: Array<{ agentId?: number }> },
    options?: RequestOptions,
  ): Promise<{ agents?: Array<{ agentId?: number }> }> {
    const path = `/groups/${encodeURIComponent(String(groupId))}/agents`;
    return this.client.post<{ agents?: Array<{ agentId?: number }> }>(path, data, options);
  }

  /**
   *  Removes agents from a group.
   * DELETE /groups/{groupId}/agents
   */
  public async deleteGroupAgents(
    groupId: number,
    data?: AdminGroups_deletegroupgroupidrequest,
    options?: RequestOptions,
  ): Promise<AdminGroups_deletegroupgroupidresponse> {
    const path = `/groups/${encodeURIComponent(String(groupId))}/agents`;
    return this.client.delete<AdminGroups_deletegroupgroupidresponse>(path, data, options);
  }
}
