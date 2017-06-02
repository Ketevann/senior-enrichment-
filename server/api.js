'use strict'
const api = require('express').Router()
const db = require('../db')
var User = require('../db/models').User
var Campus = require('../db/models').Campus



// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!

/********************Students Route***********************/


api.get('/students', (req, res, next) => {

	User.findAll({})
		.then(users => {
			if (users === null) res.send(404)
			res.send(users);
		})
		.catch(console.error())
})

api.get('/students/:id', (req, res, next) => {
	return User.findById(req.params.id)
		.then(user => {
			res.send(user);
		})
		.catch(console.error())
});

api.get('/:campusId/students', (req, res, next) => {
	return Campus.findOne({
		where: {
			id: req.params.campusId
		}
	})
		.then(campus => {
			if (campus === null) res.send(404)
			return User.findAll(
				{
					where: {
						campusnameId: campus.id
					}
				})
		})
		.then(user => {
			res.send(user)
		})

})



api.post('/students', function (req, res, next) {
	console.log(req.body, "E#$")
	Campus.findOrCreate({
		where: {
			name: req.body.campus
		}
	}).spread((campus) => {
		return User.findOrCreate({
			where: {
				name: req.body.name,
				email: req.body.email
			}
		})
			.spread((user, created) => {
				return user.setCampusname(campus.id)
			}).then(user => {
				res.send(user)
			})
	})
		.catch(console.error());
});

api.put('/students/:id', function (req, res, next) {
	return User.findOne({
		where: {
			id: req.params.id
		}
	})
		.then(user => {
			return Campus.findOrCreate({
				where: {
					name: req.body.campus
				}
			}).spread((campus) => {
				return user.update({
					name: req.body.name,
					email: req.body.email,
					campusnameId: campus.id
				})
			})
		})
		.then(user => {
			res.status(201).send(user)
		})
		.catch(console.error());
})

api.delete('/students/:id', function (req, res, next) {
	return User.findOne({
		where: {
			id: req.params.id
		}
	})
		.then(user => {
			return user.destroy({});
		})
		.then(() => res.status(204))
		.catch(console.error());

});









/*********** CAMPUSES ************** */



api.get('/campuses', (req, res, next) => {
	Campus.findAll({})
		.then(campus => {
			res.send(campus);
		})
		.catch(console.error())
});

api.get('/campus/:id', (req, res, next) => {
	return Campus.findById(req.params.id)
		.then(user => {
			res.send(user);
		})
		.catch(console.error())
})


api.post('/campus', function (req, res, next) {
	Campus.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(console.error());
});

api.put('/campus/:id', function (req, res, next) {
	return Campus.findById(req.params.id)
		.then(campus => {
			return campus.update({
				name: req.body.name,
				imageUrl: req.body.imageUrl,
				id: req.body.campusID
			})
		})
		.then(campus => {
			res.status(201).send(campus)
		})
		.catch(console.error());
});



api.delete('/campus/:id', function (req, res, next) {
	return Campus.findOne({
		where: {
			id: req.params.id
		}
	})
		.then(campus => {
			return campus.destroy()
		})
		.then(() => {
			res.send(204);
		})
		.catch(console.error());
});




module.exports = api

