// DEPENDENCIES
const express = require("express");

//CONFIGURATION
const plans = express();
const plansArray = require("../models/plan.model");

//GET ROUTES
plans.get("/", (req, res) => {
  res.json(plansArray);
});
module.exports = plans;
