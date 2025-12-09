const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET all subscribers
router.get("/", (req, res) => {
  db.query("SELECT * FROM subscribers ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// POST new subscriber
router.post("/", (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ error: "Email is required" });

  const sql = "INSERT INTO subscribers (email) VALUES (?)";

  db.query(sql, [email], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: "Already subscribed" });
      }
      return res.status(500).json({ error: err });
    }

    res.json({
      id: result.insertId,
      email,
    });
  });
});

module.exports = router;
