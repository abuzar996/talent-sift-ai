import React from "react";
import "./menuLayout.styles.css";
import Nav from "../../containers/Nav";
import Crousal from "../../containers/Crousal/crousal";

const MenuLayout = ({ children }) => {
  return (
    <div className="menu-layout-container">
      <div className="menu-layout-nav-container">
        <Nav Title={"Back"} />
      </div>
      <div className="menu-layout-crousal-container">
        <Crousal />
      </div>
      <div className="menu-layout-view-container">{children}</div>
    </div>
  );
};

export default MenuLayout;
