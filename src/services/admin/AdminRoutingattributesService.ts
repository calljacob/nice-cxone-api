import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export type AdminRoutingattributes_RoutingAttribute = {
  Attribute_No?: number;
  Bus_No?: number;
  Attribute_Name?: string;
  Status?: "CURR" | "DISC";
  Notes?: string;
};

export interface AdminRoutingattributes_RoutingAttributeGetListResponse {
  routingAttributes?: Array<AdminRoutingattributes_RoutingAttribute>;
  totalRecords?: number;
}

export interface AdminRoutingattributes_RoutingAttributeAgentsResponse {
  routingAttributes?: Array<AdminRoutingattributes_RoutingAttributeAgent>;
  totalRecords?: number;
  hiddenAgents?: number;
}

export interface AdminRoutingattributes_RoutingAttributeAgent {
  Agent_No?: number;
  First_Name?: string;
  Last_Name?: string;
  Team_Name?: string;
}

export interface AdminRoutingattributes_RoutingAttributePutRequest {
  routingAttributeName?: string;
  status?: string;
  notes?: string;
  modAgentNo?: number;
}

export interface AdminRoutingattributes_AgentRoutingAttribute {
  RoutingAttributeNo?: number;
  Success?: boolean;
}

export type AdminRoutingattributes_AgentRoutingAttributes = {
  Agent_No?: number;
  Bus_No?: number;
  Attribute_No?: number;
  Attribute_Name?: string;
  Status?: "CURR" | "DISC";
};

export interface AdminRoutingattributes_AgentRoutingAttributeDeleteRequest {
  agentNo?: number;
  modAgentNo?: number;
}

export interface AdminRoutingattributes_AgentRoutingAttributePutRequest {
  routingAttributeNo?: number;
  status?: string;
  modAgentNo?: number;
}

export interface AdminRoutingattributes_AgentRoutingAttributesResponse {
  routingAttributes?: Array<AdminRoutingattributes_AgentRoutingAttributes>;
  totalRecords?: number;
  hiddenAgents?: number;
}

export class AdminRoutingattributesService {
  constructor(private client: HttpClient) {}

  /**
   * Retrieves a list of Routing Attributes
   * GET /routing-attributes
   */
  public async getRoutingAttributes(
    options?: RequestOptions & {
      query?: {
        status: number;
        maximumRows: number;
        startRowIndex: number;
        orderColumn: string;
        orderAsc: boolean;
        searchText?: string;
      };
    },
  ): Promise<AdminRoutingattributes_RoutingAttributeGetListResponse> {
    const path = `/routing-attributes`;
    return this.client.get<AdminRoutingattributes_RoutingAttributeGetListResponse>(path, options);
  }

  /**
   * Retrieves a Routing Attribute
   * GET /routing-attributes/{routingAttributeNo}
   */
  public async getRoutingAttribute(
    routingAttributeNo: number,
    options?: RequestOptions,
  ): Promise<AdminRoutingattributes_RoutingAttribute> {
    const path = `/routing-attributes/${encodeURIComponent(String(routingAttributeNo))}`;
    return this.client.get<AdminRoutingattributes_RoutingAttribute>(path, options);
  }

  /**
   * Updates or Adds a Routing Attribute
   * PUT /routing-attributes/{routingAttributeNo}
   */
  public async addUpdateRoutingAttribute(
    routingAttributeNo: number,
    data?: AdminRoutingattributes_RoutingAttributePutRequest,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/routing-attributes/${encodeURIComponent(String(routingAttributeNo))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Retrieves a Routing Attribute's assigned Agents
   * GET /routing-attributes/{routingAttributeNo}/agents
   */
  public async getRoutingAttributeAgents(
    routingAttributeNo: number,
    options?: RequestOptions & {
      query?: {
        maximumRows: number;
        startRowIndex: number;
        orderColumn?: string;
        orderAsc: boolean;
        searchText: string;
        assigned: boolean;
        status: number;
      };
    },
  ): Promise<AdminRoutingattributes_RoutingAttributeAgentsResponse> {
    const path = `/routing-attributes/${encodeURIComponent(String(routingAttributeNo))}/agents`;
    return this.client.get<AdminRoutingattributes_RoutingAttributeAgentsResponse>(path, options);
  }

  /**
   * Retrieves an Agent's assigned Routing Attribute
   * GET /agents/{agentNo}/routing-attributes
   */
  public async getAgentRoutingAttributes(
    agentNo: number,
    options?: RequestOptions & {
      query?: {
        status: number;
        maximumRows: number;
        startRowIndex: number;
        orderColumn: string;
        orderAsc: boolean;
        searchText: string;
        assigned: boolean;
      };
    },
  ): Promise<AdminRoutingattributes_AgentRoutingAttributesResponse> {
    const path = `/agents/${encodeURIComponent(String(agentNo))}/routing-attributes`;
    return this.client.get<AdminRoutingattributes_AgentRoutingAttributesResponse>(path, options);
  }

  /**
   * Updates an Agent's assigned Routing Attribute
   * PUT /agents/{agentNo}/routing-attributes
   */
  public async updateAgentRoutingAttributes(
    agentNo: number,
    data?: AdminRoutingattributes_AgentRoutingAttributePutRequest,
    options?: RequestOptions,
  ): Promise<AdminRoutingattributes_AgentRoutingAttribute> {
    const path = `/agents/${encodeURIComponent(String(agentNo))}/routing-attributes`;
    return this.client.put<AdminRoutingattributes_AgentRoutingAttribute>(path, data, options);
  }

  /**
   * Unassigns a Routing Attribute from an Agent
   * DELETE /agents/routing-attributes/{routingAttributeNo}
   */
  public async removeAgentRoutingAttribute(
    routingAttributeNo: number,
    data?: AdminRoutingattributes_AgentRoutingAttributeDeleteRequest,
    options?: RequestOptions,
  ): Promise<AdminRoutingattributes_AgentRoutingAttribute> {
    const path = `/agents/routing-attributes/${encodeURIComponent(String(routingAttributeNo))}`;
    return this.client.delete<AdminRoutingattributes_AgentRoutingAttribute>(path, data, options);
  }
}
