import React from "react";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
export const Single = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content"></div>
      </div>
    </>
  );
};
