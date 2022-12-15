const express = require('express')
const app = express()
const locationsController = require('./controllers/locations.controller')
const machineController = require('./controllers/machines.controller')
const personController = require('./controllers/persons.controller')
const plansController = require('./controllers/plans.controller')
const specialEventsController = require('./controllers/special-events.controller')





app.use('/locations',locationsController)
app.use('/machines',machineController)
app.use('/people',personController)
app.use('/plans',plansController)
app.use('/special-events',specialEventsController)

app.get('/',(req,res)=>{
    res.send( "Hello, world!")
})

app.get('*',(req,res)=>{
    res.status(404).json({ error: "Sorry, no page found!"})
})


module.exports = app