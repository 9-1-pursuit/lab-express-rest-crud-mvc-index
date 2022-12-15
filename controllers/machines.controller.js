const express = require("express")
const machines = express.Router()
const data = require("../models/machine.model.js")

machines.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = machines