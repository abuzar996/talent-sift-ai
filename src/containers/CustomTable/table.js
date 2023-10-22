import React from "react";
import "./table.styles.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { applicantsHeader } from "../../constants/applicantsHeaderData";
const Table = ({ children }) => {
  return (
    <div className="custom-table-container">
      <div className="custom-table-container-header">
        {applicantsHeader &&
          applicantsHeader.map((header) => (
            <div
              className="custom-table-container-header-child"
              key={header.id_}
              style={{
                flex: header.flex,
                justifyContent: header.justifyContent,
              }}
            >
              <label>{header.title} </label>
            </div>
          ))}
      </div>
      <div className="custom-table-container-body">{children}</div>
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

export default Table;
