// DEPENDENCIES
const express = require("express");

//CONFIGURATION
const app = express();

//ROUTE
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//EXPORTS
module.exports = app;
