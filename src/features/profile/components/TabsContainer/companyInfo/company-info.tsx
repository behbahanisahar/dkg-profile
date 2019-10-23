import * as React from "react";
import { connect } from "react-redux";
import UserInfoDTO from "../../../../../entities/UserProfile";
import { MDBRow, MDBCol } from "mdbreact";
import DkgTextField from "../../../../../core/dkg-component/textField/textField";

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
              EnLabel="Persian Department"
              Persianlabel="واحد فارسی "
              value={this.props.UserInfo.PersianDepartment}
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
            <DkgTextField EnLabel="Division" Persianlabel="قسمت" value="" readonly={true} />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Sub Division"
              Persianlabel="زیر قسمت"
              value={this.props.UserInfo.SubDivs}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Work Place"
              Persianlabel="محل فعالیت"
              value={this.props.UserInfo.WorkPlace}
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
