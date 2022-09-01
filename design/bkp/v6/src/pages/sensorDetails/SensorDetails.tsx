import { Link } from "react-router-dom"
import { Fragment } from "react";
import "./sensorDetails.css";
const SensorDetailsPage = () => {
    return (

        <Fragment>
        {/* ------------- Main Content  -------------- */}
        <main id="main" className="main">
          <section className="section sensorDetails">
              <div className="col-lg-12">
                <div className="row">
                   {/* --------------- Weekly Average ------------- */}
                    <h5 className="card-title">
                        <Link to="/"><i className="bi bi-arrow-left"></i></Link>
                        Sensor - nrf-881277 
                    </h5>
                    
                    <div className="col-lg-12">
                       <div className="row">

                        {/* ----- Left side -------- */}
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            
                           {/* --- TOTAL MESSAGES ---  */}
                            <div className="row border">
                                <div className="totalMessageWrapper">
                                    <div className="totalMessage">
                                        <h6>TOTAL MESSAGES</h6>
                                        <small>Total Messages this week</small>
                                    </div>
                                    <h4>1340</h4>
                                </div>
                            </div>
                            {/*  --- End of TOTAL MESSAGES --- */}

                            {/* --- DownTime ---  */}
                            <div className="row border">
                                <div className="totalMessageWrapper">
                                    <div className="totalMessage">
                                        <h6>DOWN TIME</h6>
                                        <small>Total down time</small>
                                    </div>
                                    <div className="downTimeAmount">
                                       <h4>67</h4>
                                       <small>sec</small>
                                    </div>
                                </div>
                            </div>
                            {/*  --- End of DownTime --- */}


                            {/* --- Alerts ---  */}
                            <div className="row border">
                                <div className="totalMessageWrapper">
                                    <div className="totalMessage">
                                        <h6>ALERTS</h6>
                                        <small>System Alerts this week</small>
                                    </div>
                                    <h4>74</h4>
                                </div>
                            </div>
                            {/*  --- End of Alerts --- */}


                        </div>
                        {/* ----- End of Left side -------- */}

                        {/* ----- Right side -------- */}
                        <div className="col-md-6 col-sm-12 col-xs-12 border" style={{height: "222px"}}>
                            RIght Side
                        </div>
                        {/* ----- End of Right side -------- */}

                      </div>
                    </div>
                    {/* ------------- End of Weekly Average ------------ */}


                     
                    {/* ------------------ Temperature Daily Graph ------ */}
                    <div className="col-md-12 col-sm-12 col-xs-12 m-t-20 border">
                       <div className="row">
                       <h5 className="">
                            TEMPERATURE DAILY
                        </h5>
                        
                        <div className="col-lg-12 ">
                        <div className="row">
                                Graph
                            </div>
                        </div>
                       </div>
                    </div>
                    {/* ----------------- End of Temperature Daily Graph ------ */}


 
                {/* --------------- Device List ------------- */}
                    <div className="col-lg-12 m-t-40">
                       <div className="rows">
                        <div className="activityWrapper">

                        {/* ----- Left side (System Log) -------- */}
                        <div className="col-md-6 col-sm-12 col-xs-12 ">
                            <h6>SYSTEM LOG</h6>
                               <div className="col-md-12 border">
                                   Syste Log List
                               </div>
                        </div>
                        {/* ----- End of Left side (System Log)  -------- */}

                        {/* ----- Right side (Activity) -------- */}
                        <div className="col-md-6 col-sm-12 col-xs-12 ">
                         <h6>SYSTEM LOG</h6>
                               <div className="col-md-12 border">
                                   Syste Log List
                               </div>
                        </div>
                        {/* ----- End of Right side (Activity) -------- */}


                        </div>
                      </div>
                    </div>
                    {/* ------------- End of Device List ------------ */}  
  
              </div>
            </div>
          </section>
        </main>
        {/* ----------- End of Main Content ---------- */}
  
      </Fragment>

    )
}
export default SensorDetailsPage;