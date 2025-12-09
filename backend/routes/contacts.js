const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all contacts
router.get("/", (req, res) => {
  db.query("SELECT * FROM contacts ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// POST new contact
router.post("/", (req, res) => {
  const { full_name, email, mobile, city } = req.body;

  if (!full_name || !email)
    return res.status(400).json({ error: "Full name and email are required" });

  const sql =
    "INSERT INTO contacts (full_name, email, mobile, city) VALUES (?, ?, ?, ?)";

  db.query(sql, [full_name, email, mobile, city], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({
      id: result.insertId,
      full_name,
      email,
      mobile,
      city,
    });
  });
});

module.exports = router;
