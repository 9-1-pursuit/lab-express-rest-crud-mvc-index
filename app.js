//Dependencies
const express = require('express')

//Configuration
const app = express()

//MIDDLEWARE
const locationController = require('./controllers/locations.controller')

const machineController = require('./controllers/machines.controller')

const personController = require('./controllers/persons.controller')

const plansController = require('./controllers/plans.controller')

const specialEvents = require('./controllers/special-events.controller')

//ROUTE
app.use('/locations', locationController);
app.use('/machines', machineController);
app.use('/persons', personController );
app.use('/plans', plansController);
app.use('/special-events', specialEvents);

//ERROR LOCATED HERE!

app.get('/', (req, res)=>{
    res.send(`Hello, world!`)
})


app.get('*', (req, res) =>{
    res.status(404).json({error:'Page Not found'})
})


module.exports = app