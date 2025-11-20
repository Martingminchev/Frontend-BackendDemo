//uncomment if you need to use the database
	 const Pets = require('../models/models.js')

	const createPet = async (req,res) => {
		const {petName} = req.body

	    try{
			const saved = await Pets.create({name:petName,friends:[]})
	    	res.send({ok:true,message:`Your best friend ${petName} was created successfully.`})
	    }catch( error ){
	    	res.send({ok:false,message:error})
	    }
	}

	const createFriend = async (req, res)=>{
		const {petName, friend} = req.body
		try{
			const saved = await Pets.updateOne({name:petName} , {$push: {friends: friend}})
	    	res.send({ok:true,message:`Youre pet is ${petName} and his friend is ${friend}`})
	    }catch( error ){
	    	res.send({ok:false,message:error})
	    }
	}

	const displayFriends = async (req, res) =>{
		const {petname} = req.params
			try{
				const pet = await Pets.find({name:petname})
				
	    	res.send({ok:true,message:`the friends of ${petname}`, friends:pet[0]?.friends})
	    }catch( error ){
	    	res.send({ok:false,message:error})
	    }
	}


	module.exports = { 
		createPet,
		createFriend,
		displayFriends
	}