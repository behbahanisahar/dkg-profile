import * as React from "react";
import { AppContextConsumer } from "../../../../components/App/AppState";
import "./ProfileHistory.css";
import { MDBCard, MDBRow, MDBCardHeader, MDBCol, MDBBtn } from "mdbreact";

class ProfileHistory extends React.Component<{}, object> {
  public constructor(props: any) {
    super(props);
  }
  public async componentDidMount() {}
  public render() {
    return (
      <AppContextConsumer>
        {context => (
          <>
            <div>
              <MDBCard>
                <MDBCardHeader>
                  <MDBRow>
                    <MDBCol md="3">
                      <img className="profile-img" src={context.UserInfo.AvatarUrl} />
                    </MDBCol>
                    <MDBCol className="user-info" md="5">
                      <h4 style={{ fontWeight: "bold" }}>{context.UserInfo.FirstName}</h4>

                      <h6 className="jobstatus">{context.UserInfo.JobStatus}</h6>
                    </MDBCol>
                    <MDBCol />
                  </MDBRow>
                  <MDBRow className="detail">
                    <MDBCol md="3">Email: </MDBCol>
                    <MDBCol> {context.UserInfo.EmailAddress}</MDBCol>
                  </MDBRow>
                  <MDBRow className="detail">
                    <MDBCol md="4">Mobile Number: </MDBCol>
                    <MDBCol> {context.UserInfo.MobileNumber}</MDBCol>
                  </MDBRow>
                  <MDBRow className="detail">
                    <MDBCol md="3">Address: </MDBCol>
                    <MDBCol> {context.UserInfo.FullAddress}</MDBCol>
                  </MDBRow>
                  <MDBBtn className="detail-btn"> Profile Overview</MDBBtn>
                </MDBCardHeader>
              </MDBCard>
            </div>
          </>
        )}
      </AppContextConsumer>
    );
  }
}

export default ProfileHistory;
