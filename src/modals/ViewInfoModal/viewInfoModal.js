import React, { useEffect } from "react";
import { useDimentions } from "../../hooks/useDimensions";
import "./viewInfoModal.styles.css";
//import { animated, useSpring } from "@react-spring/web";
const ViewInfoModal = () => {
  const windowSize = useDimentions();
  useEffect(() => {
    if (windowSize.width >= 1024) {
    } else if (windowSize.width < 1024 && windowSize.width >= 768) {
    } else if (windowSize.width < 768) {
    }
  }, [windowSize]);

  //   const modalAnimation = useSpring({
  //     //right: (windowSize.width * 60) / 100,
  //   });
  return <div className="view-info-modal-container">ViewInfoModal</div>;
};

export default ViewInfoModal;
