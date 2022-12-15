const express = require('express')
const location = express.Router()
const locationArray = require('../models/location.model')

location.get("/", (req , res) => {
    res.json(locationArray)
})

module.exports = location