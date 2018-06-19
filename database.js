var mysql = require('mysql');

var conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "customer_pea"
  });
conn.connect(function (err) {
  if (err) throw err;
});

module.exports = conn;