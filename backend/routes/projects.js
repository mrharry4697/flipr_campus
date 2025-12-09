const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all projects
router.get("/", (req, res) => {
  db.query("SELECT * FROM projects", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add new project
router.post("/", (req, res) => {
  const { name, description, image } = req.body;
  db.query(
    "INSERT INTO projects (name, description, image) VALUES (?, ?, ?)",
    [name, description, image],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, name, description, image });
    }
  );
});

module.exports = router;
