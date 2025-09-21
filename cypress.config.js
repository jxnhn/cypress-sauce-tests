const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'w6aeno',
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 6000,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
