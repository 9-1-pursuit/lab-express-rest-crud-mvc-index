
const express = require("express")
const locations = express.Router()
const locationsData = require('../models/location.model.js')

//Get Route for locations
locations.get("/", (req, res)=>{
    res.json(locationsData)
})

//Get Route for one location
locations.get('/location:index', (req, res) =>{
    const {index} = req.params //deconstructing the request object aka "req", which contains the params value
        
    //this params in the backend, works just like useParams in React, grabbing a parameter value entered in the address bar to complete a get request
})


module.exports = locations.controller