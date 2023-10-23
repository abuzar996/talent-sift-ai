import React from "react";
import "./applicantList.styles.css";
import ApplicantInfo from "../ApplicantInfo";
import { applicantsHeader } from "../../../constants/applicantsHeaderData";
const ApplicantList = () => {
  return (
    <div className="applicant-list-table-container">
      <div
        className="custom-table-container-header"
        // style={{ minWidth: "1400px", overflow: "scroll" }}
      >
        {applicantsHeader &&
          applicantsHeader.map((header, i) => (
            <div
              className="custom-table-container-header-child"
              key={header.id_}
              //   style={{ flex: header.flex }}
            >
              <label>{header.title} </label>
            </div>
          ))}
      </div>
      <div>
        <ApplicantInfo
          name={"Abuzar Rahim"}
          location={"San Fransisco Bay Area"}
          currentPosition={"Staff Engineer"}
          company={"Meta"}
          date={"Jan 17,2023"}
          source={"Job Site"}
          priority={"high"}
        />
      </div>
    </div>
  );
};

export default ApplicantList;
