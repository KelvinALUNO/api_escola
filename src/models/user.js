const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')
const User = connection.define('user', {
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
    },
    createAt: DataTypes.DATE,
    createAt: DataTypes.DATE,
})

module.exports = User