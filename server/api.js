'use strict'
const api = require('express').Router()
const db = require('../db')
var User = require('../db/models').User
var Campus = require('../db/models').Campus



// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))


api.get('/', (req, res) => {

	res.send("yes im here")
})





api.get('/students', (req, res, next) => {

	User.findAll({})
		.then(users => {
			if (users === null) res.send("oop")
			console.log("i thins students is working")
			res.send(users);
		})
		.catch(console.error())
})

api.get('/students/:id', (req, res, next) => {
	return User.findById(req.params.id)
		.then(user => {
			console.log("i thins students is working")
			res.send(user);
		})
		.catch(console.error())
})



api.post('/students', function (req, res, next) {
	console.log(req.body, "REQ BODY!!!!")

	return Campus.findOne({
		where: {
			name: req.body.campus
		}
	}).then(campus => {
		return User.create(req.body)
			.then(user => {
				console.log(user, '**')
				return user.setCampusname(campus.id)
			}).then(user => {
				res.send(user)
			})
			.catch(console.error());




	})
		.then((user) => {
			console.log(user, "ISEERR")
			res.status(201).json(user)

		})
		.catch(console.error());
});

api.put('/students/:id', function (req, res, next) {
	return User.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(user =>{
		user.update(req.body)
	})
	.then(user => res.status(201).json(user))
		.catch(console.error());
});

api.delete('/students/:id', function (req, res, next) {
	return User.findOne({
		where: {
			id: req.params.id
		}
	})
		.then(user => {
			console.log(user, "*!@123")
			return user.destroy({});
		})
		.then(() => res.status(204))
		.catch(console.error());

});











api.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now())
	next()
})

api.get('/campus', (req, res, next) => {

	res.send("I think campus is also working")

})


api.get('/campuses', (req, res, next) => {
	console.log("IN CAMPUSSS")
	Campus.findAll({})
		.then(campus => {
			console.log("i thins campus is working", campus)
			res.send(campus);

		})
		.catch(console.error())
})

api.get('/campus/:id', (req, res, next) => {
	return Campus.findById(req.params.id)
		.then(user => {
			//  console.log("i thins students is working")
			res.send(user);
		})
		.catch(console.error())
})



api.post('/campus', function (req, res, next) {
	console.log(req.body, "CAMPUS")
	Campus.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(console.error());
});

api.put('/campus/:id', function (req, res, next) {
	Campus.update(req.body)
		.then(user => res.status(201).json(user))
		.catch(console.error());
});

api.delete('/campus/:id', function (req, res, next) {
	Campus.destroy()
		.then(user => res.status(201).json(user))
		.catch(console.error());
});



















module.exports = api

