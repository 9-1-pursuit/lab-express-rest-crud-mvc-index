//Import
const express = require("express")
const people = express.Router()
const peopleArray = require('../models/person.model')

//Routes
people.get('/', (req, res) => {
    res.json(peopleArray)
})

//Export
module.exports = people