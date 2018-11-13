const init = (staticEnv) => {
	window.env = window.env || {};
	Object.keys(staticEnv).forEach((staticEnvKey) => {
		if (staticEnv[staticEnvKey]) {
			window.env[staticEnvKey] = staticEnv[staticEnvKey];
		}
	});
};

const get = (key) => window.env[key];

export { init, get };
