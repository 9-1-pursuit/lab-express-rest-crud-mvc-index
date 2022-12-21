//DEPENDENCIES
const express = require("express")
const machines = express.Router()
const machinesArray = require("../models/machine.model")

//ROUTES
machines.get("/", (req, res) => {
    res.send(machinesArray)
})

machines.get("/:index", (req, res) => {
    const { index } = req.params
    if(machinesArray[index]){
        res.send(machinesArray[index])
    } else {
        res.status(404).send("Sorry, no page found!")
    }
})

//EXPORT
module.exports = machines