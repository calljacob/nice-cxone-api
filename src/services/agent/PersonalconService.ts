import { HttpClient } from "../../http.js";
import { RequestOptions } from "../../types.js";



export class PersonalconService {
  constructor(private client: HttpClient) {}

  /**
   * Log into a dialer campaign
   * POST /agent-sessions/{sessionId}/dialer-login
   */
  public async dialerLogon(sessionId: string, options?: RequestOptions & { query?: { skillName: string; } }): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/dialer-login`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Log out of a dialer campaign
   * POST /agent-sessions/{sessionId}/dialer-logout
   */
  public async dialerLogout(sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/dialer-logout`;
    return this.client.post<any>(path, undefined, options);
  }

  /**
   * Snooze a Preview contact.
   * POST /agent-sessions/{sessionId}/interactions/{contactId}/snooze
   */
  public async personalConSnoozes(contactId: number, sessionId: string, options?: RequestOptions): Promise<any> {
    const path = `/agent-sessions/${encodeURIComponent(String(sessionId))}/interactions/${encodeURIComponent(String(contactId))}/snooze`;
    return this.client.post<any>(path, undefined, options);
  }
}
