/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Box, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import HelpIcon from "@material-ui/icons/Help";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import { connect } from "react-redux";
import CompanyInfo from "./companyInfo/company-info";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const mapStateToProps = (state: any) => ({
  UserInfo: state.UserInfo,
});
const MyTabsContainer: React.FC = () => {
  const [value, setValue] = React.useState(0);
  function TabProps(index: any) {
    return {
      id: `scrollable-force-tab-${index}`,
      // tslint:disable-next-line: object-literal-sort-keys
      "aria-controls": `scrollable-force-tabpanel-${index}`,
    };
  }
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }
  return (
    <div className="App">
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            style={{ margin: "auto" }}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="اطلاعات اصلی" icon={<PhoneIcon />} {...TabProps(0)} />
            {/* <Tab label="مدیران" icon={<FavoriteIcon />} {...TabProps(1)} />
            <Tab label="ارتقا" icon={<PersonPinIcon />} {...TabProps(2)} /> */}
            <Tab label="اطلاعات شرکت" icon={<HelpIcon />} {...TabProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <UserInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CompanyInfo />
        </TabPanel>
      </div>
    </div>
  );
  function TabPanel(props: TabPanelProps) {
    // tslint:disable-next-line: no-shadowed-variable
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
};

const TabsContainer = connect(
  mapStateToProps,
  null,
)(MyTabsContainer);
export default TabsContainer;
