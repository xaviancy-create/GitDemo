const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : 'cypress-mochawesome-reporter',
  env: {
    version: 'staging',
    username: '',
    password: ''
  },
  e2e: {
      pageLoadTimeout : 150000,
      specPattern: "cypress/tests/e2e/**/*.cy.{js,jsx,ts,tsx}",
      setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here

      // return {
      //   browsers: config.browsers.filter(
      //     (b) => b.family === 'firefox' && b.name === 'firefox'
      //   ),
      // }
      const version = config.env.version

      const urls = {
        development: "http://localhost:3000",
        dev: "http://localhost:3000",
        test: "https://test-grants.cirm.ca.gov",
        staging: "https://test-grants.cirm.ca.gov",
        production: null, // no testing in production
        prod: null // no testing in production
      }

      // choosing version from urls object
      const base_url = urls[version]

      if (!base_url) {
        console.log(`No baseUrl for version ${version}`)
      } else {
        console.log(`Using baseUrl ${base_url}`)
        config.baseUrl = base_url
      }

      return config
    },
  },
});
