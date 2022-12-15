const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model.js");

persons.get("/", (req, res) => {
  res.json(personsArray);
});

persons.get("/:index", (req, res) => {
  const { index } = req.params;
  if (index < personsArray.length) res.json(personsArray[index]);
  else {
    res.status(404).json({ error: `page not found` });
  }
});

//export
module.exports = persons;
