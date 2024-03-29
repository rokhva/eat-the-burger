// Require mysql
let mysql = require("mysql");

// Set up our connection information
let connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Edsheeran1//",
  database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
