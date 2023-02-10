const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define("payment", {
    paymentAmount: {
      type: Sequelize.INTEGER
    },
    paymentDate: {
      type: Sequelize.DATE
    }
  });