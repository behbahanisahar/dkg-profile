/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MDBCol, MDBRow } from "mdbreact";
import React from "react";
import "./UserInfo.css";
import UserInfoDTO from "../../../../../entities/UserProfile";
import { connect } from "react-redux";
import DkgTextField from "../../../../../core/dkg-component/textField/textField";

interface IProps {
  UserInfo: UserInfoDTO;
}
const MyUserInfo: React.FunctionComponent<IProps> = (props: IProps) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.paper,
        // display: "flex",
        flexGrow: 1,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    }),
  );
  const classes = useStyles(useStyles);

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          اطلاعات عمومی
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MDBRow>
            <MDBCol md="3">
              <DkgTextField EnLabel="Name " Persianlabel="نام" value={props.UserInfo.FirstName} readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField
                EnLabel="LastName "
                Persianlabel="نام خانوادگی"
                value={props.UserInfo.LastName}
                readonly={true}
              />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField EnLabel="Gender " Persianlabel="جنسیت" value={props.UserInfo.Gender} readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField
                EnLabel="Father Name "
                Persianlabel="نام پدر"
                value={props.UserInfo.FatherName}
                readonly={true}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-n1  mt-lg-0">
            <MDBCol md="3">
              <DkgTextField EnLabel="Marital Status" Persianlabel="وضعیت تاهل" value="--" readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField EnLabel="Number of child" Persianlabel="تعداد فرزند" value="--" readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField EnLabel="Military status" Persianlabel="وضعیت خدمت" value="--" readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField
                EnLabel="Date of Birth"
                Persianlabel="تاریخ تولد"
                value={props.UserInfo.StrBirthDate}
                readonly={true}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="3">
              <DkgTextField
                EnLabel="place of Birth"
                Persianlabel="محل تولد"
                value={props.UserInfo.BirthPlace}
                readonly={true}
              />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField
                EnLabel="Birth Id"
                Persianlabel="شماره شناسنامه"
                value={props.UserInfo.BirthId}
                readonly={true}
              />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField
                EnLabel="National Id"
                Persianlabel="کد ملی"
                value={props.UserInfo.NationalId}
                readonly={true}
              />
            </MDBCol>
          </MDBRow>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <div>اطلاعات تحصیلی</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MDBRow>
            <MDBCol md="3">
              <DkgTextField EnLabel="Diploma" Persianlabel="مدرک تحصیلی" value="--" readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField EnLabel="Major" Persianlabel="رشته تحصیلی" value="--" readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField EnLabel="Orientation" Persianlabel="گرایش " value="--" readonly={true} />
            </MDBCol>
            <MDBCol md="3">
              <DkgTextField EnLabel="Education Place" Persianlabel="محل تحصیل" value="--" readonly={true} />
            </MDBCol>
          </MDBRow>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
          <div>اطلاعات محل سکونت</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <MDBRow>
              <MDBCol md="3">
                <DkgTextField EnLabel="Telephone" Persianlabel="شماره منزل" value="--" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField
                  EnLabel="Mobile"
                  Persianlabel="موبایل"
                  value={props.UserInfo.MobileNumber}
                  readonly={true}
                />
              </MDBCol>
              <MDBCol md="12">
                <DkgTextField
                  EnLabel="Address"
                  Persianlabel="آدرس"
                  value={props.UserInfo.FullAddress}
                  readonly={true}
                />
              </MDBCol>
            </MDBRow>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  UserInfo: state.UserInfo,
});

export default connect(
  mapStateToProps,
  null,
)(MyUserInfo);
