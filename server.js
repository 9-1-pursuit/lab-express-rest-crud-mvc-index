//DEPENDENCIES
const app = require('./app.js')

//CONFIGURATION
require("dotenv").config()
const PORT = process.env.PORT

//PORT LISTENER
app.listen('PORT',()=>{
    console.log(`Listening for port ${PORT} `)
})