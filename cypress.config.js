const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
      const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

      async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      return config;
}
      // implement node event listeners here
    },
  },
});
