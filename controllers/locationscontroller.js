//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const locations = express();
const locationsArray = require("../models/locationsmodel");

//GET ROUTES
locations.get("/", (req, res) => {
  res.json(locationsArray);
});

module.exports = locations;
