import React, { useEffect } from "react";
import "./applicantsTable.styles.css";
import DetailColumn from "../TableContainers/DetailsColumn";
import CandidateColumn from "../TableContainers/CandidateColumn";
import Priority from "../TableContainers/Priority";
import { useSelector, useDispatch } from "react-redux";
import { setTableHeight } from "../../../redux/slices/appSlice";
import ImageColumn from "../TableContainers/ImageColumn";
import Button from "../../../components/Button";
import { useDimentions } from "../../../hooks/useDimensions";
import CustomTable from "../CustomTable/table";
import Table from "../Table";
import DateColumn from "../TableContainers/DateColumn";
import SourceColumn from "../TableContainers/SourceColumn";
import { applicantInfo } from "../../../constants/applicantsInfo";
// const TableHeaders = [
//   " ",
//   "Candidate",
//   "Job Match",
//   "Applied Date",
//   "Source",
//   "Details",
//   "Actions",
// ];
const ApplicantTable = () => {
  const dispatch = useDispatch();
  const windowSize = useDimentions();
  const { tableHeight, crousalHeight, mainHeaderHeight, searchHeaderHeight } =
    useSelector((state) => state.app);
  useEffect(() => {
    dispatch(
      setTableHeight(
        windowSize.height -
          mainHeaderHeight -
          crousalHeight -
          searchHeaderHeight -
          searchHeaderHeight -
          20
      )
    );
  }, [
    windowSize,
    dispatch,
    crousalHeight,
    mainHeaderHeight,
    searchHeaderHeight,
    tableHeight,
  ]);
  return (
    <div style={{ display: "flex", flex: "1" }}>
      <CustomTable>
        <Table applicantData={applicantInfo}>
          <ImageColumn />
          <CandidateColumn />
          <Priority />
          <DateColumn />
          <SourceColumn />
          <DetailColumn />
          <Button>Advance</Button>
        </Table>
      </CustomTable>
    </div>
  );
};

export default ApplicantTable;
