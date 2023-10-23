import React, { useEffect, useRef } from "react";
import "./table.styles.css";
import { GrPrevious, GrNext } from "react-icons/gr";
//import { applicantsHeader } from "../../constants/applicantsHeaderData";
//import { useDimentions } from "../../hooks/useDimensions";
const Table = ({ children }) => {
  // const windowSize = useDimentions();

  const Ref = useRef();
  useEffect(() => {
    //alert(Ref.current.clientWidth);
  }, []);
  return (
    <div className="custom-table-container">
      {/* <div
        ref={Ref}
        className="custom-table-container-header"
        // style={{ minWidth: "1400px", overflow: "scroll" }}
      >
        {applicantsHeader &&
          applicantsHeader.map((header) => (
            <div
              className="custom-table-container-header-child"
              key={header.id_}
              style={{
                justifyContent: "flex-start",
              }}
            >
              <label>{header.title} </label>
            </div>
          ))}
      </div> */}
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
