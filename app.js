// Dependencies
const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(morgan("tiny"));

// Route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// Export
module.exports = app;
