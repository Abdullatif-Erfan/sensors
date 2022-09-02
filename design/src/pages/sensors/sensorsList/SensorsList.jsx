import { Fragment, useState } from "react";
import MainContainer from "../../../components/container/MainContainer";
import { useAddNewSensor } from "../../../hook/InsertSensors";
import "./sensorsListStyle.css";
import { useForm } from "react-hook-form";

const SensorsList = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const {
    mutate: addData,
    isLoading: addingDataLoader,
    isError: isAddingError,
    error: AddingError
  } = useAddNewSensor();

  const onSubmit = data => {
    const last_online = Date.now();
    const formData = {
      device_id: data.device_id,
      last_online: last_online,
      last_temp: data.last_temp,
      customer: 'customer-1',  // Next task is to get the list and provide dropdown list
      location: data.location
    };
    addData(formData);
  };


  return (
    <Fragment>
      {/* ------------- Main Content of Home Page -------------- */}
      <main id="main" className="main">
        <MainContainer className="dashboard" />
        {/* ---------- Total Report ----- */}
        <div className="col-lg-12">
          <div className="row">
            {/* ---------- Add Sensor Part ----------- */}
            <div className="col-md-8 col-sm-8 col-xs-12 ">
              <h4>New Sensor</h4>
              <hr />

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <div className="form-fields m-t-20">
                  <input placeholder="Sensor ID" {...register("device_id")} />
                </div>

                <div className="form-fields m-t-20">
                  <input
                    placeholder="location"
                    {...register("location", { required: true })}
                  />
                  {errors.location && (
                    <div className="error">This field is required</div>
                  )}
                </div>


                <div className="form-fields m-t-20">
                  {/* ---- Next Task --------- */}
                  {/* Get Customers List and show as a dropdown list */}
                </div>

                <div className="form-fields m-t-20 m-b-50">
                  <input
                    type="number"
                    step="0.5"
                    placeholder="Last Temp"
                    {...register("last_temp", {
                      required: {
                        value: true,
                        message: "Last Temp  is required"
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please Type Just number"
                      }
                    })}
                  />

                  <div className="error">
                    {errors.last_temp && errors.last_temp.message}
                  </div>
                </div>

                <hr />
                <span className="submit_buttons">
                  <button type="submit" className="submitButton">
                    Add Sensor
                  </button>
                  <button className="cancelButton">Cancel</button>
                </span>
              </form>
            </div>
            {/* ---------- End of Add Sensor Part ----------- */}

            {/* ---------- Add Alerts ----------- */}
            <div className="col-md-4 col-sm-4 col-xs-12">
              <h4>Alerts</h4> <hr />
              <div className="form-fields m-t-20">
                <div className="form-fields m-t-20">
                  <input placeholder="MinTemp" {...register("minTemp")} />
                  <br />
                  <input
                    {...register("minTemp")}
                    type="checkbox"
                    value="Monitor Min"
                    className="minTemp"
                  />
                  <span className="checkBoxTitle"> Monitor Min Temprature</span>
                </div>

                <div className="form-fields m-t-20">
                  <input placeholder="MinTemp" {...register("minTemp")} />
                  <br />
                  <input
                    {...register("maxTemp")}
                    type="checkbox"
                    value="Monitor Max"
                    className="maxTemp"
                  />
                  <span className="checkBoxTitle">
                    {" "}
                    Monitor Max Temprature{" "}
                  </span>
                </div>
              </div>
              <hr />
            </div>
            {/* ---------- End of Add Alerts ----------- */}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default SensorsList;
