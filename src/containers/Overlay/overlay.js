import React from "react";
import "./overlay.styles.css";
const Overlay = ({ children, onClick }) => {
  return (
    <div className="overlay-container" onClick={onClick ? onClick : null}>
      {children}
    </div>
  );
};

export default Overlay;
