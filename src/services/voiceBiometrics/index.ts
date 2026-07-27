import { HttpClient } from "../../http.js";
import { VoicebiometrichubService } from "./VoicebiometrichubService.js";

export * from "./VoicebiometrichubService.js";

export class VoiceBiometricsDomain {
  public readonly voicebiometrichub: VoicebiometrichubService;

  constructor(client: HttpClient) {
    this.voicebiometrichub = new VoicebiometrichubService(client);
  }
}
