import { useQuery } from "react-query";
import axiosInstance from "../utils/axios";
import { axiosResponseTypes } from "../types/Types";

/**
 * --------------- Details Page Routes ----------------------
 * http://localhost:5000/details/msg_downtime_alert_wklyAVGTemp
 * http://localhost:5000/details/daily_temprature_chart
 * http://localhost:5000/details/system_log
 * http://localhost:5000/details/activity
 */
const fetchTotalsAndWeeklyAvgTemp = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "/details/msg_downtime_alert_wklyAVGTemp"
    );
    return response;
  } catch (err) {
    return (err as Error).message;
  }
};

const fetchDailyChartData = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "details/daily_temprature_chart"
    );
    return response;
  } catch (err) {
    return (err as Error).message;
  }
};

const fetchSystemLogData = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "details/system_log"
    );
    return response;
  } catch (err) {
    return (err as Error).message;
  }
};

const fetchActivityData = async () => {
  try {
    const response = await axiosInstance.get<axiosResponseTypes, any>(
      "details/activity"
    );
    return response;
  } catch (err) {
    return (err as Error).message;
  }
};


export const useTotalsAndWeeklyAvgTemp = () => {
  return useQuery(
    "Msg_Downtime_Alerts_WeeklyAvgTemp",
    fetchTotalsAndWeeklyAvgTemp
  );
};

export const GetDailyChartData = () => {
  return useQuery("Daily_temprature_chart", fetchDailyChartData);
};

export const GetSystemLogData = () => {
  return useQuery("System_log_data", fetchSystemLogData);
};

export const GetActivityData = () => {
  return useQuery("Activity_Data", fetchActivityData);
};
