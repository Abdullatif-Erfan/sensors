import { useQuery } from "react-query";
import axios from "axios";

const fetchTotalSensorsData = async () => {
  const response = await axios.get("http://localhost:5000/sensors/total");
  return response;
};

const fetchSensorsData = async (pageNumber: number, limitPerPage: number) => {
  const response = await axios.get(
    `http://localhost:5000/sensors?page=${pageNumber}&limit=${limitPerPage}`
  );
  return response;
};

const fetchTotalOpenAlertsData = async () => {
  const response = await axios.get(
    "http://localhost:5000/details_data/totalAlerts"
  );
  return response;
};

const getHomeChartData = async () => {
  const response = await axios.get("http://localhost:5000/chart_stats");
  return response;
};

const fetchTotalCustomersData = async () => {
  const response = await axios.get(
    "http://localhost:5000/sensors/total_customers"
  );
  return response;
};

// const getDataSimulteniously = () => {
//   Promise.all([fetchSensorsData(), fetchTotalOpenAlertsData()])
//   .then(function (results) {
//      return results;
//     // const acct = results[0];
//     // const perm = results[1];
//   });
// }

export const TotalSenserAPIServices = () => {
  return useQuery("totalSensors", fetchTotalSensorsData);
};

interface sensorsTypes {
  currentPage: number;
  itemsPerPage: number;
  onSuccess?: {} | any;
  onError?: {} | any;
}

export const SenserAPIServices = ({
  currentPage,
  itemsPerPage,
  onSuccess,
  onError
}: sensorsTypes) => {
  return useQuery(
    ["sensors_list", currentPage],
    () => fetchSensorsData(currentPage, itemsPerPage),
    {
      onSuccess,
      onError
    }
  );
};

export const OpenAlertAPIServices = () => {
  return useQuery("totalAlerts", fetchTotalOpenAlertsData);
};

export const ChartAPIServices = () => {
  return useQuery("chart_data", getHomeChartData);
};

export const TotalCustomersAPIServices = () => {
  return useQuery("totalCustomers", fetchTotalCustomersData);
};

export const SenserAPIServices2 = (
  pageNumber: number,
  limitPerPage: number
) => {
  return useQuery(["sensors_list", pageNumber], () =>
    fetchSensorsData(pageNumber, limitPerPage)
  );
};

/**
 *
 * refetchOnWindowFocus: automatically requests fresh data in the background if user leaves the app and returns to stale data.
 * refetchOnmount: if true, refetch on mount if the data is stale.
 * refetchOnReconnect: if true, refetch on reconnect if the data is stale.
 * retry: if true, failed queries will retry infinitely.
 * staleTime: the time in milliseconds after data is considered stale. Defaults to 0.
 *
 */
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: false,
//         refetchOnmount: false,
//         refetchOnReconnect: false,
//         retry: false,
//         staleTime: 5*60*1000,
//       },
//     },
//   });
