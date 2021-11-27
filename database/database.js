const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : '980605',
    database : 'db_bookstore'
});

module.exports = connection;