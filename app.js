//DEPENDENCIES
const express = require('express')
const morgan = require('morgan')
const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller')
const personsController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')
const specialEventsController = require('./controllers/special-events.controller')

//CONFIGURATION
const app = express()

//MIDDLEWARE
app.use(morgan('tiny'))
app.use("/locations", locationsController)
app.use("/machines", machinesController)
app.use("/persons", personsController)
app.use("/plans", plansController)
app.use("/special-events", specialEventsController)

//ROUTES
app.get("/", (req, res) =>{
    res.send("Hello, world!")
})

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})


//EXPORT
module.exports = app
