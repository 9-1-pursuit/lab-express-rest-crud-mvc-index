const express = require("express");
const locations = express.Router();
const locationsArr = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json(locationsArr);
});

locations.get("/:i", (req, res) => {
  const { i } = req.params;
  res.json(locationsArr[i]);
});

module.exports = locations;
