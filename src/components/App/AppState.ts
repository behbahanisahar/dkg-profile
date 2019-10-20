import React from "react";
import UserTasks from "../../entities/UserTasks";

export default interface AppState {
  Tasks: UserTasks[];
  // text: string;
  // changeText: any;
  page?: string;
}

const intialAppState: AppState = {
  Tasks: [],
  // text: "",
  // changeText: "",
  page: "",
};
export const ctxt = React.createContext<AppState>(intialAppState);
export const AppContextProvider = ctxt.Provider;
export const AppContextConsumer = ctxt.Consumer;
