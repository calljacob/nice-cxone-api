import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class AdminStationsService {
  constructor(private client: HttpClient) {}

  /**
   * Get the list of stations paginated
   * GET /stations
   */
  public async getStations(
    options?: RequestOptions & {
      query?: {
        searchString?: string;
        fields?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
        isActive?: boolean;
      };
    },
  ): Promise<{
    businessUnitId?: number;
    totalRecords?: number;
    activeStationsCount?: number;
    activeStationsLimit?: number;
    stations?: Array<{
      id?: number;
      name?: string;
      phoneNumber?: string;
      callerId?: string;
      isActive?: boolean;
      stationProfileId?: number;
      stationProfileName?: string;
    }>;
  }> {
    const path = `/stations`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      activeStationsCount?: number;
      activeStationsLimit?: number;
      stations?: Array<{
        id?: number;
        name?: string;
        phoneNumber?: string;
        callerId?: string;
        isActive?: boolean;
        stationProfileId?: number;
        stationProfileName?: string;
      }>;
    }>(path, options);
  }

  /**
   * Create an station
   * POST /stations
   */
  public async createStation(
    data: {
      stationName: string;
      phoneNumber: string;
      callerId: string;
      stationProfileId: number;
      isActive: boolean;
      notes?: string;
      emailRefusalTimeout?: number;
      documentRefusalTimeout?: number;
      chatRefusalTimeout?: number;
      phoneCallRefusalTimeout?: number;
      voiceMailRefusalTimeout?: number;
      workItemRefusalTimeout?: number;
      machineIdentifier?: string;
    },
    options?: RequestOptions,
  ): Promise<{ id?: number; activeStationCount?: number; stationLimit?: number }> {
    const path = `/stations`;
    return this.client.post<{ id?: number; activeStationCount?: number; stationLimit?: number }>(
      path,
      data,
      options,
    );
  }

  /**
   * Get an station detail by id
   * GET /stations/{stationId}
   */
  public async getStationById(
    stationId: number,
    options?: RequestOptions,
  ): Promise<{
    stationId?: number;
    stationName?: string;
    phoneNumber?: string;
    callerId?: string;
    stationProfileId?: number;
    stationProfileName?: string;
    notes?: string;
    isActive?: boolean;
    emailRefusalTimeout?: number;
    documentRefusalTimeout?: number;
    chatRefusalTimeout?: number;
    phoneCallRefusalTimeout?: number;
    voiceMailRefusalTimeout?: number;
    workItemRefusalTimeout?: number;
    machineIdentifier?: string;
  }> {
    const path = `/stations/${encodeURIComponent(String(stationId))}`;
    return this.client.get<{
      stationId?: number;
      stationName?: string;
      phoneNumber?: string;
      callerId?: string;
      stationProfileId?: number;
      stationProfileName?: string;
      notes?: string;
      isActive?: boolean;
      emailRefusalTimeout?: number;
      documentRefusalTimeout?: number;
      chatRefusalTimeout?: number;
      phoneCallRefusalTimeout?: number;
      voiceMailRefusalTimeout?: number;
      workItemRefusalTimeout?: number;
      machineIdentifier?: string;
    }>(path, options);
  }

  /**
   * Update an station
   * PUT /stations/{stationId}
   */
  public async updateStation(
    stationId: number,
    data: {
      stationName: string;
      phoneNumber: string;
      callerId: string;
      stationProfileId: number;
      isActive: boolean;
      notes?: string;
      emailRefusalTimeout?: number;
      documentRefusalTimeout?: number;
      chatRefusalTimeout?: number;
      phoneCallRefusalTimeout?: number;
      voiceMailRefusalTimeout?: number;
      workItemRefusalTimeout?: number;
      machineIdentifier?: string;
    },
    options?: RequestOptions,
  ): Promise<{ activeStationCount?: number; stationLimit?: number }> {
    const path = `/stations/${encodeURIComponent(String(stationId))}`;
    return this.client.put<{ activeStationCount?: number; stationLimit?: number }>(
      path,
      data,
      options,
    );
  }

  /**
   * Get station audit history paginated
   * GET /stations/{stationId}/audit-history
   */
  public async getStationsAuditHistory(
    stationId: number,
    options?: RequestOptions & {
      query?: {
        searchString?: string;
        fields?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
        startDate?: string;
        endDate?: string;
      };
    },
  ): Promise<{
    businessUnitId?: number;
    totalRecords?: number;
    modifiedDate?: string;
    createdDate?: string;
    modifiedBy?: string;
    createdBy?: string;
    auditHistoryEntries?: Array<{
      auditHistoryId?: number;
      columnName?: string;
      newValue?: string;
      oldValue?: string;
      date?: string;
      modifiedBy?: number;
      modifiedByName?: string;
    }>;
  }> {
    const path = `/stations/${encodeURIComponent(String(stationId))}/audit-history`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      modifiedDate?: string;
      createdDate?: string;
      modifiedBy?: string;
      createdBy?: string;
      auditHistoryEntries?: Array<{
        auditHistoryId?: number;
        columnName?: string;
        newValue?: string;
        oldValue?: string;
        date?: string;
        modifiedBy?: number;
        modifiedByName?: string;
      }>;
    }>(path, options);
  }

  /**
   * Get station login history paginated
   * GET /stations/{stationId}/login-history
   */
  public async getStationsLoginHistory(
    stationId: number,
    options?: RequestOptions & {
      query?: {
        searchString?: string;
        fields?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
      };
    },
  ): Promise<{
    businessUnitId?: number;
    totalRecords?: number;
    loginHistoryEntries?: Array<{
      agentNo?: number;
      agentName?: string;
      PhoneNo?: string;
      callerId?: string;
      loginDate?: string;
    }>;
  }> {
    const path = `/stations/${encodeURIComponent(String(stationId))}/login-history`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      loginHistoryEntries?: Array<{
        agentNo?: number;
        agentName?: string;
        PhoneNo?: string;
        callerId?: string;
        loginDate?: string;
      }>;
    }>(path, options);
  }

  /**
   * Update an station status
   * PATCH /stations/{stationId}/status
   */
  public async updateStationStatus(
    stationId: number,
    data: { isActive: boolean },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/stations/${encodeURIComponent(String(stationId))}/status`;
    return this.client.patch<any>(path, data, options);
  }
}
