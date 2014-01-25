var mongoose = require('mongoose'),
	Patient = require('../models/patient').model;

exports.init = function(server) {
	server.get('/api/patients', function(req, res, next) {

		next();
	});

	server.post('/api/patients', function(req, res, next) {
		var patient = new Patient(req.body);
		
		patient.save(function(err, model) {
			if(err) { return res.send(err.code, err.message); }
			res.send(200, model);

			next();
		});
	});
};