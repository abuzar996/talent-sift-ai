import React from "react";
import "./menuLayout.styles.css";
import Nav from "../../containers/Nav";
import Crousal from "../../containers/Crousal/crousal";
import { useDimentions } from "../../hooks/useDimensions";

const MenuLayout = ({ children }) => {
  const windowSize = useDimentions();
  return (
    <div
      className="menu-layout-container"
      style={{ height: `${windowSize.height}px` }}
    >
      <div className="menu-layout-nav-container">
        <Nav Title={"Back"} />
      </div>
      <div
        className="menu-layout-crousal-container"
        style={{
          alignItems: "center",
          display: "flex",
          width: `${windowSize.width}px`,
          overflowX: "scroll",
        }}
      >
        <Crousal />
      </div>
      <div className="menu-layout-view-container">{children}</div>
    </div>
  );
};

export default MenuLayout;
