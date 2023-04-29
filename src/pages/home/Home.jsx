import "./home.scss";
import { Sidebar } from "./../../components/sidebar/Sidebar";
import { Header } from "./../../components/header/Header";
import { Widgets } from "../../components/widgets/Widgets";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container ">
        <Sidebar />
        <div className="main-content ">
          <div className="widgets">
            <Widgets type="users" rgb="bg-violet-200" />
            <Widgets type="orders" rgb="bg-yellow-200" />
            <Widgets type="earnings" rgb="bg-green-200" />

            <Widgets type="my balance" rgb="bg-indigo-200" />
          </div>
        </div>
      </div>
    </>
  );
};
