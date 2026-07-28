import type { ClientConfig, RequestOptions, APIErrorPayload } from "./types.js";
import { NiceCXoneAPIError } from "./errors.js";

export class HttpClient {
  private baseUrl: string;
  private accessToken?: string | (() => string | Promise<string>);
  private defaultCorrelationId?: string;
  private defaultHeaders: Record<string, string>;
  private customFetch: typeof globalThis.fetch;
  private timeout: number;

  constructor(config: ClientConfig = {}) {
    this.baseUrl = (
      config.baseUrl || "https://api.incontact.com/inContactAPI/services/v3.0"
    ).replace(/\/+$/, "");
    this.accessToken = config.accessToken;
    this.defaultCorrelationId = config.correlationId;
    this.defaultHeaders = config.headers || {};
    this.customFetch = config.fetch || globalThis.fetch;
    this.timeout = config.timeout ?? 30000;
  }

  private async getAccessToken(): Promise<string | undefined> {
    if (typeof this.accessToken === "function") {
      return await this.accessToken();
    }
    return this.accessToken;
  }

  private buildUrl(path: string, query?: Record<string, any>): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const url = new URL(`${this.baseUrl}${cleanPath}`);

    if (query) {
      Object.entries(query).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
          if (Array.isArray(val)) {
            val.forEach((item) => url.searchParams.append(key, String(item)));
          } else {
            url.searchParams.append(key, String(val));
          }
        }
      });
    }

    return url.toString();
  }

  public async request<T>(
    method: string,
    path: string,
    body?: any,
    options: RequestOptions = {},
  ): Promise<T> {
    const token = await this.getAccessToken();
    const correlationId = options.correlationId || this.defaultCorrelationId;

    const headers: Record<string, string> = {
      Accept: "application/json",
      ...this.defaultHeaders,
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
    }

    if (correlationId) {
      headers["CorrelationId"] = correlationId;
    }

    let requestBody: string | undefined;
    if (body !== undefined && body !== null) {
      if (typeof body === "string") {
        requestBody = body;
      } else {
        headers["Content-Type"] = "application/json";
        requestBody = JSON.stringify(body);
      }
    }

    const fullUrl = this.buildUrl(path, options.query);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await this.customFetch(fullUrl, {
        method,
        headers,
        body: requestBody,
        signal: options.signal || controller.signal,
      });

      const responseCorrelationId = response.headers.get("CorrelationId") || correlationId;

      if (!response.ok) {
        let errorPayload: APIErrorPayload | undefined;
        try {
          const text = await response.text();
          errorPayload = text ? JSON.parse(text) : undefined;
        } catch {
          // Response body was not JSON
        }
        throw new NiceCXoneAPIError(
          response.status,
          response.statusText,
          errorPayload,
          responseCorrelationId || undefined,
        );
      }

      if (response.status === 204) {
        return undefined as unknown as T;
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return (await response.json()) as T;
      }

      const text = await response.text();
      try {
        return JSON.parse(text) as T;
      } catch {
        return text as unknown as T;
      }
    } finally {
      clearTimeout(timeoutId);
    }
  }

  public get<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.request<T>("GET", path, undefined, options);
  }

  public post<T>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>("POST", path, body, options);
  }

  public put<T>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>("PUT", path, body, options);
  }

  public patch<T>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>("PATCH", path, body, options);
  }

  public delete<T>(path: string, body?: any, options?: RequestOptions): Promise<T> {
    return this.request<T>("DELETE", path, body, options);
  }
}
