import React from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  PersonOutline,
  ShoppingCartOutlined,
  AccountBalanceWalletOutlined,
  MonetizationOnOutlined,
} from "@mui/icons-material";
export const Widgets = ({ type, rgb }) => {
  let data;
  //temporary
  let amount = 9876;
  let percentage = 20;
  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutline className="icon text-violet-500" />,
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlined className="icon text-yellow-500" />,
      };
      break;

    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlined className="icon text-green-500" />,
      };
      break;
    case "my balance":
      data = {
        title: "MY BALANCE",
        isMoney: true,
        link: "See balance details",
        icon: <AccountBalanceWalletOutlined className="icon text-indigo-500" />,
      };
      break;
    default:
      break;
  }
  return (
    <>
      <div className="widget-card shadow-lg rounded-md ">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="count-title">
            {data.isMoney && "$"} {amount}
          </span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            {percentage}%
          </div>
          <div className={`right-icon ${rgb}`}>{data.icon}</div>
        </div>
      </div>
    </>
  );
};
