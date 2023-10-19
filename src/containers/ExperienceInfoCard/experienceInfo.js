import React from "react";
import "./experienceInfo.styles.css";
import TagLine from "./tagLine";
const ExperienceInfo = ({ heading, tagline, icon }) => {
  return (
    <div className="experience-card-container">
      <div>
        <label className="experience-card-label">{heading}</label>
      </div>
      <div className="sub-heading0tag-line-container">
        <TagLine />
        <TagLine />
      </div>
    </div>
  );
};

export default ExperienceInfo;
