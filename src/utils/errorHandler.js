import * as Sentry from "@sentry/react";

export const logError = (error, context = "Unknown Context") => {
  console.error(`Error in ${context}:`, error);
  Sentry.captureException(error, { extra: { context } });
};
