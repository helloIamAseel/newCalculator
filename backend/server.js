import cors from "cors";
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({
  origin: "*"
}));


app.post("/calculation", (req, res) => {

  const { userId, equation, result } = req.body;

  const sql =
    "INSERT INTO calculations (user_id, equation, result) VALUES (?, ?, ?)";

  db.query(sql, [userId, equation, result], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving calculation");
    } else {
      res.send("Saved");
    }
  });

});


app.get("/history/:userId", (req, res) => {

  const userId = req.params.userId;

  const sql =
    "SELECT equation, result FROM calculations WHERE user_id = ? ORDER BY created_at DESC";

  db.query(sql, [userId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });

});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});