import { HttpClient } from "../../http.js";
import { MediaplaybackMediaplaybackService } from "./MediaplaybackMediaplaybackService.js";
import { MediaplaybackMediadownloadService } from "./MediaplaybackMediadownloadService.js";

export * from "./MediaplaybackMediaplaybackService.js";
export * from "./MediaplaybackMediadownloadService.js";

export class MediaPlaybackDomain {
  public readonly mediaplayback: MediaplaybackMediaplaybackService;
  public readonly mediadownload: MediaplaybackMediadownloadService;

  constructor(client: HttpClient) {
    this.mediaplayback = new MediaplaybackMediaplaybackService(client);
    this.mediadownload = new MediaplaybackMediadownloadService(client);
  }
}
