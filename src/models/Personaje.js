const { DataTypes } = require("sequelize");
const sequelize = require("../db/dataBase");

const Personaje = sequelize.define('Personaje', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING
    },
    peso: {
        type: DataTypes.STRING
    },
    historia: {
        type: DataTypes.STRING
    }
})

module.exports = Personaje


/*
Imagen.
○ Nombre.
○ Edad.
○ Peso.
○ Historia.
*/