
const express = require("express")
const machines = express.Router()
const machinesData = require('../models/machine.model.js')

//Get Route for machines
machines.get("/", (req, res)=>{
    res.json(machinesData)
})

//Get Route for one machine
machines.get('/machine:index', (req, res) =>{
    const {index} = req.params 
    res.json(machinesData[index]) 
})




module.exports = machines