import { ISessionInfo, Session } from "@inrupt/solid-client-authn-browser";

export class BrowserSession {
  private readonly session: Session;
  private readonly _authenticatedFetch: (
    url: RequestInfo,
    init?: RequestInit | undefined
  ) => Promise<Response>;

  get authenticatedFetch(): (
    url: RequestInfo,
    init?: RequestInit | undefined
  ) => Promise<Response> {
    return this._authenticatedFetch;
  }

  constructor() {
    this.session = new Session();
    this._authenticatedFetch = this.session.fetch;
  }

  async handleIncomingRedirect() {
    return this.session.handleIncomingRedirect({
      // session restore disabled, due to
      // https://github.com/inrupt/solid-client-authn-js/issues/1647
      restorePreviousSession: false,
    });
  }

  async login(oidcIssuer: string) {
    return this.session.login({
      oidcIssuer,
      redirectUrl: window.location.href,
      clientName: `Pod OS at ${window.location.host}`,
    });
  }

  async logout() {
    return this.session.logout();
  }

  async trackSession(callback: (session: ISessionInfo) => unknown) {
    this.session.onLogin(() => callback(this.session.info));
    this.session.onLogout(() => callback(this.session.info));
    this.session.onSessionRestore(() => callback(this.session.info));
    callback(this.session.info);
  }
}
