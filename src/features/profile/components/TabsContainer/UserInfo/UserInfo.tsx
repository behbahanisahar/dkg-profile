import { Box, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Book from '@material-ui/icons/Book';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Navigation from '@material-ui/icons/Navigation';
import Person from '@material-ui/icons/Person';
import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdbreact';
import React from 'react';
import './UserInfo.css';

export default function UserInfo() {
  interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  function TabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <Typography component="div" role="tabpanel" style={{ width: '100%' }} hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  function a11yProps(index: any) {
    return {
      'aria-controls': `vertical-tabpanel-${index}`,
      id: `vertical-tab-${index}`
    };
  }

  const [value, setValue] = React.useState(0);
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexGrow: 1
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
      }
    })
  );
  const classes = useStyles(useStyles);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} className={classes.tabs} aria-label="Vertical tabs example" style={{ borderLeft: '1px solid grey' }}>
        <Tab label="اطلاعات اصلی" {...a11yProps(0)} />
        <Tab label="اطلاعات شرکت" {...a11yProps(1)} />
        <Tab label="اطلاعات قرارداد" {...a11yProps(2)} />
        <Tab label="اطلاعات مالی" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography>
              <Person color="primary" />
              اطلاعات عمومی
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <MDBRow>
                <MDBCol md="3">
                  <MDBInput size="sm" label="نام" type="text" value="سحر" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="نام خانوادگی" value="بهبهانی" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="جنسیت" value="زن" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="نام پدر" value="محمد" disabled={true} />
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-n1  mt-lg-0">
                <MDBCol md="3">
                  <MDBInput size="sm" label="وضعیت تاهل " value="مجرد" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="تعداد فرزند " value="0" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="وضعیت خدمت " value="-" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="تاریخ تولد" value="1371/10/14" disabled={true} />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="3">
                  <MDBInput size="sm" label="محل تولد" value="تهران" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="مسلسل" value="-" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="شماره شناسنامه" value="0015366278" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="کد ملی" value="0015366278" disabled={true} />
                </MDBCol>
              </MDBRow>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>
              <Book color="primary" />
              اطلاعات تحصیلی
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <MDBRow>
                <MDBCol md="3">
                  <MDBInput size="sm" label="مدرک تحصیلی" value="کارشناسی ارشد" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="رشته تحصیلی" value="نرم افزار" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label=" گرایش" value="نرم افزار" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="محل تحصیل" value="تهران" disabled={true} />
                </MDBCol>
              </MDBRow>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography>
              <Navigation color="primary" />
              اطلاعات محل سکونت
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <MDBRow>
                <MDBCol md="3">
                  <MDBInput size="sm" label="شماره منزل" value="213242434" disabled={true} />
                </MDBCol>
                <MDBCol md="3">
                  <MDBInput size="sm" label="موبایل" value="09120286220" disabled={true} />
                </MDBCol>
                <MDBCol md="12">
                  <MDBInput size="sm" label="آدرس" value=" lorem epsum   ddddsfdsfsdffsdfs " disabled={true} />
                </MDBCol>
              </MDBRow>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Account Info
      </TabPanel>
      <TabPanel value={value} index={2}>
        S alary Info
      </TabPanel>
      <TabPanel value={value} index={3}>
        Issurance Info
      </TabPanel>
    </div>
  );
}
