// mysql
const mysql = require("mysql");
// db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cuyuniversity",
});

// export
module.exports = db;
