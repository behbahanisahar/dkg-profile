import React from "react";
import Sidebar from "../../../../core/sidebar/sidebar";
import { DKAccordion } from "../../../../core/dkg-component/accordion/accordion";
const MainPage: React.FC = () => {
  return (
    <div className="row">
      <div className="col-xl-4">
        <Sidebar name=""></Sidebar>
      </div>
      <div className="col-xl-8">
        <DKAccordion title="تست ۱">
          <p>HI</p>
        </DKAccordion>
        <DKAccordion title="تست 2">
          <p>HI 222</p>
        </DKAccordion>
      </div>
    </div>
  );
};

export default MainPage;
