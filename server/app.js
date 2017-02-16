var express = require("express");
var app = express();

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

var io = require('socket.io')();
var client = null;
io.on('connection', function(_client){
	console.log('connected');
	client = _client;
});
io.listen(3001);

app.get("/api/light", function(req, res, next){
	console.log(req);
    res.json('res');
	client.emit('event');
});

