import { useQuery } from "react-query";
import axiosInstance from "../utils/axios";
import sensorsTypes4API from "../types/Types";
import { axiosResponseTypes } from "../types/Types";

/**
 * ------------ API Requests ------------
 * http://localhost:5000/home/sensors_list
 * http://localhost:5000/home/total_sensors
 * http://localhost:5000/home/total_customers
 * http://localhost:5000/home/total_open_alerts
 * http://localhost:5000/home/sensor_temp_char
 */

const fetchTotalSensorsData = async () => {
  const response = await axiosInstance.get<axiosResponseTypes, any>(
    "home/total_sensors"
  );
  return response;
};
const fetchSensorsData = async (pageNumber: number, limitPerPage: number) => {
  const response = await axiosInstance.get<axiosResponseTypes, any>(
    `home/sensors_list?page=${pageNumber}&limit=${limitPerPage}`
  );
  return response;
};

const fetchTotalOpenAlertsData = async () => {
  const response = await axiosInstance.get<axiosResponseTypes, any>(
    "home/total_open_alerts"
  );
  return response;
};

const getHomeChartData = async () => {
  const response = await axiosInstance.get<axiosResponseTypes, any>(
    "home/sensor_temp_char"
  );
  return response;
};

const fetchTotalCustomersData = async () => {
  const response = await axiosInstance.get<axiosResponseTypes, any>(
    "home/total_customers"
  );
  return response;
};

export const TotalSenserAPIServices = () => {
  return useQuery("totalSensors", fetchTotalSensorsData);
};

export const SenserAPIServices = ({
  currentPage,
  itemsPerPage,
  onSuccess,
  onError
}: sensorsTypes4API) => {
  return useQuery(
    ["sensors_list", currentPage],
    () => fetchSensorsData(currentPage, itemsPerPage),
    {
      onSuccess,
      onError,
      keepPreviousData: true
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

/**
 *  ----------------- NOTE ! ----------------------------------
 * Some usefull Configuration Options will be described here
 * 1 - refetchOnWindowFocus: automatically requests fresh data in the background if user leaves the app and returns to stale data.
 * 2 - refetchOnmount: if true, refetch on mount if the data is stale.
 * 3 - refetchOnReconnect: if true, refetch on reconnect if the data is stale.
 * 4 - retry: if true, failed queries will retry infinitely.
 * 5 - staleTime: the time in milliseconds after data is considered stale. Defaults to 0.
 */
// ---------------- Example -------------------
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       refetchOnmount: false,
//       refetchOnReconnect: false,
//       retry: false,
//       staleTime: 5*60*1000,
//     },
//   },
// });
