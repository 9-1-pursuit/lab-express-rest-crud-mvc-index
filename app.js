const express = require("express")

const app = express()

const locationsController = require("./controllers/locations.Controller")
app.use("/locations", locationsController)

const machinesController = require("./controllers/machines.Controller")
app.use("/machines", machinesController)

const personsController = require("./controllers/persons.Controller")
app.use("/persons", personsController)

const plansController = require("./controllers/plans.Controller")
app.use("/plans", plansController)

const specialEventsController = require("./controllers/specialEvents.Controller")
app.use("/specialEvents", specialEventsController)

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.get("*", (req, res) => {
  res.status(404).send("Sorry, no page Found!")
})
module.exports = app
