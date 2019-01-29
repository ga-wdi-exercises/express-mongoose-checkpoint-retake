const Quest = require('../models/Quest')

module.exports = {
    redirect: (req, res) => {
        res.redirect('/quests')
    },
    index: (req, res) => {
        // res.send('Hello')
        res.render('index', Note)
    },
    showOne: (req, res) => {
        Quest.findOne({})
        // .populate('note title author body')
        .exec(function(err, note) {
            res.render('show', note)
        })
    }
};