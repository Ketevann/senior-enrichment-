'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var User = db.define('user', {
  name: {
    type: Sequelize.STRING,

  },
  email: {
    type: Sequelize.STRING,

  }
});

module.exports = User;



