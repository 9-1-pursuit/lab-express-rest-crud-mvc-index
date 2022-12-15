const express = require("express")
const persons = express.Router()
const data = require("../model/person.model.js")

persons.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = persons