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
			['FOO_VAR', 'FOO_VAR2']
		],
	]
};
