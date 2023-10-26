import React, { useEffect } from "react";
import { useDimentions } from "../../hooks/useDimensions";
import "./viewInfoModal.styles.css";
//import { animated, useSpring } from "@react-spring/web";
//import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/web";
const ViewInfoModal = () => {
  //const { infoModalOpen } = useSelector((state) => state.modal);
  const windowSize = useDimentions();
  const modalAnimation = useSpring({
    width: "800px",
  });
  useEffect(() => {
    if (windowSize.width >= 1024) {
    } else if (windowSize.width < 1024 && windowSize.width >= 768) {
    } else if (windowSize.width < 768) {
    }
  }, [windowSize]);

  //   const modalAnimation = useSpring({
  //     //right: (windowSize.width * 60) / 100,
  //   });
  return (
    <animated.div
      className="view-info-modal-container"
      style={{ width: modalAnimation.width }}
    >
      ViewInfoModal
    </animated.div>
  );
};

export default ViewInfoModal;
