import React from "react";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
import "./single.scss";
import { TableComponent } from "../../components/table/Table";
import { Edit } from "@mui/icons-material";
import yansane from "./yansane-mirror.jpg";
import { Chart } from "../../components/chart/Chart";
export const Single = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content">
          <div className="single-container w-full">
            <div className="top">
              <div className="user-information shadow-lg rounded-md">
                <div className="title-info-edit">
                  <h1 className="title">Information</h1>
                  <span>
                    {" "}
                    <Edit />
                  </span>
                </div>
                <div className="user-details">
                  <div className="img-box rounded-md relative">
                    <img
                      src={yansane}
                      alt="yansane"
                      srcSet=""
                      className="w-24 h-24 rounded-md"
                    />
                  </div>
                  <div className="details">
                    <span className="nom">Nom: Yansane</span>
                    <span className="prenom">Prenom: Mohamed</span>
                    <span className="email">
                      Email: Yansane472@gmail.com
                    </span>{" "}
                    <span className="adresse">Adress: CPI COMICO</span>
                    <span className="country">Country: Senegal</span>
                  </div>
                </div>
              </div>
              <div className="user-chart shadow-lg rounded-md">
                <Chart aspect={4 / 1} title="User Spending (Last 6 Months)" />
              </div>
            </div>
            <div className="bottom">
              <h1 className="title">List Transactions</h1>
              <TableComponent className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
