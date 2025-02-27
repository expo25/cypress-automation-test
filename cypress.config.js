const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    // Set to standard HD resolution. I think this will avoid the edge pop-up not taking up the entire screen.
    viewportHeight: 1280,
    viewportHeight: 720,
    defaultBrowser: edge,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'edge') {
          // Sets up edge specific settings & avoids any potential cross-site issues.
          launchOptions.args.push('--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process')
        }
        return launchOptions;
      });
    },
  },
});
