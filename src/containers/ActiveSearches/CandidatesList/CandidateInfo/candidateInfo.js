import React, { useState } from "react";
import "./candidateInfo.styles.css";
import InfoCard from "../../infoCard";
import ExperienceInfo from "../../ExperienceInfoCard";
import Button from "../../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleInfoModal } from "../../../../redux/slices/modals";
import ViewInfoModal from "../../../../modals/ViewInfoModal";
const CandidateInfo = ({
  name,
  image,
  currentRole,
  company,
  Experiences,
  Education,
}) => {
  const dispatch = useDispatch();
  const { infoModalOpen } = useSelector((state) => state.modal);
  const [info] = useState({
    name,
    image,
    currentRole,
    company,
  });

  function openModal() {
    dispatch(toggleInfoModal());
  }

  return (
    <>
      {infoModalOpen && <ViewInfoModal />}
      <div
        className="candidate-info-main-container"
        onClick={() => {
          openModal();
        }}
      >
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
    </>
  );
};

export default CandidateInfo;
