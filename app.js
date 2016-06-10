var express = require('express');

var server = express();
var port = process.env.PORT || 3000;

server.use(express.static(__dirname + '/'));

server.listen(port, function() {
  console.log('Sound now listening on port', port);
});
