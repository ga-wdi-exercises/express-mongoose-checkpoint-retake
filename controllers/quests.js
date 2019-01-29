const Quests = require('../models/Quest')

module.exports = {
    index: (req, res) => {
        Quests.find({})
      .sort({ createdAt: -1 })
   
    //   .populate("author")
      .then(quests => {
        res.render("index", { quests });
      })
    },
  show: (req, res) => {
    Quests.findOne({ _id: req.params.id })
    // .populate("author")

    .then(quest => {
        res.render("show", { quest });
      })
    }
}

