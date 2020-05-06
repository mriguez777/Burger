//Starting mysql connection on this page
var mysql = require("mysql");

//Connection details
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "working",
    database: "burgers_db"
});

//connecting action 
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exporting connection 
module.exports = connection;