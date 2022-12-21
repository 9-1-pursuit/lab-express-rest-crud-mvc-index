//DEPENDENCIES
const express = require("express")
const plans = express.Router()
const plansArray = require("../models/plan.model")

//ROUTES
plans.get("/", (req, res) => {
    res.send(plansArray)
})

plans.get("/:index", (req, res) => {
    const { index } = req.params
    if(plansArray[index]){
        res.send(plansArray[index])
    } else {
        res.status(404).send("Sorry, no page found!")
    }
})

//EXPORT
module.exports = plans