//Dependencies
const app = require("./app")

// configuration
require("dotenv").config()
const PORT = process.env.PORT

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port${PORT}`)
})
