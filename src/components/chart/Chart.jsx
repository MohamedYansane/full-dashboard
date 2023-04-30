import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
export const Chart = () => {
  const data = [
    {
      month: "January",
      Total: 1200,
    },
    {
      month: "February",
      Total: 2100,
    },
    {
      month: "March",
      Total: 800,
    },
    {
      month: "April",
      Total: 1600,
    },
    {
      month: "May",
      Total: 900,
    },
    {
      month: "June",
      Total: 1700,
    },
  ];

  return (
    <div className="chart shadow-lg rounded-md">
      <div className="last-six-month">Last 6 months revenues</div>
      {/**instead of giving height i'm gonna give an aspect which is a half
       * of width  aspect={2 / 1} half of width
       */}
      <ResponsiveContainer min-width="67%" height={360}>
        <AreaChart
          width="67%"
          height={230}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#Total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
