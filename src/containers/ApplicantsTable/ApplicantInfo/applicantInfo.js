import React, { useRef, useEffect, useState } from "react";
import "./applicantInfo.styles.css";
import CandidateColumn from "../../TableContainers/CandidateColumn";
import ImageColumn from "../../TableContainers/ImageColumn";
import DetailColumn from "../../TableContainers/DetailsColumn";
import CustomColumn from "../../TableContainers/CustomColumn/customColumn";
import MatchColumn from "../../TableContainers/MatchColumn";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Button/button";
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
const ApplicantInfo = ({ data }) => {
  const dispatch = useDispatch();
  const windowSize = useDimentions();
  const {
    imageWidth,
    buttonWidth,
    candidateWidth,
    detailWidth,
    sourceWidth,
    matchWidth,
    dateWidth,
  } = useSelector((state) => state.modal);
  const [TableBodyHeight, setTableBodyHeight] = useState(0);
  const Ref = useRef();
  const headerRef = useRef();
  const imageRef = useRef();
  const candidateRef = useRef();
  const matchRef = useRef();
  const dateRef = useRef();
  const sourceRef = useRef();
  const detailsRef = useRef();
  const actionRef = useRef();

  useEffect(() => {
    setTableBodyHeight(
      Ref.current.clientHeight - headerRef.current.clientHeight
    );
  }, [headerRef, Ref, windowSize]);
  useEffect(() => {
    dispatch(setImageWidth(imageRef.current.clientWidth));
  }, [imageRef, dispatch, windowSize]);
  useEffect(() => {
    dispatch(setCandidateWidth(candidateRef.current.clientWidth));
  }, [candidateRef, dispatch, windowSize]);
  useEffect(() => {
    dispatch(setMatchWidth(matchRef.current.clientWidth));
  }, [matchRef, dispatch, windowSize]);
  useEffect(() => {
    dispatch(setDateWidth(dateRef.current.clientWidth));
  }, [dateRef, dispatch, windowSize]);
  useEffect(() => {
    dispatch(setSourceWidth(sourceRef.current.clientWidth));
  }, [sourceRef, dispatch, windowSize]);
  useEffect(() => {
    dispatch(setDetailWidth(detailsRef.current.clientWidth));
  }, [detailsRef, dispatch, windowSize]);

  useEffect(() => {
    dispatch(setButtonWidth(actionRef.current.clientWidth));
  }, [actionRef, dispatch, windowSize]);
  return (
    <div ref={Ref} className="applicant-info-main-container">
      <div>
        <div ref={headerRef} className="applicant-info-header-inner-container">
          <div id="header-div" className="applicant-info-header">
            <div style={{ width: `${imageWidth}px` }}></div>
            <div style={{ width: `${candidateWidth}px` }}>Candidate</div>
            <div style={{ width: `${matchWidth}px` }}>Job Match</div>
            <div style={{ width: `${dateWidth}px` }}>Date</div>
            <div style={{ width: `${sourceWidth}px` }}>Source</div>
            <div style={{ width: `${detailWidth}px` }}>Details</div>
            <div style={{ width: `${buttonWidth}px` }}>Action</div>
          </div>
        </div>
        <div
          style={{
            display: windowSize.width <= 768 ? "inline-block" : "flex",
            flexDirection: "column",
            height: `${TableBodyHeight}px`,
            overflowY: "scroll",
          }}
        >
          {data.map((d, i) => (
            <div key={d.id_} className="applicant-info-inner-container">
              <div className="applicant-info-single-row-container">
                <div
                  ref={imageRef}
                  className="applicant-info-single-candidate-container"
                >
                  <ImageColumn />
                </div>

                <div
                  ref={candidateRef}
                  className="applicant-info-single-candidate-container"
                >
                  <CandidateColumn
                    name={d.name}
                    location={d.location}
                    currentPosition={d.currentPosition}
                    company={d.company}
                  />
                </div>
                <div
                  ref={matchRef}
                  className="applicant-info-single-candidate-container"
                >
                  <MatchColumn priority={d.priority} />
                </div>
                <div
                  ref={dateRef}
                  className="applicant-info-single-candidate-container"
                >
                  <CustomColumn data={d.date} />
                </div>
                <div
                  ref={sourceRef}
                  className="applicant-info-single-candidate-container"
                >
                  <CustomColumn data={d.source} />
                </div>
                <div
                  ref={detailsRef}
                  className="applicant-info-single-candidate-container"
                >
                  <DetailColumn />
                </div>
                <div
                  ref={actionRef}
                  className="applicant-info-single-candidate-container-button-div"
                >
                  <div className="applicant-info-single-row-container-button">
                    <Button>Advance</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicantInfo;
