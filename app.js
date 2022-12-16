// Dependencies
const express = require("express");
const morgan = require("morgan");

// Config
const app = express();
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");
const specialEventsController = require("./controllers/special-events.controller");

// Middleware
app.use(morgan("tiny"));
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/special-events", specialEventsController);

// Route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

// Export
module.exports = app;
