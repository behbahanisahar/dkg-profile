import React from "react";
import TaskCartable from "../Tasks-cartable/TaskCartable";
import { MDBRow, MDBCol } from "mdbreact";
const MainPage: React.FC = () => {
  return (
    <div>
      <div style={{ margin: "2% auto", width: "90%" }}>
        <MDBRow>
          <MDBCol md="4">{/* <ProfileHistory /> */}</MDBCol>
          <MDBCol md="7">
            <TaskCartable />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
};

export default MainPage;
