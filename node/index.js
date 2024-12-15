const express = require("express");
const mysql = require("mysql2");
const { randomName } = require("./data");

const port = 3000;

const config = require("./config");

const app = express();
const pool = mysql.createPool(config);

const getConnection = (callback, res = null) => {
  pool.getConnection((err, connection) => {
    if (err) {
      if (res) {
        res.send(`<h1>Failed to connect to database</h1>
          <p>${err}</p>`);
      }
      return;
    }
    callback(connection);
  });
};

app.get("/", (req, res) => {
  getConnection((connection) => {
    connection.query(
      "CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
    );
    connection.query(`INSERT INTO people (name) VALUES ('${randomName()}')`);
    connection.query("SELECT name FROM people", (err, results) => {
      if (err) {
        res.send(`<h1>Failed to query for people</h1>
          <p>${err}</p>`);
        connection.release();
        return;
      }
      const names = results.map((result) => `<li>${result.name}</li>`).join("");
      res.send(`<h1>Full Cycle Rocks!</h1>
        <ul>
          ${names}
        </ul>`);
      connection.release();
    });
  }, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
