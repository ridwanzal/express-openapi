const mysql = require('mysql');
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "m2_expo",
    port: 3307
});

connection.connect(function(err){
    if(err) throw err;
})

module.exports = connection;