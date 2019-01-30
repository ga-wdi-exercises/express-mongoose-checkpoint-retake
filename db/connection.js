const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/skyrim", {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports = mongoose;
