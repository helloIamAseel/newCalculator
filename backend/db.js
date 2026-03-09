const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aseel2005",
  database: "calculator_db"
});

db.connect((err) => {
  if (err) {
    console.error("Connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;