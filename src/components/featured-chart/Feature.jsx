import {
  MoreVertOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import "./feature.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const Feature = () => {
  return (
    <div className="feature shadow-lg rounded-md ">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          {/** strokeWidth={5} reduit la taille du circular progressbar
           * pour mieux savoir faire defiler sa valeur entre  1 à n
           */}
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title total-sales-title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="description">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="target">
            <h2 className="title">Target</h2>
            <span className="target-icon">
              <KeyboardArrowDownOutlined
                fontSize="small"
                className="text-red-500"
              />
              $12.5k
            </span>
          </div>

          <div className="last-week">
            <h2 className="title">Last week</h2>
            <span className="icon-target">
              <KeyboardArrowUpOutlined
                fontSize="small"
                className="text-green-500"
              />
              $12.5k
            </span>
          </div>

          <div className="last-month">
            <h2 className="title">Last Month</h2>
            <span className="icon-target">
              <KeyboardArrowDownOutlined
                fontSize="small"
                className="text-red-500"
              />
              $12.5k
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
