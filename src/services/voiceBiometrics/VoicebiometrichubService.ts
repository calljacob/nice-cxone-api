import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export type Voicebiometrichub_VoiceBiometricPrintStatusResponse = {
  personId: string;
  contactId: number;
  voiceBiometricStatus: "NotEnrolled" | "Enrolled" | "OptOut" | "ConsentDenied" | "Error";
  scriptParamsJson?: Record<string, any>;
  branchName: string;
  message?: string;
};

export interface Voicebiometrichub_VoiceBiometricAuthActionRequest {
  contactId: number;
  PersonId: string;
  RequestType: number;
  ScriptParamsJson?: Record<string, any>;
}

export interface Voicebiometrichub_VoiceBiometricAuthActionResponse {
  personId: string;
  contactId: number;
  branchName: string;
  scriptParamsJson?: Record<string, any>;
  message?: string;
}

export interface Voicebiometrichub_VoiceBiometricResultResponse {
  personId: string;
  contactId: number;
  branchName: string;
  voiceBioResult: number;
  decisionType?: string;
  scriptParamsJson?: Record<string, any>;
  message?: string;
}

export interface Voicebiometrichub_HealthCheckResponse {
  status: string;
  timestamp: string;
}

export interface Voicebiometrichub_ErrorResponse {
  error?: string;
  message?: string;
  details?: Record<string, any>;
}

export class VoicebiometrichubService {
  constructor(private client: HttpClient) {}

  /**
   * Get Voice Biometric Print Status
   * GET /voice-biometric-hub/v1/voice-print-status
   */
  public async getVoiceBiometricPrintStatus(
    options?: RequestOptions & {
      query?: { contactId: number; PersonId: string; ScriptParamsJson?: Record<string, any> };
    },
  ): Promise<Voicebiometrichub_VoiceBiometricPrintStatusResponse> {
    const path = `/voice-biometric-hub/v1/voice-print-status`;
    return this.client.get<Voicebiometrichub_VoiceBiometricPrintStatusResponse>(path, options);
  }

  /**
   * New in 26.3: Perform Voice Biometric Action
   * POST /voice-biometric-hub/v1/perform-action
   */
  public async voiceBiometricAuthAction(
    data: Voicebiometrichub_VoiceBiometricAuthActionRequest,
    options?: RequestOptions,
  ): Promise<Voicebiometrichub_VoiceBiometricAuthActionResponse> {
    const path = `/voice-biometric-hub/v1/perform-action`;
    return this.client.post<Voicebiometrichub_VoiceBiometricAuthActionResponse>(
      path,
      data,
      options,
    );
  }

  /**
   * New in 26.3: Long Poll Voice Biometric Result
   * GET /voice-biometric-hub/v1/result
   */
  public async getVoiceBiometricResultLongPoll(
    options?: RequestOptions & {
      query?: { contactId?: number; PersonId: string; ScriptParamsJson?: Record<string, any> };
    },
  ): Promise<Voicebiometrichub_VoiceBiometricResultResponse> {
    const path = `/voice-biometric-hub/v1/result`;
    return this.client.get<Voicebiometrichub_VoiceBiometricResultResponse>(path, options);
  }

  /**
   * Health Check
   * GET /voice-biometric-hub/v1/health-check
   */
  public async healthCheck(
    options?: RequestOptions,
  ): Promise<Voicebiometrichub_HealthCheckResponse> {
    const path = `/voice-biometric-hub/v1/health-check`;
    return this.client.get<Voicebiometrichub_HealthCheckResponse>(path, options);
  }
}
