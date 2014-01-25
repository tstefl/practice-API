var express = require('express'),
	app = express(),
	fs = require('fs'),
	path = require('path');

app.use(express.static(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);

var routePath = './routes',
	routeFiles = fs.readdirSync(routePath);

routeFiles.forEach(function(file) {
	var fPath = path.resolve('./', routePath, file),
		route = require(fPath);

	route.init(app);
});

app.listen(8080);