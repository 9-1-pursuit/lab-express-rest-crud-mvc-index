const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello, world!")
})

app.get("*", (req, res) => {
  res.status(404).sendn("Sorry, no page Found!")
})
module.exports = app
