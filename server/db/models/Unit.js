const Sequelize = require("sequelize");
const db = require("../db");

const Unit = db.define('complex',{
    complexId : {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    maintenanceRequestId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    unitNumber: {
        type: Sequelize.INTEGER,
    },
    rentAmount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    isOccupied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    bedrooms: {
        type: Sequelize.INTEGER,
    },    
})  

module.exports = Unit