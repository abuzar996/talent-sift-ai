import React from "react";
import "./button.styles.css";
const Button = ({ children, onClick, style }) => {
  return (
    <div className="button-container" onClick={onClick} style={style}>
      {children}
    </div>
  );
};

export default Button;
