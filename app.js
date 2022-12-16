// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();
const locationsController = require("./controllers/locations.controller")
const machinesController = require("./controllers/machines.controller")
const specialEventsController = require("./controllers/special-events.controller")
const personsController = require("./controllers/persons.controller")
const plansController = require("./controllers/plans.controller")

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/locations", locationsController)
app.use("/machines", machinesController)
app.use("/special-events", specialEventsController)
app.use("/persons", personsController)
app.use("/plans", plansController)

// EXPORT
module.exports = app;