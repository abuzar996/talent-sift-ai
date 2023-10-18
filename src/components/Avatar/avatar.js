import React from "react";
import "./avatar.styles.css";
const Avatar = ({ image }) => {
  return (
    <div className="image-container">
      <img src={image} alt="img" />
    </div>
  );
};

export default Avatar;
