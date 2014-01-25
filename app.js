var express = require('express'),
	app = express(),
	fs = require('fs'),
	path = require('path'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/');

app.configure(function() {
	app.use(express.static(__dirname, 'public'));
	app.use(express.bodyParser());
	app.engine('html', require('ejs').renderFile);
});

var routePath = './routes',
	apiPath = './api',
	routeFiles = fs.readdirSync(routePath),
	apiFiles = fs.readdirSync(apiPath);

routeFiles.forEach(function(file) {
	var fPath = path.resolve('./', routePath, file),
		route = require(fPath);

	route.init(app);
});

apiFiles.forEach(function(file) {
	var fPath = path.resolve('./', apiPath, file),
		route = require(fPath);

	route.init(app);
});

app.listen(8080);