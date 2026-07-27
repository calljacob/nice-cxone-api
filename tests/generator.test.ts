import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Generator & Output Verification", () => {
  it("verifies index.ts and generated domain files exist", () => {
    const srcDir = path.join(__dirname, "../src");
    expect(fs.existsSync(path.join(srcDir, "index.ts"))).toBe(true);
    expect(fs.existsSync(path.join(srcDir, "http.ts"))).toBe(true);
    expect(fs.existsSync(path.join(srcDir, "types.ts"))).toBe(true);
    expect(fs.existsSync(path.join(srcDir, "errors.ts"))).toBe(true);

    const domains = [
      "admin",
      "agent",
      "auth",
      "patron",
      "realtime",
      "reporting",
      "userhub",
      "dataExtraction",
      "mediaPlayback",
      "digitalEngagement",
      "businessData",
      "wfm",
      "recording",
      "interactionAnalytics",
      "privacy",
      "dataPolicy",
      "voiceBiometrics",
      "feedbackManagement",
    ];

    domains.forEach((d) => {
      const domainIndex = path.join(srcDir, "services", d, "index.ts");
      expect(fs.existsSync(domainIndex)).toBe(true);
    });
  });
});
