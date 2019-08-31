import axios from "axios";

export class AppRestService implements AppService {
  private _webFullUrl: string | undefined;

  public constructor(webFullUrl?: string) {
    if (!webFullUrl) {
      webFullUrl = window.location.href;
    }

    this._webFullUrl = webFullUrl;
  }

  public get webFullUrl() {
    return this._webFullUrl;
  }

  public async getTheAnswerToLifeTheUniverseAndEverything() {
    return await axios.get("https://api.github.com/users/behbahanisahar");
  }
}

export interface AppService {
  getTheAnswerToLifeTheUniverseAndEverything(): Promise<any>;
}
