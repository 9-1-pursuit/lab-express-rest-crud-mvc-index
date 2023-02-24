//DEPENDENCIES
const express = require("express");

//CONFIGURATIONS
const machines = express();
const machinesArray = require("../models/machinesmodel");

//GET ROUTES
machines.get("/", (req, res) => {
  res.json(machinesArray);
});

//EXPORT
module.exports = machines;
