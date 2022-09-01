// https://betterprogramming.pub/how-to-visualize-time-series-data-in-javascript-with-chart-js-and-influxdb-7e0a9496d77e
// import "./sensorsChartStyle.css";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";

// function SensorsChart({ title, data, dataKey1, dataKey2, grid }) {
//   return (
//     <div className="chart">
//       <h3 className="chartTitle">{title}</h3>
//       <ResponsiveContainer width="100%" aspect={4 / 1}>
//         <LineChart data={data}>
//           <XAxis dataKey="sensors" />
//           <YAxis />
//           <Tooltip />
//           {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey={dataKey1}
//             stroke="#8884d8"
//             activeDot={{ r: 8 }}
//           />
//           {dataKey2 && (
//             <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
//           )}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default SensorsChart;

import "./sensorsChartStyle.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// const data = [
//   {
//     time: "1640014820000",
//     temp: 4.1
//   },
//   {
//     time: "1631727900000",
//     temp: 4.2
//   },
//   {
//     time: "1645610393000",
//     temp: 5.1
//   },
//   {
//     time: "1652686036000",
//     temp: 4.5
//   },
//   {
//     time: "1652686036000",
//     temp: 3.1
//   },
//   {
//     time: "1652686036000",
//     temp: 2.1
//   },
//   {
//     time: "1652686036000",
//     temp: 4
//   }
// ];

const data = [
  {
    // name: "07/14",
    name: 1634035335000,
    temp1: 24.6,
    temp2: 25.6
  },
  {
    // name: "07/15",
    name: 1634035335000,
    temp1: 20.6,
    temp2: 12.1
  },
  {
    // name: "07/16",
    name: 1634035335000,
    temp1: 24.5,
    temp2: 34
  },
  {
    // name: "07/17",
    name: 1634035335000,
    temp1: 24.1,
    temp2: 24.6
  },
  {
    // name: "07/18",
    name: 1634035335000,
    temp1: 22.6,
    temp2: 14.6
  },
  {
    // name: "07/19",
    name: 1634035335000,
    temp1: 23,
    temp2: 34.8
  },
  {
    // name: "07/20",
    name: 1634035335000,
    temp1: 60.5,
    temp2: 22
  }
];

const data2 = [
  {
    // name: "07/14",
    name: 1634035335000,
    temp1: 2.6,
    temp2: 25.6
  },
  {
    // name: "07/15",
    name: 1634035335000,
    temp1: 20.6,
    temp2: 12.1
  },
  {
    // name: "07/16",
    name: 1634035335000,
    temp1: 24.5,
    temp2: 34
  },
  {
    // name: "07/17",
    name: 1634035335000,
    temp1: 24.1,
    temp2: 24.6
  },
  {
    // name: "07/18",
    name: 1634035335000,
    temp1: 22.6,
    temp2: 14.6
  },
  {
    // name: "07/19",
    name: 1634035335000,
    temp1: 23,
    temp2: 34.8
  },
  {
    // name: "07/20",
    name: 1634035335000,
    temp1: 60.5,
    temp2: 22
  }
];

function TempratureDailyLineChart() {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12 m-t-20 border">
      <div className="row m-t-20">
        <h5 className="">TEMPERATURE DAILY</h5>
        <div className="col-lg-12 m-t-10">
          <div className="row">
            <ResponsiveContainer width="100%" aspect={4 / 1} minHeight="70%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <YAxis
                  domain={["dataMin+20.0 C", "dataMax+60.0 C"]}
                  tickCount={5}
                  allowDecimals={true}
                />

                <YAxis type="number" domain={["dataMin", "dataMax"]} />
                <YAxis type="number" domain={[0, "dataMax"]} />
                <YAxis type="number" domain={["auto", "auto"]} />
                <YAxis type="number" domain={[0, "dataMax + 1000"]} />
                <YAxis
                  type="number"
                  domain={["dataMin - 20.0 C", "dataMax + 60.0 C"]}
                />

                <Tooltip />
                <Legend iconType="square" />
                <Line
                  type="monotone"
                  dataKey="temp2"
                  stroke="#8884d8"
                  activeDot={{ r: 1 }}
                />
                <Line type="monotone" dataKey="temp1" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempratureDailyLineChart;
