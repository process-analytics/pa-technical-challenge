const browsers = (process.env.BROWSERS || 'chromium').split(',');

module.exports = {
  serverOptions: {
    command: `npm run start -- --config-server-port 10002`,
    port: 10002,
    protocol: 'http', // if default or tcp, the test starts right await whereas the dev server is not available on http
    launchTimeout: 60000, // high value mainly for GitHub Workflows running on macOS (slow machines) and to build the bundle before start
    debug: true,
    usedPortAction: 'ignore', // your test are executed, we assume that the server is already started
  },
  launchOptions: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
  },
  launchType: 'LAUNCH',
  contextOptions: {
    viewport: {
      width: 800,
      height: 600,
    },
  },
  browsers: browsers,
};
