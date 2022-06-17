const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'ali-bd', // Nombre de base de datos
    'root', // Usuario
    'root', // Contraseña
    { // Opciones
        dialect: 'mysql',
        host: 'localhost',
    }
)

module.exports = sequelize