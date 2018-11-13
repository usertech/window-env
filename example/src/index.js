import { init as initEnv } from '@usertech/window-env';

initEnv({
	FOO_VAR: process.env.FOO_VAR,
	FOO_VAR2: process.env.FOO_VAR2,
});

const root = document.getElementById('root');

root.innerHTML = `
	<div style="padding: 20px">
		<h1>Welcome to example</h1>
		<pre>${JSON.stringify(window.env, null, 2)}</pre>
	</div>
`;

// This is needed for Hot Module Replacement
if (module.hot) {
	module.hot.accept();
}
