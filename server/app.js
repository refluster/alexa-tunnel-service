var express = require("express");
var app = express();

var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/api/light", function(req, res, next){
	console.log(req);
    res.json('res');
});
