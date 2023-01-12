const express = require('express')
const locations = express.Router()
const locationsArray = require('../models/location.model.js')

locations.get('/', (req, res) => {
    res.json(locationsArray)
})

locations.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (arrayIndex < locations.length) {
      res.json(locationsArray[arrayIndex]);
    } else {
      res.status(404).json({ error: `page not found` });
    }
  })

  module.exports = locations