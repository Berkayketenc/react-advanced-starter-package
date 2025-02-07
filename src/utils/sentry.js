import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import App from "../App.jsx";
import config from "../constants/config";

Sentry.init({
  dsn: config.sentryDsn,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["*"],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
