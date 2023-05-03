import axios from "axios";

import { getBaseApiUrl } from "../services/getApiUrl";

const axiosInstance = axios.create({
    baseURL: getBaseApiUrl(),
    headers: {
        "Content-Type": "application/json"
    },
});

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
            }
        }
        return Promise.reject(err);
    }
);

export default axiosInstance;