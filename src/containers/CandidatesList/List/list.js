import React from "react";
import "./list.styles.css";
import { candidateData } from "../../../constants/candidatesData";
import CandidateInfo from "../CandidateInfo";
const List = () => {
  //console.log(candidateData);
  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
      <CandidateInfo {...candidateData[0]} />
    </div>
  );
};

export default List;
