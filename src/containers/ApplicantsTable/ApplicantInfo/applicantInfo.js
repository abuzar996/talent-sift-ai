import React, { useEffect, useRef } from "react";
import "./applicantInfo.styles.css";
import CandidateColumn from "../../TableContainers/CandidateColumn";
import ImageColumn from "../../TableContainers/ImageColumn";
import DetailColumn from "../../TableContainers/DetailsColumn";
import CustomColumn from "../../TableContainers/CustomColumn/customColumn";
import MatchColumn from "../../TableContainers/MatchColumn";
import { applicantsHeader } from "../../../constants/applicantsHeaderData";
import Button from "../../../components/Button/button";
import { useDispatch } from "react-redux";
import { useDimentions } from "../../../hooks/useDimensions";
import {
  setButtonWidth,
  setDateWidth,
  setMatchWidth,
  setDetailWidth,
  setSourceWidth,
  setCandidateWidth,
  setImageWidth,
} from "../../../redux/slices/modals";
//import { useDimentions } from "../../../hooks/useDimensions";

const ApplicantInfo = ({
  index,
  name,
  location,
  currentPosition,
  company,
  priority,
  date,
  source,
}) => {
  const imageRef = useRef();
  const candidateRef = useRef();
  const matchRef = useRef();
  const sourceRef = useRef();
  const dateRef = useRef();
  const detailRef = useRef();
  const buttonRef = useRef();
  const dispatch = useDispatch();
  const windowSize = useDimentions();

  useEffect(() => {
    if (index === 0) {
      dispatch(setButtonWidth(buttonRef.current.clientWidth));
      console.log("Buton", buttonRef.current.clientWidth);
      dispatch(setDateWidth(dateRef.current.clientWidth));
      console.log("dateRef", dateRef.current.clientWidth);
      dispatch(setMatchWidth(matchRef.current.clientWidth));
      console.log("matchRef", matchRef.current.clientWidth);
      dispatch(setDetailWidth(detailRef.current.clientWidth));
      console.log("detailRef", detailRef.current.clientWidth);
      dispatch(setSourceWidth(sourceRef.current.clientWidth));
      console.log("Source", sourceRef.current.clientWidth);
      dispatch(setCandidateWidth(candidateRef.current.clientWidth));
      console.log("Candidate", candidateRef.current.clientWidth);
      dispatch(setImageWidth(imageRef.current.clientWidth));
      console.log("Image", imageRef.current.clientWidth);
    }
  }, [index, dispatch, windowSize]);
  return (
    <div className="applicant-info-single-row-container">
      <div
        ref={imageRef}
        style={{ display: "flex", flex: applicantsHeader[0].flex }}
      >
        <ImageColumn />
      </div>
      <div
        ref={candidateRef}
        style={{ display: "flex", flex: applicantsHeader[1].flex }}
      >
        <CandidateColumn
          name={name}
          location={location}
          currentPosition={currentPosition}
          company={company}
        />
      </div>
      <div
        ref={matchRef}
        style={{
          display: "flex",
          flex: applicantsHeader[2].flex,
        }}
      >
        <MatchColumn priority={priority} />
      </div>
      <div
        ref={dateRef}
        style={{
          display: "flex",
          flex: applicantsHeader[3].flex,
        }}
      >
        <CustomColumn data={date} />
      </div>
      <div
        ref={sourceRef}
        style={{
          display: "flex",
          flex: applicantsHeader[4].flex,
        }}
      >
        <CustomColumn data={source} />
      </div>
      <div
        ref={detailRef}
        style={{ display: "flex", flex: applicantsHeader[5].flex }}
      >
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
        <div
          ref={buttonRef}
          className="applicant-info-single-row-container-button"
        >
          <Button>Advance</Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;
