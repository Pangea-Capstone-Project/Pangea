const Sequelize = require("sequelize");
const db = require("../db");

const Unit = db.define('unit',{
    // modifying delete if broken
    // tenantId: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     unique: true,
    // },
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