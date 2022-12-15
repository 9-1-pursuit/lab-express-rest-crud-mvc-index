// Dependencies
const express = require('express');

// Configuration
const app = express();

const locations = require('./controllers/locations.controller')

const machines = require('./controllers/machines.controller')

const persons = require('./controllers/persons.controller')

const plans = require('./controllers/plans.controller')

const specialEvents = require('./controllers/special-events.controller')

// Middleware
app.use('/locations', locations)
app.use('/machines', machines)
app.use('/persons', persons)
app.use('/plans', plans)
app.use('/special-events', specialEvents)

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!')
})


app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
  });

module.exports = app;