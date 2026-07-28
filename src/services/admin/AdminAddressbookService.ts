import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AdminAddressbook_getAddressBooksResponse {
  addressBooks?: Array<{
    addressBookName?: string;
    addressBookId?: number;
    addressBookType?: string;
    appId?: string;
    agents?: Array<Record<string, any>>;
    teams?: Array<Record<string, any>>;
    skills?: Array<Record<string, any>>;
    campaigns?: Array<Record<string, any>>;
  }>;
}

export interface AdminAddressbook_postAddressBooksResponse {
  resultSet?: { addressBookId?: number; addressBookType?: string; addressBookName?: string };
}

export interface AdminAddressbook_postAddressBookAssignmentsRequest {
  addressBookAssignments: Array<{ entityId: string }>;
}

export interface AdminAddressbook_postAddressBookAssignmentsResponse {
  assignResults?: Array<{
    success?: boolean;
    entityId?: string;
    error?: string;
    entityType?: string;
  }>;
}

export interface AdminAddressbook_putAddressBookDynamicEntriesRequest {
  addressBookEntries: Array<{
    externalId: string;
    stateId: number;
    externalState: string;
    firstName: string;
    middleName: string;
    lastName: string;
    company: string;
    phone: string;
    mobile: string;
    email: string;
  }>;
}

export interface AdminAddressbook_putAddressBookDynamicEntriesResponse {
  entryResults?: Array<{
    success?: boolean;
    created?: boolean;
    addressBookEntryId?: number;
    externalId?: number;
    error?: string;
  }>;
}

export interface AdminAddressbook_postAddressBookEntriesRequest {
  addressBookEntries: Array<{
    firstName: string;
    middleName?: string;
    lastName: string;
    company?: string;
    phone?: string;
    mobile?: string;
    email?: string;
  }>;
}

export interface AdminAddressbook_postAddressBookEntriesResponse {
  entryResults?: Array<{ success?: boolean; addressBookEntryId?: number; error?: string }>;
}

export interface AdminAddressbook_putAddressBookEntriesRequest {
  addressBookEntries: Array<{
    firstName: string;
    middleName: string;
    lastName: string;
    company: string;
    phone: string;
    mobile: string;
    email: string;
  }>;
}

export interface AdminAddressbook_getCampaignAddressBooksResponse {
  lastPollTime?: string;
  addressBooks?: Array<{
    addressBookName?: string;
    addressBookId?: number;
    addressBookType?: string;
    appId?: string;
  }>;
}

export interface AdminAddressbook_getSkillAddressBooksResponse {
  totalRecords?: number;
  _links?: { self?: string; next?: string; previous?: string };
  lastPollTime?: string;
  addressBooks?: Array<{
    addressBookName?: string;
    addressBookId?: number;
    addressBookType?: string;
    appId?: string;
    fullLoad?: boolean;
    addressBookEntries?: Array<Record<string, any>>;
  }>;
}

export interface AdminAddressbook_getTeamAddressBooksResponse {
  lastPollTime?: string;
  addressBooks?: Array<{
    addressBookName?: string;
    addressBookId?: number;
    addressBookType?: string;
    appId?: string;
  }>;
}

export class AdminAddressbookService {
  constructor(private client: HttpClient) {}

  /**
   * Returns a list of Address Books
   * GET /address-books
   */
  public async getAddressBooks(
    options?: RequestOptions,
  ): Promise<AdminAddressbook_getAddressBooksResponse> {
    const path = `/address-books`;
    return this.client.get<AdminAddressbook_getAddressBooksResponse>(path, options);
  }

  /**
   * Create a new Address Book
   * POST /address-books
   */
  public async createAddressBookv4(
    options?: RequestOptions & {
      query?: { addressBookName: string; addressBookType: "Standard" | "Dynamic" };
    },
  ): Promise<AdminAddressbook_postAddressBooksResponse> {
    const path = `/address-books`;
    return this.client.post<AdminAddressbook_postAddressBooksResponse>(path, undefined, options);
  }

  /**
   * Delete an existing Address Book
   * DELETE /address-books/{addressBookId}
   */
  public async deleteAddressbook(addressBookId: string, options?: RequestOptions): Promise<any> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Lists all assigned agents for an address book
   * GET /address-books/{addressBookId}/agents/assigned
   */
  public async getAddressBooksIdAgentsAssigned(
    addressBookId: string,
    options?: RequestOptions,
  ): Promise<{ agentId?: number; firstName?: string; lastName?: string; hiddenAgents?: number }> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/agents/assigned`;
    return this.client.get<{
      agentId?: number;
      firstName?: string;
      lastName?: string;
      hiddenAgents?: number;
    }>(path, options);
  }

  /**
   * Lists all unassigned agents for an address book
   * GET /address-books/{addressBookId}/agents/unassigned
   */
  public async getAddressBooksIdAgentsUnassigned(
    addressBookId: string,
    options?: RequestOptions,
  ): Promise<{ agentId?: number; firstName?: string; lastName?: string }> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/agents/unassigned`;
    return this.client.get<{ agentId?: number; firstName?: string; lastName?: string }>(
      path,
      options,
    );
  }

  /**
   * Assign Entities to an Address Book
   * POST /address-books/{addressBookId}/assignment
   */
  public async addressBookAssignmentV4(
    addressBookId: string,
    data?: AdminAddressbook_postAddressBookAssignmentsRequest,
    options?: RequestOptions & {
      query?: { entityType: "Agent" | "Skill" | "Team" | "Campaign" | "Everyone" };
    },
  ): Promise<AdminAddressbook_postAddressBookAssignmentsResponse> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/assignment`;
    return this.client.post<AdminAddressbook_postAddressBookAssignmentsResponse>(
      path,
      data,
      options,
    );
  }

  /**
   *   Lists all dynamic address book entries for an address book
   * GET /address-books/{addressBookId}/dynamic-entries
   */
  public async getAddressBooksIdDynamicEntries(
    addressBookId: string,
    options?: RequestOptions & {
      query?: { fullLoad: boolean; top?: number; skip?: number; orderBy?: string };
    },
  ): Promise<{
    totalRecords?: number;
    _links?: { self?: string; next?: string; previous?: string };
    addressBook?: {
      addressBookName?: string;
      addressBookId?: number;
      addressBookType?: string;
      fullLoad?: boolean;
      serverTime?: string;
      addressBookEntries?: Array<Record<string, any>>;
    };
  }> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/dynamic-entries`;
    return this.client.get<{
      totalRecords?: number;
      _links?: { self?: string; next?: string; previous?: string };
      addressBook?: {
        addressBookName?: string;
        addressBookId?: number;
        addressBookType?: string;
        fullLoad?: boolean;
        serverTime?: string;
        addressBookEntries?: Array<Record<string, any>>;
      };
    }>(path, options);
  }

  /**
   *  Create or Update Dynamic Address Book Entries
   * PUT /address-books/{addressBookId}/dynamic-entries
   */
  public async createOrUpdateDynamicAddressbook(
    addressBookId: string,
    data?: AdminAddressbook_putAddressBookDynamicEntriesRequest,
    options?: RequestOptions & { query?: { fullLoad: boolean } },
  ): Promise<AdminAddressbook_putAddressBookDynamicEntriesResponse> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/dynamic-entries`;
    return this.client.put<AdminAddressbook_putAddressBookDynamicEntriesResponse>(
      path,
      data,
      options,
    );
  }

  /**
   *  Delete a Dynamic Address Book Entry
   * DELETE /address-books/{addressBookId}/dynamic-entries/{externalId}
   */
  public async deleteDynamicAddressBookEntry(
    externalId: string,
    addressBookId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/dynamic-entries/${encodeURIComponent(String(externalId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   *   Lists all standard address book entries for an address book
   * GET /address-books/{addressBookId}/entries
   */
  public async getAddressBooksIdEntries(
    addressBookId: string,
    options?: RequestOptions,
  ): Promise<{
    _links?: { self?: string; next?: string; previous?: string };
    businessUnitId?: number;
    lastPollTime?: string;
    totalRecords?: number;
    addressBook?: {
      addressBookName?: string;
      addressBookId?: number;
      addressBookType?: string;
      addressBookEntries?: Array<Record<string, any>>;
    };
  }> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/entries`;
    return this.client.get<{
      _links?: { self?: string; next?: string; previous?: string };
      businessUnitId?: number;
      lastPollTime?: string;
      totalRecords?: number;
      addressBook?: {
        addressBookName?: string;
        addressBookId?: number;
        addressBookType?: string;
        addressBookEntries?: Array<Record<string, any>>;
      };
    }>(path, options);
  }

  /**
   *  Create Standard Address Book Entries
   * POST /address-books/{addressBookId}/entries
   */
  public async createAddressBookEntries(
    addressBookId: string,
    data?: AdminAddressbook_postAddressBookEntriesRequest,
    options?: RequestOptions,
  ): Promise<AdminAddressbook_postAddressBookEntriesResponse> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/entries`;
    return this.client.post<AdminAddressbook_postAddressBookEntriesResponse>(path, data, options);
  }

  /**
   *  Update Standard Address Book Entries
   * PUT /address-books/{addressBookId}/entries
   */
  public async updateAddressBookEntries(
    addressBookId: string,
    data?: AdminAddressbook_putAddressBookEntriesRequest,
    options?: RequestOptions,
  ): Promise<{
    entryResults?: Array<{ success?: boolean; addressBookEntryId?: number; error?: string }>;
  }> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/entries`;
    return this.client.put<{
      entryResults?: Array<{ success?: boolean; addressBookEntryId?: number; error?: string }>;
    }>(path, data, options);
  }

  /**
   * Delete a Standard Address Book Entry
   * DELETE /address-books/{addressBookId}/entries/{addressBookEntryId}
   */
  public async deleteAddressBookEntry(
    addressBookEntryId: number,
    addressBookId: string,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/address-books/${encodeURIComponent(String(addressBookId))}/entries/${encodeURIComponent(String(addressBookEntryId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Returns Address Books for an Agent
   * GET /agents/{agentId}/address-books
   */
  public async addressBookListForAnAgent(
    agentId: number,
    options?: RequestOptions & {
      query?: {
        includeEntries: boolean;
        addressBookType: number;
        updatedSince?: string;
        searchString?: string;
      };
    },
  ): Promise<{
    lastPollTime?: string;
    addressBooks?: Array<{
      dynamicaddressbook?: Record<string, any>;
      standardaddressbook?: Record<string, any>;
    }>;
  }> {
    const path = `/agents/${encodeURIComponent(String(agentId))}/address-books`;
    return this.client.get<{
      lastPollTime?: string;
      addressBooks?: Array<{
        dynamicaddressbook?: Record<string, any>;
        standardaddressbook?: Record<string, any>;
      }>;
    }>(path, options);
  }

  /**
   * Returns Address Books for a Campaign
   * GET /campaigns/{campaignId}/address-books
   */
  public async addressBookForCampaign(
    campaignId: number,
    options?: RequestOptions & { query?: { includeEntries: boolean } },
  ): Promise<AdminAddressbook_getCampaignAddressBooksResponse> {
    const path = `/campaigns/${encodeURIComponent(String(campaignId))}/address-books`;
    return this.client.get<AdminAddressbook_getCampaignAddressBooksResponse>(path, options);
  }

  /**
   *  Returns Address Books for a Skill
   * GET /skills/{skillId}/address-books
   */
  public async addressBookForSkill(
    skillId: number,
    options?: RequestOptions,
  ): Promise<AdminAddressbook_getSkillAddressBooksResponse> {
    const path = `/skills/${encodeURIComponent(String(skillId))}/address-books`;
    return this.client.get<AdminAddressbook_getSkillAddressBooksResponse>(path, options);
  }

  /**
   * Returns Address Books for a Team
   * GET /teams/{teamId}/address-books
   */
  public async addressBooksTeam(
    teamId: number,
    options?: RequestOptions,
  ): Promise<AdminAddressbook_getTeamAddressBooksResponse> {
    const path = `/teams/${encodeURIComponent(String(teamId))}/address-books`;
    return this.client.get<AdminAddressbook_getTeamAddressBooksResponse>(path, options);
  }
}
