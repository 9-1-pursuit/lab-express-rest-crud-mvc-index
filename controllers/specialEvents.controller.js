
const express = require("express")
const specialEvents = express.Router()
const specialEventsData = require('../models/special-event.model.js')

//Get Route for special-events
special-events.get("/", (req, res)=>{
    res.json(specialEventsData)
})

//Get Route for one special-event
specialEvents.get('/special-event:index', (req, res) =>{
    const {index} = req.params //deconstructing the request object aka "req", which contains the params value
        
    //this params in the backend, works just like useParams in React, grabbing a parameter value entered in the address bar to complete a get request
})


module.exports = specialEvents.controller