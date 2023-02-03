//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Tenant = require('./models/Tenant')
const Property = require('./models/Property')
const Unit = require('./models/Unit')
const Landlord = require('./models/Landlord')
const MaintenanceRequest = require('./models/MaintenanceRequest')
const Admin = require('./models/Admin')
const Rent = require('./models/Rent')
const Order = require('./models/Order')
//associations could go here!


Unit.hasOne(Tenant);
Tenant.belongsTo(Unit);

Order.belongsTo(User, {
  foreignKey: "userId"
})
// Landlord.hasMany(Unit, { foreignKey: 'landlordId'});
// Unit.belongsTo(Landlord, { foreignKey: 'landlordId'});

// FIGURE OUT ASSOCIATION BETWEEN A LANDLORD A UNIT AND A TENANT!!!!!!!!

Landlord.hasMany(Property, { foreignKey: 'landlordId',});
Property.belongsTo(Landlord, { foreignKey: 'landlordId',});

Property.hasMany(Unit, { foreignKey: 'propertyId',});
Unit.belongsTo(Property, { foreignKey: 'propertyId',});

Unit.hasMany(MaintenanceRequest);
MaintenanceRequest.belongsTo(Unit);


User.hasOne(Tenant, { foreignKey: 'userId', onDelete: 'cascade' });
Tenant.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });


User.hasOne(Landlord, { foreignKey: 'userId', onDelete: 'cascade' });
Landlord.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });





module.exports = {
  db,
  models: {
    User,
    Tenant,
    Property,
    Unit,
    Landlord,
    MaintenanceRequest,
    Admin,
    Rent,
    Order,
  },
}
