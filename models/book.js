var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

module.exports = mongoose.model("Book", bookSchema);