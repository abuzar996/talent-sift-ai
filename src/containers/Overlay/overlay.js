import React from "react";
import "./overlay.styles.css";
const Overlay = ({ children }) => {
  return <div className="overlay-container">{children}</div>;
};

export default Overlay;
