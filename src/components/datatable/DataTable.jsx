import "./datatable.scss";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatableSource";
import { Delete, RemoveRedEyeOutlined } from "@mui/icons-material";

export const DataTable = () => {
  // remarque j'ai pas crée le field action auiveau du dataSource
  // car je veux qu'elle soit adapté à chaque ligne
  // notice ça ne veut dire que je ne peux le creer de l'autre coté car j'avais fait
  const colAction = [
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: () => {
        return (
          <>
            <div className="cell-action">
              <span className="eye-span">
                <RemoveRedEyeOutlined className="view-cell" />
              </span>
              <span className="delete-span">
                {" "}
                <Delete className="delete-cell" />
              </span>
            </div>
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }} className="p-5 min-w-full">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(colAction)}
        //pour que la pagination marche j'ai du rajouter
        //l'objet initialiseState
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        checkboxSelection

        /* pageSize={9}
        rowsPerPageOptions={[5]}*/
      />
    </div>
  );
};
