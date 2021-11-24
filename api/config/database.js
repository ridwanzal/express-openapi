const env = process.env;
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : env.HOST || 'localhost',
    user : env.DB_USER || 'root',
    password : env.DB_PASSWORD || "",
    database : env.DB_NAME,
    port: env.DB_PORT || 3306
});

connection.connect(function(err){
    if(err) throw err;
})

module.exports = connection;