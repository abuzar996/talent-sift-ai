import React from "react";
import "./list.styles.css";
import { candidateData } from "../../../constants/candidatesData";
import CandidateInfo from "../CandidateInfo";
const List = () => {
  //console.log(candidateData);
  return (
    <div className="candidate-list-container">
      {candidateData.map((candidate) => (
        <CandidateInfo key={candidate.id_} {...candidate} />
      ))}
    </div>
  );
};

export default List;
