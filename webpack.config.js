const webpack = require('webpack');
const path = require('path');
const config = {
  mode:'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	plugins: [
    new webpack.DefinePlugin({
		    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
	],
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },

	/*module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 
					{ loader: 'babel-loader' },
					{ loader: 'babel' }
				]
      }
		]
	}*/
};
module.exports = config;
