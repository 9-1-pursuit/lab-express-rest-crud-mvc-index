// DEPENDENCIES
const express = require("express");
const locations = require("./controllers/locations.controller");
const machines = require("./controllers/machines.controller");
const persons = require("./controllers/persons.controller");
const plans = require("./controllers/plans.controller");
const specailEvents = require("./controllers/special-events.controller");

//CONFIGURATION
const app = express();

//MIDDLEWEAR
app.use("/locations", locations);
app.use("/persons", persons);
app.use("/plans", plans);
app.use("/machines", machines);
app.use("/special-events", specailEvents);

//ROUTE
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//EXPORT
module.exports = app;
