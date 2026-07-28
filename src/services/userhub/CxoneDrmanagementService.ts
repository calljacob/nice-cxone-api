import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface CxoneDrmanagement_SecondaryTenantRequest {
  tenantId: string;
  tenantName?: string;
  region: string;
  billingId?: string;
  clusterId?: string;
  schemaName?: string;
}

export interface CxoneDrmanagement_SecondaryTenant {
  tenantId?: string;
  tenantName?: string;
  region?: string;
  billingId?: string;
  clusterId?: string;
  schemaName?: string;
}

export type CxoneDrmanagement_EntitySyncConfigurationItem = {
  syncMode?: "OneWay" | "TwoWay";
  syncFrequency?: "Daily" | "RealTime";
  syncType?: "Standard";
  domain?: string;
  entityType?: string;
};

export interface CxoneDrmanagement_CreateDrConfigRequest {
  secondaryTenants: Array<CxoneDrmanagement_SecondaryTenantRequest>;
  primaryTenantSchema: string;
  primaryTenantBillingId?: string;
  primaryTenantClusterId?: string;
}

export interface CxoneDrmanagement_CreateDrConfigResponse {
  message?: string;
  configurationId?: string;
}

export interface CxoneDrmanagement_UpdateDrConfigRequestBase {
  ifMatchVersion: number;
  passkey?: string;
  primaryTenantBillingId?: string;
  primaryTenantClusterId?: string;
}

export type CxoneDrmanagement_UpdateMultiRegionHARequest =
  CxoneDrmanagement_UpdateDrConfigRequestBase & {
    multiRegionHA: boolean;
    secondaryTenants?: Array<CxoneDrmanagement_SecondaryTenantRequest>;
  };

export type CxoneDrmanagement_UpdateDrEnabledRequest =
  CxoneDrmanagement_UpdateDrConfigRequestBase & { drEnabled: boolean; passkey?: string };

export type CxoneDrmanagement_UpdateSyncConfigRequest =
  CxoneDrmanagement_UpdateDrConfigRequestBase & {
    syncStart?: boolean;
    entitySyncConfiguration: Array<CxoneDrmanagement_EntitySyncConfigurationItem>;
  };

export type CxoneDrmanagement_UpdateSecondaryTenantsRequest =
  CxoneDrmanagement_UpdateDrConfigRequestBase & {
    secondaryTenants: Array<CxoneDrmanagement_SecondaryTenantRequest>;
  };

export type CxoneDrmanagement_UpdateSyncStartRequest =
  CxoneDrmanagement_UpdateDrConfigRequestBase & { syncStart: boolean };

export interface CxoneDrmanagement_DrConfigResponse {
  tenantId?: string;
  primaryTenantId?: string;
  configurationId?: string;
  drEnabled?: boolean;
  version?: number;
  originDdbRegion?: string;
  primaryTenantRegion?: string;
  multiRegionHA?: boolean;
  primaryTenantSchema?: string;
  primaryTenantBillingId?: string;
  primaryTenantClusterId?: string;
  secondaryTenants?: Array<CxoneDrmanagement_SecondaryTenant>;
  entitySyncConfiguration?: Array<CxoneDrmanagement_EntitySyncConfigurationItem>;
  syncStart?: boolean;
}

export interface CxoneDrmanagement_ErrorDetail {
  errorCode?: string;
  message?: string;
}

export interface CxoneDrmanagement_ErrorResponse {
  code?: string;
  details?: string;
  hostName?: string;
  entityType?: string;
  errors?: Record<string, CxoneDrmanagement_ErrorDetail>;
}

export class CxoneDrmanagementService {
  constructor(private client: HttpClient) {}

  /**
   * New in 26.3: Get DR configuration for a tenant
   * GET /dr-manager/v1/tenant/{tenantId}/config
   */
  public async getDrConfigByTenantId(
    tenantId: string,
    options?: RequestOptions,
  ): Promise<CxoneDrmanagement_DrConfigResponse> {
    const path = `/dr-manager/v1/tenant/${encodeURIComponent(String(tenantId))}/config`;
    return this.client.get<CxoneDrmanagement_DrConfigResponse>(path, options);
  }

  /**
   * New in 26.3: Create DR configuration for a tenant
   * POST /dr-manager/v1/tenant/{tenantId}/config
   */
  public async createDrConfig(
    tenantId: string,
    data: CxoneDrmanagement_CreateDrConfigRequest,
    options?: RequestOptions,
  ): Promise<CxoneDrmanagement_CreateDrConfigResponse> {
    const path = `/dr-manager/v1/tenant/${encodeURIComponent(String(tenantId))}/config`;
    return this.client.post<CxoneDrmanagement_CreateDrConfigResponse>(path, data, options);
  }

  /**
   * New in 26.3: Update DR configuration for a tenant
   * PATCH /dr-manager/v1/tenant/{tenantId}/config
   */
  public async updateDrTenantConfig(
    tenantId: string,
    data:
      | CxoneDrmanagement_UpdateMultiRegionHARequest
      | CxoneDrmanagement_UpdateDrEnabledRequest
      | CxoneDrmanagement_UpdateSyncConfigRequest
      | CxoneDrmanagement_UpdateSecondaryTenantsRequest
      | CxoneDrmanagement_UpdateSyncStartRequest,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/dr-manager/v1/tenant/${encodeURIComponent(String(tenantId))}/config`;
    return this.client.patch<void>(path, data, options);
  }
}
