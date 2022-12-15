const express = require("express");

//Bring in all controlers
const locationsController = require("./controllers/locations.controller");
const machineController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const specialEventsController = require("./controllers/special-events.controller");
const plansController = require("./controllers/plans.controller");

const app = express();
//* Middleware
app.use("/locations", locationsController);
app.use("/machines", machineController);
app.use("/persons", personsController);
app.use("/special-events", specialEventsController);
app.use("/plans", plansController);
// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.get("*", (req, res) => {
  //send a json response
  res.status(404).json({ error: `Sorry, no page found!` });
});

module.exports = app;
