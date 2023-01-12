const express = require('express')
const machines = express.Router()
const machinesArray = require('../models/machine.model')

machines.get('/', (req, res) => {
    res.json(machinesArray)
})

machines.get("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    if (arrayIndex < machines.length) {
      res.json(machinesArray[arrayIndex]);
    } else {
      res.status(404).json({ error: `page not found` });
    }
  })

  module.exports = machines