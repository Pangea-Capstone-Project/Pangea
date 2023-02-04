const Sequelize = require("sequelize");
const db = require("../db");

const Tenant = db.define("tenant",{
    name: {
        type: Sequelize.STRING,
        // allowNull: false,
    },
    username:{
        type:Sequelize.STRING,
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
    rentPaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    leaseStartDate: {
        type: Sequelize.STRING,
        //  defaultValue: Sequelize.NOW,
    },
    leaseEndDate: {
        type: Sequelize.DATE,
        //  defaultValue: Sequelize.literal('NOW() + INTERVAL \'1 month\''),
    },
    userId: {
        type: Sequelize.INTEGER,
    },
    idForTenantToAssociate: {
        type: Sequelize.INTEGER,
    },
    unitIdToAssociateTenant: {
        type:Sequelize.INTEGER,
    }
})

module.exports = Tenant