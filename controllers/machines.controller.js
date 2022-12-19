const express = require("express");
const equipment = express.Router();
const equipmentArray = require("../models/machine.model");

equipment.get("/", (req, res) => {
  res.json(equipmentArray);
});

module.exports = equipment;
