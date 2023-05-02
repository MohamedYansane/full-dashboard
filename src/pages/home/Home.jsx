import "./home.scss";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
import { Widgets } from "../../components/widgets/Widgets";
import { Feature } from "../../components/featured-chart/Feature";
import { Chart } from "../../components/chart/Chart";
import { TableComponent } from "../../components/table/Table";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container ">
        <Sidebar />
        <div className="main-content min-h-screen  ">
          {/**Beginning of card-widget */}
          <div className="widgets w-full  ">
            <Widgets type="users" rgb="bg-violet-200" />
            <Widgets type="orders" rgb="bg-yellow-200" />
            <Widgets type="earnings" rgb="bg-green-200" />
            <Widgets type="my balance" rgb="bg-indigo-200" />
          </div>
          {/**End of card-widget */}
          {/**Beginning of chart content */}
          <div className="charts w-full ">
            <Feature />
            <Chart aspect={2 / 1} title="Last 6 Months (income)" />
          </div>
          {/**End of chart content */}
          {/**Beginning of transaction data (table) */}{" "}
          <div className="list-container shadow-lg rounded-md w-full">
            <div className="list-title">Transaction details</div>
            <TableComponent />
          </div>
          {/**End of transaction data (table) */}
        </div>
      </div>
    </>
  );
};
