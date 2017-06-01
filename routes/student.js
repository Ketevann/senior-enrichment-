var express = require('express')
var router = express.Router();
var User = require('../db/models').User


// router.get('/', (req, res, next) =>{
//   console.log("!!")
//   User.findAll({})
//     .then(users => {
//       console.log("i thins students is working")
//        res.send(users);
//     })
//     .catch(console.error())
//   })

// router.get('/:id', (req, res, next) =>{
//   return User.findById(req.params.id)
//     .then(user => {
//       console.log("i thins students is working")
//        res.send(user);
//     })
//      .catch(console.error())
//   })



router.post('/', function (req, res, next) {
  console.log("yep im here")
  User.create(req.body)
  .then(user => res.status(201).json(user))
  .catch(console.error());
});

// router.put('/:id', function (req, res, next) {
//   User.update(req.body)
//   .then(user => res.status(201).json(user))
//   .catch(console.error());
// });

// router.delete('/:id', function (req, res, next) {
//   User.destroy()
//   .then(user => res.status(201).json(user))
//   .catch(console.error());
// });


module.exports = router;
