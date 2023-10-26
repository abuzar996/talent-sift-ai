import React from "react";
import SearchHeader from "../../containers/SearchHeader";
import ApplicantTable from "../../containers/Tables/ApplicantsTable/applicantsTable";
const ApplicantsLayout = () => {
  return (
    <div className="applicant-layout-container">
      <SearchHeader />
      <ApplicantTable />
    </div>
  );
};

export default ApplicantsLayout;
