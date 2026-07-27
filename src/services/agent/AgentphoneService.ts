import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class AgentphoneService {
  constructor(private client: HttpClient) {}

  /**
   * Dial agent phone
   * POST /agent-sessions/{sessionId}/agent-phone/dial
   */
  public async dialAgentPhone(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/agent-phone/dial`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Mute agent phone
   * POST /agent-sessions/{sessionId}/agent-phone/mute
   */
  public async muteAgentPhone(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/agent-phone/mute`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Unmute agent leg
   * POST /agent-sessions/{sessionId}/agent-phone/unmute
   */
  public async unmuteAgentLeg(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/agent-phone/unmute`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Ends the agent's phone call
   * POST /agent-sessions/{sessionId}/agent-phone/end
   */
  public async disconnectAgentPhone(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/agent-phone/end`;
    return this.client.post<any>(path, undefined, options);
  }
}
