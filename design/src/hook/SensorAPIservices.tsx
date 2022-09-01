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
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "home/total_sensors"
    );
    return response;
  } catch (err) {
    console.log("Error Occured", (err as Error).message);
  }
};
const fetchSensorsData = async (pageNumber: number, limitPerPage: number) => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      `home/sensors_list?page=${pageNumber}&limit=${limitPerPage}`
    );
    return response;
  } catch (err) {
    return (err as Error).message;
  }
};

const fetchTotalOpenAlertsData = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "home/total_open_alerts"
    );
    return response;
  } catch (err) {
    console.log("Error Occured", (err as Error).message);
  }
};

const getHomeChartData = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "home/sensor_temp_char"
    );
    return response;
  } catch (err) {
    return (err as Error).message;
  }
};

const fetchTotalCustomersData = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "home/total_customers"
    );
    return response;
  } catch (err) {
    console.log("Error Occured", (err as Error).message);
  }
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

// export const SenserAPIServices2 = (
//   pageNumber: number,
//   limitPerPage: number
// ) => {
//   return useQuery(["sensors_list", pageNumber], () =>
//     fetchSensorsData(pageNumber, limitPerPage)
//   );
// };

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
