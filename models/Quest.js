const mongoose = require('../db/connection')

const Quest = new mongoose.Schema({
    title: String,
    quest_quiver: String,
    rewards: [],
    locations: []
})

module.exports = mongoose.model('Quest', Quest)