import React from "react";
import UserInfoDTO from "../../../../../entities/UserProfile";
import DkgTextField from "../../../../../core/dkg-component/textField/textField";
import { MDBRow, MDBCol } from "mdbreact";
import { connect } from "react-redux";

interface IProps {
  UserInfo: UserInfoDTO;
}
class CompanyInfoComponent extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <MDBRow>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Persian Department"
              Persianlabel="واحد فارسی"
              value={this.props.UserInfo.Department}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Department"
              Persianlabel="واحد انگلیسی"
              value={this.props.UserInfo.Department}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Location"
              Persianlabel="محل فعالیت"
              value={this.props.UserInfo.WorkPlace}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Sub-Department"
              Persianlabel="دپارتمان زیرمجموعه"
              value={this.props.UserInfo.SubDept}
              readonly={true}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="3">
            <DkgTextField EnLabel="Division" Persianlabel="بخش" value="--" readonly={true} />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Sub Division"
              Persianlabel="زیر بخش"
              value={this.props.UserInfo.SubDivs}
              readonly={true}
            />
          </MDBCol>

          <MDBCol md="3">
            <DkgTextField
              EnLabel="Email"
              Persianlabel="ایمیل"
              value={this.props.UserInfo.EmailAddress}
              readonly={true}
            />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  UserInfo: state.UserInfo,
});
const CompanyInfo = connect(
  mapStateToProps,
  null,
)(CompanyInfoComponent);
export default CompanyInfo;
