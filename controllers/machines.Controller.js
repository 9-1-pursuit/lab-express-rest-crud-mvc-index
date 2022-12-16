const express = require("express")
const machines = express.Router()
const machinesArray = require("../models/machine.model")

// Get ROUTE for /machines (app.use in app.js handles the entry point for the controller)
machines.get("/", (req, res) => {
  res.json(machinesArray)
})

// Show Routes
machines.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(machinesArray[index])
})

module.exports = machines
