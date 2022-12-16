const express = require("express")
const persons = express.Router()

const personsData = require("../models/person.model")

persons.get("/", (req, res) => {
  res.json(personsData)
})

// INDEX ROUTE
persons.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(personsData[index])
})

module.exports = persons