
const express = require("express")
const specialEvents = express.Router()
const specialEventsData = require('../models/special-event.model.js')

//Get Route for special-events
specialEvents.get("/", (req, res)=>{
    res.json(specialEventsData)
})

//Get Route for one special-event
specialEvents.get('/special-event:index', (req, res) =>{
    const {index} = req.params 
    res.json(specialEventsData[index]) 
})


module.exports = specialEvents