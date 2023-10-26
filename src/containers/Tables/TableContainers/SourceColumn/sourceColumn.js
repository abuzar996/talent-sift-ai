import React from "react";
import "./sourceColumn.styles.css";
const SourceColumn = ({ source }) => {
  return (
    <div className="date-column-custom-table-container">
      <label>{source}</label>
    </div>
  );
};

export default SourceColumn;
