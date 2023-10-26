import React from "react";
import SearchHeader from "../../containers/SearchHeader";
import CustomTable from "../../containers/Tables/CustomTable/table";
import "./applicantslayout.styles.css";
import { applicantInfo } from "../../constants/applicantsInfo";
//import ApplicantInfo from "./ApplicantInfo";
const ApplicantsLayout = () => {
  return (
    <div className="applicant-layout-container">
      <div>
        <SearchHeader />
      </div>

      <CustomTable>{/* <ApplicantInfo data={applicantInfo} /> */}</CustomTable>
    </div>
  );
};

export default ApplicantsLayout;
