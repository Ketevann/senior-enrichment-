'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')



var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})





Campus.bulkCreate([
  { name: "mars", imageUrl: 'http://media.salon.com/2015/09/mars-614x412.jpg' },
  { name: 'Luna', imageUrl: 'http://www.marthadebayle.com/wp-content/uploads/2015/12/Captura-de-pantalla-2015-12-23-a-las-10.58.29.png' },
  { name: 'terra', imageUrl: 'http://serc.carleton.edu/images/earthlabs/globe_from_terra.jpg' },
  { name: 'titan', imageUrl: 'http://img-3.newatlas.com/titan-sands-3.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C0%2C1918%2C1078&w=616&s=81b8f0b6b7d521c77618de38b78b5096' }
]);

module.exports = Campus;
