router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.json({ message: "User registered successfully ✅" }); // ✅ IMPORTANT

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Registration failed ❌" }); // ✅ also message
  }
});