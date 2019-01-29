// partials can be used to complete this checkpoint, they are not required though. 
// in order to use partials you can use hbs to register the partials directory
// setting a partial directory was covered in a previous exercise
// partials have been provided in views/partials/

const express = require('express')
const hbs = require("hbs")
const routes = require('./models/Quest')

const app = express()

app.set("view engine", "hbs")

app.use('/', routes)

app.listen(3000, () => console.log('app is running'))

//the below routes can be used or changed as you see fit
// app.get("/", (req, res) => {
//  res.send('this should redirect to the /quests route')
// })

// app.get("/quests", (req, res) => {
//   res.send('this should show all the quests')
// })

// app.get("/quest/:id", (req, res) => {
//   res.send('this should show a single quest')
// })



// DO NOT REMOVE THIS LINE:
module.exports = app

