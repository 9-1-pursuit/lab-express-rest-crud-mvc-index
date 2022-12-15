const express = require("express")
const plans = express.Router()
const data = require("../models/plan.model.js")

plans.get("/", (req, resp) => {
    resp.send(data)
})

plans.get("/:index", (req, resp) =>{
    const {index} = req.params
    
    data[index]? resp.send(data[index]) :resp.status(404).send({Error: "Sorry, no page found!"})
})
module.exports = plans