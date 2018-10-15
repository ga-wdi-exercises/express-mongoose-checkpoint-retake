// partials can be used to complete this checkpoint, they are not required though. 
// in order to use partials you can use hbs to register the partials directory
// setting a partial directory was covered in a previous exercise
// partials have been provided in views/partials/
const express = require(`express`)
const app = express()
const hbs = require(`hbs`)
const Quest = require('./models/Quest')

app.set(`view engine`, `hbs`)

//the below routes can be used or changed as you see fit
app.get("/", (req, res) => {
 res.redirect('/quests')
})

app.get("/quests", (req, res) => {
  Quest.find().then(allQuest => {
    res.render("index", {allQuest})
  })
})

app.get("/quest/:id", (req, res) => {
  Quest.findOne({_id: req.params.id})
  .then(singleQuest => {
    res.render("show", {singleQuest})
  })
})


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

