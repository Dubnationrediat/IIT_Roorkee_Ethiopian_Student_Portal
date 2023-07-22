import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

let token = cookies.get("token");

// console.log(token);
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
let BASE_URL = "https://backend.ethiopiansatiitroorkee.com";
// let BASE_URL = "http://localhost:6500";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export { axiosInstance };
