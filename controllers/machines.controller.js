const express = require("express");
const machines = express.Router();

const machinesArray = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.json(machinesArray);
});
//SHOW 
machines.get("/:index", (req, res) => {
  const { index } = req.params;
  res.json(machinesArray[index]);
});

module.exports = machines;