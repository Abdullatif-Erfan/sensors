import { useQuery } from "react-query";
import axios from "axios";

const fetchTotalsAndWeeklyAvgTemp = async () => {
  const response = await axios.get("http://localhost:5000/details_data");
  return response;
};

// const fetchSensorsData = async (pageNumber: number, limitPerPage: number) => {
//   const response = await axios.get(
//     `http://localhost:5000/sensors?page=${pageNumber}&limit=${limitPerPage}`
//   );
//   return response;
// };

export const useTotalsAndWeeklyAvgTemp = () => {
  return useQuery(
    "Msg_Downtime_Alerts_WeeklyAvgTemp",
    fetchTotalsAndWeeklyAvgTemp
  );
};
