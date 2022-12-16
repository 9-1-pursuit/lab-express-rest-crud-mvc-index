const express = require("express")
const plans = express.Router()
const plansArray = require("../models/plan.model")

// Get ROUTE for /plan (app.use in app.js handles the entry point for the controller)
plans.get("/", (req, res) => {
  res.json(plansArray)
})

// Show Route
plans.get("/:index", (req, res) => {
  const { index } = req.params
  res.json(plansArray[index])
})

module.exports = plans
