const {connection} = require('../database/connection')
const {DataTypes, DATE} = require('sequelize')
const Role = require('./Role')
const User = require('./User')
const UserRole = connection.define('usersRole', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    },
    CreatedAt: {
        type: DataTypes.DATE,
        default: DATE.now()
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})
module.exports = UserRole