import React from "react";
import SearchHeader from "../../containers/SearchHeader";
import CustomTable from "../../containers/CustomTable/table";
import "./applicantslayout.styles.css";
import { applicantInfo } from "../../constants/applicantsInfo";
import ApplicantInfo from "../../containers/ApplicantsTable/ApplicantInfo";
import MenuLayout from "../menuLayout/menuLayout";
const ApplicantsLayout = () => {
  return (
    <MenuLayout>
      <div className="applicant-layout-container">
        <div>
          <SearchHeader />
        </div>

        <CustomTable>
          <ApplicantInfo data={applicantInfo} />
        </CustomTable>
      </div>
    </MenuLayout>
  );
};

export default ApplicantsLayout;
