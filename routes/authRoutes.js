const express = require("express");
const router = express.Router();
const User = require("../models/User");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({ message: "User registered successfully ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Registration failed ❌" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials ❌" });
    }

    res.json({ message: "Login successful ✅" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Login error ❌" });
  }
});

module.exports = router;