'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,


  }
});

module.exports = User;



