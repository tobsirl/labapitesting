'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ContactSchema = new Schema({
  name: { type : String, required : true },
  address: String,
  age: { type: Number, min: 0, max: 120 },
  email: { type : String, required : true },
  updated: { type: Date, default: Date.now }
  });

ContactSchema.path('address').validate(function (v){
  	if(v.length > 40 || v.length < 5) {
  		return false
		}
		return true
  }, 'Contact address should be between 5 and 10 characters');
/*
ContactSchema.path('email').validate(function (email){
	var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailRegex.test(email.text);


}, 'The e-mail field cannot be empty.')
*/
module.exports = mongoose.model('Contact', ContactSchema);