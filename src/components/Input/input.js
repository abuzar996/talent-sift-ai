import React from "react";
import "./input.styles.css";
const Input = ({ icon }) => {
  return (
    <div className="input-container">
      <div className="input-main-container">
        <input
          className="input-inner-container"
          placeholder="Enter Text To Search..."
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
