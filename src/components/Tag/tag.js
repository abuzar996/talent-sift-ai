import React from "react";
import "./tag.styles.css";
const Tag = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="tag-outer-container">
      <div className="tag-container">
        <label>{title} </label>
      </div>
    </div>
  );
};

export default Tag;
