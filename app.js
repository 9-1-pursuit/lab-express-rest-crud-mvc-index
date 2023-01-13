//Import here 
const express = require("express")
const app = express()

//Mid-ware
const locationsController = require("./controllers/locations.controller")
const machinesController = require("./controllers/machines.controller")
const personController = require("./controllers/persons.controller")
const plansController = require("./controllers/plans.controller")
const specialEventsController = require("./controllers/special-events.controller")

//routes
app.use("/locations", locationsController)
app.use("/machines", machinesController)
app.use("/person", personController )
app.use("/plans", plansController)
app.use("/special-events", specialEventsController )

app.get("/", (req, res) => {
    res.send("Hello, world!")
})


app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!" })
})

//export
module.exports = app