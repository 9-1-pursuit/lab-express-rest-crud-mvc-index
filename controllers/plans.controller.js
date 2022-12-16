
const express = require("express")
const plans = express.Router()
const plansData = require('../models/plan.model.js')

//Get Route for plans
plans.get("/", (req, res)=>{
    res.json(plansData)
})

//Get Route for one plan
plans.get('/plan:index', (req, res) =>{
    const {index} = req.params //deconstructing the request object aka "req", which contains the params value
        
    //this params in the backend, works just like useParams in React, grabbing a parameter value entered in the address bar to complete a get request
})


module.exports = plans.controller