const express = require('express');
const machines = express.Router();
const machinesArray = require('../models/machine.model');

//! Get Route
machines.get('/', (req, res) => {
  res.json(machinesArray);
});

//! Show Route
machines.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(machinesArray[index]);
});

module.exports = machines;
