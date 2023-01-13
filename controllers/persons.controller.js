const express = require("express")
const person = express.Router()
const personsArray = require("../models/person.model")


person.get("/", (req, res) => {
    res.json(personsArray)
})

person.get("/:index" ,(req, res) => {
    const { index } = req.params
    res.json(personsArray[index])
})

module.exports = person