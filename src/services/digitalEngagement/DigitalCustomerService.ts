import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface DigitalCustomer_ApiError {
  field?: string;
  message: string;
  parameters?: Record<string, any>;
  errorCode?: string;
}

export interface DigitalCustomer_ApiErrorCollection {
  errors: Array<DigitalCustomer_ApiError>;
  uid?: string;
}

export interface DigitalCustomer_Customer {
  id: string;
  updatedAt: string;
  firstName?: string;
  surname?: string;
  fullName?: string;
  customFields?: Array<DigitalCustomer_CustomField>;
  image?: string;
  identities: Array<DigitalCustomer_AuthorCustomerIdentity>;
  messageStatistics: DigitalCustomer_CustomerMessageStatistics;
  sentimentStatistics: DigitalCustomer_CustomerSentimentStatistics;
}

export interface DigitalCustomer_CustomerNote {
  id: string;
  user: DigitalCustomer_User;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export interface DigitalCustomer_Links {
  self?: string;
  next?: string;
  previous?: string;
}

export interface DigitalCustomer_CustomField {
  ident: string;
  value: string;
  updatedAt?: string;
}

export interface DigitalCustomer_AuthorCustomerIdentity {
  idOnExternalPlatform: string;
  firstName?: string;
  lastName?: string;
  nickname?: string;
  image?: string;
  customFields?: Array<DigitalCustomer_CustomField>;
}

export interface DigitalCustomer_CustomerMessageStatistics {
  inbound?: number;
  outbound?: number;
}

export interface DigitalCustomer_CustomerSentimentStatistics {
  positive?: number;
  neutral?: number;
  negative?: number;
}

export interface DigitalCustomer_User {
  id: number;
  incontactId?: string;
  emailAddress: string;
  loginUsername: string;
  firstName: string;
  surname: string;
  nickname?: string;
  imageUrl?: string;
  isBotUser: boolean;
  isSurveyUser: boolean;
}

export class DigitalCustomerService {
  constructor(private client: HttpClient) {}

  /**
   * Get list of Customers based on filter
   * GET /customers
   */
  public async searchCustomers(
    options?: RequestOptions & {
      query?: {
        query?: string;
        limit?: number;
        orderBy?:
          | "relevance"
          | "createdAt"
          | "updatedAt"
          | "firstName"
          | "lastName"
          | "firstInteractionAt"
          | "lastInteractionAt"
          | "numberOfInbounds"
          | "numberOfOutbounds";
      };
    },
  ): Promise<{ hits?: number; data?: Array<DigitalCustomer_Customer> }> {
    const path = `/customers`;
    return this.client.get<{ hits?: number; data?: Array<DigitalCustomer_Customer> }>(
      path,
      options,
    );
  }

  /**
   * Get detail of the customer
   * GET /customers/{customerId}
   */
  public async getCustomer(
    customerId: string,
    options?: RequestOptions,
  ): Promise<DigitalCustomer_Customer> {
    const path = `/customers/${encodeURIComponent(String(customerId))}`;
    return this.client.get<DigitalCustomer_Customer>(path, options);
  }

  /**
   * Get list of customer notes
   * GET /customers/{customerId}/notes
   */
  public async getCustomerNotes(
    customerId: string,
    options?: RequestOptions,
  ): Promise<{
    totalRecords?: number;
    data?: Array<DigitalCustomer_CustomerNote>;
    _links?: DigitalCustomer_Links;
  }> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/notes`;
    return this.client.get<{
      totalRecords?: number;
      data?: Array<DigitalCustomer_CustomerNote>;
      _links?: DigitalCustomer_Links;
    }>(path, options);
  }

  /**
   * Create customer note
   * POST /customers/{customerId}/notes
   */
  public async createCustomerNote(
    customerId: string,
    data: { content: string },
    options?: RequestOptions,
  ): Promise<DigitalCustomer_CustomerNote> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/notes`;
    return this.client.post<DigitalCustomer_CustomerNote>(path, data, options);
  }

  /**
   * Update customer note
   * PUT /customers/{customerId}/notes/{noteId}
   */
  public async updateCustomerNote(
    customerId: string,
    noteId: string,
    data: { content: string },
    options?: RequestOptions,
  ): Promise<DigitalCustomer_CustomerNote> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/notes/${encodeURIComponent(String(noteId))}`;
    return this.client.put<DigitalCustomer_CustomerNote>(path, data, options);
  }

  /**
   * Delete customer note
   * DELETE /customers/{customerId}/notes/{noteId}
   */
  public async deleteCustomerNote(
    customerId: string,
    noteId: string,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/notes/${encodeURIComponent(String(noteId))}`;
    return this.client.delete<void>(path, options);
  }

  /**
   * Merge customer with another customer
   * PUT /customers/{customerId}/merge
   */
  public async mergeCustomer(
    customerId: string,
    data: { customerToMerge?: { id?: string } },
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/merge`;
    return this.client.put<void>(path, data, options);
  }

  /**
   * Remove custom field value from Customer
   * DELETE /customers/{customerId}/custom-fields/{customFieldIdentifier}
   */
  public async removeCustomerCustomFieldValue(
    customerId: string,
    customFieldIdentifier: string,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/custom-fields/${encodeURIComponent(String(customFieldIdentifier))}`;
    return this.client.delete<void>(path, options);
  }

  /**
   * Update values of customer custom fields
   * PUT /customers/{customerId}/custom-fields
   */
  public async updateCustomerCustomFields(
    customerId: string,
    data: Array<DigitalCustomer_CustomField>,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/customers/${encodeURIComponent(String(customerId))}/custom-fields`;
    return this.client.put<any>(path, data, options);
  }
}
