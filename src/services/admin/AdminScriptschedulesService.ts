import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class AdminScriptschedulesService {
  constructor(private client: HttpClient) {}

  /**
   * Returns a list of paginated Script Schedules
   * GET /script-schedules
   */
  public async getScriptSchedules(options?: RequestOptions & { query?: { isActive?: boolean; searchString: string; fields?: string; top?: number; skip?: number; orderBy?: string; } }): Promise<{ businessUnitId?: number; totalRecords?: number; scriptSchedules?: Array<{ id?: number; name?: string; scheduleType?: number; lastRunTime?: string; nextRunTime?: string; state?: number; nextAttemptRunTime?: string; status?: boolean; }>; }> {
    const path = `/script-schedules`;
    return this.client.get<{ businessUnitId?: number; totalRecords?: number; scriptSchedules?: Array<{ id?: number; name?: string; scheduleType?: number; lastRunTime?: string; nextRunTime?: string; state?: number; nextAttemptRunTime?: string; status?: boolean; }>; }>(path, options);
  }

  /**
   * Get Unavailable Code Details By Id
   * GET /script-schedules/{scriptScheduleId}
   */
  public async getScriptSchedulesId(scriptScheduleId: number, options?: RequestOptions): Promise<{ scriptSchedule?: { id?: number; busNo?: number; skill?: number; name?: string; parameters?: Array<string>; script?: string; status?: boolean; state?: number; lastRunTime?: string; nextRunTime?: string; scheduleType?: number; startDate?: string; ends?: number; endDate?: string; occurrencesRemaining?: number; timeOut?: number; recursType?: number; everyXDays?: number; everyXWeeks?: number; weeklyDays?: number; dayOfMonth?: number; everyXmonth?: number; ordinalMonthWeek?: number; monthWeekDays?: number; nextAttemptRunTime?: string; attemptCount?: number; }; }> {
    const path = `/script-schedules/${encodeURIComponent(String(scriptScheduleId))}`;
    return this.client.get<{ scriptSchedule?: { id?: number; busNo?: number; skill?: number; name?: string; parameters?: Array<string>; script?: string; status?: boolean; state?: number; lastRunTime?: string; nextRunTime?: string; scheduleType?: number; startDate?: string; ends?: number; endDate?: string; occurrencesRemaining?: number; timeOut?: number; recursType?: number; everyXDays?: number; everyXWeeks?: number; weeklyDays?: number; dayOfMonth?: number; everyXmonth?: number; ordinalMonthWeek?: number; monthWeekDays?: number; nextAttemptRunTime?: string; attemptCount?: number; }; }>(path, options);
  }

  /**
   * Returns a list of audit entries for script schedules
   * GET /script-schedules/{scriptScheduleId}/audit-history
   */
  public async getScriptSchedulesIdAuditHistory(scriptScheduleId: number, options?: RequestOptions & { query?: { searchString: string; fields?: string; top?: number; skip?: number; orderBy?: string; startDate?: string; endDate?: string; } }): Promise<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryEntries?: Array<{ columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }> {
    const path = `/script-schedules/${encodeURIComponent(String(scriptScheduleId))}/audit-history`;
    return this.client.get<{ businessUnitId?: number; createdBy?: string; modifiedBy?: string; createdDate?: string; modifiedDate?: string; totalRecords?: number; auditHistoryEntries?: Array<{ columnName?: string; newValue?: string; oldValue?: string; date?: string; modifiedBy?: number; modifiedByName?: string; }>; }>(path, options);
  }

  /**
   * Returns a list of Scripts to assign to the Script Scheduler
   * GET /script-schedules/scripts
   */
  public async getScriptSchedulesScripts(options?: RequestOptions & { query?: { searchString: string; fields?: string; top?: number; skip?: number; orderBy?: string; } }): Promise<{ businessUnitId?: number; totalRecords?: number; scripts?: Array<{ id?: number; name?: string; mediaTypeId?: number; }>; }> {
    const path = `/script-schedules/scripts`;
    return this.client.get<{ businessUnitId?: number; totalRecords?: number; scripts?: Array<{ id?: number; name?: string; mediaTypeId?: number; }>; }>(path, options);
  }

  /**
   * Returns a list of Skills to assign to the Script Scheduler
   * GET /script-schedules/skills
   */
  public async getScriptSchedulesSkills(options?: RequestOptions & { query?: { searchString: string; fields?: string; top?: number; skip?: number; orderBy?: string; } }): Promise<{ businessUnitId?: number; totalRecords?: number; skills?: Array<{ id?: number; name?: string; }>; }> {
    const path = `/script-schedules/skills`;
    return this.client.get<{ businessUnitId?: number; totalRecords?: number; skills?: Array<{ id?: number; name?: string; }>; }>(path, options);
  }
}
