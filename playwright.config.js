/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: 'yarn build && yarn preview',
		port: 4173
	},
	testDir: 'src',
	testMatch: /(.+\.)?(ui-spec)\.js/
};

export default config;
