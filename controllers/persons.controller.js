
const express = require("express")
const persons = express.Router()
const personsData = require('../models/person.model.js')

//Get Route for persons
persons.get("/", (req, res)=>{
    res.json(personsData)
})

//Get Route for one person
persons.get('/person:index', (req, res) =>{
    const {index} = req.params //deconstructing the request object aka "req", which contains the params value
        
    //this params in the backend, works just like useParams in React, grabbing a parameter value entered in the address bar to complete a get request
})


module.exports = persons.controller