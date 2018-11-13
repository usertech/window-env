#! /usr/bin/env node

const fs = require('fs');
const path = require('path');

const name = 'window-env-envsubst';

function replaceEnvVars(stringContent) {
	const regex = /\$(?:(\w+)|{(\w+)})/g;

	return stringContent.replace(regex, (original, g1, g2) => {
		const variable = g1 || g2;

		return process.env.hasOwnProperty(variable)
			? process.env[variable]
			: original;
	});
}

const args = process.argv.splice(process.execArgv.length + 2);

if (args.length !== 1) {
	console.error('${name}: Filename argument is required.');
	process.exit(1);
}

const filename = path.resolve(args.pop());
if (!fs.existsSync(filename)) {
	console.error(`${name}: File "${filename}" does not exist`);
	process.exit(1);
}
const replacedContent = replaceEnvVars(fs.readFileSync(filename).toString());
fs.writeFileSync(filename, replacedContent);
