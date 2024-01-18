const {defineConfig} = require('cypress')

module.exports = defineConfig({
	e2e: {
		baseUrl: 'http://app',
		specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: false,
	},
})
