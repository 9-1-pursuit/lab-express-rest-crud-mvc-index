const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
  

// CONFIGS/ROUTES
const locationsController = require("./controllers/locations.controller")
app.use("/locations", locationsController)


const machinesController = require("./controllers/machines.controller")
app.use("/machines", machineController)

const personsController = require("./controllers/persons.controller")
app.use("/persons", personsController)

const plansController = require("./controllers/plans.controller")
app.use("/plans", plansController)

const specialEventsController = require("./controllers/special-events.controller")
app.use("/special-events", specialEventsController)


// export
  module.exports = app