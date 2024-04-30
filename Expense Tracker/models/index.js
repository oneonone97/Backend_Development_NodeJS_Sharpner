// models/index.js
const Sequelize = require('sequelize');

// Initialize Sequelize with MySQL
const sequelize=new Sequelize('node-complete','root','9695@969548',{
    dialect:'mysql',
    host:'localhost'
});

// Define models
const Expense = sequelize.define('expense', {
  description: Sequelize.STRING,
  amount: Sequelize.FLOAT,
  date: Sequelize.DATE // Make sure this matches your database schema
});

// Sync the models with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync({ alter: true });
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { sequelize, Expense };


