import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface DataextractionDataextraction_exportRequest {
  entityName?: string;
  version?: string;
  startDate?: string;
  endDate?: string;
}

export type DataextractionDataextraction_jobState = {
  id?: string;
  status?: "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | "EXPIRED";
};

export interface DataextractionDataextraction_jobsResponse {
  jobs?: Array<DataextractionDataextraction_jobState>;
}

export interface DataextractionDataextraction_jobResponse {
  jobStatus?: DataextractionDataextraction_jobStatus;
}

export interface DataextractionDataextraction_jobResult {
  url?: string;
  errorMessage?: string;
}

export type DataextractionDataextraction_jobStatus = {
  id?: string;
  status?: "RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELLED" | "EXPIRED";
  result?: DataextractionDataextraction_jobResult;
};

export class DataextractionDataextractionService {
  constructor(private client: HttpClient) {}

  /**
   * Gets status for all jobs.
   * GET /data-extraction/v1/jobs
   */
  public async getAllJobs(
    options?: RequestOptions,
  ): Promise<DataextractionDataextraction_jobsResponse> {
    const path = `/data-extraction/v1/jobs`;
    return this.client.get<DataextractionDataextraction_jobsResponse>(path, options);
  }

  /**
   * Prepares requested data for extraction.
   * POST /data-extraction/v1/jobs
   */
  public async extractData(
    data: DataextractionDataextraction_exportRequest,
    options?: RequestOptions,
  ): Promise<string> {
    const path = `/data-extraction/v1/jobs`;
    return this.client.post<string>(path, data, options);
  }

  /**
   * Gets a specific job status.
   * GET /data-extraction/v1/jobs/{jobId}
   */
  public async getJobStatus(
    jobId: string,
    options?: RequestOptions,
  ): Promise<DataextractionDataextraction_jobResponse> {
    const path = `/data-extraction/v1/jobs/${encodeURIComponent(String(jobId))}`;
    return this.client.get<DataextractionDataextraction_jobResponse>(path, options);
  }
}
