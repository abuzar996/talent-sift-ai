import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { applicantsHeader } from "../../constants/applicantsHeaderData";
import ImageColumn from "../TableContainers/ImageColumn";

import CandidateColumn from "../TableContainers/CandidateColumn";
import MatchColumn from "../TableContainers/MatchColumn";
import CustomColumn from "../TableContainers/CustomColumn/customColumn";
import DetailColumn from "../TableContainers/DetailsColumn";
import Button from "../../components/Button";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableLayout = () => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead className="custom-table-row-table">
          <TableRow className="custom-table-row-table">
            {applicantsHeader.map((header) => (
              <TableCell key={header.id_} align="left">
                {header.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">
                <ImageColumn />
              </TableCell>
              <TableCell component="th" scope="row">
                <CandidateColumn
                  name={"Abuzar Rahim"}
                  location={"San Fransisco Bay Area"}
                  currentPosition={"Staff Engineer"}
                  company={"Meta"}
                />
              </TableCell>

              <TableCell align="left">
                <MatchColumn priority={"high"} />
              </TableCell>
              <TableCell align="left">
                <CustomColumn data="Jan 27,2023" />
              </TableCell>
              <TableCell align="left">
                <CustomColumn data="Job Site" />
              </TableCell>
              <TableCell align="left">
                <DetailColumn />
              </TableCell>
              <TableCell align="left">
                <Button>Advance</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableLayout;
