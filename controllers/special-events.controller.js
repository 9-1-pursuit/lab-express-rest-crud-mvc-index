const express = require('express')
const specialEvents = express.Router()
const specialEventsArray = require('../models/special-event.model')

specialEvents.get('/', (req, res) => {
    res.json(specialEventsArray)
})

specialEvents.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (arrayIndex < specialEvents.length) {
      res.json(specialEventsArray[arrayIndex]);
    } else {
      res.status(404).json({ error: `page not found` });
    }
  })

  module.exports = specialEvents