
const express = require("express")
const machines = express.Router()
const machinesData = require('../models/machine.model.js')

//Get Route for machines
machines.get("/", (req, res)=>{
    res.json(machinesData)
})

//Get Route for one machine
machines.get('/machine:index', (req, res) =>{
    const {index} = req.params //deconstructing the request object aka "req", which contains the params value
        
    //this params in the backend, works just like useParams in React, grabbing a parameter value entered in the address bar to complete a get request
})


module.exports = machines.controller