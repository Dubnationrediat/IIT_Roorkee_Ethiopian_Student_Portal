import axios from "axios";

// let BASE_URL = "http://localhost:6500";
let BASE_URL = "https://backend.ethiopiansatiitroorkee.com";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export { axiosInstance };
