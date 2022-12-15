const express = require("express")
const specialEvents = express.Router()
const data = require("../models/special-event.model.js")

specialEvents.get("/", (req, resp) => {
    resp.send(data)
})

specialEvents.get("/:index", (req, resp) =>{
    const {index} = req.params
    
    data[index]? resp.send(data[index]) :resp.status(404).send({Error: "Sorry, no page found!"})
})
module.exports = specialEvents