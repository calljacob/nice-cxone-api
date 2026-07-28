import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class AdminWorkflowdataService {
  constructor(private client: HttpClient) {}

  /**
   * Get a list of Workflow Data Profiles based on the active flag
   * GET /workflow-data/list/{activeFlag}
   */
  public async listWorkflowData(
    activeFlag: number,
    options?: RequestOptions,
  ): Promise<{
    profile?: { ProfileName?: string; Description?: string; ProfileID?: number };
    data?: { Value?: string; Visible?: string; Type?: string; Ref?: string };
  }> {
    const path = `/workflow-data/list/${encodeURIComponent(String(activeFlag))}`;
    return this.client.get<{
      profile?: { ProfileName?: string; Description?: string; ProfileID?: number };
      data?: { Value?: string; Visible?: string; Type?: string; Ref?: string };
    }>(path, options);
  }

  /**
   * Returns a list of paginated Workflow Data list
   * GET /workflow-data
   */
  public async getWorkflowData(
    options?: RequestOptions & {
      query?: {
        isActive?: boolean;
        searchString?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
      };
    },
  ): Promise<{
    businessUnitId?: number;
    totalRecords?: number;
    profiles?: Array<{ profile?: Record<string, any>; data?: string }>;
  }> {
    const path = `/workflow-data`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      profiles?: Array<{ profile?: Record<string, any>; data?: string }>;
    }>(path, options);
  }

  /**
   * Create a new Workflow Data Profile
   * POST /workflow-data
   */
  public async createWorkflowData(
    data?: {
      profile?: { ProfileName?: string; Description?: string; ProfileID?: number };
      data?: { date?: { Value?: Array<string>; Visible?: string; Type?: string; Ref?: string } };
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/workflow-data`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Update a Workflow Data Profile
   * PUT /workflow-data
   */
  public async updateWorkflowData(
    data?: {
      profile?: { ProfileName?: string; Description?: string; ProfileID?: number };
      data?: { date?: { Value?: Array<string>; Visible?: string; Type?: string; Ref?: string } };
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/workflow-data`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Returns a list of paginated Workflow Data Identity list
   * GET /workflow-data/identities
   */
  public async getWorkflowDataIdentities(
    options?: RequestOptions & {
      query?: {
        isActive?: boolean;
        searchString?: string;
        skip?: number;
        top?: number;
        orderBy?: string;
      };
    },
  ): Promise<{
    businessUnitId?: number;
    totalRecords?: number;
    workflowDataIdentities?: Array<{ wfdId?: number; wfdName?: string }>;
  }> {
    const path = `/workflow-data/identities`;
    return this.client.get<{
      businessUnitId?: number;
      totalRecords?: number;
      workflowDataIdentities?: Array<{ wfdId?: number; wfdName?: string }>;
    }>(path, options);
  }

  /**
   * This method returns a Workflow Data Profile identified by its id.
   * GET /workflow-data/{workFlowDataId}
   */
  public async getWorkflowDataId(
    workFlowDataId: number,
    options?: RequestOptions,
  ): Promise<{
    profile?: {
      profileId?: number;
      profileName?: string;
      description?: string;
      isActive?: boolean;
      businessUnitId?: string;
    };
    data?: string;
  }> {
    const path = `/workflow-data/${encodeURIComponent(String(workFlowDataId))}`;
    return this.client.get<{
      profile?: {
        profileId?: number;
        profileName?: string;
        description?: string;
        isActive?: boolean;
        businessUnitId?: string;
      };
      data?: string;
    }>(path, options);
  }

  /**
   * Deactivate a Workflow Data Profile
   * PUT /workflow-data/{workflowDataId}/deactivate
   */
  public async deactivateWorkflowData(
    workflowDataId: number,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/workflow-data/${encodeURIComponent(String(workflowDataId))}/deactivate`;
    return this.client.put<any>(path, undefined, options);
  }

  /**
   * Activate a Workflow Data Profile
   * PUT /workflow-data/{workflowDataId}/activate
   */
  public async activateWorkflowData(
    workflowDataId: number,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/workflow-data/${encodeURIComponent(String(workflowDataId))}/activate`;
    return this.client.put<any>(path, undefined, options);
  }
}
