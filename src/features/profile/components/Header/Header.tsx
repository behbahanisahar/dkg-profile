import { MDBCol } from "mdbreact";
import React from "react";
import HeaderImg from "../../../../assets/img/profile-bg.jpg";

import "./Header.css";
const Header: React.FC = () => {
  return (
    <MDBCol md="12" sm="12" lg="12">
      <img className="HeaderImg" src={HeaderImg} />
    </MDBCol>
  );
};

export default Header;
