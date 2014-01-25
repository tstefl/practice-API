var fs = require('fs'),
	path = require('path'),
	mongoose = require('mongoose'),
	Patient = require('../models/patient').model;

exports.init = function(server) {
	mongoose.connect('mongodb://localhost/patients');

	server.get('/', function(req, res) {
		patients = [
			new Patient({ firstName: 'fred', lastName: 'smith', description: 'super sweet' })
		];

		res.render('index.html', { title: 'Test title', patients: patients });
	});
};