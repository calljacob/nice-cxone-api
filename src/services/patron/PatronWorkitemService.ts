import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class PatronWorkitemService {
  constructor(private client: HttpClient) {}

  /**
   * Create a new work item
   * POST /interactions/work-items
   */
  public async requestAWorkitem(
    options?: RequestOptions & {
      query?: {
        pointOfContact: string;
        workItemID?: string;
        workItemPayload?: string;
        workItemType?: string;
        from?: string;
      };
    },
  ): Promise<{ contactId?: number }> {
    const path = `/interactions/work-items`;
    return this.client.post<{ contactId?: number }>(path, undefined, options);
  }

  /**
   * Queues up a new persistent work item
   * POST /interactions/work-items-persistent
   */
  public async postInteractionsWorkItemsPersistent(
    options?: RequestOptions & {
      query?: {
        workItemID?: string;
        workItemPayload?: string;
        workItemType?: string;
        from?: string;
        pointOfContact?: string;
      };
    },
  ): Promise<any> {
    const path = `/interactions/work-items-persistent`;
    return this.client.post<any>(path, undefined, options);
  }
}
