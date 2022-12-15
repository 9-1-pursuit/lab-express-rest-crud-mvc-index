const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));
//CONTROLLER IMPORTS
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
personsController = require("./controllers/persons.controller");
plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

//CONTROLLER ROUTES
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

//HOME
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//404
app.get("*", (req, res) => {
  res.status(404).json({ error: "404 Page not found" });
});

module.exports = app;
