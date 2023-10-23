import React from "react";
import "./table.styles.css";
import TableLayout from "./tableLayout";
import { GrPrevious, GrNext } from "react-icons/gr";

const CustomTable = ({ children }) => {
  return (
    <div className="custom-table-container">
      <div className="custom-table-container-body">
        <TableLayout />
      </div>

      <div className="custom-table-footer">
        <div className="custom-table-footer-previous-icon">
          <GrPrevious />
        </div>
        <div className="custom-table-footer-previous-icon">
          <GrNext />
        </div>
      </div>
    </div>
  );
};
export default CustomTable;
