const express = require('express');
const locations = express.Router();
const locationsArray = require('../models/location.model');

//! Get Route
locations.get('/', (req, res) => {
  res.json(locationsArray);
});

//! Show Route
locations.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(locationsArray[index]);
});

module.exports = locations;
