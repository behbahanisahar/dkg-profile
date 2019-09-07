import UserInfoDTO from "../../entities/UserProfile";
import React from "react";

export default interface AppState {
  tableIcons: any;
  columns: any[];
  data: any[];
  UserInfo: UserInfoDTO;
}

const intialAppState: AppState = {
  tableIcons: null,
  columns: [],
  data: [],
  UserInfo: { UserName: "", FirstName: "", LastName: "" },
};
const ctxt = React.createContext<AppState>(intialAppState);
export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;
