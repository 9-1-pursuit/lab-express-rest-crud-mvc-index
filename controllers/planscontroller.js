// DEPENDENCIES
const express = require("express");

//CONFIGURATION
const plans = express();
const plansArray = require("../models/plansmodel");

//GET ROUTES
plans.get("/", (req, res) => {
  res.json(plansArray);
});
module.exports = plans;
