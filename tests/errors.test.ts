import { describe, it, expect } from "vitest";
import { NiceCXoneError, NiceCXoneAPIError, NiceCXoneAuthError } from "../src/errors.js";

describe("Custom Errors", () => {
  it("NiceCXoneError sets message and name correctly", () => {
    const err = new NiceCXoneError("Generic SDK error");
    expect(err).toBeInstanceOf(Error);
    expect(err).toBeInstanceOf(NiceCXoneError);
    expect(err.name).toBe("NiceCXoneError");
    expect(err.message).toBe("Generic SDK error");
  });

  it("NiceCXoneAuthError sets default and custom message", () => {
    const defaultErr = new NiceCXoneAuthError();
    expect(defaultErr.name).toBe("NiceCXoneAuthError");
    expect(defaultErr.message).toBe("Authentication token is missing or invalid");

    const customErr = new NiceCXoneAuthError("Token has expired");
    expect(customErr.message).toBe("Token has expired");
  });

  it("NiceCXoneAPIError parses error payload and correlation ID", () => {
    const err = new NiceCXoneAPIError(
      404,
      "Not Found",
      { error: "agent_not_found", error_description: "Agent 999 does not exist", correlationId: "corr-404" },
      "corr-header-404"
    );

    expect(err.name).toBe("NiceCXoneAPIError");
    expect(err.status).toBe(404);
    expect(err.statusText).toBe("Not Found");
    expect(err.correlationId).toBe("corr-header-404");
    expect(err.message).toBe("NICE CXone API Error [404]: Agent 999 does not exist");
    expect(err.errorPayload).toEqual({
      error: "agent_not_found",
      error_description: "Agent 999 does not exist",
      correlationId: "corr-404",
    });
  });

  it("NiceCXoneAPIError falls back gracefully when error_description is absent", () => {
    const err = new NiceCXoneAPIError(400, "Bad Request", { message: "Invalid parameter format" });
    expect(err.message).toBe("NICE CXone API Error [400]: Invalid parameter format");
  });
});
