# `@usertech/window-env`

> Work in Progress, use at own risk

## Installation

```
$ yarn add --dev usertech/window-env#0.0.1
```

## Usage

1. In `.neutrinorc.js`, use preset and declare which variables should be loaded from `.env` file using `dotenv` during development build.
This preset automatically adds `window.env` placeholders to your `index.html` using `html-webpack-template`.

```
module.exports = {
	options: {
		root: __dirname,
	},
	use: [
		[
			'@neutrinojs/web',
			{
				html: {
					title: 'example'
				}
			}
		],
		[
			'@usertech/window-env/neutrino-preset',
			{
				FOO_VAR: '',
				FOO_VAR2: '',
			}
		],
	]
};
```

2. Use `window-env-envsubst` binary to replace environment variables in `index.html` in production.

```
$ yarn window-env-envsubst build/index.html
```
