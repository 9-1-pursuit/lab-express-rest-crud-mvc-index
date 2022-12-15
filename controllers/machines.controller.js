const express = require("express");
const machines = express.Router();

const machinesArr = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.json(machinesArr);
});

machines.get("/:i", (req, res) => {
  const { i } = req.params;
  res.json(machinesArr[i]);
});

module.exports = machines;
