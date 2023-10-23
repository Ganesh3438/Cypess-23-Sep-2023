const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 3000,
  videosFolder: 'cypress/videos/testExecutionvideos',
  viewportHeight: 1080,
  viewportWidth:1920,
  screenshotsFolder: 'cypress/screenshots',
  retries:{
    runMode:0,
    openMode:0,
  },
  env:{
    webdriveruni_homepage: 'http://www.webdriveruniversity.com'

  },




  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

// specPattern: "cypree/e2e/**/*.{js,jsx,ts,tsx,feature}"

});
