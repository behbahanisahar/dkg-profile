/* eslint-disable @typescript-eslint/interface-name-prefix */
import { Box, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Business from "@material-ui/icons/Business";
import ListAlt from "@material-ui/icons/ListAlt";
import Contacts from "@material-ui/icons/Contacts";
import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import { connect } from "react-redux";
import CompanyInfo from "./CompanyInfo/company-info";
import ContractInfo from "./ContractInfo/Contract-Info";

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
            <Tab label="اطلاعات اصلی" icon={<Contacts />} {...TabProps(0)} />
            {/* <Tab label="مدیران" icon={<FavoriteIcon />} {...TabProps(1)} />
            <Tab label="ارتقا" icon={<PersonPinIcon />} {...TabProps(2)} /> */}
            <Tab label="اطلاعات شرکت" icon={<Business />} {...TabProps(1)} />
            <Tab label="اطلاعات قرارداد" icon={<ListAlt />} {...TabProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <UserInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CompanyInfo />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ContractInfo />
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
