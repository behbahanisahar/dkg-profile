import * as React from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBMask, MDBCard, MDBRow, MDBCol } from "mdbreact";
import ProfilePhoto from "../../../assets/img/card-profile5-square.jpg";
import UserInfoDTO from "../../../entities/UserProfile";
import TabsContainer from "./TabsContainer/TabsContainer";

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
      <div>
        <MDBContainer md="12" xs="12">
          <MDBMask overlay="black-light">
            <MDBCard className="Container">
              <img src={ProfilePhoto} className="ProfileImage"></img>
              <MDBRow>
                <MDBCol md="4" />
                <MDBCol style={{ textAlign: "center" }}>
                  <div>
                    <b>
                      <h3>{this.props.UserInfo.FirstName}</h3>
                    </b>
                    <p>{this.props.UserInfo.LastName}</p>
                    <p>{this.props.UserInfo.UserName}</p>
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
  }
}

const ProfileContainer = connect(
  mapStateToProps,
  null,
)(MyProfileContainer);
export default ProfileContainer;
