var express = require('express');
var server = express();
var port = 8080;

server.get('/', function(request, response){
  response.send("Dang!");
});

server.listen(port);
