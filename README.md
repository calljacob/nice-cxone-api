# @calljacob/nice-cxone-api

[![npm version](https://img.shields.io/npm/v/@calljacob/nice-cxone-api.svg)](https://www.npmjs.com/package/@calljacob/nice-cxone-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg)](https://www.typescriptlang.org/)

Comprehensive, strongly-typed TypeScript API client library for **NICE CXone / inContact** APIs, published by [Call Jacob](https://github.com/calljacob).

Generated directly from official OpenAPI 3.0.3 specifications published on [developer.niceincontact.com](https://developer.niceincontact.com/API/AdminAPI), covering **73 API specifications**, **501 endpoints**, and **18 API domains**.

---

## Comparison: `@calljacob/nice-cxone-api` vs Official `@nice-devone/*` Packages

NICE publishes frontend client SDKs under the `@nice-devone/*` npm scope (such as `@nice-devone/agent-sdk`, `@nice-devone/voice-sdk`, `@nice-devone/ui-controls`). Here is how `@calljacob/nice-cxone-api` compares and complements them:

| Feature / Goal         | `@calljacob/nice-cxone-api` (This Package)                                                                           | `@nice-devone/*` Official SDKs                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| **Primary Use Case**   | Server-side & Node.js backend integration, administrative automation, reporting, user provisioning, pipeline tooling | Custom browser-based Agent applications, softphone UI widgets, CXone Agent integrations |
| **Target Environment** | Node.js (18+), Serverless (AWS Lambda, Cloudflare Workers), Bun, Deno, and Browser                                   | Web Browsers (requires DOM / WebRTC / WebSockets)                                       |
| **API Coverage**       | **All 18 REST Domains** (Admin, UserHub, Reporting, Skills, Address Book, Recording, Privacy, WFM, etc.)             | Frontend Agent & Voice/Chat event SDKs                                                  |
| **Dependencies**       | **Zero runtime dependencies** (built on native `fetch`)                                                              | Browser UI controls, i18n, WebRTC wrappers                                              |

---

## Features

- ⚡ **Complete API Coverage**: Supports all 18 NICE CXone / inContact API domains (Admin, Agent, Auth, Reporting, UserHub, Digital Engagement, Recording, WFM, etc.).
- 🔒 **Strong TypeScript Types**: Full autocompletion and type-safety for request payloads, path/query parameters, and response models across all 501 endpoints.
- 🔑 **Authentication Handling**: OAuth2 bearer token support with static token strings or dynamic async token resolution.
- 🔍 **Correlation ID Tracing**: Automatic `CorrelationId` header injection and extraction for end-to-end API tracing.
- 📦 **Dual Bundle (ESM + CommonJS)**: Ships native ESM (`dist/index.mjs`) and CJS (`dist/index.js`) modules with `.d.ts` declaration files.
- 🌐 **Zero Runtime Dependencies**: Uses native `fetch` with customizable transport for Node.js (18+), Bun, Deno, or browser environments.

---

## Installation

```bash
npm install @calljacob/nice-cxone-api
```

or with yarn / pnpm:

```bash
yarn add @calljacob/nice-cxone-api
# or
pnpm add @calljacob/nice-cxone-api
```

---

## Quickstart

```typescript
import { NiceCXoneClient } from "@calljacob/nice-cxone-api";

// Initialize client with access token and optional base URL
const client = new NiceCXoneClient({
  baseUrl: "https://api-na1.niceincontact.com/inContactAPI/services/v3.0",
  accessToken: "YOUR_OAUTH_ACCESS_TOKEN",
  correlationId: "my-app-session-123", // Optional correlation ID
});

// Fetch agents list
async function run() {
  try {
    const response = await client.admin.agents.getAgents({
      query: { top: "10", skip: "0", isActive: true },
    });

    console.log(`Found ${response.totalRecords} active agents:`);
    response.agents?.forEach((agent) => {
      console.log(`- ${agent.firstName} ${agent.lastName} (ID: ${agent.agentId})`);
    });
  } catch (error) {
    console.error("API call failed:", error);
  }
}

run();
```

---

## Domain Overview

All 73 API services are grouped under clean domain namespaces on `NiceCXoneClient`:

| Domain                    | Property                      | Description                                                                                                                |
| :------------------------ | :---------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Admin**                 | `client.admin`                | Agents, Skills, Address Books, Groups, Lists, Commitments, Stations, Unavailable Codes, Workflow Data, Script Schedules    |
| **Agent**                 | `client.agent`                | Phone Calls, Sessions, Supervisor, Chat Requests, Emails, Scheduled Callbacks, Voicemails, Work Items, Personal Connection |
| **Authentication**        | `client.auth`                 | Authenticate, Global Authentication, Integrations, Universal Application                                                   |
| **Patron**                | `client.patron`               | Callbacks, Chat Requests, Work Items                                                                                       |
| **Real-Time Data**        | `client.realtime`             | Real-time agent & contact status metrics                                                                                   |
| **Reporting**             | `client.reporting`            | Reporting & Data Lake APIs                                                                                                 |
| **UserHub**               | `client.userhub`              | User Management, SCIM, Authorization, Billing, Access Keys, Desktop Profiles, Documents, Divisions                         |
| **Digital Engagement**    | `client.digitalEngagement`    | Channels, Messages, Contacts, Customers, Tags, Custom Fields, Routing Queues, Threads                                      |
| **Recording**             | `client.recording`            | Interaction Recordings, Screen Recording, Recording On-Demand, Recording Status                                            |
| **Media Playback**        | `client.mediaPlayback`        | Media Playback & Download Services                                                                                         |
| **WFM**                   | `client.wfm`                  | Workforce Management Schedule Export, Import Allotment, Summary                                                            |
| **Data Extraction**       | `client.dataExtraction`       | Data Extraction APIs                                                                                                       |
| **Business Data**         | `client.businessData`         | Custom Business Data APIs                                                                                                  |
| **Interaction Analytics** | `client.interactionAnalytics` | Speech & Interaction Analytics                                                                                             |
| **Privacy**               | `client.privacy`              | GDPR & Data Privacy Compliance                                                                                             |
| **Data Policy**           | `client.dataPolicy`           | Policy Instance Management                                                                                                 |
| **Voice Biometrics**      | `client.voiceBiometrics`      | Voice Biometric Hub External APIs                                                                                          |
| **Feedback Management**   | `client.feedbackManagement`   | Customer Feedback & Survey APIs                                                                                            |

---

## Detailed Usage Examples

### Managing Agents & Skills (Admin API)

```typescript
// Create a new Agent
const newAgent = await client.admin.agents.operationsAgentsPostAgents({
  agents: [
    {
      firstName: "John",
      lastName: "Smith",
      userName: "john.smith@company.com",
      emailAddress: "john.smith@company.com",
      teamId: "12345",
      profileId: 1,
      country: "USA",
      city: "Salt Lake City",
      timeZone: "America/Denver",
    },
  ],
});

// Get Agent by ID
const agent = await client.admin.agents.operationsAgentsGetAgentsId("1001");

// Fetch assigned skills
const skills = await client.admin.skills.getSkills();
```

### Authentication & Token Refresh

You can supply an async callback for `accessToken` to automatically handle token expiration and refresh:

```typescript
async function getValidAccessToken(): Promise<string> {
  // Fetch or refresh token logic
  const token = await myAuthService.getToken();
  return token;
}

const client = new NiceCXoneClient({
  accessToken: getValidAccessToken,
});
```

### Error Handling

The client throws `NiceCXoneAPIError` for non-2xx HTTP responses, exposing HTTP status code, status text, raw error payload, and `correlationId`:

```typescript
import { NiceCXoneAPIError } from "@calljacob/nice-cxone-api";

try {
  await client.admin.agents.operationsAgentsGetAgentsId("invalid-id");
} catch (error) {
  if (error instanceof NiceCXoneAPIError) {
    console.error(`HTTP Status: ${error.status} (${error.statusText})`);
    console.error(`Correlation ID: ${error.correlationId}`);
    console.error(`Error details:`, error.errorPayload);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

---

## Development & Building

```bash
# Clone repository
git clone https://github.com/calljacob/nice-cxone-api.git
cd nice-cxone-api

# Install dependencies
npm install

# Run type check
npm run check-types

# Run unit tests
npm test

# Build ESM & CJS bundles
npm run build
```

---

## License

[MIT License](LICENSE)
