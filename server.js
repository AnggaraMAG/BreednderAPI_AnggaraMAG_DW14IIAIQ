//init express module
require("dotenv").config()
const express = require('express')
const app = express()

const routes = require('./routes/index')
const port = process.env.PORT

app.use(express.json())

app.use("/api/v1", routes)

app.listen(port, () => console.log(`listening on port ${port}!`))