const express = require("express")
const persons = express.Router()
const personsArray = require("../models/person.model")

// Get ROUTE for /person (app.use in app.js handles the entry point for the controller)

persons.get("/", (req, res) => {
  res.json(personsArray)
})

// Show Route
persons.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(personsArray[index])
})

module.exports = persons
