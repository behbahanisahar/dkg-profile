/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext } from "react";
import { AppRestService } from "./services/AppService";
import { SPRestService, SPService } from "./services/SPService";
import GitHubData from "./entities/GitHubDataModel";
export interface AppStore {
  appService: any;
  spService: SPService;
  GitHubData: { data: GitHubData };
}

export const AppContext = React.createContext<AppStore>({
  appService: new AppRestService(),
  spService: new SPRestService(),
  GitHubData: {
    data: {
      login: "",
      id: 0,
      avatar_url: "",
      url: "",
      name: "",
      location: "",
      email: "",
      bio: "",
    },
  },
});

export const useAppValue = () => useContext(AppContext);
