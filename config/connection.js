var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "'localhost'",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "burgers_db"
});

connection.connect(function(err){
    if(err){
        console.log(`Error connecting ${err.stack}`);
        return;
    }else{
        console.log(`Connected as id ${connection.threadId}`);
    }
})

module.exports = connection