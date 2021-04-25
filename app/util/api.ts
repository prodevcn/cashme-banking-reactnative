import axios from "axios";
import humps from "humps";
import { BASE_URL } from "../config";
import * as GlobalNavigation from "../navigations/GlobalNavigation";
import { NO_CONNECTION } from "../constants";
import store from "../store";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/x.app.v2+json",
  },
});

api.interceptors.request.use(
  config => {
    const state = store.getState();

    if (!state.setting.hasInternetConnection) {
      GlobalNavigation.navigate(NO_CONNECTION);
      throw new axios.Cancel("No internet connection!");
    }

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
