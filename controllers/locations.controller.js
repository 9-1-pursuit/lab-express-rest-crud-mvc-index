const express = require("express")
const locations = express.Router()

const locationsData = require("../models/location.model")

locations.get("/", (req, res) => {
  res.json(locationsData)
})

// INDEX ROUTE
locations.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(locationsData[index])
})

module.exports = locations