import type { APIErrorPayload } from "./types.js";

/**
 * Base error class for NICE CXone SDK errors
 */
export class NiceCXoneError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NiceCXoneError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Error thrown when API requests return a non-2xx HTTP status code
 */
export class NiceCXoneAPIError extends NiceCXoneError {
  public readonly status: number;
  public readonly statusText: string;
  public readonly errorPayload?: APIErrorPayload;
  public readonly correlationId?: string;

  constructor(
    status: number,
    statusText: string,
    errorPayload?: APIErrorPayload,
    correlationId?: string,
  ) {
    const detail =
      errorPayload?.error_description || errorPayload?.message || errorPayload?.error || statusText;
    super(`NICE CXone API Error [${status}]: ${detail}`);
    this.name = "NiceCXoneAPIError";
    this.status = status;
    this.statusText = statusText;
    this.errorPayload = errorPayload;
    this.correlationId = correlationId || errorPayload?.correlationId;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Error thrown when authentication fails or token is missing
 */
export class NiceCXoneAuthError extends NiceCXoneError {
  constructor(message: string = "Authentication token is missing or invalid") {
    super(message);
    this.name = "NiceCXoneAuthError";
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// Aliases for backward compatibility
export const NiceinContactError = NiceCXoneError;
export const NiceinContactAPIError = NiceCXoneAPIError;
export const NiceinContactAuthError = NiceCXoneAuthError;
