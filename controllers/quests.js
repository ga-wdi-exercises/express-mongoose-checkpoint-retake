const Quest = require('../models/Quest')

module.exports = {
    index: (req, res) => {
        Quest.find({})
        .then(quests => {
            res.render("index", { quests });
          })
    },
    show: (req, res) => {
        Quest.findOne({ _id: req.params.id })
        .then(quest => {
            res.render("show", { quest });
          });
    }
};