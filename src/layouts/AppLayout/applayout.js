import React from "react";
import "./applayout.styles.css";
import MenuLayout from "../menuLayout/menuLayout";
import SearchLayout from "../searchLayout";
//import ApplicantsLayout from "../applicantsLayout";
//import ApplicantsLayout from "../applicantsLayout";
const Applayout = () => {
  return (
    // <div className="app-layout-container-main">
    <MenuLayout>
      <SearchLayout />
    </MenuLayout>
    // </div>
  );
};

export default Applayout;
