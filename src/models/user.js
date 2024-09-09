const { DataTypes } = require('sequelize')
const { connection }  = require('../database/connection')
const User = connection.define('user',{
    nome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        validate:{
            len:{args:[1,100], msg: 'senha precisa ter entre 5 a 10 char.'}
        }
    },
    createAt: {
        type: DataTypes.STRING
    }
})