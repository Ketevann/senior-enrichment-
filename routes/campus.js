var express = require('express')
var router = express.Router();
var Campus = require('../db/models').Campus


router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', (req, res, next) =>{

  res.send("I think campus is also working")

})


router.get('/', (req, res, next) =>{
  Campus.findAll({})
    .then(users => {
      console.log("i thins students is working")
       res.send(users);
    })
     .catch(console.error())
  })

router.get('/:id', (req, res, next) =>{
  return Campus.findById(req.params.id)
    .then(user => {
      console.log("i thins students is working")
       res.send(user);
    })
     .catch(console.error())
  })



router.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then(user => res.status(201).json(user))
  .catch(console.error());
});

router.put('/:id', function (req, res, next) {
  Campus.update(req.body)
  .then(user => res.status(201).json(user))
  .catch(console.error());
});

router.delete('/:id', function (req, res, next) {
  Campus.destroy()
  .then(user => res.status(201).json(user))
  .catch(console.error());
});




module.exports = router;
