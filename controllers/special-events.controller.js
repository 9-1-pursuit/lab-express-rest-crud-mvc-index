const express = require("express");
const specialEvents = express.Router();
const specialEventsArray = require("../models/special-event.model.js");

specialEvents.get("/", (req, res) => {
  res.json(specialEventsArray);
});

specialEvents.get("/:index", (req, res) => {
  const { index } = req.params;
  if (index < specialEventsArray.length) res.json(bookmarksArray[index]);
  else {
    res.status(404).json({ error: `page not found` });
  }
});

//export
module.exports = specialEvents;
