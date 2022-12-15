const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model")
const personsArray = require('./persons.controller')


locations.get('/', (req,res) =>{
    res.json(locationsArray)
})

locations.get("/:index", (req, res) => {
    const {index} = req.params
    res.json(locationsArray[index])
  });
  
//   locations.get("/people", (req, res) => {
//     const {index} = req.params

//     // const match = if (locationsArray[index].zip === personsArray[zip].mainLocation){
//     //     return (personsArray)
//     // }
//     res.json(locationsArray[index])
//   });
  

module.exports = locations;