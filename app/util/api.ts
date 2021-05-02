import axios from "axios";
import humps from "humps";
import { API_URL } from "@env";
import * as GlobalNavigation from "../navigations/GlobalNavigation";
import { NO_CONNECTION } from "../constants";

let api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/x.app.v2+json",
  },
});

export const initApiInterceptors = (store: any) => {
  api.interceptors.request.use(
    config => {
      const state = store.getState();
      const token = state.auth.token;

      if (!state.setting.hasInternetConnection) {
        GlobalNavigation.navigate(NO_CONNECTION);
        throw new axios.Cancel("No internet connection!");
      }

      if (token) {
        Object.assign(config.headers, { Authorization: `Bearer ${token}` });
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
};

export default api;
