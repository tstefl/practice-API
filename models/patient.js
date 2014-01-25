var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PatientSchema = new Schema({
	firstName: String,
	lastName: String,
	description: String
});

exports.model = mongoose.model('Patient', PatientSchema);