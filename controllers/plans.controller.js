const express = require('express')
const plans = express.Router()
const plansArray = require('../models/plan.model')

plans.get('/', (req, res) => {
    res.json(plansArray)
})

plans.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (arrayIndex < plans.length) {
      res.json(plansArray[arrayIndex]);
    } else {
      res.status(404).json({ error: `page not found` });
    }
  })

  module.exports = plans