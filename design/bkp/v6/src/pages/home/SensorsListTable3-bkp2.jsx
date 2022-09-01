// https://www.youtube.com/watch?v=6DtBw3PaeHs
import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import SensorTypes from "../../types/Types";
import { SenserAPIServices } from "../../hook/SensorAPIservices";

import "./style.css";

// import data from "./data";

function SensorsListTable3_bkp2({ totalSensors }) {
  const totalSensor = parseInt(totalSensors);
  // --------- Pagination Setup -----------------------------
  // const limitPerPage = 5;
  // const [pageNumber, setPageNumber] = useState(1);

  // -------------- Sensor List Pagination and Calculations --------

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(5);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  // ----------------- Get Data From API using reactQuery -----------------
  const {
    isLoading,
    isError,
    data: sensorsData,
    error,
    isFetching
  } = SenserAPIServices(currentPage, itemsPerPage);

  const data2 = sensorsData?.data.results;
  // console.log(data2);

  const pages = [];
  for (let i = 1; i <= Math.ceil(totalSensor / itemsPerPage); i++) {
    pages.push(i); // // 150 / 5 => 30 pages
  }

  const handleClick = event => {
    setcurrentPage(Number(event.target.id));
  };

  /**
   * We have 30 pages and 150 records
   * First page: indexOfLastItem = 5
   * Second Page: indexOfLastItem = 10
   */
  const indexOfLastItem = currentPage * itemsPerPage;

  /**
   * First page: indexOfFirstItem = 0
   * Second Page: indexOfFirstItem = 5
   * Increment and decrement by 5
   */
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const currentItems = data2;

  // console.log("Cur Items:", currentItems);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}>Next</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>Prev</li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
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

  //  ------------ JSX -------------------
  const renderPageNumbers = pages.map(number => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  // const renderData = data => {
  //   return (
  //     <ul>
  //       {data.map((todo, index) => {
  //         return (
  //           <li key={index}>
  //             {index} - {todo.device_id}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // };

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
          <h5 className="card-title">SENSOR LIST 2</h5>

          <div className="sensorListWrapper">
            <table className="table table-striped">
              <tbody>
                {/* {renderData(currentItems)} */}

                {currentItems.map(
                  ({
                    device_id,
                    last_online,
                    last_temp,
                    customer,
                    location
                  }) => {
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
                )}
              </tbody>
            </table>
            <ul className="pageNumbers">
              {/* <li>
                <button
                  onClick={handlePrevbtn}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  Prev
                </button>
              </li> */}
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
            </ul>

            <div className="col-12 loading">{isFetching && "Loading..."}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SensorsListTable3_bkp2;
