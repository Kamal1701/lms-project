require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Initialize express
const app = express();

// Middleware
app.use(cors());

// Routers

app.get("/", (req, res) => res.send("Api Working"));

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
