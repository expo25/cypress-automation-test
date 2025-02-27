const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Using cy.visit('/') will bring us to this url.
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
  retries: {
    /*************************************************************************************\
    | When we run in headless, any failed test will be retried up to 2 times (3 in total) |
    | When we run tests in interactive mode, failures will not be auto-retried            |
    \*************************************************************************************/
    runMode: 2,
    openMode: 0
  },
  env: {
    // We don't neccesarily need this cause we already set the baseUrl. But it can useful if we want to reference the full url from our code for reasons other than navigation.
    url: 'https://automationexercise.com'
  }
});
