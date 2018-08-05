//bring in mysql
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "task_db",
    });
};

// // connect to localhost
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "task_db"
// });

connection.connect(function (err) {
  if (err) throw err;
  // console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;