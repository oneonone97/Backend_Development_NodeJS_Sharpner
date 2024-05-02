const mysql = require("mysql2");

const con = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "9695@969548",
    database:"store"
});

module.exports = con;