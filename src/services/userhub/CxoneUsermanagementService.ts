import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export type CxoneUsermanagement_TeamRequestCreate = {
  id?: string;
  name: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  createdBy?: string;
  lastModified?: string;
  voiceThreshold?: number;
  chatThreshold?: number;
  maxConcurrentChats?: number;
  emailThreshold?: number;
  maxEmailAutoParkingLimit?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  deliveryMode?: number;
  totalContactCount?: number;
  userCount?: number;
  unavailableCodes?: Array<CxoneUsermanagement_UnavailableCode>;
  customAttributes?: CxoneUsermanagement_CustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};

export type CxoneUsermanagement_TeamRequestUpdate = {
  id: string;
  name: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  createdBy?: string;
  lastModified?: string;
  voiceThreshold?: number;
  chatThreshold?: number;
  maxConcurrentChats?: number;
  emailThreshold?: number;
  maxEmailAutoParkingLimit?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  deliveryMode?: number;
  totalContactCount?: number;
  userCount?: number;
  unavailableCodes?: Array<CxoneUsermanagement_UnavailableCode>;
  customAttributes?: CxoneUsermanagement_CustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};

export type CxoneUsermanagement_TeamCreateUpdateResponse = {
  id?: string;
  name?: string;
  status?: "ACTIVE" | "INACTIVE";
  createdBy?: string;
  lastModified?: string;
  customAttributes?: CxoneUsermanagement_CustomAttribute;
  isDefault?: boolean;
  divisionId?: number;
};

export interface CxoneUsermanagement_UnavailableCode {
  outStateId?: number;
  outStateName?: string;
  isActive?: boolean;
  isAcw?: boolean;
  agentTimeoutMins?: number;
}

export interface CxoneUsermanagement_TeamResponse {
  message?: string;
  detailedMessage?: string;
  httpCode?: number;
  team?: CxoneUsermanagement_TeamCreateUpdateResponse;
}

export type CxoneUsermanagement_GetTeamResponse = {
  team?: {
    id?: string;
    name?: string;
    description?: string;
    leadUserId?: string;
    status?: "ACTIVE" | "INACTIVE";
    createdBy?: string;
    lastModified?: string;
    customAttributes?: CxoneUsermanagement_CustomAttribute;
    isDefault?: boolean;
    divisionId?: number;
  };
};

export interface CxoneUsermanagement_UserResponseV3 {
  user?: CxoneUsermanagement_UserV3;
}

export type CxoneUsermanagement_UserV3 = {
  id?: string;
  userName?: string;
  firstName?: string;
  middleName?: string;
  displayName?: string;
  lastName?: string;
  emailAddress?: string;
  customAttributes?: Record<string, CxoneUsermanagement_CustomAttribute>;
  type?: string;
  mobileNumber?: string;
  mobileNumber2?: string;
  assignedGroup?: string;
  rank?: number;
  country?: string;
  timeZone?: string;
  role?: string;
  roleUUID?: string;
  hireDate?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
  acdInfos?: Array<CxoneUsermanagement_AcdInfo>;
  groupIds?: Array<string>;
  deletedDate?: string;
  impersonated?: boolean;
  billable?: boolean;
  teamId?: string;
  externalIdentity?: string;
  emailToBeVerified?: string;
  secondaryRoleIds?: Array<string>;
  views?: Array<CxoneUsermanagement_UserView>;
  fullName?: string;
  loginAuthenticatorId?: string;
};

export interface CxoneUsermanagement_AcdInfo {
  loginId?: string;
}

export interface CxoneUsermanagement_AcdUserMapping {
  loginId?: string;
}

export interface CxoneUsermanagement_UserView {
  id?: string;
  objectType?: string;
}

export interface CxoneUsermanagement_CustomAttribute {
  id?: string;
  values?: Array<CxoneUsermanagement_AttributeValue>;
}

export interface CxoneUsermanagement_AttributeValue {
  value?: string;
  resolvedValue?: Record<string, any>;
}

export type CxoneUsermanagement_TeamRequest = {
  id?: string;
  name: string;
  description?: string;
  status: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  createdBy?: string;
  lastModified?: string;
  voiceThreshold?: number;
  chatThreshold?: number;
  maxConcurrentChats?: number;
  emailThreshold?: number;
  maxEmailAutoParkingLimit?: number;
  workItemThreshold?: number;
  requestContact?: boolean;
  contactAutoFocus?: boolean;
  deliveryMode?: number;
  totalContactCount?: number;
  userCount?: number;
  unavailableCodes?: Array<CxoneUsermanagement_UnavailableCode>;
  customAttributes?: CxoneUsermanagement_CustomAttribute;
  isDefault?: boolean;
};

export interface CxoneUsermanagement_UsersResponseUnauthorized {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
}

export interface CxoneUsermanagement_RegisterUserResponseBadRequest {
  code?: string;
  details?: string;
  hostName?: string;
  entityType?: string;
  errors?: string;
}

export interface CxoneUsermanagement_RegisterUserResponseUnAuthorized {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
}

export interface CxoneUsermanagement_UpdateUserResponseBadRequest {
  code?: string;
  details?: string;
  hostName?: string;
  entityType?: string;
  errors?: string;
}

export interface CxoneUsermanagement_teamCustomAttribute {
  id?: string;
  values?: Array<CxoneUsermanagement_AttributeValue>;
}

export interface CxoneUsermanagement_UsersResponse {
  users?: Array<CxoneUsermanagement_User>;
}

export type CxoneUsermanagement_User = {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
  customAttributes?: Record<string, CxoneUsermanagement_CustomAttribute>;
  organizationName?: string;
  mobileNumber?: string;
  assignedGroup?: string;
  rank?: number;
  country?: string;
  timeZone?: string;
  role?: string;
  roleUUID?: string;
  hireDate?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
  invitationExpired?: boolean;
  acdUserMappings?: Array<CxoneUsermanagement_AcdUserMapping>;
  acdInfos?: Array<CxoneUsermanagement_AcdInfo>;
  groupIds?: Array<string>;
  deletedDate?: string;
  icBUId?: string;
  icClusterId?: string;
  impersonated?: boolean;
  applicationAttributes?: Record<string, Array<CxoneUsermanagement_ApplicationAttribute>>;
  billable?: boolean;
  modifiable?: boolean;
  idmType?: "KEYCLOAK" | "COGNITO" | "EVOLVECG";
  passwordPolicyUpdated?: boolean;
  teamId?: string;
  update?: boolean;
  defaultAdminUserRequired?: boolean;
  externalIdentity?: string;
  creationDate?: string;
  emailToBeVerified?: string;
  secondaryRoleIds?: Array<string>;
  password?: string;
  fullName?: string;
};

export interface CxoneUsermanagement_UserRegistrationRequest {
  firstName: string;
  lastName: string;
  emailAddress: string;
  customAttributes?: CxoneUsermanagement_CustomAttribute;
  mobileNumber?: string;
  assignedGroup?: string;
  rank?: number;
  timeZone?: string;
  role: string;
  teamId?: string;
  hireDate?: string;
  acdInfos?: Array<CxoneUsermanagement_AcdInfo>;
  groupIds?: Array<string>;
  userName?: string;
  applicationAttributes?: Record<string, Array<CxoneUsermanagement_ApplicationAttribute>>;
  emailToBeVerified?: string;
  externalIdentity?: string;
  billable?: boolean;
  secondaryRoleIds?: Array<string>;
  views?: Array<CxoneUsermanagement_UserView>;
}

export interface CxoneUsermanagement_ApplicationAttribute {
  name?: string;
  values?: Array<string>;
  objects?: Array<Record<string, Record<string, any>>>;
}

export interface CxoneUsermanagement_RegisterUserResponse {
  success?: boolean;
  message?: string;
  error?: string;
  uuid?: string;
  msg?: string;
}

export interface CxoneUsermanagement_UserUpdateRequest {
  firstName: string;
  lastName: string;
  emailAddress: string;
  customAttributes?: CxoneUsermanagement_CustomAttribute;
  mobileNumber?: string;
  assignedGroup: string;
  rank?: number;
  timeZone?: string;
  role: string;
  teamId?: string;
  hireDate?: string;
  acdInfos?: Array<CxoneUsermanagement_AcdInfo>;
  groupIds?: Array<string>;
  userName: string;
  applicationAttributes?: Record<string, Array<CxoneUsermanagement_ApplicationAttribute>>;
  emailToBeVerified: string;
  externalIdentity?: string;
  billable?: boolean;
  secondaryRoleIds?: Array<string>;
  views?: Array<CxoneUsermanagement_UserView>;
  id: string;
}

export interface CxoneUsermanagement_UpdateUserResponse {
  success?: boolean;
  message?: string;
  error?: string;
  msg?: string;
}

export interface CxoneUsermanagement_UserResponse {
  user?: CxoneUsermanagement_User;
}

export interface CxoneUsermanagement_BulkEntityUserAssignResponse {
  success?: boolean;
  message?: string;
}

export interface CxoneUsermanagement_UserInvitationRequest {
  inviteUserIds: Array<string>;
  senderUserId: string;
}

export interface CxoneUsermanagement_ReviveUserResponse {
  success?: boolean;
  uuid?: string;
}

export interface CxoneUsermanagement_UserDeactivateRequest {
  userIds: Array<string>;
}

export interface CxoneUsermanagement_UserDeactivateResponse {
  notDeletedUserIds?: Array<string>;
}

export interface CxoneUsermanagement_UserSearchResponse {
  totalRecords?: number;
  skip?: number;
  top?: number;
  users?: Array<CxoneUsermanagement_SearchedUser>;
}

export type CxoneUsermanagement_SearchedUser = {
  id?: string;
  userName?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  displayName?: string;
  emailAddress?: string;
  customAttributes?: Record<string, CxoneUsermanagement_CustomAttributeV2>;
  mobileNumber?: string;
  mobileNumber2?: string;
  assignedGroup?: string;
  rank?: number;
  country?: string;
  timeZone?: string;
  role?: string;
  roleUUID?: string;
  type?: string;
  hireDate?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
  invitationExpired?: boolean;
  acdUserMappings?: Array<CxoneUsermanagement_AcdUserMappingV2>;
  acdInfos?: Array<CxoneUsermanagement_AcdInfoV2>;
  groupIds?: Array<string>;
  deletedDate?: string;
  impersonated?: boolean;
  billable?: boolean;
  modifiable?: boolean;
  passwordPolicyUpdated?: boolean;
  teamId?: string;
  externalIdentity?: string;
  creationDate?: string;
  emailToBeVerified?: string;
  secondaryRoleIds?: Array<string>;
  fullName?: string;
  views?: Array<CxoneUsermanagement_UserView>;
  divisionId?: number;
};

export type CxoneUsermanagement_SearchRequest = {
  filter?: Record<string, Record<string, any>>;
  fields?: Array<string>;
  operations?: Record<string, "LIKE" | "BETWEEN" | "NOT" | "OR">;
  skip?: number;
  top?: number;
  orderBy?: Record<string, "ASC" | "DESC">;
};

export type CxoneUsermanagement_SearchRequestV1 = {
  filter?: { id?: Array<string>; name?: Array<string>; divisionId?: Array<number> };
  fields?: Array<string>;
  operations?: {
    id?: "LIKE" | "BETWEEN" | "NOT" | "IN" | "EQ";
    name?: "LIKE" | "BETWEEN" | "NOT" | "IN" | "EQ";
  };
  skip?: number;
  top?: number;
  orderBy?: { id?: "ASC" | "DESC"; name?: "ASC" | "DESC" };
};

export interface CxoneUsermanagement_CustomAttributeV2 {
  id?: string;
  values?: Array<CxoneUsermanagement_AttributeValueV2>;
}

export interface CxoneUsermanagement_AttributeValueV2 {
  value?: string;
  resolvedValue?: Record<string, any>;
}

export interface CxoneUsermanagement_AcdUserMappingV2 {
  loginId?: string;
}

export interface CxoneUsermanagement_AcdInfoV2 {
  loginId?: string;
}

export interface CxoneUsermanagement_ErrorResponse {
  code?: string;
  details?: string;
  hostname?: string;
  entityType?: string;
  errors?: Record<string, any>;
}

export interface CxoneUsermanagement_UnauthorizedErrorResponse {
  timestamp?: string;
  status?: number;
  error?: string;
  message?: string;
  path?: string;
}

export interface CxoneUsermanagement_UserIdentityResponseV1 {
  user?: CxoneUsermanagement_UserIdentityV1;
}

export interface CxoneUsermanagement_UserIdentityV1 {
  id?: string;
  fullName?: string;
}

export interface CxoneUsermanagement_UserIdentityListResponseV2 {
  totalRecords?: number;
  users?: Array<CxoneUsermanagement_UserIdentityV2>;
  _links?: CxoneUsermanagement_Links;
}

export type CxoneUsermanagement_UserIdentityV2 = {
  id?: string;
  displayName?: string;
  status?: "UNREGISTERED" | "PENDING" | "ACTIVE" | "BLOCKED" | "DELETED";
};

export interface CxoneUsermanagement_Links {
  self?: string;
  next?: string;
  previous?: string;
}

export interface CxoneUsermanagement_AssignAuthenticatorRequest {
  authenticatorId?: string;
}

export interface CxoneUsermanagement_BooleanResponse {
  success?: boolean;
}

export interface CxoneUsermanagement_UserInvitationRequestEmail {
  emailAddressesList: Array<string>;
  senderEmail: string;
}

export interface CxoneUsermanagement_UserInvitationV2Request {
  inviteUserIds: Array<string>;
  senderUserId: string;
}

export interface CxoneUsermanagement_TeamSearchResponseV4 {
  totalRecords?: number;
  skip?: number;
  top?: number;
  teams?: Array<CxoneUsermanagement_TeamV3>;
}

export type CxoneUsermanagement_TeamV3 = {
  id?: string;
  name?: string;
  description?: string;
  status?: "ACTIVE" | "INACTIVE";
  leadUserId?: string;
  teamCustomAttributes?: Record<string, CxoneUsermanagement_teamCustomAttribute>;
  isDefault?: boolean;
};

export class CxoneUsermanagementService {
  constructor(private client: HttpClient) {}

  /**
   * Create a new team
   * POST /user-management/v3/teams
   */
  public async createTeam(
    data?: CxoneUsermanagement_TeamRequestCreate,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_TeamResponse> {
    const path = `/user-management/v3/teams`;
    return this.client.post<CxoneUsermanagement_TeamResponse>(path, data, options);
  }

  /**
   * Update Team details
   * PUT /user-management/v3/teams
   */
  public async updateTeam(
    data?: CxoneUsermanagement_TeamRequestUpdate,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_TeamResponse> {
    const path = `/user-management/v3/teams`;
    return this.client.put<CxoneUsermanagement_TeamResponse>(path, data, options);
  }

  /**
   * Get team details by team Id
   * GET /user-management/v3/teams/{teamId}
   */
  public async getTeamById(
    teamId: string,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_GetTeamResponse> {
    const path = `/user-management/v3/teams/${encodeURIComponent(String(teamId))}`;
    return this.client.get<CxoneUsermanagement_GetTeamResponse>(path, options);
  }

  /**
   * Returns a list of teams per given filter and metrices
   * POST /user-management/v4/teams/search
   */
  public async getTeamsByCriteria(
    data?: CxoneUsermanagement_SearchRequestV1,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_TeamSearchResponseV4> {
    const path = `/user-management/v4/teams/search`;
    return this.client.post<CxoneUsermanagement_TeamSearchResponseV4>(path, data, options);
  }

  /**
   * Get list of all users for a tenant
   * GET /user-management/v1/users
   */
  public async getUserList(
    options?: RequestOptions & {
      query?: {
        includeDeleted?: boolean;
        withAndWithoutEmail?: string;
        includeDeletedAfter?: string;
        fullNameContains?: string;
        excludeImpersonated?: boolean;
        onlyImpersonated?: string;
      };
    },
  ): Promise<CxoneUsermanagement_UsersResponse> {
    const path = `/user-management/v1/users`;
    return this.client.get<CxoneUsermanagement_UsersResponse>(path, options);
  }

  /**
   * Create user under tenant
   * POST /user-management/v1/users
   */
  public async registerUserV1(
    data?: CxoneUsermanagement_UserRegistrationRequest,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_RegisterUserResponse> {
    const path = `/user-management/v1/users`;
    return this.client.post<CxoneUsermanagement_RegisterUserResponse>(path, data, options);
  }

  /**
   * API to update user details
   * PUT /user-management/v1/users
   */
  public async updateUserV1(
    data?: CxoneUsermanagement_UserUpdateRequest,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_UpdateUserResponse> {
    const path = `/user-management/v1/users`;
    return this.client.put<CxoneUsermanagement_UpdateUserResponse>(path, data, options);
  }

  /**
   * Deactivates a user
   * POST /user-management/v1/users/deactivate
   */
  public async deactivateUser(
    data?: CxoneUsermanagement_UserDeactivateRequest,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_UserDeactivateResponse> {
    const path = `/user-management/v1/users/deactivate`;
    return this.client.post<CxoneUsermanagement_UserDeactivateResponse>(path, data, options);
  }

  /**
   * API to get user details by user Id
   * GET /user-management/v3/users/{userId}
   */
  public async getUserByIdV3(
    userId: string,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_UserResponseV3> {
    const path = `/user-management/v3/users/${encodeURIComponent(String(userId))}`;
    return this.client.get<CxoneUsermanagement_UserResponseV3>(path, options);
  }

  /**
   * Revive a user
   * POST /user-management/v1/users/{userId}/revive
   */
  public async reviveUser(
    userId: string,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_ReviveUserResponse> {
    const path = `/user-management/v1/users/${encodeURIComponent(String(userId))}/revive`;
    return this.client.post<CxoneUsermanagement_ReviveUserResponse>(path, undefined, options);
  }

  /**
   * Get user details as per given filters and fields
   * POST /user-management/v2/users/search
   */
  public async getUsersByCriteria(
    data?: CxoneUsermanagement_SearchRequest,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_UserSearchResponse> {
    const path = `/user-management/v2/users/search`;
    return this.client.post<CxoneUsermanagement_UserSearchResponse>(path, data, options);
  }

  /**
   * API search user identities by filter
   * GET /user-management/v2/users/identities
   */
  public async getUserIdentityList(
    options?: RequestOptions & {
      query?: { skip?: number; top?: number; orderBy?: string; fields?: string; filter?: string };
    },
  ): Promise<CxoneUsermanagement_UserIdentityListResponseV2> {
    const path = `/user-management/v2/users/identities`;
    return this.client.get<CxoneUsermanagement_UserIdentityListResponseV2>(path, options);
  }

  /**
   * Invite user By Email
   * POST /user-management/v2/users/inviteByEmail
   */
  public async inviteUserByEmail(
    data: CxoneUsermanagement_UserInvitationRequestEmail,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_BooleanResponse> {
    const path = `/user-management/v2/users/inviteByEmail`;
    return this.client.post<CxoneUsermanagement_BooleanResponse>(path, data, options);
  }

  /**
   * Invite user By User ID
   * POST /user-management/v2/users/inviteById
   */
  public async inviteUserById(
    data: CxoneUsermanagement_UserInvitationV2Request,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_BooleanResponse> {
    const path = `/user-management/v2/users/inviteById`;
    return this.client.post<CxoneUsermanagement_BooleanResponse>(path, data, options);
  }

  /**
   * API get basic identity of the user
   * GET /user-management/v1/users/{userId}/identities
   */
  public async getUserIdentity(
    userId: string,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_UserIdentityResponseV1> {
    const path = `/user-management/v1/users/${encodeURIComponent(String(userId))}/identities`;
    return this.client.get<CxoneUsermanagement_UserIdentityResponseV1>(path, options);
  }

  /**
   * Assign LA to user
   * PUT /user-management/v1/users/{userId}/login-authenticator
   */
  public async assignAuthenticatorV1(
    userId: string,
    data?: CxoneUsermanagement_AssignAuthenticatorRequest,
    options?: RequestOptions,
  ): Promise<CxoneUsermanagement_BulkEntityUserAssignResponse> {
    const path = `/user-management/v1/users/${encodeURIComponent(String(userId))}/login-authenticator`;
    return this.client.put<CxoneUsermanagement_BulkEntityUserAssignResponse>(path, data, options);
  }
}
