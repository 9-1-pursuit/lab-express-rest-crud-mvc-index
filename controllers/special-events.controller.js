const express = require ('express')
const events = express.Router()
const eventsArray = require ('../models/special-event.model')

//Get ROute For /bookmarks (app.use in app.js handles the entry)
events.get('/', (req,res)=>{
    res.json(eventsArray)
})

//Show Route
events.get('/:index',(req,res)=>{
    const {index}= req.params
    res.json(eventsArray[index])
})


module.exports = events;