import React, { useRef, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDimentions } from "../../hooks/useDimensions";
import { useDispatch } from "react-redux";
import { updateMainHeaderHeight } from "../../redux/slices/appSlice";
import "./nav.styles.css";
const Nav = ({ Title, sides }) => {
  const dispatch = useDispatch();

  const Ref = useRef();
  const windowSize = useDimentions();

  useEffect(() => {
    if (Ref) {
      dispatch(updateMainHeaderHeight(Ref.current.clientHeight));
    }
  }, [windowSize, dispatch]);

  return (
    <div ref={Ref} className="nav-container">
      <div className="nav-left-container">
        <div>
          <AiOutlineArrowLeft />
        </div>
        <div>
          <label>{Title}</label>
        </div>
      </div>
    </div>
  );
};

export default Nav;
