const { DataTypes } = require("sequelize");
const sequelize = require("../db/dataBase");

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Usuario