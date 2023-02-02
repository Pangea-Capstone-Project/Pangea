const Sequelize = require("sequelize");
const db = require("../db");

const Property = db.define('property',{
    propertyName : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    numberOfUnits : {
        type: Sequelize.INTEGER,
        defaultValue: 1,
    },
    landlordId: {
        type: Sequelize.INTEGER,
    }   
})  

module.exports = Property