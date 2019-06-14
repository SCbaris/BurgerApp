//This part control the connection with the mysql server.
//Also this part control the mysql pasword and database names.
//Our db name gonna be burgers_db
//And we export this module to orm. orm is Object-relational mapping.
//Orm help us to control database. 
//We create object and some function inside of this object.
//Whenever we need to add something or remove, orm will help us to do easily. 


var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
    host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "orrw31xrqfwildz0",
    password: "y8q1839rosr54jdx",
    database: "sh7uq68n0xw5vmp0"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;