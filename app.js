//DEPENDENCIES
const express = require('express')
const morgan = require('morgan')
const locationsController = require('./controllers/locations.controller')
// const machines = require('./controllers/machines.controller')
// const persons = require('./controllers/persons.controller')
// const plans = require('./controllers/plans.controller')
// const specialEvents = require('./controllers/special-events.controller')

//CONFIGURATION
const app = express()

//MIDDLEWARE
app.use(morgan('tiny'))
app.use("/locations", locationsController)
// app.use("/machines", machines.controller)
// app.use("/persons", persons.controller)
// app.use("/plans", plans.controller)
// app.use("/special-events", special-events.controller)

//ROUTES
app.get("/", (req, res) =>{
    res.send(`Listening on port: ${PORT}`)
})

app.get("*", (req, res) => {
    res.status(404).json({error: "Page not found"})
})


//EXPORT
module.exports = app
