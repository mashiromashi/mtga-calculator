import React from "react";
import MaterialTable from "material-table";

const TableItem = ({ columns, data, title }) => (
  <MaterialTable
    columns={columns}
    data={data}
    title={title}
    options={{ search: false, exportAllData: true, exportButton: true }}
    style={{
      marginTop: "3%",
      height: "100%",
      width: "80vw",
      marginLeft: "10%"
    }}
  />
);
export default TableItem;
