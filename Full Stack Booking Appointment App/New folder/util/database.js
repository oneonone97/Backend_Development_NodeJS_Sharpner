const Sequelize=require('sequelize').Sequelize;

const sequelize=new Sequelize('node-complete','root','9695@969548',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;