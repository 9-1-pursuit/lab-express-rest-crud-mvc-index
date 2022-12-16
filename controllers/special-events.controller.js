// DEPENDENCIES
const express = require("express");

//CONFIGURATION
const specialEvents = express();
const specialEventsArray = require("../models/special-event.model");

//GET ROUTES
specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
});

//EXPORT
module.exports = specialEvents;
