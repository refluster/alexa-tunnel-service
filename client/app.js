var socket = require('socket.io-client')('http://localhost:3001');
socket.on('connect', function(){
	console.log('connected');
});
socket.on('event', function(data){});
socket.on('disconnect', function(){});
