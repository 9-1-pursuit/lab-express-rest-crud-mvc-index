const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");

locations.get("/", (req, res) => {
  res.json(locationsArray);
});

locations.get("/:index", (req, res) => {
  const { index } = req.params;
  if (index < locations.length) {
    res.json(locationsArray[index]);
  } else {
    res.status(404).json({ error: `page not found` });
  }
});
//export
module.exports = locations;
