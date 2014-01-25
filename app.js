var restify = require('restify'),
	server  = restify.createServer(),
	fs 		= require('fs'),
	path 	= require('path');

var routePath  = './routes',
	APIPath	   = './api',
	routeFiles = fs.readdirSync(routePath);

routeFiles.forEach(function(file){
	var fPath = path.resolve('./', routePath, file),
		route = require(fPath);

	route.init(server);
});

server.post('/users/:id', function(req, res, next){

	res.header('X-authToken', 1234567890);
	res.send(200);
});

server.listen(8080, function(){
	//this is like the bootstrapper or boot up process for the server
	console.log("Server listening on port at " + server.url);

});
