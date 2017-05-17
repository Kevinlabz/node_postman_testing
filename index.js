const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./mainCtrl');

const app = module.exports = express()

app.use(bodyParser.json());



app.listen(3000, console.log(`running on port ${3000}`));