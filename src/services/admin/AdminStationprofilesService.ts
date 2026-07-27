import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface AdminStationprofiles_stationProfileRequestBody { stationProfileName?: string; stationTimeout?: number; }

export class AdminStationprofilesService {
  constructor(private client: HttpClient) {}

  /**
   * Returns a list of paginated Station Profiles
   * GET /station-profiles
   */
  public async getStationProfiles(options?: RequestOptions & { query?: { searchString?: string; fields?: string; skip?: number; top?: number; orderBy?: string; } }): Promise<{ businessUnitId?: number; totalRecords?: number; stationProfiles?: Array<{ stationProfileId?: number; stationProfileName?: string; stationTimeout?: number; }>; }> {
    const path = `/station-profiles`;
    return this.client.get<{ businessUnitId?: number; totalRecords?: number; stationProfiles?: Array<{ stationProfileId?: number; stationProfileName?: string; stationTimeout?: number; }>; }>(path, options);
  }

  /**
   * Creates a Station Profile
   * POST /station-profiles
   */
  public async postStationProfiles(data: AdminStationprofiles_stationProfileRequestBody, options?: RequestOptions): Promise<{ stationProfileId?: number; }> {
    const path = `/station-profiles`;
    return this.client.post<{ stationProfileId?: number; }>(path, data, options);
  }

  /**
   * Get Station Profile Details By Id
   * GET /station-profiles/{stationProfileId}
   */
  public async getStationProfilesId(stationProfileId: number, options?: RequestOptions): Promise<{ stationProfile?: { stationProfileId?: number; stationProfileName?: string; stationTimeout?: number; stationProfileIsInUse?: boolean; }; }> {
    const path = `/station-profiles/${encodeURIComponent(String(stationProfileId))}`;
    return this.client.get<{ stationProfile?: { stationProfileId?: number; stationProfileName?: string; stationTimeout?: number; stationProfileIsInUse?: boolean; }; }>(path, options);
  }

  /**
   * Updates an existing Station Profile
   * PUT /station-profiles/{stationProfileId}
   */
  public async putStationProfilesId(stationProfileId: number, data: AdminStationprofiles_stationProfileRequestBody, options?: RequestOptions): Promise<any> {
    const path = `/station-profiles/${encodeURIComponent(String(stationProfileId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Delete a Station Profile
   * DELETE /station-profiles/{stationProfileId}
   */
  public async deleteStationProfilesId(stationProfileId: number, options?: RequestOptions): Promise<any> {
    const path = `/station-profiles/${encodeURIComponent(String(stationProfileId))}`;
    return this.client.delete<any>(path, options);
  }

  /**
   * Returns a list of audit entries for a Station Profile
   * GET /station-profiles/{stationProfileId}/audit-history
   */
  public async getStationProfilesIdAuditHistory(stationProfileId: number, options?: RequestOptions & { query?: { searchString: string; fields?: string; top?: number; skip?: number; orderBy?: string; startDate?: string; endDate?: string; } }): Promise<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryEntries?: Array<{ auditHistoryID?: number; columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }> {
    const path = `/station-profiles/${encodeURIComponent(String(stationProfileId))}/audit-history`;
    return this.client.get<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryEntries?: Array<{ auditHistoryID?: number; columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }>(path, options);
  }
}
