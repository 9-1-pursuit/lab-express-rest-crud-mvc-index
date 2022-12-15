const express = require('express');
const special_events= express.Router()
const special_events_Array = require("../models/special-event.model")


special_events.get("/", (req,res)=>{
  res.json(special_events_Array)
})

//SHOW
special_events.get("/:index", (req,res)=>{
  const {index} = req.params
  res.send(special_events_Array[index])
})




module.exports = special_events