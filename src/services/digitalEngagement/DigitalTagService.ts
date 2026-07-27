import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

export interface DigitalTag_Tag { id: number; color?: string; title: string; }

export interface DigitalTag_ApiErrorCollection { errors: Array<DigitalTag_ApiError>; uid?: string; }

export type DigitalTag_TagToCreate = { color?: "#289D29" | "#E11616" | "#FFC20A" | "#2E8FCE" | "#982910" | "#DF23E6" | "#85289D" | "#ADADAD" | "#1DD6D4" | "#9D7D28"; title: string; };

export interface DigitalTag_ApiError { field?: string; message: string; parameters?: Record<string, any>; errorCode?: string; }

export class DigitalTagService {
  constructor(private client: HttpClient) {}

  /**
   * Get list of Tags
   * GET /tags
   */
  public async getTags(options?: RequestOptions & { query?: { "id[]"?: Array<number>; } }): Promise<{ hits?: number; data?: Array<DigitalTag_Tag>; }> {
    const path = `/tags`;
    return this.client.get<{ hits?: number; data?: Array<DigitalTag_Tag>; }>(path, options);
  }

  /**
   * Create Tag
   * PUT /tags
   */
  public async createTag(data: DigitalTag_TagToCreate, options?: RequestOptions): Promise<DigitalTag_Tag> {
    const path = `/tags`;
    return this.client.put<DigitalTag_Tag>(path, data, options);
  }
}
