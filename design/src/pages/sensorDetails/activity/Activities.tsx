import "./activitiesStyle.css";
import { GetActivityData } from "../../../hook/SensorDetailsAPIservices";
import { ActivityType } from "../../../types/Types";
import moment from "moment";
const Activities = () => {
  const { isLoading, data, isError, error } = GetActivityData();

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
    <div className="col-md-6 col-sm-12 col-xs-12">
      <h6>Activity</h6>
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            {
                data?.data.records.map(({time, description, event_name}: ActivityType) => {
                    return (
                        <div key={time} className="activitiesWrapper">
                        <div className="deviceItem ">
                          <i className="bi bi-person-circle" />
                          <span className="deviceformation">
                            <div className="deviceStatus">{event_name}</div>
                            <div className="onlineOfflineStatus">{moment(Number(time)).startOf('hour').fromNow()}</div>
                          </span>
                        </div>
                        <p className="activityText">{description}</p>
                      </div>
                    )
                  })
                }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activities;
