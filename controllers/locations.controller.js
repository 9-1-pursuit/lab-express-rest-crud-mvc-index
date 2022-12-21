//DEPENDENCIES
const express = require("express")
const locations = express.Router()
const locationsArray = require("../models/location.model")
const peopleArray = require("../models/person.model")

//ROUTES
locations.get("/", (req, res) => {
    res.send(locationsArray)
})

locations.get("/:index", (req, res) => {
    const { index } = req.params
    if(locationsArray[index]){
        res.status(200).send(locationsArray[index])
    } else {
        res.status(404).send("Sorry, no page found!")
    }
})

//EXPORT
module.exports = locations