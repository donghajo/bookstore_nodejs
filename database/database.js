const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host : 'localhost',
    user : 'root',
    port : 3306,
    password : '980605',
    database : 'bookStore'
});


module.exports = connection;

