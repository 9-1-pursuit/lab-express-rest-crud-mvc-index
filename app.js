//Import
const express = require("express")
const app = express()

//Middleware 
const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller')
const peopleController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')
const eventsController = require('./controllers/special-events.controller')

//Routes
app.use('/locations', locationsController)
app.use('/persons', peopleController)
app.use('/plans', plansController)
app.use('/machines', machinesController)
app.use('/special-events', eventsController)

app.get('/', (req, res) => {
    res.send(`Hello, world!`)
})

app.get('*', (req, res) => {
    res.status(404).json({error: "Sorry, no page found!"})
})

//Export
module.exports = app