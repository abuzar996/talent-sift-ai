import React from "react";
import "./applicantInfo.styles.css";
import CandidateColumn from "../../TableContainers/CandidateColumn";
import ImageColumn from "../../TableContainers/ImageColumn";
import DetailColumn from "../../TableContainers/DetailsColumn";
import CustomColumn from "../../TableContainers/CustomColumn/customColumn";
import MatchColumn from "../../TableContainers/MatchColumn";
import { applicantsHeader } from "../../../constants/applicantsHeaderData";
import Button from "../../../components/Button/button";
const ApplicantInfo = () => {
  return (
    <div className="applicant-info-single-row-container">
      <div style={{ display: "flex", flex: applicantsHeader[0].flex }}>
        <ImageColumn />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[1].flex }}>
        <CandidateColumn
          name={"Abuzar Rahim"}
          location={"San Fransisco Bay Area"}
          currentPosition={"Staff Engineer"}
          company={"Meta"}
        />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[2].flex }}>
        <MatchColumn priority={"high"} />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[3].flex }}>
        <CustomColumn data={"Jan 17,2023"} />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[4].flex }}>
        <CustomColumn data={"Job site"} />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[5].flex }}>
        <DetailColumn />
      </div>
      <div
        style={{
          display: "flex",
          flex: applicantsHeader[6].flex,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <Button>Advance</Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;
