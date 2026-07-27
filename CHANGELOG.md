# Changelog

All notable changes to `@calljacob/nice-cxone-api` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-07-27

### Added
- **Complete NICE CXone / inContact API Support**: Full TypeScript SDK covering all 73 OpenAPI 3.0.3 specifications and 501 endpoints published on [developer.niceincontact.com](https://developer.niceincontact.com/API/AdminAPI).
- **18 Specialized API Domains**:
  - `admin`: Address Book, Agent Messages, Agents, Commitments, Contacts, General, Groups, Lists, Routing Attributes, Script Schedules, Skills, Station Profiles, Stations, Unavailable Codes, Workflow Data.
  - `agent`: Phone, Chat Requests, Emails, Personal Connection, Phone Calls, Scheduled Callbacks, Sessions, Supervisor, Voicemails, Work Items.
  - `auth`: Authenticate, Global Authentication, Integrations, Universal Application.
  - `patron`: Callback, Chat Requests, Work Item.
  - `realtime`: Real-Time Data.
  - `reporting`: Reporting, Reporting DL.
  - `userhub`: User Management, Authorization Management, SCIM, Billing, Access Keys, Desktop Profiles, Documents, Division, Correlation Management, Export API, DR Management.
  - `dataExtraction`: Data Extraction APIs.
  - `mediaPlayback`: Media Playback & Download APIs.
  - `digitalEngagement`: Attachment, Message, Channel, Contact, Tag, Custom Fields, Customer, Routing Queue, Verification Token, Thread.
  - `businessData`: Business Data APIs.
  - `wfm`: WFM Export Schedule, Import Allotment, Export Summary.
  - `recording`: Interactions, Recording On Demand, Recording Status, Screen Interactions, Business Data.
  - `interactionAnalytics`: Interaction Analytics APIs.
  - `privacy`: GDPR Privacy APIs.
  - `dataPolicy`: Policy Instance APIs.
  - `voiceBiometrics`: Voice Biometric Hub APIs.
  - `feedbackManagement`: Feedback Management APIs.
- **Authentication & Headers**:
  - OAuth2 bearer token support with static token strings or dynamic async token provider callbacks.
  - Automatic `CorrelationId` header insertion for request tracing.
- **Dual Module Build**:
  - Support for ESM (`dist/index.mjs`), CommonJS (`dist/index.js`), and TypeScript type declarations (`dist/index.d.ts`).
