const express = require("express");
const equipment = require("./controllers/machines.controller");
const locations = require("./controllers/locations.controller");
const people = require("./controllers/persons.controller");
const plans = require("./controllers/plans.controller");
const specialEvents = require("./controllers/special-events.controller");
const app = express();

app.use("/equipment", equipment);

app.use("/locations", locations);

app.use("/people", people);

app.use("/plans", plans);

app.use("/special-events", specialEvents);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;
