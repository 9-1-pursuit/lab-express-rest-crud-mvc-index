
const express = require("express")
const persons = express.Router()
const personsData = require('../models/person.model.js')

//Get Route for persons
persons.get("/", (req, res)=>{
    res.json(personsData)
})

//Get Route for one person
persons.get('/person:index', (req, res) =>{
    const {index} = req.params 
    res.json(personsData[index]) 
})


module.exports = persons