//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Tenant = require('./models/Tenant')
const Property = require('./models/Property')
const Unit = require('./models/Unit')
const Landlord = require('./models/Landlord')
const MaintenanceRequest = require('./models/MaintenanceRequest')
const Admin = require('./models/Admin')
//associations could go here!

Landlord.hasMany(Property, { foreignKey: 'landlordId'});
Property.belongsTo(Landlord, { foreignKey: 'landlordId'});

Property.hasMany(Unit, { foreignKey: 'propertyId'});
Unit.belongsTo(Property, { foreignKey: 'propertyId'});

Unit.hasOne(Tenant, {foreignKey: 'unitId'})
Tenant.belongsTo(Unit, {foreignKey: 'unitId'})

Unit.hasMany(MaintenanceRequest);
MaintenanceRequest.belongsTo(Unit);


User.hasOne(Tenant, { foreignKey: 'userId', onDelete: 'cascade' });
Tenant.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });


User.hasOne(Landlord, { foreignKey: 'userId', onDelete: 'cascade' });
Landlord.belongsTo(User, { foreignKey: 'userId', onDelete: 'cascade' });

Landlord.hasMany(Tenant);
Tenant.belongsTo(Landlord);





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
  },
}
