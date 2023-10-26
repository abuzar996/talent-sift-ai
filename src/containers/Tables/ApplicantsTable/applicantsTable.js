import React, { useEffect } from "react";
import "./applicantInfo.styles.css";
import DetailColumn from "../TableContainers/DetailsColumn";
import CandidateColumn from "../TableContainers/CandidateColumn";
import Priority from "../../Priority";
import { useSelector, useDispatch } from "react-redux";
import { setTableHeight } from "../../../redux/slices/appSlice";
import ImageColumn from "../TableContainers/ImageColumn";
import Button from "../../../components/Button";
import { useDimentions } from "../../../hooks/useDimensions";
const TableHeaders = [
  " ",
  "Candidate",
  "Job Match",
  "Applied Date",
  "Source",
  "Details",
  "Actions",
];
const AtsTable = () => {
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
  return (
    <div className="main-div">
      <div
        className="table-container"
        style={{ maxHeight: `${tableHeight}px` }}
      >
        <table className="main-custom-table-outer-container">
          <thead className="main-custom-table-thead-container">
            <tr className="main-custom-table-trow-container">
              {TableHeaders.map((header, i) => (
                <th key={i}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody className="main-custom-table-tbody-container">
            <tr className="main-custom-table-trow-container">
              <td data-cell="">
                <ImageColumn />
              </td>
              <td data-cell="">
                <CandidateColumn
                  name={"Abuzar Rahim"}
                  location={"San Fransico Bay Area"}
                  currentPosition={"Software Engineer"}
                  company={"Ternoa"}
                />
              </td>

              <td data-cell="">
                <Priority priority={"high"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td data-cell="Graduation Year">
                <ImageColumn />
              </td>
              <td data-cell="name">
                <div
                  style={{
                    display: "flex",
                    flex: "1",
                    alignItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <CandidateColumn
                    name={"Abuzar Rahim"}
                    location={"San Fransico Bay Area"}
                    currentPosition={"Software Engineer"}
                    company={"Ternoa"}
                  />
                </div>
              </td>

              <td data-cell="Phone">
                <Priority priority={"low"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr className="main-custom-table-trow-container">
              <td data-cell="">
                <ImageColumn />
              </td>
              <td data-cell="">
                <CandidateColumn
                  name={"Abuzar Rahim"}
                  location={"San Fransico Bay Area"}
                  currentPosition={"Software Engineer"}
                  company={"Ternoa"}
                />
              </td>

              <td data-cell="">
                <Priority priority={"high"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td data-cell="Graduation Year">
                <ImageColumn />
              </td>
              <td data-cell="name">
                <div
                  style={{
                    display: "flex",
                    flex: "1",
                    alignItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <CandidateColumn
                    name={"Abuzar Rahim"}
                    location={"San Fransico Bay Area"}
                    currentPosition={"Software Engineer"}
                    company={"Ternoa"}
                  />
                </div>
              </td>

              <td data-cell="Phone">
                <Priority priority={"low"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr className="main-custom-table-trow-container">
              <td data-cell="">
                <ImageColumn />
              </td>
              <td data-cell="">
                <CandidateColumn
                  name={"Abuzar Rahim"}
                  location={"San Fransico Bay Area"}
                  currentPosition={"Software Engineer"}
                  company={"Ternoa"}
                />
              </td>

              <td data-cell="">
                <Priority priority={"high"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td data-cell="Graduation Year">
                <ImageColumn />
              </td>
              <td data-cell="name">
                <div
                  style={{
                    display: "flex",
                    flex: "1",
                    alignItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <CandidateColumn
                    name={"Abuzar Rahim"}
                    location={"San Fransico Bay Area"}
                    currentPosition={"Software Engineer"}
                    company={"Ternoa"}
                  />
                </div>
              </td>

              <td data-cell="Phone">
                <Priority priority={"low"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr className="main-custom-table-trow-container">
              <td data-cell="">
                <ImageColumn />
              </td>
              <td data-cell="">
                <CandidateColumn
                  name={"Abuzar Rahim"}
                  location={"San Fransico Bay Area"}
                  currentPosition={"Software Engineer"}
                  company={"Ternoa"}
                />
              </td>

              <td data-cell="">
                <Priority priority={"high"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
            <tr>
              <td data-cell="Graduation Year">
                <ImageColumn />
              </td>
              <td data-cell="name">
                <div
                  style={{
                    display: "flex",
                    flex: "1",
                    alignItems: "center",
                    justifySelf: "center",
                  }}
                >
                  <CandidateColumn
                    name={"Abuzar Rahim"}
                    location={"San Fransico Bay Area"}
                    currentPosition={"Software Engineer"}
                    company={"Ternoa"}
                  />
                </div>
              </td>

              <td data-cell="Phone">
                <Priority priority={"low"} />
              </td>

              <td data-cell="Genger">Jan,17 2023</td>
              <td data-cell="Genger">Job Site</td>
              <td data-cell="Age">
                <DetailColumn />
              </td>
              <td data-cell="Button">
                <div className="operation-perform-container">
                  <Button>Advance</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AtsTable;
