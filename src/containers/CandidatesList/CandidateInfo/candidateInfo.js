import React, { useState } from "react";
import "./candidateInfo.styles.css";
import InfoCard from "../../infoCard";
import ExperienceInfo from "../../ExperienceInfoCard";
import Button from "../../../components/Button";
const CandidateInfo = ({
  name,
  image,
  currentRole,
  company,
  Experiences,
  Education,
}) => {
  const [info] = useState({
    name,
    image,
    currentRole,
    company,
  });

  return (
    <div className="candidate-info-main-container">
      <div className="candidate-info-main-container-first">
        <InfoCard {...info} />
      </div>
      {Experiences && Experiences.length > 0 && (
        <div>
          <ExperienceInfo heading={"Experience"} Experiences={Experiences} />
        </div>
      )}
      {Education && Education.length > 0 && (
        <div>
          <ExperienceInfo heading={"Education"} Education={Education} />
        </div>
      )}
      <div className="candidate-info-main-container-last">
        <div>
          <Button style={{ fontSize: "10px" }}>Shortlist</Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
