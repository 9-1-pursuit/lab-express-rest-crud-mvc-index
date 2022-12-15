const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model.js");

machines.get("/", (req, res) => {
  res.json(machinesArray);
});

machines.get("/:index", (req, res) => {
  const { index } = req.params;
  if (index < machinesArray.length) res.json(machinesArray[index]);
  else {
    res.status(404).json({ error: `page not found` });
  }
});

//export
module.exports = machines;
