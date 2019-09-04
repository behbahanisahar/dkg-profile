import { MDBCard, MDBCol, MDBContainer, MDBMask, MDBRow } from "mdbreact";
import React from "react";
import Header from "./Header/Header";
import TabsContainer from "./TabsContainer/TabsContainer";

import { MyContext } from "../../../components/App";

const ProfileContainer: React.FC = () => {
  return (
    <div>
      <MyContext.Consumer>
        {context => (
          <>
            <Header />
            <MDBContainer>
              <MDBMask overlay="black-light">
                <MDBCard className="Container">
                  <img className="ProfileImage" src={context.GitHubData.data.avatar_url}></img>
                  <MDBRow>
                    <MDBCol md="4" />
                    <MDBCol style={{ textAlign: "center" }}>
                      <div>
                        <b>
                          <h3>{context.UserInfo[0].FirstName}</h3>
                        </b>
                        <p>{context.GitHubData.data.bio}</p>
                        <p>{context.GitHubData.data.email}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" />
                  </MDBRow>

                  <TabsContainer />
                </MDBCard>
              </MDBMask>
            </MDBContainer>
          </>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default ProfileContainer;
