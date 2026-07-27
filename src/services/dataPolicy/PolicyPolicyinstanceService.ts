import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface PolicyPolicyinstance_Criteria { fieldId?: string; operator?: string; range?: PolicyPolicyinstance_Range; value?: string; values?: Array<string>; }

export type PolicyPolicyinstance_PolicyCreationRequest = { policyName: string; policyType: string; entityType: "MASTER_CONTACT" | "SEGMENT"; description?: string; criteria: Array<PolicyPolicyinstance_Criteria>; recurring?: boolean; recurrenceConfig?: PolicyPolicyinstance_RecurrenceConfig; retentionValueInDays?: string; applyToMediaTypes?: "VOICE" | "SCREEN"; };

export interface PolicyPolicyinstance_Range { from?: string; to?: string; }

export type PolicyPolicyinstance_RecurrenceConfig = { frequency?: "DAILY" | "WEEKLY" | "MONTHLY"; recurrenceEndType?: "DATE" | "NO_OF_OCCURRENCES" | "NEVER"; recurrenceEndDate?: string; totalNoOfRecurrences?: number; dayOfWeek?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"; dayOfMonth?: number; };

export type PolicyPolicyinstance_RecurrenceConfigOutput = { frequency?: "DAILY" | "WEEKLY" | "MONTHLY"; recurrenceEndType?: "DATE" | "NO_OF_OCCURRENCES" | "NEVER"; recurrenceEndDate?: string; totalNoOfRecurrences?: number; dayOfWeek?: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"; dayOfMonth?: number; recurrenceStatus?: string; recurrenceTime?: string; };

export interface PolicyPolicyinstance_PolicyCreationResponse { policyId?: string; entityType?: string; applyToMediaTypes?: Array<string>; scheduling?: PolicyPolicyinstance_Schedule; recurring?: boolean; }

export interface PolicyPolicyinstance_Schedule { executeNow?: boolean; }

export interface PolicyPolicyinstance_PolicyFilterRequest { fieldId?: string; operator?: string; value?: string; values?: Array<string>; }

export interface PolicyPolicyinstance_PolicySearchRequest { pagination?: PolicyPolicyinstance_SearchPaginationRequest; filters: Array<PolicyPolicyinstance_PolicyFilterRequest>; orderBy?: PolicyPolicyinstance_SearchSortRequest; }

export interface PolicyPolicyinstance_SearchPaginationRequest { skip?: number; top?: number; }

export interface PolicyPolicyinstance_SearchSortRequest { columnName?: string; order?: string; }

export interface PolicyPolicyinstance_PolicyRetrievalResponse { policyId?: string; policyName?: string; initiatorType?: string; policyType?: string; entityType?: string; applyToMediaTypes?: Array<string>; criteria?: Array<PolicyPolicyinstance_Criteria>; schedule?: PolicyPolicyinstance_Schedule; lastModifiedDate?: string; description?: string; recurring?: boolean; recurrenceConfig?: PolicyPolicyinstance_RecurrenceConfigOutput; autoApproveLimit?: number; needsApproval?: boolean; createdBy?: string; creationDate?: string; retentionValueInDays?: string; }

export interface PolicyPolicyinstance_PolicySearchResponse { records?: Array<PolicyPolicyinstance_PolicyRetrievalResponse>; totalCount?: number; skip?: number; }

export type PolicyPolicyinstance_PolicyInstanceRetrievalResponse = { policyId?: string; policyInstanceId?: string; policyName?: string; policyType?: string; entityType?: string; applyToMediaTypes?: Array<string>; retentionValueInDays?: string; status?: "PENDING_APPROVAL" | "SEARCHING" | "APPLYING_ACTION" | "SUCCEEDED" | "PARTIALLY_SUCCEEDED" | "FAILED" | "DECLINED" | "SUCCEEDED_WITH_ZERO_RESULTS" | "SEARCH_FAILED"; declineReason?: string; criteria?: Array<PolicyPolicyinstance_Criteria>; lastModifiedDate?: string; needsApproval?: boolean; resultSummary?: PolicyPolicyinstance_PolicyInstanceResultSummary; enableEvidenceReportDownload?: boolean; evidenceReportStatus?: string; description?: string; creationDate?: string; completionDate?: string; retrievalCompletionDate?: string; approvedDate?: string; approverId?: string; policyInstanceNo?: number; recurring?: boolean; recurrenceConfig?: PolicyPolicyinstance_RecurrenceConfigOutput; autoApproveLimit?: number; createdBy?: string; };

export interface PolicyPolicyinstance_EvidenceReportResponse { "presigned-url"?: string; }

export interface PolicyPolicyinstance_PolicyInstanceSearchResponse { totalRecords?: number; records?: Array<PolicyPolicyinstance_PolicyInstanceRetrievalResponse>; }

export interface PolicyPolicyinstance_ErrorResponse { code?: string; details?: string; hostname?: string; entityType?: string; errors?: Record<string, any>; }

export interface PolicyPolicyinstance_ErrorResponseV1 { message?: string; }

export interface PolicyPolicyinstance_PolicyInstanceResultSummary { successCount?: number; failureCount?: number; partialCount?: number; litigationHoldCount?: number; progress?: number; totalEntities?: number; }

export interface PolicyPolicyinstance_PolicyInstancesActivitySearchRequest { lastEvaluatedKey?: string; filters: Array<{ fieldId?: string; operator?: string; value?: string; }>; }

export interface PolicyPolicyinstance_PolicyInstancesActivitySearchResponse { totalRecords?: number; lastEvaluatedKey?: string; records?: Array<{ policyId?: string; policyInstanceId?: string; policyName?: string; policyType?: string; lastModificationDate?: string; creationDate?: string; status?: string; summaryStatus?: string; completionDate?: string; policyInstanceNo?: number; }>; }

export class PolicyPolicyinstanceService {
  constructor(private client: HttpClient) {}

  /**
   * Create new policy
   * POST /data-policies/v1/policies
   */
  public async createPolicyDefinition(data: PolicyPolicyinstance_PolicyCreationRequest, options?: RequestOptions): Promise<PolicyPolicyinstance_PolicyCreationResponse> {
    const path = `/data-policies/v1/policies`;
    return this.client.post<PolicyPolicyinstance_PolicyCreationResponse>(path, data, options);
  }

  /**
   * Search and retrieve details for all policies
   * POST /data-policies/v1/policies/search
   */
  public async getPolicies(data: PolicyPolicyinstance_PolicySearchRequest, options?: RequestOptions): Promise<PolicyPolicyinstance_PolicySearchResponse> {
    const path = `/data-policies/v1/policies/search`;
    return this.client.post<PolicyPolicyinstance_PolicySearchResponse>(path, data, options);
  }

  /**
   * Fetch policy definition
   * GET /data-policies/v1/policies/{policyId}
   */
  public async getPolicyDefinition(policyId: string, options?: RequestOptions): Promise<PolicyPolicyinstance_PolicyRetrievalResponse> {
    const path = `/data-policies/v1/policies/${encodeURIComponent(String(policyId))}`;
    return this.client.get<PolicyPolicyinstance_PolicyRetrievalResponse>(path, options);
  }

  /**
   * Get details of a policy instance 
   * GET /data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}
   */
  public async getPolicyInstance(policyId: string, policyInstanceId: string, options?: RequestOptions): Promise<PolicyPolicyinstance_PolicyInstanceRetrievalResponse> {
    const path = `/data-policies/v1/policies/${encodeURIComponent(String(policyId))}/policy-instances/${encodeURIComponent(String(policyInstanceId))}`;
    return this.client.get<PolicyPolicyinstance_PolicyInstanceRetrievalResponse>(path, options);
  }

  /**
   * Get an S3 presigned evidence report URL for a specific policy based on the policy instance ID
   * GET /data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports
   */
  public async generateEvidenceReportUrl(policyId: string, policyInstanceId: string, options?: RequestOptions): Promise<PolicyPolicyinstance_EvidenceReportResponse> {
    const path = `/data-policies/v1/policies/${encodeURIComponent(String(policyId))}/policy-instances/${encodeURIComponent(String(policyInstanceId))}/evidence-reports`;
    return this.client.get<PolicyPolicyinstance_EvidenceReportResponse>(path, options);
  }

  /**
   * Get details for all instances of a policy.
   * GET /data-policies/v1/policies/{policyId}/policy-instances
   */
  public async getAllPolicyInstances(policyId: string, options?: RequestOptions): Promise<PolicyPolicyinstance_PolicyInstanceSearchResponse> {
    const path = `/data-policies/v1/policies/${encodeURIComponent(String(policyId))}/policy-instances`;
    return this.client.get<PolicyPolicyinstance_PolicyInstanceSearchResponse>(path, options);
  }

  /**
   * Get All Policy Instances by status
   * POST /data-policies/v1/policies/policy-instances/search
   */
  public async getPolicyInstances(data: PolicyPolicyinstance_PolicyInstancesActivitySearchRequest, options?: RequestOptions): Promise<PolicyPolicyinstance_PolicyInstancesActivitySearchResponse> {
    const path = `/data-policies/v1/policies/policy-instances/search`;
    return this.client.post<PolicyPolicyinstance_PolicyInstancesActivitySearchResponse>(path, data, options);
  }
}
