import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class AdminUnavailablecodesService {
  constructor(private client: HttpClient) {}

  /**
   *   Returns a list of audit entries for an unavailable code
   * GET /unavailable-codes/{unavailableCodeId}/audit-history
   */
  public async getUnavailableCodesIdAuditHistory(
    unavailableCodeId: number,
    options?: RequestOptions & {
      query?: {
        searchString: string;
        fields?: string;
        top?: number;
        skip?: number;
        orderBy?: string;
        startDate?: string;
        endDate?: string;
      };
    },
  ): Promise<{
    businessUnitId?: number;
    createdBy?: string;
    modifiedBy?: string;
    createdDate?: string;
    modifiedDate?: string;
    totalRecords?: number;
    auditHistoryEntries?: Array<{
      auditHistoryID?: number;
      columnName?: string;
      newValue?: string;
      oldValue?: string;
      date?: string;
      modifiedBy?: number;
      modifiedByName?: string;
    }>;
  }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/audit-history`;
    return this.client.get<{
      businessUnitId?: number;
      createdBy?: string;
      modifiedBy?: string;
      createdDate?: string;
      modifiedDate?: string;
      totalRecords?: number;
      auditHistoryEntries?: Array<{
        auditHistoryID?: number;
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
   *  Change status of existing Unavailable Code By Id
   * PATCH /unavailable-codes/{unavailableCodeId}/status
   */
  public async patchStatusByUnavailableCodesId(
    unavailableCodeId: number,
    options?: RequestOptions & { query?: { isActive: boolean } },
  ): Promise<any> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/status`;
    return this.client.patch<any>(path, undefined, options);
  }

  /**
   *  Returns a list of assigned teams to an unavailable code
   * GET /unavailable-codes/{unavailableCodeId}/teams
   */
  public async getUnavailableCodesIdTeams(
    unavailableCodeId: number,
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
    teams?: Array<{ id?: number; name?: string; uuid?: string }>;
  }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/teams`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      teams?: Array<{ id?: number; name?: string; uuid?: string }>;
    }>(path, options);
  }

  /**
   *  Assign teams unassigned to an unavailable code
   * POST /unavailable-codes/{unavailableCodeId}/teams
   */
  public async postUnavailableCodesIdTeams(
    unavailableCodeId: number,
    data?: { teams: Array<{ id: string }> },
    options?: RequestOptions & { query?: { addAll: boolean } },
  ): Promise<{
    assignedTeams?: Array<{ teamId?: number }>;
    invalidTeams?: Array<{ teamId?: number }>;
  }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/teams`;
    return this.client.post<{
      assignedTeams?: Array<{ teamId?: number }>;
      invalidTeams?: Array<{ teamId?: number }>;
    }>(path, data, options);
  }

  /**
   * Assign Unavailable Code to Teams
   * PUT /unavailable-codes/{unavailableCodeId}/teams
   */
  public async putUnavailableCodesIdTeams(
    unavailableCodeId: number,
    data?: { teams: Array<{ teamId?: string }> },
    options?: RequestOptions & { query?: { securityUser?: string } },
  ): Promise<{ error?: string; error_Description?: string }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/teams`;
    return this.client.put<{ error?: string; error_Description?: string }>(path, data, options);
  }

  /**
   *  Unassign teams assigned to an unavailable code
   * DELETE /unavailable-codes/{unavailableCodeId}/teams
   */
  public async deleteUnavailableCodesIdTeams(
    unavailableCodeId: number,
    data?: { teams: Array<{ id: string }> },
    options?: RequestOptions & { query?: { removeAll: boolean } },
  ): Promise<{
    unassignedTeams?: Array<{ teamId?: number }>;
    invalidTeams?: Array<{ teamId?: number }>;
  }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/teams`;
    return this.client.delete<{
      unassignedTeams?: Array<{ teamId?: number }>;
      invalidTeams?: Array<{ teamId?: number }>;
    }>(path, data, options);
  }

  /**
   *   Returns a list of unassigned teams to an unavailable code
   * GET /unavailable-codes/{unavailableCodeId}/teams/unassigned
   */
  public async getUnavailableCodesIdTeamsUnassigned(
    unavailableCodeId: number,
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
    teams?: Array<{ id?: number; name?: string; uuid?: string }>;
  }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}/teams/unassigned`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      teams?: Array<{ id?: number; name?: string; uuid?: string }>;
    }>(path, options);
  }

  /**
   * Get Unavailable Code Details By Id
   * GET /unavailable-codes/{unavailableCodeId}
   */
  public async getUnavailableCodesId(
    unavailableCodeId: number,
    options?: RequestOptions,
  ): Promise<{
    unavailableCode?: {
      id?: number;
      name?: string;
      isActive?: boolean;
      isACW?: boolean;
      notes?: string;
      agentTimeout?: number;
    };
  }> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}`;
    return this.client.get<{
      unavailableCode?: {
        id?: number;
        name?: string;
        isActive?: boolean;
        isACW?: boolean;
        notes?: string;
        agentTimeout?: number;
      };
    }>(path, options);
  }

  /**
   * Updates an existing Unavailable Code record
   * PUT /unavailable-codes/{unavailableCodeId}
   */
  public async putUnavailableCodesId(
    unavailableCodeId: number,
    data: {
      name: string;
      isACW?: boolean;
      agentTimeout?: number;
      isActive?: boolean;
      notes?: string;
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/unavailable-codes/${encodeURIComponent(String(unavailableCodeId))}`;
    return this.client.put<any>(path, data, options);
  }
}
