import React from "react";
import "./list.styles.css";
import { candidateData } from "../../../../constants/candidatesData";
import CandidateInfo from "../CandidateInfo";
const List = () => {
  return (
    <div className="candidate-list-container">
      {candidateData.map((candidate) => (
        <CandidateInfo key={candidate.id} {...candidate} />
      ))}
    </div>
  );
};

export default List;
