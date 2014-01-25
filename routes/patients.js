var fs = require('fs'),
	path = require('path');

exports.init = function(server){

	server.get('/', function(req,res){
		body = fs.readFileSync(path.resolve('./', 'views', 'index.html'), {encoding: 'utf8'});
		res.writeHead(200,{
			'Content-Length': Buffer.byteLength(body),
			'Content-Type'  : 'text/html'
		});

		res.end(body);
	});

};