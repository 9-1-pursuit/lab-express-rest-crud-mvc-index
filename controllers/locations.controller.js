const express = require("express");
const locations = express.Router();
const locationsArr = require("../models/location.model");
const personsArr = require("../models/person.model");

locations.get("/", (req, res) => {
  res.status(200).json(locationsArr);
});

locations.get("/people", (req, res) => {
  const locationPeopleArr = [...locationsArr].map((el) => {
    return { ...el, people: "" };
  });

  personsArr.forEach((person) => {
    locationPeopleArr.forEach((el) => {
      if (person.mainLocation === el.zip) {
        el.people = [...el.people, person];
      }
    });
  });

  res.status(200).json(locationPeopleArr);
});

module.exports = locations;
