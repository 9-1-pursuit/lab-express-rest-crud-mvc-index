const express = require('express')
const people = express.Router()
const peopleArray = require('../models/person.model')

people.get('/', (req, res) => {
    res.json(peopleArray)
})

people.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (arrayIndex < people.length) {
      res.json(peopleArray[arrayIndex]);
    } else {
      res.status(404).json({ error: `page not found` });
    }
  })

  module.exports = people