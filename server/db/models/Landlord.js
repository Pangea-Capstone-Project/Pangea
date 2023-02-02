const Sequelize = require('sequelize')
const db = require('../db')

const Landlord = db.define('landlord', {
    name: {
      type: Sequelize.STRING,
      unique: true,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.STRING,
      validate: {
        isNumeric: true,
      }, 
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      }, 
    },
    idForTenantToAssociate: {
      type: Sequelize.INTEGER,
    }, 
    userId: {
      type: Sequelize.INTEGER,
  },
    propertyId: {
      type: Sequelize.INTEGER,
    },
    propertyName : {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: [],
  },
    address : {
      type: Sequelize.STRING,
  },
  })
  
  module.exports = Landlord