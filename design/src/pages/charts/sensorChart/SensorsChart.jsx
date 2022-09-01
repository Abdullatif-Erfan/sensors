import "./sensorsChartStyle.css";
import "chartjs-adapter-moment";

import { ChartAPIServices } from "../../../hook/SensorAPIservices";

import moment from "moment";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // title: {
  //   display: true,
  //   text: "LineChart"
  // },
  // response: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
    position: "bottom"
  },
  scales: {
    x: {
      type: "time",
      time: {
        displayFormats: {
          millisecond: "MM/YY",
          second: "MM/YY",
          minute: "MM/YY",
          hour: "MM/YY",
          day: "MM/YY",
          week: "MM/YY",
          month: "MM/YY",
          quarter: "MM/YY",
          year: "MM/YY"
        },
        tooltipFormat: "DD/MM/YY"
      }
    },
    y: {
      ticks: {
        min: 20.0,
        max: 65.0,
        stepSize: 5.0,
        callback: function(value, index, values) {
          return value + ".0 °C";
        }
      }
    }
  }
};

function convertDate(time) {
  // var fullDate = new Date(time).toLocaleDateString("en-US");
  // // console.log(moment(fullDate).format("D/MM/Y")); // 27/09/2021
  // console.log(moment(fullDate).format("MM/D")); //09/27

  var fullDate = new Date(time).toLocaleDateString("en-US");
  return moment(fullDate).format("MM/DD"); //09/27
  // return fullDate;
}

// var s = new Date(1632740291000).toLocaleDateString("en-US");
// // console.log(moment(s).format("D/MM/Y")); // 27/09/2021
// console.log(moment(s).format("MM/D")); //09/27

const SensorsChart = () => {
  const { isLoading, isError, data, error } = ChartAPIServices();
  // ---------- Handling Loading and Errors -----------------
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <span>
        {error instanceof Error ? <h2>{error.message}</h2> : "Unexpected error"}
      </span>
    );
  }

  const APIData = data?.data.records;
  /**
   * 1. Get APIData
   * 2. select stats of each device using map function
   * 3. rename time as a x and temp as a y of each stats
   * 4. get device id for showing as a label
   */
  const allStats = APIData.map(item => item.stats);
  // rename fileds for first device
  const value1 = allStats[0].map(({ time: x, temp: y }) => ({ x, y }));
  const value2 = allStats[1].map(({ time: x, temp: y }) => ({ x, y }));
  const value3 = allStats[2].map(({ time: x, temp: y }) => ({ x, y }));
  const allDevicesName = APIData.map(item => item.device_id);

  const chartData = {
    datasets: [
      {
        label: allDevicesName[0],
        data: value1,
        borderColor: ["rgb(186 181 181)"],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1
      },
      {
        label: allDevicesName[1],
        data: value2,
        borderColor: ["rgb(7 156 204)"],
        backgroundColor: ["rgb(7 156 204)"],
        pointBackgroundColor: "rgb(7 156 204)",
        pointBorderColor: "rgb(7 156 204)",
        borderWidth: 1
      },
      {
        label: allDevicesName[2],
        data: value3,
        borderColor: ["rgb(244 108 119)"],
        backgroundColor: ["rgb(233 30 46)"],
        pointBackgroundColor: "rgb(233 30 46)",
        pointBorderColor: "rgb(233 30 46)",
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="row">
        <div className="sensorChartWrapper">
          <h4 className="chartTitle">SENSORS TEMPRATURES</h4>
          <Line options={options} data={chartData} />
        </div>
      </div>
    </div>
  );
};
export default SensorsChart;
