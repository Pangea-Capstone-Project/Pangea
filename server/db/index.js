//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Tenant = require('./models/Tenant')
const Complex = require('./models/Complex')
const Unit = require('./models/Unit')
//associations could go here!



module.exports = {
  db,
  models: {
    User,
    Tenant,
    Complex,
    Unit,
  },
}
