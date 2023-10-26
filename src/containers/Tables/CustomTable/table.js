import React, { useEffect, useRef } from "react";
import "./table.styles.css";
import { updateTableViewHeight } from "../../../redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useDimentions } from "../../../hooks/useDimensions";

const CustomTable = ({ children }) => {
  //const [height, setHeight] = useState(0);
  const Ref = useRef();
  const dispatch = useDispatch();

  const windowSize = useDimentions();
  const {
    mainHeaderHeight,
    searchHeaderHeight,
    crousalHeight,
    tableViewHeight,
  } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(updateTableViewHeight(windowSize.height));
  }, [
    windowSize,
    crousalHeight,
    searchHeaderHeight,
    mainHeaderHeight,
    tableViewHeight,
    dispatch,
  ]);
  useEffect(() => {
    console.log(windowSize);
  }, [windowSize]);
  return (
    <div ref={Ref} className="custom-table-container">
      <div
        className="custom-table-container-body"
        style={{
          width: "100%",
        }}
      >
        {children}
      </div>
      <div className="custom-table-footer">
        <div className="custom-table-footer-previous-icon">
          <GrPrevious />
        </div>
        <div className="custom-table-footer-previous-icon">
          <GrNext />
        </div>
      </div>
    </div>
  );
};
export default CustomTable;
