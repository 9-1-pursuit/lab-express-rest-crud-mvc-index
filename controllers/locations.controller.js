const express = require("express");
const locations = express.Router();

const locationsArray = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});
//SHOW
locations.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(locationsArray[index]);
});
module.exports = locations;
