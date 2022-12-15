const express = require("express");
const specialEvents = express.Router();
const specialEventsArr = require("../models/special-event.model");

specialEvents.get("/", (req, res) => {
  res.json(specialEventsArr);
});

specialEvents.get("/:i", (req, res) => {
  const { i } = req.params;
  res.json(specialEventsArr[i]);
});

module.exports = specialEvents;
