/* eslint-disable @typescript-eslint/camelcase */
import React, { useContext } from "react";
import { AppRestService } from "./services/AppService";
import { SPRestService, SPService } from "./services/SPService";
export interface AppStore {
  appService: any;
  spService: SPService;
}

export const AppContext = React.createContext<AppStore>({
  appService: new AppRestService(),
  spService: new SPRestService(),
});

export const useAppValue = () => useContext(AppContext);
