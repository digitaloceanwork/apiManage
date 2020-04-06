const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
	  filename: 'bundle.js'
  },
  mode: 'development',
  target:'node',
  module:{
	  rules:[
		  {
			  test: /\.js$/,
			  exclude: /node_modules/, 
			  use: {
			  loader: 'babel-loader',
			  query: {
				  presets:['react', 'es2015'],
				  plugins:[
					  ['import', {libraryName: 'antd', style: 'css'}]
				  ]
			  },
			}
		  },
		  {
			  test:/.css$/,
			  use:['style-loader','css-loader']
		  },
		  {
		     test:/\.less$/,
		     use:['style-loader','css-loader','less-loader']
		  }
	  ]
  }
};