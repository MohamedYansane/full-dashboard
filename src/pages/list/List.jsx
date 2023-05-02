import React from "react";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
import { DataTable } from "../../components/datatable/DataTable";
export const List = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <DataTable />
        </div>
      </div>
    </>
  );
};
