import {
  Dashboard,
  PersonOutline,
  ShoppingBag,
  CreditCard,
  LocalShipping,
  InsertChart,
  NotificationsNone,
  Settings,
  Logout,
} from "@mui/icons-material";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar ">
        {/**beginning of sidebar items top */}
        <ul className="sidebar-items-top">
          <p className="title">Main</p>
          <li className="sidebar-item">
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>
          <li className="sidebar-item">
            <PersonOutline className="icon" />
            <span>Users</span>
          </li>
          <li className="sidebar-item">
            <ShoppingBag className="icon" />
            <span>Products</span>
          </li>
          <li className="sidebar-item">
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>{" "}
          <li className="sidebar-item">
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful</p>
          <li className="sidebar-item">
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li className="sidebar-item">
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Services</p>
          <li className="sidebar-item">
            <Settings className="icon" />
            <span>System Health</span>
          </li>
          <li className="sidebar-item">
            <Settings className="icon" />
            <span>Logs</span>
          </li>
          <li className="sidebar-item">
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li className="sidebar-item">
            <PersonOutline className="icon" />
            <span>Profile</span>
          </li>
          <li className="sidebar-item">
            <Logout className="icon" />
            <span>Logout</span>
          </li>
          <p className="title">Theme</p>
        </ul>
        {/** end of sidebar top */}

        {/**beginning of bottom div */}

        <div className="colors-option">
          <div className="bg-white h-5 w-5 rounded-sm theme-white"></div>
          <div className="bg-slate-900 h-5 w-5 rounded-sm"></div>
        </div>
        {/**end of bottom div */}
      </div>
    </>
  );
};
