//Import
const express = require("express")
const event = express.Router()
const eventArray = require('../models/special-event.model')

//Routes
event.get('/', (req, res) => {
    res.json(eventArray)
})

//Export
module.exports = event