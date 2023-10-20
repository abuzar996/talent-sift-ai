import React, { useRef, useEffect } from "react";
import { useDimentions } from "../../../hooks/useDimensions";
import "./header.styles.css";
import CustomSelect from "../Select";
import { useDispatch } from "react-redux";
import { BiSolidDownload } from "react-icons/bi";
import { AiFillEdit } from "react-icons/ai";
import { updateSearchHeaderHeight } from "../../../redux/slices/appSlice";
const Header = () => {
  const Ref = useRef();
  const dispatch = useDispatch();
  const windowSize = useDimentions();

  useEffect(() => {
    if (Ref) {
      dispatch(updateSearchHeaderHeight(Ref.current.clientHeight));
    }
  }, [windowSize, dispatch]);
  function onHandleChange(event) {
    console.log(event);
  }
  return (
    <div ref={Ref} className="header-view-container">
      <div className="header-view-left-container">
        <label className="header-view-left-count-label">
          12.9k{" "}
          <span className="header-view-left-count-label-child">
            Total memebers
          </span>
        </label>
      </div>
      <div className="header-view-right-container">
        <div className="header-view-right-container-parent">
          <div className="header-view-right-container-left">
            <BiSolidDownload
              onClick={() => {
                console.log("hello world");
              }}
            />
          </div>
          <div className="header-view-right-container-left">
            <AiFillEdit />
          </div>
        </div>
        <div className="header-view-select-section">
          <CustomSelect onChange={onHandleChange} />
        </div>
      </div>
    </div>
  );
};

export default Header;
