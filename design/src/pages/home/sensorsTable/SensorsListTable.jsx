import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import SensorTypes from "../../../types/Types";
import { SenserAPIServices } from "../../../hook/SensorAPIservices";
import "./sensorsListTable.css";



function SensorsListTable({ totalSensors }) {
  const totalSensor = parseInt(totalSensors);


  // --------- Pagination Setup Hooks ------------------------
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const onSuccess = data => {
    // console.log("Perform side effect after data fetching", data);
  };
  const onError = error => {
    return <h1>{error.message}</h1>;
  };

  // ----------------- Get Data From API using reactQuery -----------------
  const params = { currentPage, itemsPerPage, onSuccess, onError };
  const { isLoading, isError, data, error, isFetching } = SenserAPIServices(
    params
  );
  const currentItems = data?.data.results;
  const nextPage = data?.data.next;
  const prevPage = data?.data.previous;

  // -------------- Create Array of page number for pagination --------
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalSensor / itemsPerPage); i++) {
    pages.push(i); //  150 / 5 => 30 pages
  }

  const handleClick = event => {
    setcurrentPage(Number(event.target.id));
  };

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  // const handleLoadMore = () => {
  //   setitemsPerPage(itemsPerPage + 5);
  // };

  const handlePrevPage = () => {
    setcurrentPage(prevPage.page);
  };
  const handleNextPage = () => {
    setcurrentPage(nextPage.page);
  };

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

  // ---------------- Add active class to active list item ----------------
  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

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
                {currentItems.map(
                  ({
                    device_id,
                    last_online,
                    last_temp,
                    customer,
                    location
                  }) => {
                    return renderData(
                      device_id,
                      last_online,
                      last_temp,
                      location
                    );
                  }
                )}
              </tbody>
            </table>
            <ul className="pageNumbers">
              <li>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Prev
                </button>
              </li>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              <li>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalSensor}
                >
                  Next
                </button>
              </li>
            </ul>

            <div className="col-12 loading">{isFetching && "Loading..."}</div>
          </div>
        </div>
      </div>
    </div>
  );

  function renderData(device_id, last_online, last_temp, location) {
    return (
      <tr key={device_id}>
        <th>{device_id}</th>
        <td>
          {moment(parseInt(last_online)).format("ll")}
          <br />
          <small>Last Online</small>
        </td>
        <td>
          {last_temp}
          <br />
          <small>Temp</small>
        </td>
        <td>
          {location}
          <br />
          <small>Location</small>
        </td>
        <td>
          <button className="optionsButton">Options</button>
        </td>
        <td>
          <Link to={`/sensorDetails/${device_id}`}>
            <button className="detailsButton">Details</button>
          </Link>
        </td>
      </tr>
    );
  }
}

export default React.memo(SensorsListTable);
