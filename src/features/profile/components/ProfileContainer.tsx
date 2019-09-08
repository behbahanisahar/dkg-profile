import { MDBCard, MDBCol, MDBContainer, MDBMask, MDBRow } from "mdbreact";
import React from "react";
import Header from "./Header/Header";
import TabsContainer from "./TabsContainer/TabsContainer";
import { AppContextConsumer } from "../../../components/App/AppState";
import Chat from "./chat";

const ProfileContainer: React.FC = () => {
  return (
    <div>
      <AppContextConsumer>
        {context => (
          <>
            <Header />
            <MDBContainer>
              <MDBMask overlay="black-light">
                <MDBCard className="Container">
                  <img className="ProfileImage"></img>
                  <MDBRow>
                    <MDBCol md="4" />
                    <MDBCol style={{ textAlign: "center" }}>
                      <div>
                        <b>
                          <h3>{context.UserInfo.FirstName}</h3>
                        </b>
                        <p>{context.UserInfo.LastName}</p>
                        <p>{context.UserInfo.UserName}</p>
                        <Chat />
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
      </AppContextConsumer>
    </div>
  );
};

export default ProfileContainer;
