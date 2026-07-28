import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export class DigitalAttachmentService {
  constructor(private client: HttpClient) {}

  /**
   * Upload base64 encoded file
   * POST /attachments/temporary
   */
  public async postAttachmentsTemporary(
    data: { content: string; mimeType: string },
    options?: RequestOptions,
  ): Promise<{ id?: string; url?: string; expireAt?: string }> {
    const path = `/attachments/temporary`;
    return this.client.post<{ id?: string; url?: string; expireAt?: string }>(path, data, options);
  }
}
