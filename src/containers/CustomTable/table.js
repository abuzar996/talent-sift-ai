import React, { useLayoutEffect, useRef } from "react";
import "./table.styles.css";
import { setTableWidth } from "../../redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import { useDimentions } from "../../hooks/useDimensions";

const CustomTable = ({ children }) => {
  const Ref = useRef();
  const dispatch = useDispatch();

  const windowSize = useDimentions();
  const { tableWidth } = useSelector((state) => state.app);
  useLayoutEffect(() => {
    dispatch(setTableWidth(Ref.current.clientWidth - 20));
  }, [Ref, windowSize, dispatch]);
  return (
    <div ref={Ref} className="custom-table-container">
      <div
        className="custom-table-container-body"
        style={{ width: `${tableWidth}px` }}
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
