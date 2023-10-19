import React from "react";
import "./experienceInfo.styles.css";
import TagLine from "./tagLine";
const ExperienceInfo = ({ heading, Experiences, Education }) => {
  return (
    <div className="experience-card-container">
      <div>
        <label className="experience-card-label">{heading}</label>
      </div>
      <div className="sub-heading0tag-line-container">
        {Experiences
          ? Experiences.map((exp) => <TagLine key={exp.id_} {...exp} />)
          : Education
          ? Education.map((exp) => <TagLine key={exp.id_} {...exp} />)
          : null}
      </div>
    </div>
  );
};

export default ExperienceInfo;
