import * as Sentry from '@sentry/sveltekit';

Sentry.init({
  dsn: 'https://e4af67caee5f60ba93ff13bf4fd84799@o4509505450803200.ingest.us.sentry.io/4510393206767616',

  tracesSampleRate: 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: import.meta.env.DEV,
});