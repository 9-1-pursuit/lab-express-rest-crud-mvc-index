const express = require("express")
const persons = express.Router()
const data = require("../models/person.model.js")

persons.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = persons