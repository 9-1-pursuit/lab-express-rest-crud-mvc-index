//DEPENDENCIES
const express = require("express");

//CONFIGURATION
const locations = express();
const locationsArray = require("../models/location.model");

//GET ROUTES
locations.get("/", (req, res) => {
  res.json(locationsArray);
});

module.exports = locations;
