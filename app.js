const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

//HOME
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//404
app.get("*", (req, res) => {
  res.status(404).json({ error: "404 Page not found" });
});

module.exports = app;
