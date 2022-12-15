const express = require("express")
const plans = express.Router()
const data = require("../model/plan.model.js")

plans.get("/", (req, resp) => {
    resp.send(data)
})


module.exports = plans