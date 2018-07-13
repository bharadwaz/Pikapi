var mysql = require('mysql');
var db = require('./dbconfig');
var pool = mysql.createPool({
    "host": db.host,
    "user": db.user,
    "password":db.password,
    "database": db.database,
    "connectionLimit": db.connectionLimit
})

module.exports = pool;