const express = require("express");
const persons = express.Router();
const personsArr = require("../models/person.model");

persons.get("/", (req, res) => {
  res.json(personsArr);
});

persons.get("/:i", (req, res) => {
  const { i } = req.params;
  res.json(personsArr[i]);
});

module.exports = persons;
