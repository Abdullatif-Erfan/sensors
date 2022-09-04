
import React, {  Fragment } from "react";
// import Spinner from "../../components/loader/spinner/Spinner";
import {  OpenAlertAPIServices ,TotalCustomersAPIServices, TotalSenserAPIServices } from "../../hook/SensorAPIservices"

import SensorsListTable from "./sensorsTable/SensorsListTable";
import SensorsChart from "../charts/sensorChart/SensorsChart";
import HomeCards from "./card/HomeCards";
import MainContainer from "../../components/container/MainContainer";
import Spinner from "../../components/loader/spinner/Spinner";




const HomePage : React.FC = () => {

// ----------------- Get Data From API using reactQuery -----------------
const { isLoading: isLoadingTotalSensors, isError: isErrorTotalSensors, data: totalSensorsData, error: errorTotalSensors } = TotalSenserAPIServices();
const { isLoading: isLoadingAlerts , isError: isErrorAlerts, data: totalAlertsData, error: errorAlert } = OpenAlertAPIServices();
const { isLoading: isLoadingCustomer , isError: isErrorCustomer, data: totalCustomersData, error: errorCustomer } = TotalCustomersAPIServices();


// ------------------- set Loading and Errors --------------------------
const isLoading = isLoadingTotalSensors || isLoadingAlerts || isLoadingCustomer 
const isError = isErrorTotalSensors ||  isErrorAlerts  || isErrorCustomer  
// const errors = [errorTotalSensors, errorAlert, errorCustomer];


// get the data and set it into variables
const totalSensors = totalSensorsData?.data.records;
const totalAlerts = totalAlertsData?.data.records;
const totalCustomers = totalCustomersData?.data.records;
   


  return (
    <Fragment>
      {/* ------------- Main Content of Home Page -------------- */}
        <main id="main" className="main">
          <MainContainer  className="dashboard" />
          {/* ----- Show Errors when occured ------ */}
          {/* {
            isError &&
            <div className="errorWrapper">
              { errorTotalSensors instanceof Error &&   <div className="errorMessage">{errorTotalSensors.message}</div> }
              { errorAlert instanceof Error && 
                    <div className="errorMessage">{errorAlert.message}</div> } 
              { errorCustomer instanceof Error &&  
                    <div className="errorMessage">{errorCustomer.message}</div>} 
            </div>
            } */}
            {/* ----- End of Show Errors ----- */}


            {/* ---------- Total Report ----- */}
            <div className="col-lg-12">
              <div className="row">
              {
                isLoading ?  <Spinner /> :
                <Fragment>
                  <HomeCards title="TOTAL SENSORS" iconName="bi-kanban" data={totalSensors} />  
                  <HomeCards title="OPEN ALERTS" iconName="bi-tags-fill" data={totalAlerts} />            
                  <HomeCards title="TOTAL CUSTOMERS" iconName="bi-pc-display-horizontal" data={totalCustomers} /> 
                </Fragment>
              }  
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
