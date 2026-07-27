import { HttpClient } from "../../http.js";
import { DigitalAttachmentService } from "./DigitalAttachmentService.js";
import { DigitalMessageService } from "./DigitalMessageService.js";
import { DigitalChannelService } from "./DigitalChannelService.js";
import { DigitalContactService } from "./DigitalContactService.js";
import { DigitalTagService } from "./DigitalTagService.js";
import { DigitalCustomfieldsService } from "./DigitalCustomfieldsService.js";
import { DigitalCustomerService } from "./DigitalCustomerService.js";
import { DigitalRoutingqueueService } from "./DigitalRoutingqueueService.js";
import { DigitalVerificationtokenService } from "./DigitalVerificationtokenService.js";
import { DigitalThreadService } from "./DigitalThreadService.js";

export * from "./DigitalAttachmentService.js";
export * from "./DigitalMessageService.js";
export * from "./DigitalChannelService.js";
export * from "./DigitalContactService.js";
export * from "./DigitalTagService.js";
export * from "./DigitalCustomfieldsService.js";
export * from "./DigitalCustomerService.js";
export * from "./DigitalRoutingqueueService.js";
export * from "./DigitalVerificationtokenService.js";
export * from "./DigitalThreadService.js";

export class DigitalEngagementDomain {
  public readonly attachment: DigitalAttachmentService;
  public readonly message: DigitalMessageService;
  public readonly channel: DigitalChannelService;
  public readonly contact: DigitalContactService;
  public readonly tag: DigitalTagService;
  public readonly customfields: DigitalCustomfieldsService;
  public readonly customer: DigitalCustomerService;
  public readonly routingqueue: DigitalRoutingqueueService;
  public readonly verificationtoken: DigitalVerificationtokenService;
  public readonly thread: DigitalThreadService;

  constructor(client: HttpClient) {
    this.attachment = new DigitalAttachmentService(client);
    this.message = new DigitalMessageService(client);
    this.channel = new DigitalChannelService(client);
    this.contact = new DigitalContactService(client);
    this.tag = new DigitalTagService(client);
    this.customfields = new DigitalCustomfieldsService(client);
    this.customer = new DigitalCustomerService(client);
    this.routingqueue = new DigitalRoutingqueueService(client);
    this.verificationtoken = new DigitalVerificationtokenService(client);
    this.thread = new DigitalThreadService(client);
  }
}
