const {connection} = require('../database/connection')
const {DataTypes, DATE} = require('sequelize')
const Role = connection.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true

    },
    description: {
        type: DataTypes.STRING,
        unique: true
    },
    CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DATE.now()
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})
module.exports = Role