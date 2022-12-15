const express = require('express');
const persons = express.Router();
const personsArray = require('../models/person.model');
const plans = require('./plans.controller');

//! Get Route
persons.get('/', (req, res) => {
  res.json(personsArray);
});

//! Show Route
persons.get('/:index', (req, res) => {
  const { index } = req.params;
  res.json(personsArray[index]);
});

module.exports = persons;
