// DEPENDENCIES
const express = require("express");
const locations = require("./controllers/locationscontroller");
const machines = require("./controllers/machinescontroller");
const persons = require("./controllers/personscontroller");
const plans = require("./controllers/planscontroller");
const specailEvents = require("./controllers/specialeventscontroller");

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
