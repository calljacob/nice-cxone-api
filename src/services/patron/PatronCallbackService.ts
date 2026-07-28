import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class PatronCallbackService {
  constructor(private client: HttpClient) {}

  /**
   * Request an immediate callback
   * POST /queuecallback
   */
  public async requestACallback(
    options?: RequestOptions & {
      query?: {
        phoneNumber: string;
        callerId?: string;
        callDelay?: number;
        skill: number;
        targetAgent?: number;
        priorityManagement?: string;
        initialPriority?: number;
        acceleration?: number;
        maxPriority?: number;
        sequence?: string;
        zipTone?: string;
        screenPopSrc?: string;
        screenPopUrl?: string;
        timeout?: number;
      };
    },
  ): Promise<any> {
    const path = `/queuecallback`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Schedule a callback
   * POST /promise
   */
  public async scheduleACallback(
    options?: RequestOptions & {
      query?: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        skill: number;
        targetAgent?: number;
        promiseDate: string;
        promiseTime: string;
        notes?: string;
        timeZone?: string;
      };
    },
  ): Promise<any> {
    const path = `/promise`;
    return this.client.post<any>(path, undefined, options);
  }
}
