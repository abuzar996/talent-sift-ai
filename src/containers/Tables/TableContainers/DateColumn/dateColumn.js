import React from "react";
import "./dateColumn.style.css";
const dateColumn = ({ date, source }) => {
  return (
    <div className="source-column-custom-table-container">
      <label>{date ? date : source}</label>
    </div>
  );
};

export default dateColumn;
