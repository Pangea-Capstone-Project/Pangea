"use strict";

const {
  db,
  models: { User, Landlord, Tenant, Property, MaintenanceRequest, Unit },
} = require("../server/db");


console.log(`this is models`, User)
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

// This 1 Landlord
    // Has 1 Property
      // With 15 Units and 15 Tenants

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "murphy", password: "123", role:"landlord" }),
    User.create({ username: "cody", password: "123", role:"landlord"}),
  ]);

  const newUser = await Promise.all([
    User.create({
      username: "TestPerson",
      password: "123",
      role: "tenant",
    })
  ]);

  try {
    if (newUser[0].role === "tenant") {
      await Tenant.create({
        userId: newUser[0].id,
        username: newUser[0].username,
        role: newUser[0].role,
      });
    } else if (newUser[0].role === "landlord") {
      await Landlord.create({
        userId: newUser[0].id,
        username: newUser[0].username,
        role: newUser[0].role,
      });
    }
  } catch (error) {
    console.error(error);
  }
  
  //creating landlords
  
  
  
  const properties = await Promise.all([
    Property.create({
      propertyName: "jeffsMobileHomes",
      address: "117 Washington blvd, Los Angeles, California",
      numberOfUnits: 15,
    }),
  ]);
  
  const landlords = await Promise.all([
    Landlord.create({
      username: "Jeff",
      email: "jeff@properties.com",
      phoneNumber: "5622341171",
      uniqueId: 123456,
      // propertyId: properties[0].id,
    }),
  ]);

  const units = await Promise.all([
    Unit.create({
      unitNumber: 1,
      rentAmount: 900,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 1,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 2,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 3,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 4,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 5,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 6,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 7,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 8,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 9,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 10,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 11,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 12,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 13,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 14,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: false,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
    Unit.create({
      unitNumber: 15,
      rentAmount: 1200,
      rentDueDate: 10,
      isOccupied: true,
      bedrooms: 2,
      // propertyId: properties[0].id,
    }),
  ]);
  const tenants = await Promise.all([
    Tenant.create({
      name: "Will Murphy",
      email: "john@smith.com",
      phoneNumber: "1234567899",
      rentPaid: false,
      leaseStartDate: "01/01/2023",
      leaseEndDate: "01/01/2024",
      dateOfBirth: "08/05/1973",
      unitId: units[0].id,
    }),
  ]);

  const maintenanceRequests = await Promise.all([
    MaintenanceRequest.create({
      type: "Plumbing",
      severity: "Low",
      description: "The toilet takes a long time to refill",
    }),
    MaintenanceRequest.create({
      type: "Wall",
      severity: "Medium",
      description: "The wall has a small hole",
    }),
    MaintenanceRequest.create({
      type: "Flooring",
      severity: "High",
      description: "My Floors are missing",
    }),
  ]);



  console.log(`seeded ${landlords.length} landlords`);
  console.log(`seeded ${properties.length} Property`);
  console.log(`seeded ${units.length} units`);
  console.log(`seeded ${tenants.length} tenants`);
  console.log(`seeded ${maintenanceRequests.length} maintenanceRequests`);
  console.log(`seeded successfully`);

}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}
/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
