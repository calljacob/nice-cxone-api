import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface CxoneExportapi_DateRange { startDate: string; endDate: string; }

export interface CxoneExportapi_CopilotFilters { Team?: Array<string>; Skill?: Array<string>; CopilotProfileId?: Array<string>; AgentNumber?: Array<string>; }

export interface CxoneExportapi_CopilotAQFilters { CopilotProfileId?: Array<string>; AgentNumber?: Array<string>; }

export type CxoneExportapi_CopilotKBTableRequest = { dateRange: CxoneExportapi_DateRange; timeZone: string; channels?: Array<"digital" | "voice">; filters?: CxoneExportapi_CopilotFilters; };

export interface CxoneExportapi_CopilotAQTableRequest { dateRange: CxoneExportapi_DateRange; timeZone: string; filters?: CxoneExportapi_CopilotAQFilters; }

export type CxoneExportapi_CopilotASTableRequest = { dateRange: CxoneExportapi_DateRange; timeZone: string; channels?: Array<"digital" | "voice">; filters?: CxoneExportapi_CopilotFilters; };

export interface CxoneExportapi_AutopilotKnowledgeGRTableRequest { dateRange: CxoneExportapi_DateRange; timeZone: string; }

export interface CxoneExportapi_AutopilotGRTableRequest { dateRange: CxoneExportapi_DateRange; timeZone: string; }

export interface CxoneExportapi_UnauthorizedErrorResponse { timestamp?: string; status?: number; error?: string; path?: string; }

export interface CxoneExportapi_ErrorResponse { message?: string; statusCode?: number; traceId?: string; exception?: { message?: string; statusCode?: number; }; }

export class CxoneExportapiService {
  constructor(private client: HttpClient) {}

  /**
   * Export Copilot Knowledge Base table data
   * POST /observabilitydashboard/v2/tables/Copilot/KBTable/export-data
   */
  public async exportCopilotKBTable(data: CxoneExportapi_CopilotKBTableRequest, options?: RequestOptions): Promise<any> {
    const path = `/observabilitydashboard/v2/tables/Copilot/KBTable/export-data`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Export Copilot Agent Query table data
   * POST /observabilitydashboard/v2/tables/Copilot/AQTable/export-data
   */
  public async exportCopilotAQTable(data: CxoneExportapi_CopilotAQTableRequest, options?: RequestOptions): Promise<any> {
    const path = `/observabilitydashboard/v2/tables/Copilot/AQTable/export-data`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Export Copilot Auto Summary table data
   * POST /observabilitydashboard/v2/tables/Copilot/ASTable/export-data
   */
  public async exportCopilotASTable(data: CxoneExportapi_CopilotASTableRequest, options?: RequestOptions): Promise<any> {
    const path = `/observabilitydashboard/v2/tables/Copilot/ASTable/export-data`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Export Autopilot Knowledge Generative Response table data
   * POST /observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data
   */
  public async exportAutopilotKnowledgeGRTable(data: CxoneExportapi_AutopilotKnowledgeGRTableRequest, options?: RequestOptions): Promise<any> {
    const path = `/observabilitydashboard/v2/tables/AutopilotKnowledge/GRTable/export-data`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Export Autopilot Generative Response table data
   * POST /observabilitydashboard/v2/tables/autopilot/GRTable/export-data
   */
  public async exportAutopilotGRTable(data: CxoneExportapi_AutopilotGRTableRequest, options?: RequestOptions): Promise<any> {
    const path = `/observabilitydashboard/v2/tables/autopilot/GRTable/export-data`;
    return this.client.post<any>(path, data, options);
  }
}
