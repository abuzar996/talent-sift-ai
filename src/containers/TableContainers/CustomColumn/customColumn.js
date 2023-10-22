import React from "react";
import "./customColumn.style.css";
const CustomColumn = ({ data }) => {
  return (
    <div className="source-column-custom-table-container">
      <label>{data}</label>
    </div>
  );
};

export default CustomColumn;
