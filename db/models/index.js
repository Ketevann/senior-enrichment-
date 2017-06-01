'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

const User = require('./user')
var Campus = require('./campuses')

console.log(User, "USSSEEERR", Campus)
User.belongsTo(Campus, {as : "campusname"})
//Campus.belongsTo(User)


// User.create({
// 	name: "ana",
// 	email: 'katie.tsin@gmail.com'
// })
//  .then((user)=>{

//  console.log( ' USER')})
// User.sync({})
// })
// 	.then(user =>{
// 		return user
// 	})

// 	.then(() =>{
// 		console.log("SYNCIING!!!!!!!!")
// 		return Campus.sync({})
// 	})
// 	.catch(console.error());

module.exports = {User: User, Campus: Campus};
