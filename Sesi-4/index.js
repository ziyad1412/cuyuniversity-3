// Express
const express = require("express");
const app = express();
const port = 3000;
const db = require("./connection");
const response = require("./response");
// Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROute
app.get("/", (req, res) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, result) => {
    // hasil data
    response(200, result, "success", res);
  });
});

// Get Find
app.get("/find", (req, res) => {
  // query nama mahasiswa where nim
  const sql = `SELECT nama FROM mahasiswa WHERE nim = ${req.query.nim}`;
  db.query(sql, (err, result) => {
    // hasil data
    response(200, result, "Find Mahasiswa NIM", res);
  });
});

// Post
app.post("/login", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
