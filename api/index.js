const express = require('express');
const cors = require('cors');

require('dotenv').config()
require('dotenv-defaults').config()

app.use(cors())

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8080)