// DEPENDENCIES
const express = require("express");
const locations = require("./controllers/locations.controller.js");
const machines = require("./controllers/machines.controller.js");
const persons = require("./controllers/persons.controller.js");
const plans = require("./controllers/plans.controller.js");
const specialsEvent = require("./controllers/special-events.controller.js");

// CONFIGURATION
const app = express();
app.use("/locations", locations);
app.use("/machines", machines);
app.use("/persons", persons);
app.use("/plans", plans);
app.use("/special-events", specialsEvent);

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello, world!");
  });

  // EXPORT
module.exports = app;