const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  sentryDsn: import.meta.env.VITE_SENTRY_DSN || "",
};

export default config;
