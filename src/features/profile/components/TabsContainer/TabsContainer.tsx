import { Box, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HelpIcon from "@material-ui/icons/Help";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import PhoneIcon from "@material-ui/icons/Phone";
import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import Editable from "../Table/Table";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabsContainer: React.FC = () => {
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
            <Tab label="اطلاعات پرسنلی" icon={<PhoneIcon />} {...TabProps(0)} />
            <Tab label="مدیران" icon={<FavoriteIcon />} {...TabProps(1)} />
            <Tab label="ارتقا" icon={<PersonPinIcon />} {...TabProps(2)} />
            <Tab label="مالی" icon={<HelpIcon />} {...TabProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <UserInfo />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Editable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          PROMOTION
        </TabPanel>
        <TabPanel value={value} index={3}>
          INFO CHARGE
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

export default TabsContainer;
