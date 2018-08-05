//bring in mysql
var mysql = require("mysql");

// var connection;
// //seems like heroku problem is here
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'tasks_db'
//   });
// };

// connect to localhost
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "task_db"
});

connection.connect(function (err) {
  if (err) throw err;
  // console.log("Connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;