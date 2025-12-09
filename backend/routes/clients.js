const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all clients
router.get("/", (req, res) => {
  db.query("SELECT * FROM clients", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// ADD a new client
router.post("/", (req, res) => {
  const { name, description, designation, image } = req.body;

  db.query(
    "INSERT INTO clients (name, description, designation, image) VALUES (?, ?, ?, ?)",
    [name, description, designation, image],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({
        id: result.insertId,
        name,
        description,
        designation,
        image,
      });
    }
  );
});

module.exports = router;
