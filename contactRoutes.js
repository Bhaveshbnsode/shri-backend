const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const newData = new Contact(req.body);
    await newData.save();
    res.json({ message: "Form submitted successfully ✅" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;