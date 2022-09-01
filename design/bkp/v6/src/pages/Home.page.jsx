import { Fragment } from "react";
import { Header } from "../components/header/Header";
import { SidebarMenu } from "../components/sidebar/SidebarMenu";
import { Footer } from "../components/footer/Footer";

export const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <SidebarMenu />

      {/* ------------- Main Content of Home Page -------------- */}
      <main id="main" className="main">
        <section className="section dashboard">
          <div className="row">
            {/* Total Report */}
            <div className="col-lg-12">
              <div className="row">
                {/* Sensor Card */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="ps-3">
                          <h6>TOTAL SENSORS</h6>
                          <span className="text-muted small pt-2 ps-1">
                            182
                          </span>
                        </div>
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-kanban" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Sensor Card */}
                {/* Open Alerts Card */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="ps-3">
                          <h6>OPEN ALERTS</h6>
                          <span className="text-muted small pt-2 ps-1">2</span>
                        </div>
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-tags-fill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Open Alerts Card */}
                {/* Customers Card */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="ps-3">
                          <h6>TOTAL CUSTOMERS</h6>
                          <span className="text-muted small pt-2 ps-1">14</span>
                        </div>
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-pc-display-horizontal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Customers Card */}
              </div>
            </div>
            {/* End Total Report */}
            {/* Sensor Temprature Graph */}
            <div className="col-lg-12">
              <div className="card">
                {/* Setting Left Icon */}
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-gear" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Setting Option</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Optin - 01
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Optin - 02
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Optin - 03
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Setting Left Icon */}
                <div className="card-body">
                  <h5 className="card-title">SENSOR TEMPRATURS</h5>
                  {/* Line Chart */}
                  <div id="reportsChart">ApexCharts</div>
                  {/* End Line Chart */}
                </div>
              </div>
            </div>
            {/* End Sensor Temprature Graph*/}
            {/* Sensor List */}
            <div className="col-lg-12">
              <div className="card">
                {/* Setting Left Icon */}
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-gear" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Setting Option</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Optin - 01
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Optin - 02
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Optin - 03
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End Setting Left Icon */}
                <div className="card-body">
                  <h5 className="card-title">SENSOR LIST</h5>
                  <div className="sensorListWrapper">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>#2457</th>
                          <td>Brandon Jacob</td>
                          <td>At praesentium minu</td>
                          <td>$64</td>
                          <td>
                            <button className="optionsButton">Options</button>
                          </td>
                          <td>
                            <button className="detailsButton">Details</button>
                          </td>
                        </tr>
                        <tr>
                          <th>#2457</th>
                          <td>Brandon Jacob</td>
                          <td>At praesentium minu</td>
                          <td>$64</td>
                          <td>
                            <button className="optionsButton">Options</button>
                          </td>
                          <td>
                            <button className="detailsButton">Details</button>
                          </td>
                        </tr>
                        <tr>
                          <th>#2457</th>
                          <td>Brandon Jacob</td>
                          <td>At praesentium minu</td>
                          <td>$64</td>
                          <td>
                            <button className="optionsButton">Options</button>
                          </td>
                          <td>
                            <button className="detailsButton">Details</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sensor List */}
          </div>
        </section>
      </main>

      {/* ----------- End of Main Content of Home Page ---------- */}

      <Footer />
    </Fragment>
  );
};
