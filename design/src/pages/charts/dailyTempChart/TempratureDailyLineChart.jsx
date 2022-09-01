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
import { GetDailyChartData } from "../../../hook/SensorDetailsAPIservices";
function TempratureDailyLineChart() {
  const { isLoading, isError, data, error } = GetDailyChartData();
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
  console.log(APIData);

  return (
    <div className="col-md-12 col-sm-12 col-xs-12 m-t-20 border-double">
      <div className="row m-t-20">
        <h5 className="">
          TEMPERATURE DAILY{" "}
          <small>( Note: this chart api has one device )</small>
        </h5>
        <div className="col-lg-12 m-t-10">
          <div className="row">
            <ResponsiveContainer width="100%" aspect={4 / 1} minHeight="70%">
              <LineChart
                width={500}
                height={300}
                data={APIData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid
                  borderWidth={1}
                  horizontal={true}
                  vertical={false}
                  horizontalPoints={[40, 80, 120, 160, 200]}
                />
                <XAxis hide={true} />
                <YAxis hide={true} />

                {/* <Tooltip /> */}
                <Legend iconType="square" />
                <Line type="monotone" dataKey="Sensor1" stroke="#8884d8" />
                <Line type="monotone" dataKey="temp" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempratureDailyLineChart;
