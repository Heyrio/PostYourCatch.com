// This is the front page route where a user can login in or sign up


const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

//User model
const User = require('../models/User');

router.get('/', (req, res) => res.render('index'));

router.post('/dashboard', (req, res) => {
	const {email, password} = req.body;

	let errors = [];

	// Check required fields
	if(!email || !password){
		
	}else{
		// This is where we will check to see if the username and password already exists in the database


		//This creates a new account 
		const newUser = new User({
			email,
			password
		});


		// Hash Password
		bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
			if(err) throw err;

			// set pass to hash
			newUser.password = hash;

			newUser.save()
			.then(user =>{
				res.render('dashboard');
			})
			.catch(err => console.log(err));
		}))

		
	}
});


module.exports = router;