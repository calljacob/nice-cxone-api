import { HttpClient } from "../../http.js";
import { RealtimedataRealtimeService } from "./RealtimedataRealtimeService.js";

export * from "./RealtimedataRealtimeService.js";

export class RealtimeDomain {
  public readonly dataRealtime: RealtimedataRealtimeService;

  constructor(client: HttpClient) {
    this.dataRealtime = new RealtimedataRealtimeService(client);
  }
}
