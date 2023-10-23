import React from "react";
import "./applicantInfo.styles.css";
import CandidateColumn from "../../TableContainers/CandidateColumn";
import ImageColumn from "../../TableContainers/ImageColumn";
import DetailColumn from "../../TableContainers/DetailsColumn";
import CustomColumn from "../../TableContainers/CustomColumn/customColumn";
import MatchColumn from "../../TableContainers/MatchColumn";
import { applicantsHeader } from "../../../constants/applicantsHeaderData";
import Button from "../../../components/Button/button";
//import { useDimentions } from "../../../hooks/useDimensions";

const ApplicantInfo = ({
  name,
  location,
  currentPosition,
  company,
  priority,
  date,
  source,
}) => {
  //

  return (
    <div className="applicant-info-single-row-container">
      <div style={{ display: "flex", flex: applicantsHeader[0].flex }}>
        <ImageColumn />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[1].flex }}>
        <CandidateColumn
          name={name}
          location={location}
          currentPosition={currentPosition}
          company={company}
        />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[2].flex }}>
        <MatchColumn priority={priority} />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[3].flex }}>
        <CustomColumn data={date} />
      </div>
      <div style={{ display: "flex", flex: applicantsHeader[4].flex }}>
        <CustomColumn data={source} />
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
        <div className="applicant-info-single-row-container-button">
          <Button>Advance</Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;
