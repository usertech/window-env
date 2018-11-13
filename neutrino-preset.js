const fs = require('fs');
const path = require('path');
const { EnvironmentPlugin } = require('webpack');

module.exports = (neutrino, config) => {
	require('dotenv').config();
	const envKeys = Array.isArray(config) ? config : Object.keys(config);
	neutrino.config.plugin('html-index').init((Plugin, [cnf, ...args]) => {
		const window = {
			...(cnf.window || {}),
			env: envKeys.reduce((acc, envKey) => ({ ...acc, [envKey]: `\${${envKey}}` }), {}),
		};
		return new Plugin({ ...cnf, template: require('html-webpack-template'), window }, ...args);
	});
	neutrino.config.plugin('env').use(EnvironmentPlugin, [config]);
};
