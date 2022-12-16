
const express = require("express")
const plans = express.Router()
const plansData = require('../models/plan.model.js')

//Get Route for plans
plans.get("/", (req, res)=>{
    res.json(plansData)
})

//Get Route for one plan
plans.get('/plan:index', (req, res) =>{
    const {index} = req.params 
    res.json(plansData[index]) 
})


module.exports = plans