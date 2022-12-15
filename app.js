const express = require("express");
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

const app = express();

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/special-events", specialEventsController);
app.use("/plans", plansController);

//routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//export
module.exports = app;
