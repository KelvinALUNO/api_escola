const {connection} = require('../database/connection')
const {DataTypes, DATE} = require('sequelize')
const Permission = require("./Permission")
const Role = require('./Role')
const PermissionRole = connection.define('permissionRole', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    permissionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Permission,
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
module.exports = PermissionRole