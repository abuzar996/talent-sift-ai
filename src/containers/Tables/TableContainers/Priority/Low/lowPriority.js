import React from "react";
import "./lowPriority.styles.css";
import { AiOutlineDislike } from "react-icons/ai";

// import { AiOutlineDislike } from "react-icons/ai";
const LowPriority = () => {
  return (
    <div className="low-priority-candidate-container">
      <div className="low-priority-candidate-container-remarks">
        <div className="low-priority-candidate-container-icon">
          <AiOutlineDislike />
        </div>
        <div className="low-priority-candidate-container-label">
          <label>Criteria not met</label>
        </div>
      </div>
      <div className="low-priority-status-review">
        <div className="low-div-for-priority-candidate"></div>
        <div className="low-div-for-priority-candidate"></div>
        <div className="low-div-for-priority-candidate"></div>
        <div className="low-div-for-priority-candidate"></div>
      </div>
    </div>
  );
};

export default LowPriority;
