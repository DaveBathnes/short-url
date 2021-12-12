const express = require('express')
const cors = require('cors')
const app = express()
const shortUrls = require('./routes/shortUrls')

require('dotenv').config()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', shortUrls)

app.listen(process.env.PORT || 5000)
