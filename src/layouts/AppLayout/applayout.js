import React from "react";
import "./applayout.styles.css";
import MenuLayout from "../MenuLayout";
//import SearchLayout from "../searchLayout";
// import ApplicantsLayout from "../ApplicantsLayout";
import AtsLayout from "../AtsLayout";

const Applayout = () => {
  return (
    <MenuLayout>
      <div className="layout-child-outlet-container">
        <AtsLayout />
      </div>
    </MenuLayout>
  );
};

export default Applayout;
