'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Persona Schema
 */
var PersonaSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Se necesita un nombre',
		trim: true
	},
	apellido:{
		type: String,
		default: '',
		required: 'se necesita un apellido',
		trim: true
	},
	doc:{
		type: String,
		default: '',
		required: 'se requiere un nro de dni',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Persona', PersonaSchema);