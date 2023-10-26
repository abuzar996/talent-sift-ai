import React from "react";
import "./atsTable.styles.css";
import DetailColumn from "../TableContainers/DetailsColumn";
import CandidateColumn from "../TableContainers/CandidateColumn";
import Priority from "../TableContainers/Priority";
import ImageColumn from "../TableContainers/ImageColumn";
import Button from "../../../components/Button";
//const Headers
const AtsTable = (props) => {
  return (
    <div className="ats-table-main-div">
      <div className="ats-table-container" style={{ height: "500px" }}>
        <table className="ats-main-custom-table-outer-container">
          <thead className="ats-main-custom-table-thead-container">
            <tr className="ats-main-custom-table-trow-container">
              <th></th>
              <th>Candidate</th>
              <th>Job Match</th>
              <th>Applied Date</th>
              <th>Source</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="ats-main-custom-table-tbody-container">
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
                <div className="ats-operation-perform-container">
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
