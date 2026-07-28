import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface DigitalCustomfields_ApiError {
  field?: string;
  message: string;
  parameters?: Record<string, any>;
  errorCode?: string;
}

export interface DigitalCustomfields_ApiErrorCollection {
  errors: Array<DigitalCustomfields_ApiError>;
  uid?: string;
}

export type DigitalCustomfields_CustomerCustomFieldDefinition = {
  ident: string;
  label: string;
  type: "text" | "email" | "list";
  isRequired: boolean;
  isEditable: boolean;
  isVisibleInRightPanel: boolean;
  isVisibleInCustomerCard: boolean;
  values?: Array<{ name?: string; value?: string }>;
};

export type DigitalCustomfields_CustomerCustomFieldDefinitionToCreate = {
  ident: string;
  label: string;
  type: "text" | "email" | "list";
  isRequired?: boolean;
  isEditable?: boolean;
  isVisibleInRightPanel?: boolean;
  isVisibleInCustomerCard?: boolean;
  values?: Record<string, any>;
};

export type DigitalCustomfields_ContactCustomFieldDefinition = {
  ident: string;
  label: string;
  type: "text" | "email" | "list" | "date";
  required: boolean;
  visibleInPostDetail?: boolean;
  visibleInLiveChat?: boolean;
  isEditable: boolean;
  values?:
    | Array<Record<string, any>>
    | {
        dateOptionsType: "absolute" | "relative";
        maxDate: string;
        minDate: string;
        startDate: string;
      };
};

export class DigitalCustomfieldsService {
  constructor(private client: HttpClient) {}

  /**
   * Get Contact's Custom Field Definitions
   * GET /consumer-contact-custom-fields
   */
  public async getContactCustomFieldDefinitions(
    options?: RequestOptions,
  ): Promise<Array<DigitalCustomfields_ContactCustomFieldDefinition>> {
    const path = `/consumer-contact-custom-fields`;
    return this.client.get<Array<DigitalCustomfields_ContactCustomFieldDefinition>>(path, options);
  }

  /**
   * Get Customer's Custom Field Definitions
   * GET /customers/custom-field-definitions
   */
  public async getCustomerCustomFieldDefinitions(
    options?: RequestOptions,
  ): Promise<Array<DigitalCustomfields_CustomerCustomFieldDefinition>> {
    const path = `/customers/custom-field-definitions`;
    return this.client.get<Array<DigitalCustomfields_CustomerCustomFieldDefinition>>(path, options);
  }

  /**
   * Create or update Customer Custom Field Definition
   * PUT /customers/custom-field-definitions
   */
  public async createOrUpdateCustomerCustomFieldDefinition(
    data: DigitalCustomfields_CustomerCustomFieldDefinitionToCreate,
    options?: RequestOptions,
  ): Promise<void> {
    const path = `/customers/custom-field-definitions`;
    return this.client.put<void>(path, data, options);
  }
}
