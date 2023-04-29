import React from "react";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
export const List = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">List</div>
      </div>
    </>
  );
};
