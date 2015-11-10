var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: [
          'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
          'webpack/hot/only-dev-server',
          './public/main.js'
         ]
    },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'http://127.0.0.1:3000/static/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot-loader','babel-loader'] ,include: path.join(__dirname,'public')},
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
};
