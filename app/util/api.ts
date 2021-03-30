import axios from "axios";
import humps from "humps";
import { BASE_URL } from "../config";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  config => {
    return {
      ...config,
      data: humps.decamelizeKeys(config.data),
    };
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status <= 400) {
      return {
        ...response,
        data: humps.camelizeKeys(response.data),
      };
    }

    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;
