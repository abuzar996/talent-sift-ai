import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "./nav.styles.css";
const Nav = ({ Title, sides }) => {
  return (
    <div className="nav-container">
      <div className="nav-left-container">
        <div>
          <AiOutlineArrowLeft />
        </div>
        <div>
          <label>{Title}</label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
