import { Link, useParams } from "react-router-dom";
import { Fragment } from "react";
import "./sensorDetails.css";
import MainContainer from "../../../components/container/MainContainer";
import { useTotalsAndWeeklyAvgTemp } from "../../../hook/SensorDetailsAPIservices";
import TempratureDailyLineChart from "../../charts/dailyTempChart/TempratureDailyLineChart";
import WeeklyAvgTemChart from "../../charts/weeklyAvgChart/Weekly_avg_tem_chart";
import SystemLog from "../systemLog/SystemLog";
import Activities from "../activity/Activities";
import TotalReports from "../totalReports/TotalReports";
// import SensorsChart from "../../charts/sensorChart/SensorsChart";
const SensorDetailsPage = () => {
  const { device_id } = useParams();

  const { isLoading, data, isError, error } = useTotalsAndWeeklyAvgTemp();

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

  return (
    <Fragment>
      {/* ------------- Main Content  -------------- */}
      <main id="main" className="main">
        <MainContainer className="sensorDetails">
          {/* --------------- Weekly Average ------------- */}
          <h5 className="card-title">
            <Link to="/">
              <span className="backButton">
                <i className="bi bi-arrow-left"></i>
              </span>
            </Link>
            Sensor - {device_id}
          </h5>

          <div className="col-lg-12">
            <div className="row">
              {/* ----- Left side -------- */}
              <div className="col-md-6 col-sm-12 col-xs-12">
                {/* --- TOTAL MESSAGES ---  */}
                <TotalReports
                  title="TOTAL MESSAGES"
                  text="Total Messages this week"
                  amount={120}
                />
                {/*  --- End of TOTAL MESSAGES --- */}

                {/* --- DownTime ---  */}
                <TotalReports
                  title="DOWN TIME"
                  text="Total down time"
                  amount={67}
                  type="sec"
                />
                {/*  --- End of DownTime --- */}

                {/* --- Alerts ---  */}
                <TotalReports
                  title="ALERTS"
                  text="System Alerts this week"
                  amount={74}
                />
                {/*  --- End of Alerts --- */}
              </div>
              {/* ----- End of Left side -------- */}

              {/* ----- Right side -------- */}
              <WeeklyAvgTemChart />
              {/* ----- End of Right side -------- */}
            </div>
          </div>
          {/* --- End of Weekly Average --- */}

          {/* --- Temperature Daily Graph --- */}
          <TempratureDailyLineChart />
          {/* --- End of Temperature Daily Graph --- */}

          {/* --- System Log and Activies --- */}
          <div className="col-lg-12 m-t-40">
            <div className="activityWrapper">
              <div className="row">
                <SystemLog />
                <Activities />
              </div>
            </div>
          </div>

          {/* ---- End of System Log and Activies --- */}
        </MainContainer>
      </main>
      {/* ----------- End of Main Content ---------- */}
    </Fragment>
  );
};
export default SensorDetailsPage;
