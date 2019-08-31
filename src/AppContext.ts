import { sp } from "@pnp/sp";
import React, { useContext } from "react";
import { AppRestService, AppService } from "./services/AppService";
import { SPRestService, SPService } from "./services/SPService";

sp.setup({
  sp: {
    baseUrl: "../",
    headers: {
      Accept: "application/json;odata=verbose",
    },
  },
});

// tslint:disable-next-line: interface-name
export interface AppStore {
  appService: AppService;
  spService: SPService;
}

export const AppContext = React.createContext<AppStore>({
  appService: new AppRestService(),
  spService: new SPRestService(),
});

export const useAppValue = () => useContext(AppContext);
