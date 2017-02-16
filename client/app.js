var socket = require('socket.io-client')('http://localhost:3001');
//var socket = require('socket.io-client')('http://52.199.118.199:3001');
socket.on('connect', function(){
	console.log('connected');
});
socket.on('event', function(data){
	console.log('event');
});
socket.on('disconnect', function(){
	console.log('disconnected');
});
