var restify = require('restify'),
	server = restify.createServer(),
	fs = require('fs'),
	path = require('path');

var routePath = './routes',
	apiPath = '/api',
	routeFiles = fs.readdirSync(routePath);

routeFiles.forEach(function(file) {
	var fPath = path.resolve('./', routePath, file),
		route = require(fPath);

	route.init(server);
});

exports.server = server;