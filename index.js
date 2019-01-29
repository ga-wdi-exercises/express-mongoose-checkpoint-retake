
const express = require("express");


var hbs  = require('hbs');

var app = express();



// Register `hbs.engine` with the Express app.

app.set('view engine', 'hbs');

app.use(require('./routes/routes.js'))

app.listen(3000, () => console.log('app is running')) 

// DO NOT REMOVE THIS LINE:
module.exports = app


