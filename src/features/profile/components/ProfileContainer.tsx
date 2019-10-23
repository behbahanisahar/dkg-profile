import * as React from "react";
import { connect } from "react-redux";
import { MDBMask, MDBCard, MDBRow, MDBCol } from "mdbreact";
import UserInfoDTO from "../../../entities/UserProfile";
import TabsContainer from "./TabsContainer/TabsContainer";
import Sidebar from "../../../core/sidebar/sidebar";

interface IProps {
  UserInfo: UserInfoDTO;
}
const mapStateToProps = (state: any) => ({
  UserInfo: state.UserInfo,
});

class MyProfileContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  public async componentDidMount() {}
  public render() {
    return (
      <>
        <MDBRow>
          <MDBCol md="3">
            <Sidebar name="" />
          </MDBCol>
          <MDBCol md="9">
            <MDBMask overlay="black-light">
              <MDBCard className="Container">
                {/* <img src={ProfilePhoto} className="ProfileImage"></img>
                  <MDBRow>
                    <MDBCol md="4" />
                    <MDBCol style={{ textAlign: "center" }}>
                      <div>
                        <b>
                          <h3>{this.props.UserInfo.FirstName}</h3>
                        </b>
                        <p>{this.props.UserInfo.LastName}</p>
                      </div>
                    </MDBCol>
                    <MDBCol md="4" />
                  </MDBRow> */}

                <TabsContainer />
              </MDBCard>
            </MDBMask>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
}

const ProfileContainer = connect(
  mapStateToProps,
  null,
)(MyProfileContainer);
export default ProfileContainer;
