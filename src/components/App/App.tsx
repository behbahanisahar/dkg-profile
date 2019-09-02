/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React, { Component } from "react";
import "../../assets/css/Main.css";
import "./App.css";
import ProfileContainer from "../../features/profile/components/ProfileContainer";
import AppRestService from "../../services/AppService";

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
  updateGitHubEmail: (data: any) => {
    return (initialState.GitHubData.data.email = data);
  },
};

type State = Readonly<typeof initialState>;
export const MyContext = React.createContext(initialState);
class App extends Component<object, State> {
  private AppRestService: AppRestService;
  public constructor(props: any) {
    super(props);
    this.AppRestService = new AppRestService();
  }
  public async componentDidMount() {
    const GitHubData = await this.AppRestService.getGitHubData();
    this.setState(prevState => {
      return {
        ...prevState,
        GitHubData,
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
