import axios from "axios";
const baseURL = process.env.REACT_APP_BACKEDN_URL;
// console.log("Base URL =", baseURL);
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
