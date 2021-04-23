import axios from "axios";
import humps from "humps";
import { BASE_URL } from "../config";
// import NetInfo from "@react-native-community/netinfo";
// import { navigate } from "../navigations/index";
// import { NO_CONNECTION } from "../constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/x.app.v2+json",
  },
});

api.interceptors.request.use(
  config => {
    // TODO: Fix and uncomment
    // Checking internet connection
    // NetInfo.fetch().then(state => {
    //   if (!state.isInternetReachable) {
    //     navigate(NO_CONNECTION);
    //     throw new axios.Cancel("No internet connection!");
    //   }
    // });

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
