import React from "react";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
export const New = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">New</div>
      </div>
    </>
  );
};
