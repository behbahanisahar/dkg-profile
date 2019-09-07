/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable react/display-name */
import "../../assets/css/Main.css";
import "./App.css";
import ProfileContainer from "../../features/profile/components/ProfileContainer";
import React, { forwardRef } from "react";
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
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppRestService from "../../services/AppService";
import AppState, { AppContextProvider } from "./AppState";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ef5661" },
  },
  typography: {
    //  fontFamily: ["B Koodak"].join(","),
    //  fontSize: 16,
    //  htmlFontSize: 12.9,
  },
});

// type State = Readonly<typeof initialState>;

class App extends React.Component<object, AppState> {
  private AppRestService: AppRestService;
  public constructor(props: any) {
    super(props);
    this.AppRestService = new AppRestService();
    this.state = {
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
      UserInfo: {
        UserName: "Sahar Behbahani",
        FirstName: "sahar",
        LastName: "B",
      },
    };
  }
  public async componentDidMount() {
    const UserInfo = await this.AppRestService.getUserInfoDTO();
    this.setState(prevState => {
      return {
        ...prevState,
        UserInfo,
      };
    });
  }

  render() {
    // const MyContext = React.createContext(this.state);
    return (
      <AppContextProvider value={this.state}>
        <MuiThemeProvider theme={theme}>
          <div>
            <ProfileContainer />
          </div>
        </MuiThemeProvider>
      </AppContextProvider>
    );
  }
}

export default App;
