import React from "react";
import "./input.styles.css";
const Input = ({ icon, placeHolder }) => {
  return (
    <div className="input-container">
      <div className="input-main-container">
        <input
          className="input-inner-container"
          placeholder={placeHolder}
          type="text"
        />
      </div>
      <div className="icon-main-container">
        <label>{icon}</label>
      </div>
    </div>
  );
};

export default Input;
