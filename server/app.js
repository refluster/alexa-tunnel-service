var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();

var io = require('socket.io')();
var client = null;
io.on('connection', function(_client){
	console.log('connected');
	client = _client;
});
io.listen(3001);

app.get('/api/light', function(req, res, next){
	console.log(req);
    res.json('res');
	client.emit('event');
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(3000, function(https) {
    console.log('Node.js is listening');
});

app.get('/', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Hello, Secure World!</h1>');
});




