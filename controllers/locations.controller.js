const express = require("express")
const locations = express.Router()
const data = require("../model/location.model.js")

locations.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = locations