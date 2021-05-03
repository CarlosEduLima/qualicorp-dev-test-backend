const express = require('express')
const app = express()
const dotenv = require('dotenv')
const Routes = require('./main/config/routes-map.js')
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config()
app.use(cors())
app.use(bodyParser.json())
Routes(app)
app.use(express.urlencoded({ extended: false }))

const mongoose = require('mongoose')

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
})

module.exports = app
