//DEPENDENCIES
const express = require("express")
const specialEvents = express.Router()
const eventsArray = require("../models/special-event.model")

//ROUTES
specialEvents.get("/", (req, res) => {
    res.send(eventsArray)
})

specialEvents.get("/:index", (req, res) => {
    const { index } = req.params
    if(eventsArray[index]){
        res.send(eventsArray.at(index))
    } else {
        res.status(404).send("Sorry, no page found!")
    }
})

//EXPORT
module.exports = specialEvents