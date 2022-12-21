//DEPENDENCIES
const express = require("express")
const people = express.Router()
const personsArray = require("../models/person.model")

//ROUTES
people.get("/", (req, res) => {
    res.send(personsArray)
})

people.get("/:index", (req, res) => {
    const { index } = req.params
    if(personsArray[index]){
        res.send(personsArray[index])
    } else {
        res.status(404).send("Sorry, no page found!")
    }
})

//EXPORT
module.exports = people