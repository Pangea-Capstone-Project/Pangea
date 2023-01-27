const Sequelize = require("sequelize");
const db = require("../db");

const Tenant = db.define("tenant",{
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: Sequelize.STRING,
    },
    phoneNumber: {
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    // rent: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    // },
    rentPaid: {
        type: Sequelize.BOOLEAN,
    },
    // rentDueDate: {
    //     type: Sequelize.STRING,
    // },
    leaseStartDate: {
        type: Sequelize.STRING,
        // defaultValue: Sequelize.NOW,
    },
    leaseEndDate: {
        type: Sequelize.DATE,
        // defaultValue: Sequelize.literal('NOW() + INTERVAL \'1 month\''),
    },
})

module.exports = Tenant