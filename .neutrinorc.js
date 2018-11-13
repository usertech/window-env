module.exports = {
	options: {
		root: __dirname
	},
	use: [
		[
			'@neutrinojs/library',
			{
				name: 'web-client-app-env'
			}
		],
	]
};
