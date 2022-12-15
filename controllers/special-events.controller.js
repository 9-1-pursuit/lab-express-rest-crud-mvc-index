const express = require("express")
const specialEvents = express.Router()
const data = require("../models/special-event.model.js")

specialEvents.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = specialEvents