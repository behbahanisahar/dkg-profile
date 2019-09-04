/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";
import "../../assets/css/Main.css";
import "./App.css";
import ProfileContainer from "../../features/profile/components/ProfileContainer";
import AppRestService from "../../services/AppService";
import SPRestService from "./../../services/SPService";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
const initialState = {
  testText: "",
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
  tableIcons: {
    Add: forwardRef((props: any, ref: any) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props: any, ref: any) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props: any, ref: any) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props: any, ref: any) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props: any, ref: any) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props: any, ref: any) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props: any, ref: any) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props: any, ref: any) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props: any, ref: any) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props: any, ref: any) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props: any, ref: any) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props: any, ref: any) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props: any, ref: any) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props: any, ref: any) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props: any, ref: any) => <ViewColumn {...props} ref={ref} />),
  },
  updateGitHubEmail: (data: any) => {
    return (initialState.GitHubData.data.email = data);
  },
  UserInfo: [
    {
      Title: "",
      FirstName: "",
      Username: "",
    },
  ],
  columns: [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname", initialEditValue: "initial edit value" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
      lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
    },
  ],
  data: [
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
  ],
};

type State = Readonly<typeof initialState>;
export const MyContext = React.createContext(initialState);
class App extends Component<object, State> {
  private AppRestService: AppRestService;
  private SPRestService: SPRestService;
  public constructor(props: any) {
    super(props);
    this.AppRestService = new AppRestService();
    this.SPRestService = new SPRestService();
  }
  public async componentDidMount() {
    const GitHubData = await this.AppRestService.getGitHubData();
    const UserInfo = await this.SPRestService.getUserInfo("UserInfo");
    this.setState(prevState => {
      return {
        ...prevState,
        GitHubData,
        UserInfo,
      };
    });
  }
  readonly state: State = initialState;
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <div>
          <ProfileContainer />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
