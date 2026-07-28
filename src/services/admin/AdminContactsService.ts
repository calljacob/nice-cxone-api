import { HttpClient } from "../../http.js";
import type { RequestOptions } from "../../types.js";

export interface AdminContacts_getEmailTranscriptResponse {
  emails: Array<{
    emailTypeId: number;
    sentDate: string;
    fromAddress: string;
    toAddress: string;
    ccAddress: string;
    bccAddress: string;
    subject: string;
    rawFileName?: string;
    bodyHtml: string;
    hasAttachments?: boolean;
    attachments?: Array<Record<string, any>>;
  }>;
}

export interface AdminContacts_getChatTranscriptResponse {
  messages: Array<{
    Text: string;
    TimeStamp: string;
    PartyType: string;
    Label: string;
    RoomId: number;
  }>;
}

export interface AdminContacts_postContactTagsRequest {
  tags: Array<{ tagId: number }>;
}

export interface AdminContacts_postContactTagsResponse {
  resultSet: any;
}

export interface AdminContacts_postContactMonitorRequest {
  phoneNumber: number;
}

export interface AdminContacts_getContactStateDescriptions {
  contactStateDescriptions: Array<{
    ContactStateCategory: string;
    ContactStateDescription: string;
    ContactStateId: number;
  }>;
}

export class AdminContactsService {
  constructor(private client: HttpClient) {}

  /**
   * Returns active Chat or SMS transcript.
   * GET /contacts/{contactId}/chat-transcript
   */
  public async chatTranscript(
    contactId: string,
    options?: RequestOptions,
  ): Promise<AdminContacts_getChatTranscriptResponse> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/chat-transcript`;
    return this.client.get<AdminContacts_getChatTranscriptResponse>(path, options);
  }

  /**
   * Returns disposition details for that particular digital/ACD contact id.
   * GET /contacts/{contactId}/disposition
   */
  public async getContactsIdDisposition(
    contactId: number,
    options?: RequestOptions,
  ): Promise<{
    dispositionId?: number;
    dispositionName?: string;
    dispositionByAgendId?: number;
    notes?: string;
    lastUpdated?: string;
  }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/disposition`;
    return this.client.get<{
      dispositionId?: number;
      dispositionName?: string;
      dispositionByAgendId?: number;
      notes?: string;
      lastUpdated?: string;
    }>(path, options);
  }

  /**
   * Returns historical chat transcript
   * GET /contacts/{contactId}/historical-chat-transcript
   */
  public async getHistoricalChatTranscript(
    contactId: string,
    options?: RequestOptions,
  ): Promise<{ transcript?: { cloudState?: string; transcript?: Array<Record<string, any>> } }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/historical-chat-transcript`;
    return this.client.get<{
      transcript?: { cloudState?: string; transcript?: Array<Record<string, any>> };
    }>(path, options);
  }

  /**
   * Returns an Email Transcript
   * GET /contacts/{contactId}/email-transcript
   */
  public async emailTranscript(
    contactId: string,
    options?: RequestOptions & { query?: { includeAttachments?: boolean } },
  ): Promise<AdminContacts_getEmailTranscriptResponse> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/email-transcript`;
    return this.client.get<AdminContacts_getEmailTranscriptResponse>(path, options);
  }

  /**
   * Returns a Contacts Files
   * GET /contacts/{contactId}/files
   */
  public async contactFiles(
    contactId: number,
    options?: RequestOptions & { query?: { fields?: string } },
  ): Promise<{
    files?: Array<{
      isDeleted: boolean;
      businessUnitId: number;
      fileName: string;
      fullFileName: string;
      weblink: boolean;
      contactId: number;
      createDate: string;
      modifiedDate: string;
      accessDate: string;
      authorId: number;
      modifiedId: number;
      size: number;
      physicalBytes: number;
      deleteDate: string;
      purposeId: number;
      purposeName: number;
      mailStatusId: number;
      mailStatusName: string;
    }>;
  }> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/files`;
    return this.client.get<{
      files?: Array<{
        isDeleted: boolean;
        businessUnitId: number;
        fileName: string;
        fullFileName: string;
        weblink: boolean;
        contactId: number;
        createDate: string;
        modifiedDate: string;
        accessDate: string;
        authorId: number;
        modifiedId: number;
        size: number;
        physicalBytes: number;
        deleteDate: string;
        purposeId: number;
        purposeName: number;
        mailStatusId: number;
        mailStatusName: string;
      }>;
    }>(path, options);
  }

  /**
   * Force a contact to be disconnected and to end
   * POST /contacts/{contactId}/end
   */
  public async endAContact(contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/end`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Starts monitoring a phone call
   * POST /contacts/{contactId}/monitor
   */
  public async monitorAContactCall(
    contactId: string,
    data?: AdminContacts_postContactMonitorRequest,
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/monitor`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Allows to begin the recording of an active phone call
   * POST /contacts/{contactId}/record
   */
  public async recordAContact(contactId: string, options?: RequestOptions): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/record`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *  Set Disposition For Contact
   * POST /contacts/{contactId}/set-disposition
   */
  public async postContactsIdSetDisposition(
    contactId: string,
    data: {
      dispositionInfo?: {
        skill: string;
        dispositionCode: string;
        callbackNumber?: string;
        callbackTime?: string;
        commitmentAmount?: string;
        notes?: string;
      };
    },
    options?: RequestOptions & { query?: { contactId: number } },
  ): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/set-disposition`;
    return this.client.post<any>(path, data, options);
  }

  /**
   * Assigns Tags to a Contact
   * POST /contacts/{contactId}/tags
   */
  public async assignTagsContact(
    contactId: string,
    data?: AdminContacts_postContactTagsRequest,
    options?: RequestOptions,
  ): Promise<AdminContacts_postContactTagsResponse> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/tags`;
    return this.client.post<AdminContacts_postContactTagsResponse>(path, data, options);
  }

  /**
   * Returns a list of contact states
   * GET /contact-state-descriptions
   */
  public async getContactStateDescriptions(
    options?: RequestOptions,
  ): Promise<AdminContacts_getContactStateDescriptions> {
    const path = `/contact-state-descriptions`;
    return this.client.get<AdminContacts_getContactStateDescriptions>(path, options);
  }

  /**
   * Returns a single contact state
   * GET /contact-state-descriptions/{contactStateId}
   */
  public async getContactStateById(
    contactStateId: number,
    options?: RequestOptions,
  ): Promise<AdminContacts_getContactStateDescriptions> {
    const path = `/contact-state-descriptions/${encodeURIComponent(String(contactStateId))}`;
    return this.client.get<AdminContacts_getContactStateDescriptions>(path, options);
  }

  /**
   *  Update Persistent Contact
   * PUT /persistent-contacts/{contactId}
   */
  public async putPersistentContactsId(
    contactId: string,
    data?: {
      persistentContact: {
        skillId?: number;
        targetAgentId?: number;
        initialPriority?: number;
        acceleration?: number;
        maxPriority?: number;
      };
    },
    options?: RequestOptions,
  ): Promise<any> {
    const path = `/persistent-contacts/${encodeURIComponent(String(contactId))}`;
    return this.client.put<any>(path, data, options);
  }

  /**
   * Create a Signal for a Contact
   * POST /interactions/{contactId}/signal
   */
  public async signalAContact(
    contactId: string,
    options?: RequestOptions & {
      query?: {
        p1?: string;
        p2?: string;
        p3?: string;
        p4?: string;
        p5?: string;
        p6?: string;
        p7?: string;
        p8?: string;
        p9?: string;
      };
    },
  ): Promise<any> {
    const path = `/interactions/${encodeURIComponent(String(contactId))}/signal`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   *   Returns SMS transcript
   * GET /contacts/{contactId}/sms-historical-transcript
   */
  public async getContactsIdSmsHistoricalTranscript(
    contactId: string,
    options?: RequestOptions & { query?: { businessUnitId: number } },
  ): Promise<any> {
    const path = `/contacts/${encodeURIComponent(String(contactId))}/sms-historical-transcript`;
    return this.client.get<any>(path, options);
  }

  /**
   *   Returns past SMS contacts
   * GET /contacts/sms-historical-contacts
   */
  public async getContactsSmsHistoricalContacts(
    options?: RequestOptions & { query?: { ani: number; skillId: number; businessUnitId: number } },
  ): Promise<any> {
    const path = `/contacts/sms-historical-contacts`;
    return this.client.get<any>(path, options);
  }
}
