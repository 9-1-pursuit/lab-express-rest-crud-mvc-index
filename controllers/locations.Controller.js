const expres = require("express")
const locations = express.Router()
const locationsArray = require("../models/location.model")

// Get ROUTE for /locations (app.use in app.js handles the entry point for the controller)

locations.get("/", (req, res) => {
  res.json(locationsArray)
})

// Show Routes
locations.get("/:index", (req, res) => {
  res.json(locationsArray[index])
})

module.exports = locations
