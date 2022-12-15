const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");

plans.get("/", (req, res) => {
  res.json(plansArray);
});

plans.get("/:index", (req, res) => {
  const { index } = req.params;
  if (index < plansArray.length) res.json(bookmarksArray[index]);
  else {
    res.status(404).json({ error: `page not found` });
  }
});

//export
module.exports = plans;
