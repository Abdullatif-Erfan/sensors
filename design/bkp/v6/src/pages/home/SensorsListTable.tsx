import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import ReactPaginate from 'react-paginate';

import SensorTypes from "../../types/Types";
import { SenserAPIServices2 } from "../../hook/SensorAPIservices";

const SensorsListTable = ({ totalSensors }: any) => {
  const totalSensor = parseInt(totalSensors);
  // --------- Pagination Setup -----------------------------
  const limitPerPage = 5;
  const [pageNumber, setPageNumber] = useState<number>(1);
  

  // ----------------- Get Data From API using reactQuery -----------------
  const { isLoading, isError, data, error, isFetching } = SenserAPIServices2(
    pageNumber,
    limitPerPage
  );

  // -------------- Sensor List Pagination and Calculations --------
  const totalPages = Math.floor(totalSensor / limitPerPage); // 150 / 5 => 30

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


  // Invoke when user click to request another page.
  const handlePageClick = (event:any) => {
     setPageNumber(event.selected + 1);
  };


  return (
    <div className="col-lg-12 m-t-20">
      <div className="card">
        {/* Setting Left Icon */}
        <div className="filter">
          <a className="icon" href="#">
            <i className="bi bi-gear" />
          </a>
        </div>
        {/* End Setting Left Icon */}
        <div className="card-body">
          <h5 className="card-title">SENSOR LIST</h5>
          
          <div className="sensorListWrapper">

                <table className="table table-striped">
                <tbody>

                  {
                    data?.data.results.map(({device_id,last_online,last_temp,customer,location}: SensorTypes) => 
                    {
                    return <tr key={device_id}>
                    <th>{device_id}</th>
                    <td>{moment(parseInt(last_online)).format('ll')}<br/><small>Last Online</small></td>
                    <td>{last_temp}<br/><small>Temp</small></td>
                    <td>{location}<br/><small>Location</small></td>
                    <td>
                      <button className="optionsButton">Options</button>
                    </td>
                    <td>
                      <Link to={`/sensorDetails/${device_id}`}>
                        <button className="detailsButton">Details</button>
                      </Link>
                    </td>
                  </tr>

                  })
                }
                        
                      </tbody>
                    </table>

                    {/* ---------- Pagination --------- */}
                    {/* <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        
                      <li className="page-item">
                        <button disabled={pageNumber === 1} className="page-link" aria-label="Previous">«</button>
                      </li>
                        {
                           Array.from(Array(totalPages), (e, i) => {
                           return <li key={i} className={`page-item ${pageNumber === i ? "active" : "Inactive"} `}><span onClick={() => setPageNumber(i)} className="page-link">{i}</span></li>
                           })
                        }
                     
                        <li className="page-item">
                        <button disabled={pageNumber === totalPages} className="page-link" aria-label="Next">»</button>
                      </li>
                      </ul>
                    </nav> */}

                    <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={totalPages}
                            previousLabel="< previous"
                            // renderOnZeroPageCount={null}
                            containerClassName="pagination"
                            pageLinkClassName="page-item"
                            previousLinkClassName="page-num"
                            nextLinkClassName="page-num"
                            activeLinkClassName="active"
                        />

                     {/* ---------- End of Pagination ---- */}
                    <div className="col-12">
                       {  isFetching && "Loading..." }
                    </div>

            </div>
        </div>
      </div>
    </div>
  );
};
export default SensorsListTable;
