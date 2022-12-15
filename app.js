const express = require("express")
const app = express()
// Controller/ app.use() data
const controllerData = require("./controllerData.js")
controllerData.forEach(({path, data}) => {
    app.use(path, data)
})

// Routes
app.get("/", (req, resp) => {
    resp.send(`Hello, world!`)
})

// Error route
app.get("*", (req,resp) => {
    resp.status(404).json({
        Error: "Sorry, no page found!"
    })
})

module.exports = app