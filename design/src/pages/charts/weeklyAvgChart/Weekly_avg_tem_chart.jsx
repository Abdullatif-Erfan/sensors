import "./weeklyChartStyle.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Monday",
    time: 4000,
    temp: 2400
  },
  {
    name: "Tue",
    time: 3000,
    temp: 1398
  },
  {
    name: "Wed",
    time: 2000,
    temp: 9800
  },
  {
    name: "Thu",
    time: 2780,
    temp: 3908
  },
  {
    name: "Fri",
    time: 1890,
    temp: 4800
  },
  {
    name: "Sat",
    time: 2390,
    temp: 3800
  },
  {
    name: "Sun",
    time: 3490,
    temp: 4300
  }
];

const WeeklyAvgTemChart = () => {
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 border">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis hide={true} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="time"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#ddd" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
export default WeeklyAvgTemChart;
