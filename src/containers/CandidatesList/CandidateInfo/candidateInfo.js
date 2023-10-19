import React from "react";
import "./candidateInfo.styles.css";
import InfoCard from "../../infoCard";
import ExperienceInfo from "../../ExperienceInfoCard";
import Button from "../../../components/Button";
const CandidateInfo = () => {
  return (
    <div className="candidate-info-main-container">
      <div>
        <InfoCard />
      </div>
      <div>
        <ExperienceInfo heading={"Experience"} />
      </div>
      <div>
        <ExperienceInfo heading={"Education"} />
      </div>
      <div className="candidate-info-main-container-last">
        <div style={{ float: "right" }}>
          <Button>Shortlist</Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateInfo;
