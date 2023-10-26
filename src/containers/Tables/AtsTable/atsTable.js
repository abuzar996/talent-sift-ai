import React from "react";
import "./atsTable.styles.css";
import DetailColumn from "../TableContainers/DetailsColumn";
import CandidateColumn from "../TableContainers/CandidateColumn";
import Priority from "../TableContainers/Priority";
import ActionsColumn from "../TableContainers/ActionsColumn";
import ImageColumn from "../TableContainers/ImageColumn";

import CustomTable from "../CustomTable/table";
import Table from "../Table";
import DateColumn from "../TableContainers/DateColumn";
import SourceColumn from "../TableContainers/SourceColumn";
import { applicantInfo } from "../../../constants/applicantsInfo";
const headers = [
  "",
  "Candidate",
  "Job Match",
  "Last Application",
  "Ats Applications",
  "Source",
  "Details",
  "Actions",
];
const ATsTable = () => {
  return (
    <CustomTable>
      <Table applicantData={applicantInfo} headers={headers}>
        <ImageColumn />
        <CandidateColumn />
        <Priority />
        <DateColumn />
        <SourceColumn />
        <DetailColumn />
        <ActionsColumn />
        <ActionsColumn />
      </Table>
    </CustomTable>
  );
};

export default ATsTable;
