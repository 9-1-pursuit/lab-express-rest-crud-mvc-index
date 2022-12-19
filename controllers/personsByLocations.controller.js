const express = require("express");
const personsByLocation = express.Router();
const peopleArray = require("../models/person.model");
const locationsArray = require("../models/location.model");

personsByLocation.get("/", (req, res) => {
  const personsByLocationArray = locationsArray.map((location) => {
    const matchingPersons = peopleArray.filter((person) => {
      return location.zip === person.mainLocation;
    });
    return { ...location, people: matchingPersons };
  });
  res.send(personsByLocationArray);
});

module.exports = personsByLocation;
