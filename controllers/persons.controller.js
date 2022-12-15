const express = require("express");
const persons = express.Router()

const personsArray = require("../models/person.model");

persons.get("/", (req, res) => {
  res.json(personsArray);
});
//SHOW
persons.get("/:index", (req, res) => {
    const { index } = req.params;
    res.json(personsArray[index]);
  });
  
module.exports = persons;
