const Quest = require('../models/Quest')

module.exports = {
    redirect: (req, res) => {
        res.redirect('/quests')
    },
    index: (req, res) => {
        Quest.find({})
        .sort({ createdAt: -1 })
        .then(quests => {
            res.render('index', { quests })
        })
    },
    show: (req, res) => {
        Quest.findOne({ _id: req.params.id })
        .then(quests => {
            res.render('show', { quests })
        })
    }
}