import { textAlign } from "@material-ui/system";
import { MDBCard, MDBCol, MDBContainer, MDBMask, MDBRow } from "mdbreact";
import React from "react";
import proImage from "../../../assets/img/card-profile5-square.jpg";
import Header from "./Header/Header";
import TabsContainer from "./TabsContainer/TabsContainer";

const ProfileContainer: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <MDBContainer>
        <MDBMask overlay="black-light">
          <MDBCard className="Container">
            <img className="ProfileImage" src={proImage}></img>
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
