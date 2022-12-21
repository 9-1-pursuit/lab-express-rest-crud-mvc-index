//DEPENDECIES
const { application } = require("express")
const express = require("express")
const locationsController = require("./controllers/locations.controller")
const machinesController = require("./controllers/machines.controller")
const personsController = require("./controllers/persons.controller")
const plansController = require("./controllers/plans.controller")
const eventsController = require("./controllers/special-events.controller")

//CONFIGURATION
const app = express()
app.use("/locations", locationsController)
app.use("/equipment", machinesController)
app.use("/machines", machinesController)
app.use("/people", personsController)
app.use("/persons", personsController)
app.use("/plans", plansController)
app.use("/special-events", eventsController)

//ROUTES
app.get("/", (req, res) => {
    res.send("Hello, world!")
})

app.get("*", (req, res) => {
    res.status(404).send("Sorry, no page found!")
  })

//EXPORT
module.exports = app