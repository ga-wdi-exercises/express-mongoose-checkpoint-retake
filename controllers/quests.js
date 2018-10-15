const Quests = require("../models/Quests");

module.exports = {
    index: (req, res) => {
        res.redirect('/quests'); 
    }
}