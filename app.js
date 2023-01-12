const express = require("express")
const app = express()

const locationsController = require('./controllers/locations.controller')
const machinesController = require('./controllers/machines.controller')
const peopleController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')
const specialEventsController = require('./controllers/special-events.controller')

app.use('/locations', locationsController)
app.use('/equipment', machinesController)
app.use('/machines', machinesController)
app.use('/persons', peopleController)
app.use('/people', peopleController)
app.use('/plans', plansController)
app.use('/special-events', specialEventsController)

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Page Not Found!' })
})

module.exports = app