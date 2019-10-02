/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable react/display-name */
import "../../assets/css/Main.css";
import "./App.css";
import ProfileContainer from "../../features/profile/components/ProfileContainer";
import React from "react";
import Util from "../../util/utilities";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppRestService from "../../services/AppService";
import AppState, { AppContextProvider } from "./AppState";
import Pages from "../../entities/Pages";
import MainPage from "../../features/mainPage/components/MainPage/MainPage";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ef5661" },
  },
});

class App extends React.Component<object, AppState> {
  private AppRestService: AppRestService;
  private util: Util;
  public constructor(props: any) {
    super(props);
    this.AppRestService = new AppRestService();
    this.util = new Util();
    this.state = {
      UserInfo: {
        UserName: "sa.behbahani",
        FirstName: "sahar",
        LastName: "behbahani",
        AvatarUrl: "http://hq-spsrv03:90/SiteAssets/pic.png",
        JobStatus: "sharepoint developer",
        EmailAddress: "sa.behbahani@digikala.com",
        MobileNumber: "09120286220",
        FullAddress: "saadatabad str, kaj sq,Tehran,Iran",
      },
      page: "Main",
      Tasks: [],
    };
  }

  public async componentDidMount() {
    const UserInfo = await this.AppRestService.getUserInfoDTO();
    const Tasks = await this.AppRestService.getUserTasks();
    const page = this.util.getQueryStringValue("Page");
    this.setState(prevState => {
      return {
        ...prevState,
        UserInfo,
        page,
        Tasks,
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      <AppContextProvider value={this.state}>
        <MuiThemeProvider theme={theme}>
          <div>
            {this.state.page === Pages.Profile && <ProfileContainer />}
            {this.state.page === "" && <MainPage />}
          </div>
        </MuiThemeProvider>
      </AppContextProvider>
    );
  }
}

export default App;
