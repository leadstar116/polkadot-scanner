import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import styled from "styled-components";
import {
  IResultRowData,
  ResultTablePropType,
} from "../interfaces/result.interface";

const columns: GridColDef[] = [
  {
    field: "blockNumber",
    headerName: "#",
    width: 90,
    type: "number",
    align: "left",
  },
  {
    field: "eventName",
    headerName: "Event Name",
    width: 150,
    align: "left",
  },
  {
    field: "eventIndex",
    headerName: "Index",
    width: 150,
    align: "left",
  },
  {
    field: "eventSection",
    headerName: "event Section",
    width: 150,
    align: "left",
  },
  {
    field: "eventParams",
    headerName: "Parameters",
    sortable: false,
    width: 400,
    align: "left",
  },
];

export const ResultTable = (props: ResultTablePropType) => {
  const { result } = props;
  const rows: IResultRowData[] = [];

  let index = 0;
  result.forEach((data) => {
    data.events.forEach((event) => {
      rows.push({
        id: index,
        blockNumber: data.blockNumber,
        eventName: event.method,
        eventIndex: event.index,
        eventSection: event.section,
        eventParams: JSON.stringify(event.data),
      });
      index += 1;
    });
  });

  return (
    <ResultTableContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </ResultTableContainer>
  );
};

const ResultTableContainer = styled.div`
  height: 400px;
  margin: 20px auto;
  width: 100%;
`;
