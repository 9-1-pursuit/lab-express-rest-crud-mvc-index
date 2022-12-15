const express = require("express");
const plans = express.Router();

const plansArr = require("../models/plan.model");

plans.get("/", (req, res) => {
  res.json(plansArr);
});

plans.get("/:i", (req, res) => {
  const { i } = req.params;
  res.json(plansArr[i]);
});

module.exports = plans;
