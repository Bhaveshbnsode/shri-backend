const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🔥 Server running on port " + PORT);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/auth", require("./routes/authRoutes")); // ✅ FIXED

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Connect DB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🔥 Server running on port " + PORT);