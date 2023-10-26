import React from "react";
import SearchHeader from "../../containers/SearchHeader";
import ApplicantTable from "../../containers/Tables/ApplicantsTable/applicantsTable";
const ApplicantsLayout = () => {
  return (
    <div className="applicant-layout-container">
      <div>
        <SearchHeader />
      </div>

      <ApplicantTable />
    </div>
  );
};

export default ApplicantsLayout;
