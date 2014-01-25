var restify = require('restify');

exports.init = function(server) {
	server.get(/\/public\/?.*/, restify.serveStatic({
		directory: './public'
	}));
};