const express = require("express")

const app = express()

const locationsController = require("./controllers/locations.Controller")
app.use("/locations", locationsController)

const machinesController = require("./controllers/machines.Controller")
app.use("/machines", machinesController)

const personsController = require("./controllers/persons.Controller")
app.use("")

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.get("*", (req, res) => {
  res.status(404).sendn("Sorry, no page Found!")
})
module.exports = app
