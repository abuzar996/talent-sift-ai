import React from "react";
import "./applicantsTable.styles.css";
import DetailColumn from "../TableContainers/DetailsColumn";
import CandidateColumn from "../TableContainers/CandidateColumn";
import Priority from "../TableContainers/Priority";

import ImageColumn from "../TableContainers/ImageColumn";
import Button from "../../../components/Button";

import CustomTable from "../CustomTable/table";
import Table from "../Table";
import DateColumn from "../TableContainers/DateColumn";
import SourceColumn from "../TableContainers/SourceColumn";
import { applicantInfo } from "../../../constants/applicantsInfo";
const headers = [
  "",
  "Candidate",
  "Job Match",
  "Applied Date",
  "Source",
  "Details",
  "Actions",
];
const ApplicantTable = () => {
  return (
    <CustomTable>
      <Table applicantData={applicantInfo} headers={headers}>
        <ImageColumn />
        <CandidateColumn />
        <Priority />
        <DateColumn />
        <SourceColumn />
        <DetailColumn />
        <Button>Advance</Button>
      </Table>
    </CustomTable>
  );
};

export default ApplicantTable;
