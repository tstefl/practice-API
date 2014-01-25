var fs = require('fs'),
	path = require('path'),
	mongoose = require('mongoose'),
	Patient = require('../models/patient').model;

exports.init = function(server) {
	server.get('/', function(req, res, next) {
		Patient.find({}, function(err, docs) {
			res.render('index.html', { title: 'List Patients!', patients: docs });
			next();
		});
	});

	server.get('/patient/create', function(req, res, next) {
		res.render('create.html', { title: 'Create Patients!' });
	});
};