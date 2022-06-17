const Sequelize = require('sequelize')
const sequelize = require('../index')

// Modelo (tabla) de usuario
const User = sequelize.define('user', {
    // Llave primaria de la tabla (identificador de cada usuario)
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = User