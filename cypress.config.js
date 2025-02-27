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
    },
  },
});
