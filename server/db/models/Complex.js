const Sequelize = require("sequelize");
const db = require("../db");

const Complex = db.define('complex',{
    landlordId : {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
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
    },   
})  

module.exports = Complex