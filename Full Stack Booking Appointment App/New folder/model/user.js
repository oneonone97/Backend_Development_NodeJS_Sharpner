const Sequelize=require('sequelize').Sequelize;

const { INTEGER, STRING } = require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('user',{
    id:{
        type:INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:STRING,
        allowNull:false
    },
    email:{
        type:STRING,
        allowNull:false,
        unique:true
    }
});


module.exports=User;