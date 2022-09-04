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
import Spinner from "../../../components/loader/spinner/Spinner";
const SensorDetailsPage = () => {
const { device_id } = useParams(); // get Sensor Id from url


  //  ---- Get the Data using useQuery and set into variables -------
  const { isLoading, data, isError, error } = useTotalsAndWeeklyAvgTemp();
  const totalReports = data?.data.records.overview;
  const alerts = totalReports?.alerts;
  const down_time = totalReports?.down_time;
  const total_messages = totalReports?.total_messages;


  return (
    <Fragment>
      {/* ------------------------- Main Content  -------------- */}
      <main id="main" className="main">
        <MainContainer className="sensorDetails">
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

            {/* ----- Show Errors when occured ------ */}
              {isError && (
                <div className="errorWrapper">
                  {error instanceof Error && (
                    <div className="errorMessage">{error.message}</div>
                  )}
                </div>
              )}
              {/* ----- End of Show Errors ----- */}


              {/* --------- Left side (Total Reports) ------- */}
              {
                isLoading ? <Spinner /> :
                <div className="col-md-6 col-sm-12 col-xs-12">
                {/* TOTAL MESSAGES */}
                <TotalReports
                  title="TOTAL MESSAGES"
                  text="Total Messages this week"
                  amount={total_messages}
                />
                {/* End of TOTAL MESSAGES */}

                {/* --- DownTime ---  */}
                <TotalReports
                  title="DOWN TIME"
                  text="Total down time"
                  amount={down_time}
                  type="sec"
                />
                {/*  --- End of DownTime --- */}

                {/* --- Alerts ---  */}
                <TotalReports
                  title="ALERTS"
                  text="System Alerts this week"
                  amount={alerts}
                />
                {/*  --- End of Alerts --- */}
              </div> 
              }
              {/* --------------- End of Left side (Total Reports) --------- */}


              {/* ----------- Right side (Weekly Graph) -------- */}
              <WeeklyAvgTemChart />
              {/* ----- End of Right side (Weekly Graph) -------- */}
            </div>
          </div>


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
      {/* ------------------------ End of Main Content ----------------- */}
    </Fragment>
  );
};
export default SensorDetailsPage;
