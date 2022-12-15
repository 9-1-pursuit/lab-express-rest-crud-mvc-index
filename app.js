const express = require("express");
const app = express();

// location
const locationsController = require("./controllers/locations.controller");
app.use("/locations", locationsController);

// machine
const machineController = require("./controllers/machines.controller");
app.use("/machines", machineController);

// persons
const personsController = require("./controllers/persons.controller");
app.use("/persons", personsController);

// plan
const plansController = require("./controllers/plans.controller");
app.use("/plans", plansController);

// persons
const specialEventsController = require("./controllers/special-events.controller");
app.use("/special-events", specialEventsController);

// GENERIC ROUTE
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
