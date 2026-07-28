import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface DigitalRoutingqueue_ApiError {
  field?: string;
  message: string;
  parameters?: Record<string, any>;
  errorCode?: string;
}

export interface DigitalRoutingqueue_RoutingQueue {
  id: string;
  name: string;
  isSubqueue: boolean;
  isDeleted: boolean;
}

export interface DigitalRoutingqueue_ApiErrorCollection {
  errors: Array<DigitalRoutingqueue_ApiError>;
  uid?: string;
}

export class DigitalRoutingqueueService {
  constructor(private client: HttpClient) {}

  /**
   * Get list of routing queues based on filter
   * GET /routing-queues
   */
  public async searchRoutingQueues(
    options?: RequestOptions & {
      query?: {
        "id[]"?: Array<string>;
        nameContains?: string;
        withDeleted?: boolean;
        size?: number;
        isAssignableByMe?: boolean;
        isAssignableByUser?: number;
      };
    },
  ): Promise<{ hits?: number; data?: Array<DigitalRoutingqueue_RoutingQueue> }> {
    const path = `/routing-queues`;
    return this.client.get<{ hits?: number; data?: Array<DigitalRoutingqueue_RoutingQueue> }>(
      path,
      options,
    );
  }
}
