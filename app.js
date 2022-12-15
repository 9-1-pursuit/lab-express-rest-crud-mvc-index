const express = require('express')

const locationController = require('./controllers/locations.controller')

const machineController = require("./controllers/machines.controller")

const personController = require('./controllers/persons.controller')

const plansController = require('./controllers/plans.controller')

const specialController = require('./controllers/special-events.controller')


const app = express()

app.get("/", (req , res) => {
    res.send("Hello, world!")
})

app.use("/locations", locationController)


app.use("/machines", machineController)

app.use("/persons", personController)

app.use("/plans", plansController)

app.use("/special-events", specialController)

app.get('*', (req , res) => {
    res.status(404).json({error: "Sorry, no page found!"})
})



module.exports = app