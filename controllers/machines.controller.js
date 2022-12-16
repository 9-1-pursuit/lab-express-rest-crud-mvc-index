const express = require("express")
const machine = express.Router()

const machineData = require("../models/machine.model")

machine.get("/", (req, res) => {
  res.json(machineData)
})

//  INDEX ROUTE
machine.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(machineData[index])
})

module.exports = machine