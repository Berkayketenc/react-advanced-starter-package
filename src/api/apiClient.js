import axios from "axios";
import * as Sentry from "@sentry/react";
import config from "../constants/config";

const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 5000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    Sentry.captureException(error, {
      extra: {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        data: error.response?.data,
      },
    });
    return Promise.reject(error);
  }
);

export default apiClient;
