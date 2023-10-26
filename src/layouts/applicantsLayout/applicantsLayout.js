import React from "react";
import SearchHeader from "../../containers/SearchHeader";
import CustomTable from "../../containers/Tables/CustomTable/table";
import "./applicantslayout.styles.css";
import { applicantInfo } from "../../constants/applicantsInfo";
import ApplicantTable from "../../containers/Tables/ApplicantsTable";
const ApplicantsLayout = () => {
  return (
    <div className="applicant-layout-container">
      <div>
        <SearchHeader />
      </div>

      <CustomTable>
        <ApplicantTable data={applicantInfo} />{" "}
      </CustomTable>
    </div>
  );
};

export default ApplicantsLayout;
