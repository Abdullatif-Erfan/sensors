
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import  moment from "moment";


import SensorTypes  from "../../types/Types"
import { SenserAPIServices, OpenAlertAPIServices ,TotalCustomersAPIServices, TotalSenserAPIServices } from "../../hook/SensorAPIservices"

import SensorsListTable from "./sensorsTable/SensorsListTable";
import SensorsChart from "../charts/sensorChart/SensorsChart";
import HomeCards from "../../components/card/HomeCards";
import MainContainer from "../../components/container/MainContainer";


const HomePage : React.FC = () => {

// ----------------- Get Data From API using reactQuery -----------------
const { isLoading: isLoadingTotalSensors, isError: isErrorTotalSensors, data: totalSensorsData, error: errorTotalSensors } = TotalSenserAPIServices();
const { isLoading: isLoadingAlerts , isError: isErrorAlerts, data: totalAlerts, error: errorAlert } = OpenAlertAPIServices();
const { isLoading: isLoadingCustomer , isError: isErrorCustomer, data: totalCustomer, error: errorCustomer } = TotalCustomersAPIServices();


// ------------------- Check Loading and Errors --------------------------
const isLoading = isLoadingTotalSensors || isLoadingAlerts || isLoadingCustomer 
const isError = isErrorTotalSensors ||  isErrorAlerts  || isErrorCustomer  
// const error = [errorSensors, errorAlert, errorCustomer]


const totalSensors: number = totalSensorsData?.data.records;

  
  // ---------- Handling Loading and Errors -----------------
  if (isLoading) {
    return <h2>Loading...</h2>
  }

if (isError) {
   return (
      <span>
         { errorTotalSensors instanceof Error ? <h2>{errorTotalSensors.message}</h2>: "Unexpected error" } 
         { errorAlert instanceof Error ? <h2>{errorAlert.message}</h2> :  "Unexpected error" } 
         { errorCustomer instanceof Error ? <h2>{errorCustomer.message}</h2>: "Unexpected error" } 
      </span>
   )
 }

  return (
    <Fragment>
      {/* ------------- Main Content of Home Page -------------- */}
        <main id="main" className="main">
          <MainContainer  className="dashboard" />
            {/* ---------- Total Report ----- */}
            <div className="col-lg-12">
              <div className="row">
               <HomeCards title="TOTAL SENSORS" iconName="bi-kanban" data={totalSensors} />  
               <HomeCards title="OPEN ALERTS" iconName="bi-tags-fill" data={totalAlerts?.data.records} />            
               <HomeCards title="TOTAL CUSTOMERS" iconName="bi-pc-display-horizontal" data={totalCustomer?.data.records} />  
              </div>
            </div>
            {/* -------- End Total Report----- */}


            {/* ---Sensor Temprature Graph --- */}
                <SensorsChart />
            {/* --- End of Sensor Temprature Graph --- */}


            {/* --- Sensor List With Pagination --- */}
               <SensorsListTable totalSensors={totalSensors}  />
            {/* --- End of Sensor List --- */}

          
      {/* ----------- End of Main Content of Home Page ---------- */}
      </main>
    </Fragment>
  );
};

export default HomePage;
