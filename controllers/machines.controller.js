const express = require("express")
const machines = express.Router()
const data = require("../models/machine.model.js")

machines.get("/", (req, resp) => {
    resp.send(data)
})

machines.get("/:index", (req, resp) =>{
    const {index} = req.params
    
    data[index]? resp.send(data[index]) :resp.status(404).send({Error: "Sorry, no page found!"})
})
module.exports = machines