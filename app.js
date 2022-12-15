const express = require("express")
const app = express()

// Controller/ app.use() data
const controllerData = require("./controllerData.js")
controllerData.forEach(({path, data}) => {
    app.use(path, data)
})
// app.use('/endpoint', variable)

app.get("/", (req, resp) => {
    resp.send(`Hello, world!`)
})

module.exports = app