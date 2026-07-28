import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface CxoneBilling_ErrorResponse {
  code?: number;
  error?: string;
  errorDetail?: string;
}

export interface CxoneBilling_ProductUsage {
  success?: boolean;
}

export interface CxoneBilling_ProductUsageErrorResponse {
  code?: number;
  success?: boolean;
  error?: string;
  errorDetail?: string;
  invalidFields?: Array<Record<string, Record<string, any>>>;
}

export interface CxoneBilling_ProductUsageFetchResponse {
  totalRecords?: number;
  productUsage?: Array<CxoneBilling_ProductUsageGetResponse>;
  skip?: number;
  top?: number;
  links?: Record<string, string>;
}

export interface CxoneBilling_ProductUsageGetResponse {
  tenantId?: string;
  productTypeId?: number;
  partnerBillingId?: number;
  productUsageId?: string;
  productQuantity?: number;
  queryDate?: string;
  submittedBy?: string;
  createdTimeStamp?: string;
  modifiedTimeStamp?: string;
  productUsageTrackingId?: string;
  partnerTenantId?: string;
}

export interface CxoneBilling_ProductUsageRequest {
  tenantId: string;
  productTypeId: number;
  productQuantity: number;
  queryDate: string;
  partnerBillingId?: number;
}

export class CxoneBillingService {
  constructor(private client: HttpClient) {}

  /**
   * Submit product usage
   * POST /billing/v1.0/product-usage
   */
  public async submitProductUsages(
    data?: Array<CxoneBilling_ProductUsageRequest>,
    options?: RequestOptions,
  ): Promise<CxoneBilling_ProductUsage> {
    const path = `/billing/v1.0/product-usage`;
    return this.client.post<CxoneBilling_ProductUsage>(path, data, options);
  }

  /**
   * Fetch product usage by ID
   * GET /billing/v1.0/product-usage/{productTypeId}
   */
  public async getProductUsageById(
    productTypeId: number,
    options?: RequestOptions & {
      query?: { skip?: number; top?: number; startDate: string; endDate: string };
    },
  ): Promise<CxoneBilling_ProductUsageFetchResponse> {
    const path = `/billing/v1.0/product-usage/${encodeURIComponent(String(productTypeId))}`;
    return this.client.get<CxoneBilling_ProductUsageFetchResponse>(path, options);
  }
}
