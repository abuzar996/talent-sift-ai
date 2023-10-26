import React from "react";
import "./highPriority.styles.css";
import { AiOutlineLike } from "react-icons/ai";

// import { AiOutlineDislike } from "react-icons/ai";
const HighPriority = () => {
  return (
    <div className="high-priority-candidate-container">
      <div className="high-priority-candidate-container-remarks">
        <div className="high-priority-candidate-container-icon">
          <AiOutlineLike />
        </div>
        <div className="high-priority-candidate-container-label">
          <label>High Priority Candidate</label>
        </div>
      </div>
      <div className="high-priority-status-review">
        <div className="high-div-for-priority-candidate"></div>
        <div className="high-div-for-priority-candidate"></div>
        <div className="high-div-for-priority-candidate"></div>
        <div className="high-div-for-priority-candidate"></div>
      </div>
    </div>
  );
};

export default HighPriority;
