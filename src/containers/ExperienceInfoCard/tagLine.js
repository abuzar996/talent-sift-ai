import React from "react";
import "./experienceInfo.styles.css";
//import linkedIn from "../../assets/linkedIn.png";
const TagLine = ({ image, position, company, location, duration }) => {
  return (
    <div className="tag-line-container">
      <div className="tag-line-img-container">
        <img
          style={{ width: "25px", height: "25px" }}
          src={require("../../assets/linkedIn.png")}
          alt="img"
        />
      </div>

      <label className="tag-line-position-label">
        Full stack developer, staff Engineer
      </label>
      <label className="tag-line-position-divider-label">at</label>
      <label className="tag-line-position-label">LinkedIn,</label>
      <label className="tag-line-position-divider-label">
        November,19 - Present
      </label>
    </div>
  );
};

export default TagLine;
