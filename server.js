require('dotenv').config();
const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("."));

// MySQL connection
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "christmas_cards",
};

// Get all recipients
app.get("/api/recipients", async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute("SELECT * FROM recipients");
    await connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add new recipient
app.post("/api/recipients", async (req, res) => {
  try {
    const { name, address, city, state, zip } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
      "INSERT INTO recipients (name, address, city, state, zip) VALUES (?, ?, ?, ?, ?)",
      [name, address, city, state, zip]
    );
    await connection.end();
    res.json({ id: result.insertId, name, address, city, state, zip });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update recipient
app.put("/api/recipients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, city, state, zip } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      "UPDATE recipients SET name = ?, address = ?, city = ?, state = ?, zip = ? WHERE id = ?",
      [name, address, city, state, zip, id]
    );
    await connection.end();
    res.json({ id, name, address, city, state, zip });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete recipient
app.delete("/api/recipients/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute("DELETE FROM recipients WHERE id = ?", [id]);
    await connection.end();
    res.json({ message: "Recipient deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
