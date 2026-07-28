const fs = require("fs");
const path = require("path");

const SPECS_DIR =
  "/Users/bhubbard/.gemini/antigravity/brain/4a0fb8f6-1fc6-4e8f-aab9-a58ef673ed61/scratch/specs";
const SUMMARY_PATH =
  "/Users/bhubbard/.gemini/antigravity/brain/4a0fb8f6-1fc6-4e8f-aab9-a58ef673ed61/scratch/specs_summary.json";
const SRC_DIR = path.join(__dirname, "../src");

const CATEGORY_MAP = {
  AdminAPI: { key: "admin", className: "AdminService", dir: "admin" },
  AgentAPI: { key: "agent", className: "AgentService", dir: "agent" },
  AuthenticationAPI: { key: "auth", className: "AuthService", dir: "auth" },
  PatronAPI: { key: "patron", className: "PatronService", dir: "patron" },
  RealTimeDataAPI: { key: "realtime", className: "RealtimeService", dir: "realtime" },
  ReportingAPI: { key: "reporting", className: "ReportingService", dir: "reporting" },
  UserHubAPI: { key: "userhub", className: "UserhubService", dir: "userhub" },
  DataExtractionAPI: {
    key: "dataExtraction",
    className: "DataExtractionService",
    dir: "dataExtraction",
  },
  MediaPlaybackAPI: {
    key: "mediaPlayback",
    className: "MediaPlaybackService",
    dir: "mediaPlayback",
  },
  DigitalEngagementAPI: {
    key: "digitalEngagement",
    className: "DigitalEngagementService",
    dir: "digitalEngagement",
  },
  BusinessDataAPI: { key: "businessData", className: "BusinessDataService", dir: "businessData" },
  WFMAPI: { key: "wfm", className: "WfmService", dir: "wfm" },
  RecordingAPI: { key: "recording", className: "RecordingService", dir: "recording" },
  InteractionAnalyticsAPI: {
    key: "interactionAnalytics",
    className: "InteractionAnalyticsService",
    dir: "interactionAnalytics",
  },
  PrivacyAPI: { key: "privacy", className: "PrivacyService", dir: "privacy" },
  DataPolicyAPI: { key: "dataPolicy", className: "DataPolicyService", dir: "dataPolicy" },
  VoiceBiometricHubAPI: {
    key: "voiceBiometrics",
    className: "VoiceBiometricsService",
    dir: "voiceBiometrics",
  },
  FeedbackManagementAPI: {
    key: "feedbackManagement",
    className: "FeedbackManagementService",
    dir: "feedbackManagement",
  },
};

const RESERVED_KEYWORDS = new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "null",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "let",
  "static",
  "interface",
  "package",
  "private",
  "protected",
  "public",
  "type",
]);

function sanitizeIdentifier(str) {
  if (!str) return "Unknown";
  let cleaned = str.replace(/[^a-zA-Z0-9_$]/g, "_");
  if (/^[0-9]/.test(cleaned)) {
    cleaned = "_" + cleaned;
  }
  if (RESERVED_KEYWORDS.has(cleaned)) {
    cleaned = cleaned + "Param";
  }
  return cleaned;
}

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
    .replace(/^[a-z]/, (chr) => chr.toUpperCase());
}

function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function getSpecPrefix(specFilename) {
  const clean = specFilename.replace(/-api-docs\.json$/, "").replace(/\.json$/, "");
  return toPascalCase(clean);
}

function resolveRefName(refStr, specPrefix) {
  if (!refStr) return "any";
  const parts = refStr.split("/");
  const rawName = parts[parts.length - 1];
  return `${specPrefix}_${sanitizeIdentifier(rawName)}`;
}

function schemaToTSType(schema, parentSpec = {}, specPrefix = "", depth = 0) {
  if (!schema) return "any";

  if (schema.$ref) {
    return resolveRefName(schema.$ref, specPrefix);
  }

  if (schema.oneOf || schema.anyOf) {
    const list = schema.oneOf || schema.anyOf;
    return list.map((s) => schemaToTSType(s, parentSpec, specPrefix, depth + 1)).join(" | ");
  }

  if (schema.allOf) {
    return schema.allOf
      .map((s) => schemaToTSType(s, parentSpec, specPrefix, depth + 1))
      .join(" & ");
  }

  const type = schema.type;

  if (type === "string") {
    if (schema.enum && Array.isArray(schema.enum)) {
      return schema.enum.map((e) => JSON.stringify(e)).join(" | ");
    }
    return "string";
  }

  if (type === "integer" || type === "number") {
    return "number";
  }

  if (type === "boolean") {
    return "boolean";
  }

  if (type === "array") {
    const itemsType = schema.items
      ? schemaToTSType(schema.items, parentSpec, specPrefix, depth + 1)
      : "any";
    return `Array<${itemsType}>`;
  }

  if (type === "object" || schema.properties || schema.additionalProperties) {
    if (schema.properties && Object.keys(schema.properties).length > 0) {
      if (depth > 2) return "Record<string, any>";
      const props = Object.entries(schema.properties).map(([propName, propSchema]) => {
        const isRequired = Array.isArray(schema.required) && schema.required.includes(propName);
        const safeName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propName)
          ? propName
          : JSON.stringify(propName);
        const propType = schemaToTSType(propSchema, parentSpec, specPrefix, depth + 1);
        return `${safeName}${isRequired ? "" : "?"}: ${propType};`;
      });
      return `{ ${props.join(" ")} }`;
    }
    if (schema.additionalProperties) {
      const addType =
        typeof schema.additionalProperties === "object"
          ? schemaToTSType(schema.additionalProperties, parentSpec, specPrefix, depth + 1)
          : "any";
      return `Record<string, ${addType}>`;
    }
    return "Record<string, any>";
  }

  return "any";
}

function generateOperationMethodName(method, apiPath, operationId) {
  if (operationId) {
    let cleanOpId = operationId
      .replace(/^(v\d+\.\d+_|v\d+_|operations_[a-zA-Z0-9_]+_)/i, "")
      .replace(/^operations_/i, "");
    let name = toCamelCase(cleanOpId);
    if (name.length > 2) return name;
  }

  const segments = apiPath
    .split("/")
    .filter(Boolean)
    .map((s) => s.replace(/[{}]/g, ""));
  const action = method.toLowerCase();
  const name = action + segments.map(toPascalCase).join("");
  return toCamelCase(name);
}

function extractPathPlaceholders(apiPath) {
  const matches = apiPath.match(/\{([^}]+)\}/g);
  if (!matches) return [];
  return matches.map((m) => m.slice(1, -1));
}

function processSpec(spec, categoryInfo, specFilename) {
  const specPrefix = getSpecPrefix(specFilename);
  const serviceClassName = `${specPrefix}Service`;

  const models = [];
  const methods = [];
  const schemas = spec.components?.schemas || spec.definitions || {};

  // 1. Generate Schema Definitions
  for (const [schemaName, schemaObj] of Object.entries(schemas)) {
    const safeName = `${specPrefix}_${sanitizeIdentifier(schemaName)}`;
    const tsType = schemaToTSType(schemaObj, spec, specPrefix);

    if (tsType.startsWith("{") && !tsType.includes(" | ") && !tsType.includes(" & ")) {
      models.push(`export interface ${safeName} ${tsType}`);
    } else {
      models.push(`export type ${safeName} = ${tsType};`);
    }
  }

  // 2. Generate API Methods
  const paths = spec.paths || {};
  const methodNamesSeen = new Set();

  for (const [apiPath, pathItem] of Object.entries(paths)) {
    const commonParams = pathItem.parameters || [];

    for (const method of ["get", "post", "put", "delete", "patch"]) {
      const op = pathItem[method];
      if (!op) continue;

      let methodName = generateOperationMethodName(method, apiPath, op.operationId);
      if (methodNamesSeen.has(methodName)) {
        methodName = `${methodName}_${method.toUpperCase()}`;
      }
      methodNamesSeen.add(methodName);

      const allParams = [...commonParams, ...(op.parameters || [])];
      const explicitPathParams = allParams.filter((p) => p.in === "path");
      const queryParams = allParams.filter((p) => p.in === "query");

      // Also extract any path placeholders from path string that weren't in parameters
      const placeholdersInPath = extractPathPlaceholders(apiPath);
      const pathParams = [...explicitPathParams];

      placeholdersInPath.forEach((ph) => {
        const rawPhName = ph.split("|")[0];
        if (!pathParams.some((p) => p.name === ph || p.name === rawPhName)) {
          pathParams.push({
            name: ph,
            in: "path",
            required: true,
            schema: { type: "string" },
          });
        }
      });

      // Request body
      let bodyType = null;
      if (op.requestBody) {
        const content = op.requestBody.content;
        const jsonContent =
          content?.["application/json"] ||
          content?.["application/json-patch+json"] ||
          Object.values(content || {})[0];
        if (jsonContent?.schema) {
          bodyType = schemaToTSType(jsonContent.schema, spec, specPrefix);
        }
      }

      // Response type
      let responseType = "any";
      const responses = op.responses || {};
      const successResp =
        responses["200"] ||
        responses["201"] ||
        responses["202"] ||
        responses["204"] ||
        responses["default"];
      if (successResp) {
        const content = successResp.content;
        const jsonContent = content?.["application/json"] || Object.values(content || {})[0];
        if (jsonContent?.schema) {
          responseType = schemaToTSType(jsonContent.schema, spec, specPrefix);
        } else if (successResp.schema) {
          responseType = schemaToTSType(successResp.schema, spec, specPrefix);
        } else if (
          !content &&
          (responses["204"] || successResp.description?.includes("No Content"))
        ) {
          responseType = "void";
        }
      }

      // Build method signature & parameters
      const methodArgs = [];
      const queryTypeFields = [];

      pathParams.forEach((p) => {
        const paramName = sanitizeIdentifier(p.name.split("|")[0]);
        const paramType = p.schema ? schemaToTSType(p.schema, spec, specPrefix) : "string | number";
        methodArgs.push(`${paramName}: ${paramType}`);
      });

      if (bodyType) {
        methodArgs.push(`data${op.requestBody?.required ? "" : "?"}: ${bodyType}`);
      }

      if (queryParams.length > 0) {
        queryParams.forEach((p) => {
          const propName = p.name;
          const safePropName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(propName)
            ? propName
            : JSON.stringify(propName);
          const pType = p.schema ? schemaToTSType(p.schema, spec, specPrefix) : "any";
          queryTypeFields.push(`${safePropName}${p.required ? "" : "?"}: ${pType};`);
        });
      }

      const hasQuery = queryParams.length > 0;
      const optionsArg = hasQuery
        ? `options?: RequestOptions & { query?: { ${queryTypeFields.join(" ")} } }`
        : `options?: RequestOptions`;
      methodArgs.push(optionsArg);

      // Path interpolation logic
      let formattedPath = apiPath;
      pathParams.forEach((p) => {
        const rawName = p.name;
        const argIdent = sanitizeIdentifier(rawName.split("|")[0]);
        formattedPath = formattedPath.replace(
          `{${rawName}}`,
          `\${encodeURIComponent(String(${argIdent}))}`,
        );
      });

      const summary = op.summary || op.description || `${method.toUpperCase()} ${apiPath}`;
      const jsdoc = `  /**
   * ${summary.replace(/\*\//g, "* /")}
   * ${method.toUpperCase()} ${apiPath}
   */`;

      const httpMethod = method.toUpperCase();
      const requestBodyArg = bodyType
        ? "data, "
        : ["POST", "PUT", "PATCH"].includes(httpMethod)
          ? "undefined, "
          : "";

      const methodImpl = `${jsdoc}
  public async ${methodName}(${methodArgs.join(", ")}): Promise<${responseType}> {
    const path = \`${formattedPath}\`;
    return this.client.${method}<${responseType}>(path, ${requestBodyArg}options);
  }`;

      methods.push(methodImpl);
    }
  }

  return {
    specPrefix,
    serviceClassName,
    models,
    methods,
  };
}

function getCleanPropName(specPrefix, catKey) {
  let clean = specPrefix;
  const prefixes = [
    "Admin",
    "Agent",
    "Authentication",
    "Patron",
    "Realtime",
    "Realtimedata",
    "Reporting",
    "Cxone",
    "Digital",
    "Dataextraction",
    "Mediaplayback",
    "Businessdata",
    "Wfm",
    "Recording",
    "Interactionanalytics",
    "Privacy",
    "Policy",
    "Voicebiometrichub",
    "Feedbackmanagement",
  ];
  for (const p of prefixes) {
    if (clean.startsWith(p) && clean.length > p.length) {
      clean = clean.slice(p.length);
      break;
    }
  }
  return toCamelCase(clean);
}

function main() {
  const summary = JSON.parse(fs.readFileSync(SUMMARY_PATH, "utf8"));

  const servicesDir = path.join(SRC_DIR, "services");
  if (fs.existsSync(servicesDir)) {
    fs.rmSync(servicesDir, { recursive: true, force: true });
  }
  fs.mkdirSync(servicesDir, { recursive: true });

  const categoriesGrouped = {};

  summary.forEach((item) => {
    const catConfig = CATEGORY_MAP[item.category];
    if (!catConfig) return;

    if (!categoriesGrouped[catConfig.key]) {
      categoriesGrouped[catConfig.key] = {
        ...catConfig,
        specs: [],
      };
    }

    const specPath = path.join(SPECS_DIR, item.filename);
    if (fs.existsSync(specPath)) {
      const specContent = JSON.parse(fs.readFileSync(specPath, "utf8"));
      categoriesGrouped[catConfig.key].specs.push({
        filename: item.filename,
        content: specContent,
      });
    }
  });

  const allServiceExports = [];
  const domainServicesMap = [];

  for (const [catKey, catObj] of Object.entries(categoriesGrouped)) {
    const catDir = path.join(servicesDir, catObj.dir);
    fs.mkdirSync(catDir, { recursive: true });

    const domainSubServices = [];

    for (const specObj of catObj.specs) {
      const processed = processSpec(specObj.content, catObj, specObj.filename);

      const fileContent = `import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";

${processed.models.join("\n\n")}

export class ${processed.serviceClassName} {
  constructor(private client: HttpClient) {}

${processed.methods.join("\n\n")}
}
`;

      const serviceFileName = `${processed.serviceClassName}.ts`;
      fs.writeFileSync(path.join(catDir, serviceFileName), fileContent);

      const propName = getCleanPropName(processed.specPrefix, catKey);

      domainSubServices.push({
        name: processed.serviceClassName,
        propName,
        fileName: processed.serviceClassName,
      });
    }

    const domainClassName = toPascalCase(catKey) + "Domain";
    const imports = domainSubServices
      .map((s) => `import { ${s.name} } from "./${s.fileName}.js";`)
      .join("\n");

    const props = domainSubServices
      .map((s) => `  public readonly ${s.propName}: ${s.name};`)
      .join("\n");
    const initProps = domainSubServices
      .map((s) => `    this.${s.propName} = new ${s.name}(client);`)
      .join("\n");

    const exports = domainSubServices.map((s) => `export * from "./${s.fileName}.js";`).join("\n");

    const domainContent = `import { HttpClient } from "../../http.js";
${imports}

${exports}

export class ${domainClassName} {
${props}

  constructor(client: HttpClient) {
${initProps}
  }
}
`;

    fs.writeFileSync(path.join(catDir, "index.ts"), domainContent);

    allServiceExports.push(`export * from "./services/${catObj.dir}/index.js";`);
    domainServicesMap.push({
      key: catKey,
      className: domainClassName,
      dir: catObj.dir,
    });
  }

  const domainImports = domainServicesMap
    .map((d) => `import { ${d.className} } from "./services/${d.dir}/index.js";`)
    .join("\n");

  const domainProps = domainServicesMap
    .map((d) => `  public readonly ${d.key}: ${d.className};`)
    .join("\n");
  const domainInits = domainServicesMap
    .map((d) => `    this.${d.key} = new ${d.className}(this.http);`)
    .join("\n");

  const mainClientCode = `import { HttpClient } from "./http.js";
import { ClientConfig } from "./types.js";
${domainImports}

export * from "./types.js";
export * from "./errors.js";
export * from "./http.js";
${allServiceExports.join("\n")}

export class NiceCXoneClient {
  public readonly http: HttpClient;
${domainProps}

  constructor(config: ClientConfig = {}) {
    this.http = new HttpClient(config);
${domainInits}
  }
}

export default NiceCXoneClient;
`;

  fs.writeFileSync(path.join(SRC_DIR, "index.ts"), mainClientCode);
  console.log(`Generated complete client code for ${summary.length} specs in src/!`);
}

main();
