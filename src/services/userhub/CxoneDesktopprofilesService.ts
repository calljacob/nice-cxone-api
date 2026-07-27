import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class CxoneDesktopprofilesService {
  constructor(private client: HttpClient) {}

  /**
   * Returns agent profile details for CMA
   * GET /agent-profiles/v1/assigned
   */
  public async getAgentProfilesV1Assigned(options?: RequestOptions): Promise<{ agentProfileId?: number; agentProfileConfigurations?: Array<{ subCategoryId?: number; subCategoryName?: string; elementId?: string; value?: Array<string>; }>; }> {
    const path = `/agent-profiles/v1/assigned`;
    return this.client.get<{ agentProfileId?: number; agentProfileConfigurations?: Array<{ subCategoryId?: number; subCategoryName?: string; elementId?: string; value?: Array<string>; }>; }>(path, options);
  }

  /**
   * Returns Assignable Configurations for an Agent Profile
   * GET /agent-profiles/v1/configurations
   */
  public async assignableConfigurations(options?: RequestOptions): Promise<Array<{ subCateogryId?: number; categoryId?: number; categoryName?: string; name?: string; elements?: Array<Record<string, any>>; }>> {
    const path = `/agent-profiles/v1/configurations`;
    return this.client.get<Array<{ subCateogryId?: number; categoryId?: number; categoryName?: string; name?: string; elements?: Array<Record<string, any>>; }>>(path, options);
  }

  /**
   * Returns all Agent Profiles for the search filters provided
   * POST /agent-profiles/v1/profiles/search
   */
  public async postAgentProfilesV1ProfilesSearch(data: { fields?: Array<string>; filter?: { agentProfileName?: Array<string>; status?: Array<string>; }; orderBy?: string; skip?: number; top?: number; }, options?: RequestOptions): Promise<{ totalRecords?: number; agentProfiles?: Array<{ agentProfileId?: number; busId?: number; name?: string; description?: string; status?: string; totalAssignedTeams?: number; archive?: string; }>; skip?: number; top?: number; }> {
    const path = `/agent-profiles/v1/profiles/search`;
    return this.client.post<{ totalRecords?: number; agentProfiles?: Array<{ agentProfileId?: number; busId?: number; name?: string; description?: string; status?: string; totalAssignedTeams?: number; archive?: string; }>; skip?: number; top?: number; }>(path, data, options);
  }

  /**
   * To get agent profile details by ID.
   * GET /agent-profiles/v1/profiles/{id}
   */
  public async getAgentProfilesV1ProfilesId(id: number, options?: RequestOptions): Promise<{ agentProfileId?: number; agentProfileName?: string; agentProfileDescription?: string; status?: string; agentProfileConfigurations?: Array<{ subCategoryId?: number; subCategoryName?: string; value?: Array<string>; elementId?: string; }>; }> {
    const path = `/agent-profiles/v1/profiles/${encodeURIComponent(String(id))}`;
    return this.client.get<{ agentProfileId?: number; agentProfileName?: string; agentProfileDescription?: string; status?: string; agentProfileConfigurations?: Array<{ subCategoryId?: number; subCategoryName?: string; value?: Array<string>; elementId?: string; }>; }>(path, options);
  }

  /**
   * To update a agent profile.
   * PUT /agent-profiles/v1/profiles/{id}
   */
  public async putAgentProfilesV1ProfilesId(id: number, data: { agentProfileName?: string; agentProfileDescription?: string; agentProfileConfigurations?: Array<{ subCategoryId?: number; elementId?: string; value?: Array<string>; }>; }, options?: RequestOptions): Promise<{ success?: boolean; message?: string; }> {
    const path = `/agent-profiles/v1/profiles/${encodeURIComponent(String(id))}`;
    return this.client.put<{ success?: boolean; message?: string; }>(path, data, options);
  }

  /**
   * Returns all Desktop Profiles
   * GET /agent-profiles/v1/profiles
   */
  public async agentProfile(options?: RequestOptions & { query?: { skip?: number; top?: number; orderBy?: string; fields?: string; } }): Promise<{ totalRecords?: number; agentProfiles?: Array<{ agentProfileId?: number; busId?: number; name?: string; description?: string; status?: string; totalAssignedTeams?: number; }>; _links?: { self?: string; next?: string; previous?: string; }; }> {
    const path = `/agent-profiles/v1/profiles`;
    return this.client.get<{ totalRecords?: number; agentProfiles?: Array<{ agentProfileId?: number; busId?: number; name?: string; description?: string; status?: string; totalAssignedTeams?: number; }>; _links?: { self?: string; next?: string; previous?: string; }; }>(path, options);
  }

  /**
   * To create a new agent profile.
   * POST /agent-profiles/v1/profiles
   */
  public async postAgentProfilesV1Profiles(data: { agentProfileName?: string; agentProfileDescription?: string; agentProfileConfigurations?: Array<{ subCategoryId?: number; elementId?: string; value?: Array<string>; }>; }, options?: RequestOptions): Promise<{ success?: boolean; message?: string; agentProfileId?: number; agentProfileName?: string; }> {
    const path = `/agent-profiles/v1/profiles`;
    return this.client.post<{ success?: boolean; message?: string; agentProfileId?: number; agentProfileName?: string; }>(path, data, options);
  }

  /**
   * To update the status of agent profile.
   * PUT /agent-profiles/v1/profiles/status
   */
  public async putAgentProfilesV1ProfilesStatus(data: { agentProfileId?: number; status?: string; }, options?: RequestOptions): Promise<{ success?: boolean; message?: string; }> {
    const path = `/agent-profiles/v1/profiles/status`;
    return this.client.put<{ success?: boolean; message?: string; }>(path, data, options);
  }

  /**
   * Get Teams assigned to an Agent Profile
   * GET /agent-profiles/v1/profiles/{id}/teams
   */
  public async getAgentProfilesV1ProfilesIdTeams(id: number, options?: RequestOptions): Promise<{ agentProfileId?: number; teams?: Array<{ teamUuid?: string; teamId?: number; teamName?: string; status?: string; agentCount?: number; }>; }> {
    const path = `/agent-profiles/v1/profiles/${encodeURIComponent(String(id))}/teams`;
    return this.client.get<{ agentProfileId?: number; teams?: Array<{ teamUuid?: string; teamId?: number; teamName?: string; status?: string; agentCount?: number; }>; }>(path, options);
  }

  /**
   * Assigs team to an Agent Profile
   * POST /agent-profiles/v1/profiles/{id}/teams
   */
  public async postAgentProfilesV1ProfilesIdTeams(id: number, data: { teamId?: Array<number>; }, options?: RequestOptions): Promise<{ success?: boolean; message?: string; }> {
    const path = `/agent-profiles/v1/profiles/${encodeURIComponent(String(id))}/teams`;
    return this.client.post<{ success?: boolean; message?: string; }>(path, data, options);
  }

  /**
   * Removes the assigned team(s) to an Agent Profile.
   * DELETE /agent-profiles/v1/profiles/{id}/teams
   */
  public async deleteAgentProfilesV1ProfilesIdTeams(id: number, data: { teamId?: Array<number>; }, options?: RequestOptions): Promise<{ success?: boolean; message?: string; }> {
    const path = `/agent-profiles/v1/profiles/${encodeURIComponent(String(id))}/teams`;
    return this.client.delete<{ success?: boolean; message?: string; }>(path, data, options);
  }

  /**
   * Returns all the team details
   * POST /agent-profiles/v1/profiles/teams/search
   */
  public async postAgentProfilesV1ProfilesTeamsSearch(data: { fields?: Array<string>; filter?: { teamName?: Array<string>; status?: Array<string>; teamUuids?: Array<string>; }; operations?: { teamUuid?: string; }; orderBy?: string; skip?: number; top?: number; }, options?: RequestOptions): Promise<{ totalRecords?: number; teams?: Array<{ teamUuid?: string; teamId?: number; teamName?: string; status?: string; agentCount?: number; agentProfileName?: number; }>; skip?: number; top?: number; }> {
    const path = `/agent-profiles/v1/profiles/teams/search`;
    return this.client.post<{ totalRecords?: number; teams?: Array<{ teamUuid?: string; teamId?: number; teamName?: string; status?: string; agentCount?: number; agentProfileName?: number; }>; skip?: number; top?: number; }>(path, data, options);
  }
}
