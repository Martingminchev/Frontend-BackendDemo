const mongoose = require('mongoose')
	const Schema   = mongoose.Schema

	const petSchema = new mongoose.Schema({
	  name: { 
	     type     : String, 
	     required : true,
	     unique   : true
	  },
	  friends:{type:Array, required:true}
	});

	const Test = mongoose.model('Pets', petSchema)
	module.exports = Test