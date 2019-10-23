import "./App.less";
import "../../assets/css/dk-brand.less";
import ProfileContainer from "../../features/profile/components/ProfileContainer";
import React from "react";
import Util from "../../util/utilities";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppRestService from "../../services/AppService";
import AppState from "./AppState";
import Pages from "../../entities/Pages";
import MainPage from "../../features/mainPage/components/MainPage/MainPage";
import { connect } from "react-redux";
import IAppProps from "./AppProps";
import { setUserInfo } from "../../redux/actions";
import UserInfoDTO from "../../entities/UserProfile";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ef5661" },
  },
});

function mapDispatchToProps(dispatch: any) {
  return {
    setUserInfoProp: (myValue: UserInfoDTO) => dispatch(setUserInfo(myValue)),
  };
}

class MyAPP extends React.Component<IAppProps, AppState> {
  private AppRestService: AppRestService;
  private util: Util;
  public constructor(props: any) {
    super(props);
    this.AppRestService = new AppRestService();
    this.util = new Util();
    this.state = {
      page: "Main",
      Tasks: [],
    };
  }

  public async componentDidMount() {
    this.getServiceData();
    const Tasks = await this.AppRestService.getUserTasks();
    const page = this.util.getQueryStringValue("Page");
    this.setState(prevState => {
      return {
        ...prevState,
        page,
        Tasks,
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      // <AppContextProvider value={this.state}>
      <div className="kt-container  kt-grid__item kt-grid__item--fluid rtl">
        <MuiThemeProvider theme={theme}>
          <div>
            {this.state.page === Pages.Profile && <ProfileContainer />}
            {this.state.page === "" && <MainPage />}
          </div>
        </MuiThemeProvider>
      </div>
      //   </AppContextProvider>
    );
  }
  /********************************************************* */

  public getServiceData = async () => {
    await this.AppRestService.getUserInfoDTO().then((response: UserInfoDTO) => {
      console.log(response);
      this.props.setUserInfoProp(response);
    });
  };
}
const App = connect(
  null,
  mapDispatchToProps,
)(MyAPP);
export default App;
