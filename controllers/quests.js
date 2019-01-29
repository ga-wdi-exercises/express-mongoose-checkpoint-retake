 
const Note = require('../models/Quest')

module.exports = {
    redirect: (req, res) => {
        res.redirect('/quests')
    },
    index: (req, res) => {
        Quests.find({notes})
        res.render("partials/", tweet);
    },
    show: (req, res) => {
        Note.findOne({_id: req.params.id })
        .then(note => {
            res.render('show', { note })
        })
    }
}