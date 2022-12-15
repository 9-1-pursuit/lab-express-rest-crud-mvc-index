const express = require('express')
const location = express.Router()
const locationArray = require('../models/location.model')

location.get('/', (req, res) =>{
    res.json(locationArray)
})

location.get('/:index', (req, res) =>{
    const{index} = req.params;
    res.json(locationArray[index])
})

module.exports = location