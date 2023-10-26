import React from "react";
import "./applayout.styles.css";
import MenuLayout from "../MenuLayout/menuLayout";
//import SearchLayout from "../searchLayout";
import ApplicantsLayout from "../ApplicantsLayout";

const Applayout = () => {
  return (
    <MenuLayout>
      <div className="layout-child-outlet-container">
        <ApplicantsLayout />
      </div>
    </MenuLayout>
  );
};

export default Applayout;
