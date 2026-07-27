/**
 * Configuration options for NiceCXoneClient
 */
export interface ClientConfig {
  /**
   * Base URL for the NICE CXone / inContact API.
   * Default: "https://api.incontact.com/inContactAPI/services/v3.0"
   */
  baseUrl?: string;

  /**
   * OAuth2 access token or callback function returning access token
   */
  accessToken?: string | (() => string | Promise<string>);

  /**
   * Optional custom CorrelationId sent with requests.
   * If omitted, a correlation ID can still be passed per request.
   */
  correlationId?: string;

  /**
   * Optional custom fetch implementation (useful for Node.js environments or proxying)
   */
  fetch?: typeof globalThis.fetch;

  /**
   * Timeout in milliseconds for API calls. Default: 30000 ms
   */
  timeout?: number;

  /**
   * Additional custom headers sent with all requests
   */
  headers?: Record<string, string>;
}

/**
 * Options for individual API requests
 */
export interface RequestOptions {
  /**
   * Custom headers for this request
   */
  headers?: Record<string, string>;

  /**
   * Query parameters for this request
   */
  query?: Record<string, any>;

  /**
   * Correlation ID for tracing this specific request
   */
  correlationId?: string;

  /**
   * AbortSignal for request cancellation
   */
  signal?: AbortSignal;
}

/**
 * Standard API error payload structure returned by NICE inContact APIs
 */
export interface APIErrorPayload {
  error?: string;
  error_description?: string;
  message?: string;
  code?: string | number;
  correlationId?: string;
  [key: string]: any;
}
