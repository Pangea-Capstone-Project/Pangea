const Sequelize = require('sequelize')
const db = require('../db')


const Rent = db.define('rent', {
  price: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
  },
});

module.exports = Rent;
