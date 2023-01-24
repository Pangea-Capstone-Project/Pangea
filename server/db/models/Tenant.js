const Sequelize = require("sequelize");
const db = require("../db");

const Tenant = db.define("tenant",{
    complexId:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: Sequelize.STRING,
    },
    phoneNum: {
        type: Sequelize.INTEGER,
    },
    rent: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    rentPaymentStatus: {
        type: Sequelize.BOOLEAN,
    },
    rentDueDate: {
        type: Sequelize.DATE,
    },
    leaseStartDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    leaseEndDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW() + INTERVAL \'1 month\''),
    },
})

module.exports = Tenant