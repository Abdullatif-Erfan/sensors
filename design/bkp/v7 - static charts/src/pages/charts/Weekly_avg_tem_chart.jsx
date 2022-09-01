import "chartjs-adapter-moment";
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
import { Chart } from "react-chartjs-2";

ChartJS.register(
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   response: true,
//   scales: {
//     x: {
//       type: "time",
//       time: {
//         unit: "day"
//       }
//     }
//   }
// };

// const values = [
//   {
//     x: new Date("2020-01-01"),
//     y: 100.2
//   },
//   {
//     x: new Date("2020-01-02"),
//     y: 102.2
//   },
//   {
//     x: new Date("2020-01-03"),
//     y: 105.3
//   },
//   {
//     x: new Date("2020-01-11"),
//     y: 104.4
//   }
// ];

// export const data = {
//     datasets: [
//       {
//         data: values
//       }
//     ]
//   };

// export const options = {
//   title: {
//     display: true,
//     text: "LineChart"
//   },
//   scales: {
//     yAxes: [
//       {
//         ticks: {
//           min: 20.0,
//           max: 60.0,
//           stepSize: 5.0,
//           callback: function(value, index, values) {
//             return value + "*";
//           }
//         }
//       }
//     ]
//   }
// };

export const options = {
  title: {
    display: true,
    text: "LineChart"
  },
  response: true,
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
        max: 60.0,
        stepSize: 5.0,
        callback: function(value, index, values) {
          return value + "*";
        }
      }
    }
  }
};

const values = [
  {
    x: new Date("2020-01-01"),
    y: 100.2
  },
  {
    x: new Date("2020-01-02"),
    y: 102.2
  },
  {
    x: new Date("2020-01-03"),
    y: 105.3
  },
  {
    x: new Date("2020-01-11"),
    y: 104.4
  }
];
const values2 = [
  {
    x: new Date("2020-01-01"),
    y: 10.2
  },
  {
    x: new Date("2020-01-02"),
    y: 90.2
  },
  {
    x: new Date("2020-01-03"),
    y: 15.3
  },
  {
    x: new Date("2020-01-11"),
    y: 100.4
  }
];

export const data = {
  //   labels: ["Jan", "Feb", "March", "April", "May"],
  datasets: [
    {
      label: "sales for 2020 (m)",
      data: values,
      borderColor: ["rgb(255, 99, 132)"],
      backgroundColor: ["rgba(255, 99, 132, 0.5)"],
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "sales for 2021 (m)",
      data: values2,
      borderColor: ["rgb(93, 99, 45)"],
      backgroundColor: ["rgba(250, 99, 132, 0.5)"],
      pointBackgroundColor: "rgb(85, 9, 132)",
      pointBorderColor: "rgba(85, 99, 32, 0.5)"
    }
  ]
};

const WeeklyAvgTemChart = () => {
  //   const data2 = {
  //     labels: ["Jan", "Feb", "March", "April", "May"],
  //     datasets: [
  //       {
  //         label: "sales for 2020 (m)",
  //         data: [1, 2, 3, 2, 7],
  //         borderColor: ["rgb(255, 99, 132)"],
  //         backgroundColor: ["rgba(255, 99, 132, 0.5)"],
  //         pointBackgroundColor: "rgb(255, 99, 132)",
  //         pointBorderColor: "rgba(255, 99, 132, 0.5)"
  //       },
  //       {
  //         label: "sales for 2021 (m)",
  //         data: [1, 5, 2, 1, 9],
  //         borderColor: ["rgb(93, 99, 45)"],
  //         backgroundColor: ["rgba(250, 99, 132, 0.5)"],
  //         pointBackgroundColor: "rgb(85, 9, 132)",
  //         pointBorderColor: "rgba(85, 99, 32, 0.5)"
  //       }
  //     ]
  //   };

  // const options = {
  //   title: {
  //     display: true,
  //     text: "LineChart"
  //   },
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           min: 20.0,
  //           max: 60.0,
  //           stepSize: 5.0,
  //           callback: function(value, index, values) {
  //             return value + "*";
  //           }
  //         }
  //       }
  //     ]
  //   }
  // };
  return (
    <div className="col-md-6 col-sm-12 col-xs-12 border">
      <Line options={options} data={data} />;
    </div>
  );
};
export default WeeklyAvgTemChart;
