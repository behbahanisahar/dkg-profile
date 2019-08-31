import { MDBCard, MDBCol, MDBContainer, MDBMask, MDBRow } from "mdbreact";
import React, { useState } from "react";
import Header from "./Header/Header";
import TabsContainer from "./TabsContainer/TabsContainer";
import { useAppValue } from "../../../AppContext";
import { useAsyncEffect } from "../../../util/hooks";

const ProfileContainer: React.FC = () => {
  const appStore = useAppValue();
  const [Image, setTheAnswer] = useState("");
  useAsyncEffect(async () => {
    await appStore.appService.getTheAnswerToLifeTheUniverseAndEverything().then(x => {
      setTheAnswer(x.data.avatar_url);
    });
  });
  return (
    <div>
      <Header />
      <MDBContainer>
        <MDBMask overlay="black-light">
          <MDBCard className="Container">
            <img className="ProfileImage" src={Image}></img>
            <MDBRow>
              <MDBCol md="4" />
              <MDBCol style={{ textAlign: "center" }}>
                <div>
                  <b>
                    <h3>سحر بهبهانی</h3>
                  </b>
                  <p>sharepoint developer</p>
                  <p>SA.BEHBAHANI@DIGIKALA.COM</p>
                </div>
              </MDBCol>
              <MDBCol md="4" />
            </MDBRow>

            <TabsContainer />
          </MDBCard>
        </MDBMask>
      </MDBContainer>
    </div>
  );
};

export default ProfileContainer;
