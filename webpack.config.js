require('dotenv').config();

const clientBundle = {
	entry: `${__dirname}/src/apps/www/client.tsx`,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	output: {
		filename: 'client.js',
		path: `${__dirname}/public/js`
    },
    mode: process.env.NODE_ENV
};

// const clientModules = {}
// const serverModules = {}
// const stylesheet = {}

module.exports = [clientBundle];
