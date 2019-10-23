/* eslint-disable @typescript-eslint/interface-name-prefix */
import {
  Box,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Book from "@material-ui/icons/Book";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Navigation from "@material-ui/icons/Navigation";
import Person from "@material-ui/icons/Person";
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
  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        style={{ width: "100%" }}
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  function a11yProps(index: any) {
    return {
      "aria-controls": `vertical-tabpanel-${index}`,
      id: `vertical-tab-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        flexGrow: 1,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    }),
  );
  const classes = useStyles(useStyles);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        aria-label="Vertical tabs example"
        style={{ borderLeft: "1px solid grey" }}
      >
        <Tab label="اطلاعات اصلی" {...a11yProps(0)} />
        <Tab label="اطلاعات شرکت" {...a11yProps(1)} />
        <Tab label="اطلاعات قرارداد" {...a11yProps(2)} />
        <Tab label="اطلاعات مالی" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Person color="primary" />
            اطلاعات عمومی
            <DkgTextField EnLabel="test label " Persianlabel="تست" value="test value" readonly={true} />
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
                <DkgTextField EnLabel="Marital Status" Persianlabel="وضعیت تاهل" value="" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField EnLabel="Number of child" Persianlabel="تعداد فرزند" value="" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField EnLabel="Military status" Persianlabel="وضعیت خدمت" value="" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField
                  EnLabel="Date of Birth"
                  Persianlabel="تاریخ تولد"
                  value={props.UserInfo.BirthDate}
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
                <DkgTextField EnLabel="" Persianlabel="مسلسل" value="" readonly={true} />
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
            <div>
              <Book color="primary" />
              اطلاعات تحصیلی
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MDBRow>
              <MDBCol md="3">
                <DkgTextField EnLabel="Diploma" Persianlabel="مدرک تحصیلی" value="" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField EnLabel="Major" Persianlabel="رشته تحصیلی" value="" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField EnLabel="Orientation" Persianlabel="گرایش " value="" readonly={true} />
              </MDBCol>
              <MDBCol md="3">
                <DkgTextField EnLabel="Education Place" Persianlabel="محل تحصیل" value="" readonly={true} />
              </MDBCol>
            </MDBRow>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <div>
              <Navigation color="primary" />
              اطلاعات محل سکونت
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <MDBRow>
                <MDBCol md="3">
                  <DkgTextField EnLabel="Telephone" Persianlabel="شماره منزل" value="" readonly={true} />
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MDBRow>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Persian Department"
              Persianlabel="واحد فارسی"
              value={props.UserInfo.Department}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Department"
              Persianlabel="واحد انگلیسی"
              value={props.UserInfo.Department}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Persian Department"
              Persianlabel="واحد فارسی "
              value={props.UserInfo.PersianDepartment}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Sub-Department"
              Persianlabel="دپارتمان زیرمجموعه"
              value={props.UserInfo.SubDept}
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
              value={props.UserInfo.SubDivs}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField
              EnLabel="Work Place"
              Persianlabel="محل فعالیت"
              value={props.UserInfo.WorkPlace}
              readonly={true}
            />
          </MDBCol>
          <MDBCol md="3">
            <DkgTextField EnLabel="Email" Persianlabel="ایمیل" value={props.UserInfo.EmailAddress} readonly={true} />
          </MDBCol>
        </MDBRow>
      </TabPanel>
      <TabPanel value={value} index={2}>
        S alary Info
      </TabPanel>
      <TabPanel value={value} index={3}>
        Issurance Info
      </TabPanel>
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
