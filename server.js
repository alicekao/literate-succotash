import express from 'express';

let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

let server = app.listen(port, function() {
  console.log('Sound now listening on port', port);
});