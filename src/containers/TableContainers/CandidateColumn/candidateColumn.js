import React from "react";
import "./candidateColumn.styles.css";
import { MdLocationOn } from "react-icons/md";
import { AiFillFolder } from "react-icons/ai";

const CandidateColumn = ({ name, location, currentPosition, company }) => {
  return (
    <div className="candidate-table-column-container">
      <div className="candidate-table-column-name">
        <label>{name}</label>
      </div>
      <div className="candidate-table-column-location">
        <div>
          <MdLocationOn />
        </div>
        <label>{location}</label>
      </div>
      <div className="candidate-table-column-location">
        <div>
          <AiFillFolder />
        </div>
        <label className="candidate-table-column-text-decoration">
          {currentPosition}
        </label>
        <label>at</label>
        <label className="candidate-table-column-text-decoration">
          {company}
        </label>
      </div>
    </div>
  );
};

export default CandidateColumn;
