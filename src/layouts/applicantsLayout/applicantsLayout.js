import React from "react";
import SearchHeader from "../../containers/SearchHeader";
import CustomTable from "../../containers/CustomTable/table";
import "./applicantslayout.styles.css";
const ApplicantsLayout = () => {
  return (
    <div className="applicant-layout-container">
      <div>
        <SearchHeader />
      </div>
      <div style={{ display: "flex", height: "650px", overflowY: "scroll" }}>
        <CustomTable />
      </div>
    </div>
  );
};

export default ApplicantsLayout;
