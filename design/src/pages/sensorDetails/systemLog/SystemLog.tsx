import "./systemLogStyle.css";
import { GetSystemLogData } from "../../../hook/SensorDetailsAPIservices";
import { logTypes } from "../../../types/Types";
import moment from "moment";

const SystemLog = () => {
  const { isLoading, data: logData, isError, error } = GetSystemLogData();


  // --- Handling Loading and Errors ---
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
    <>
      {/* ----- Left side (System Log) -------- */}
      <div className="col-md-6 col-sm-12 col-xs-12 ">
        <h6>SYSTEM LOG</h6>
        <div className="col-md-12">
          {/* <!-- Recent Activity --> */}
          <div className="card">
            <div className="card-body">
              <div className="activity">
                {
                  logData?.data.records.map(({time, description}: logTypes) => {
                    return (
                      <div key={time} className="activity-item d-flex">
                        <div className="activite-label"></div>
                        <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                        <div className="activity-content">
                          {description.substring(1,20) + "..."}
                          <span className="dateOrTime">
                          {moment(Number(time)).startOf('hour').fromNow()}
                          </span>
                        </div>
                      </div>
                    )
                  })
                }
                {/*  activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label"></div>
                  <i className="bi bi-circle activity-badge text-muted align-self-start" />
                  <div className="activity-content">view all</div>
                </div>
                {/* End activity item*/}
              </div>
            </div>
          </div>
          {/* End Recent Activity */}
        </div>
      </div>
      {/* ----- End of Left side (System Log)  -------- */}
    </>
  );
};
export default SystemLog;
