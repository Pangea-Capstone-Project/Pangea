//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Tenant = require('./models/Tenant')
const Complex = require('./models/Complex')
const Unit = require('./models/Unit')
const Landlord = require('./models/Landlord')
const MaintenanceRequest = require('./models/MaintenanceRequest')
const Admin = require('./models/Admin')
//associations could go here!


Unit.hasOne(Tenant);
Tenant.belongsTo(Unit);

Complex.hasMany(Unit);
Unit.belongsTo(Complex);

Complex.hasMany(Landlord);
Landlord.belongsTo(Complex);

Unit.hasMany(MaintenanceRequest);
MaintenanceRequest.belongsTo(Unit);

module.exports = {
  db,
  models: {
    User,
    Tenant,
    Complex,
    Unit,
    Landlord,
    MaintenanceRequest,
    Admin,
  },
}
