import React, { useEffect, Children, cloneElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTableHeight } from "../../../redux/slices/appSlice";
import { useDimentions } from "../../../hooks/useDimensions";
import "./table.styles.css";

const Table = ({ children, applicantData, headers }) => {
  const dispatch = useDispatch();
  const windowSize = useDimentions();
  const { tableHeight, crousalHeight, mainHeaderHeight, searchHeaderHeight } =
    useSelector((state) => state.app);
  useEffect(() => {
    dispatch(
      setTableHeight(
        windowSize.height -
          mainHeaderHeight -
          crousalHeight -
          searchHeaderHeight -
          searchHeaderHeight -
          20
      )
    );
  }, [
    windowSize,
    dispatch,
    crousalHeight,
    mainHeaderHeight,
    searchHeaderHeight,
    tableHeight,
  ]);
  const renderChildren = () => {
    return applicantData.map((data) => {
      return Children.map(children, (child) => {
        return cloneElement(child, { ...data });
      });
    });
  };

  return (
    <div className="ats-table-main-div">
      <div
        className="ats-table-container"
        style={{ height: `${tableHeight}px` }}
      >
        <table className="ats-main-custom-table-outer-container">
          <thead className="ats-main-custom-table-thead-container">
            <tr className="ats-main-custom-table-trow-container">
              {headers.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody className="ats-main-custom-table-tbody-container">
            {renderChildren().map((childs, i) => (
              <tr key={i}>
                {childs.map((child, j) => (
                  <td key={j}>{child}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
