const express = require("express")
const persons = express.Router()
const data = require("../models/person.model.js")

persons.get("/", (req, resp) => {
    resp.send(data)
})

persons.get("/:index", (req, resp) =>{
    const {index} = req.params
    
    data[index]? resp.send(data[index]) :resp.status(404).send({Error: "Sorry, no page found!"})
})
module.exports = persons