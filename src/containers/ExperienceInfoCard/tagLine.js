import React from "react";
import "./experienceInfo.styles.css";
//import linkedIn from "../../assets/linkedIn.png";
const TagLine = ({ logo, role, company, location, Dates, degree, school }) => {
  return (
    <div className="tag-line-container">
      <div className="tag-line-img-container">
        <img style={{ width: "25px", height: "25px" }} src={logo} alt="img" />
      </div>

      <label className="tag-line-position-label">
        {role ? role : degree ? degree : null}
      </label>
      <label className="tag-line-position-divider-label">at</label>
      <label className="tag-line-position-label">
        {company ? company : school ? school : null}.
      </label>
      <label className="tag-line-position-divider-label">{Dates}</label>
    </div>
  );
};

export default TagLine;
