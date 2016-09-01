var mongoose = require("mongoose");

var keywordsSchema = new mongoose.Schema({
    keyword: String
});

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
    keywords: [ keywordsSchema ]
});

module.exports = mongoose.model("Book", bookSchema);