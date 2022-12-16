const express = require("express")
const plan = express.Router()
const planArray = require("../models/plan")

// Get ROUTE for /bookmarks (app.use in app.js handles the entry point for the controller)
plan.get("/", (req, res) => {
  res.json(planArray)
})

// Show Route
plan.get("/:index", (req, res) => {
  const [index] = req.params
  res.json(planArray[index])
})

module.exports = plan
