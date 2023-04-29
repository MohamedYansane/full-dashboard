import { Navbar } from "../navbar/Navbar";
import "./header.scss";
import Badge from "@mui/material/Badge";
import {
  Search,
  NotificationsNone,
  DarkModeOutlined,
  Language,
  ChatBubbleOutlineOutlined,
  SpaceDashboard,
} from "@mui/icons-material";
import my from "./MY.jpg";
export const Header = () => {
  return (
    <>
      <div className="header">
        {/**beginning of top div */}
        <div className="top">
          <span className="logo">
            <SpaceDashboard className="icon" /> Administrator
          </span>
        </div>
        <div className="search-bar rounded-md ">
          <input
            type="text"
            name=""
            id=""
            className="search rounded-md "
            placeholder="Search..."
          />
          <Search className="icon" />
        </div>
        <div className="navigation">
          <div className="language">
            <Navbar icon={<Language className="icon" />} />
            <span>English</span>
          </div>
          <Navbar icon={<DarkModeOutlined className="icon" />} />
          <Badge badgeContent={3} color="primary">
            <Navbar icon={<NotificationsNone className="icon" />} />
          </Badge>
          <Badge badgeContent={1} color="primary">
            <Navbar icon={<ChatBubbleOutlineOutlined className="icon" />} />
          </Badge>
          <div className="img-box p-1 bg-blue-100 rounded-full">
            <img src={my} alt="" className="rounded-full h-6 w-6" />
          </div>
        </div>
        {/**end  of top div */}
      </div>
    </>
  );
};
