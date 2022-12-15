const express = require("express")
const machines = express.Router()
const data = require("../model/machine.model.js")

machines.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = machines