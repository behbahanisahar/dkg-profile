import React from "react";
import UserInfoDTO from "../../../../../entities/UserProfile";
import DkgTextField from "../../../../../core/dkg-component/textField/textField";
import { MDBRow, MDBCol } from "mdbreact";
import { connect } from "react-redux";

interface IProps {
  UserInfo: UserInfoDTO;
}
class ContractInfoComponent extends React.Component<IProps> {
  public render() {
    return (
      <div>
        <MDBRow>
          <MDBCol md="3">
            <DkgTextField EnLabel="Job Post" Persianlabel="سمت" value="--" readonly={true} />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField EnLabel="Ensurance Number" Persianlabel="شماره بیمه" value="--" readonly={true} />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Persian Department"
              Persianlabel="تاریخ استخدام"
              value={this.props.UserInfo.DateOfEmployment}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Contract Finish Date"
              Persianlabel="تاریخ اتمام قرارداد"
              value="--"
              readonly={true}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="3">
            <DkgTextField EnLabel="Contract Type" Persianlabel="نوع قرارداد" value="--" readonly={true} />
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({
  UserInfo: state.UserInfo,
});
const ContractInfo = connect(
  mapStateToProps,
  null,
)(ContractInfoComponent);
export default ContractInfo;
