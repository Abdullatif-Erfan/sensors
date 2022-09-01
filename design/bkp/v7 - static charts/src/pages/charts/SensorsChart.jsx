import "./sensorsChartStyle.css";
import "chartjs-adapter-moment";
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
  // response: false,
  maintainAspectRatio: false,
  // maintainAspectRatio: true,

  scales: {
    x: {
      type: "time",
      time: {
        unit: "day"
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
const values = [
  {
    x: convertDate(1631718950000),
    y: 65.0
  },
  {
    x: convertDate(1634596113000),
    y: 62.2
  },
  {
    x: convertDate(1632740291000),
    y: 25.3
  },
  {
    x: convertDate(1648966204000),
    y: 20.0
  }
];
const values2 = [
  {
    x: convertDate(1648590696000),
    y: 22.2
  },
  {
    x: convertDate(1657818838000),
    y: 30.2
  },
  {
    x: convertDate(1627521258000),
    y: 45.3
  },
  {
    x: convertDate(1646054901000),
    y: 55.4
  }
];

export const data = {
  //   labels: ["Jan", "Feb", "March", "April", "May"],
  datasets: [
    {
      label: "sales for 2020 (m)",
      data: values,
      borderColor: ["rgb(186 181 181)"],
      backgroundColor: ["rgba(255, 99, 132, 0.5)"],
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "rgba(255, 99, 132, 0.5)",
      borderWidth: 1
    },
    {
      label: "sales for 2021 (m)",
      data: values2,
      borderColor: ["rgb(186 181 181)"],
      backgroundColor: ["rgba(250, 99, 132, 0.5)"],
      pointBackgroundColor: "rgb(85, 9, 132)",
      pointBorderColor: "rgba(85, 99, 32, 0.5)",
      borderWidth: 1
    }
  ]
};

// var s = new Date(1632740291000).toLocaleDateString("en-US");
// // console.log(moment(s).format("D/MM/Y")); // 27/09/2021
// console.log(moment(s).format("MM/D")); //09/27

const SensorsChart = () => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="row">
        <div className="sensorChartWrapper">
          <h4 className="chartTitle">SENSORS TEMPRATURES</h4>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};
export default SensorsChart;
