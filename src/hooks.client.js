import { handleErrorWithSentry, replayIntegration } from "@sentry/sveltekit";
import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://e4af67caee5f60ba93ff13bf4fd84799@o4509505450803200.ingest.us.sentry.io/4510393206767616',

  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,



  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/sveltekit/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
