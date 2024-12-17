import axios from "axios";

const BASE_URL = import.meta.env.BACKEND_URL || "http://localhost:5014/api/v1/";

const axiosInstance = axios.create();


axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.timeout = 5000;

export default axiosInstance;