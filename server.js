var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

console.log('dirname is: ', __dirname);
app.use(express.static(__dirname + '/')),

app.listen(port, function (err) {
  if (err) {
    console.log('error: ',err);
  } else {
    console.log('Sound now listening on port', port);
  }
});