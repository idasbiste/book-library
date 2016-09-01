var express = require('express'),
    router = express.Router(),
    Book = require("../models/book");
    
// Get list of books
router.get("/", function (req, res) {
    Book.find(function (err, books) {
        if (!err) {
            res.send(books);
        } else {
            console.log(err);
        }
    });
});


router.post("/", function (req, res) {
    var book = new Book({
        title: req.body.title,
        author: req.body.author,
        releaseDate: req.body.releaseDate
    });
    
    book.save(function (err) {
        if (!err) {
            console.log("Book created successfully!");
            res.send(book);
        } else {
            console.log(err);
        }
    });
});


router.get("/:id", function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (!err) {
            res.send(book);
        } else {
            console.log(err);
        }
    });
});


router.put("/:id", function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            console.log(err);
            return;
        }
        
        book.title = req.body.title;
        book.author = req.body.author;
        book.releaseDate = req.body.releaseDate;
        
        book.save(function (err) {
            if (!err) {
                console.log("Book updated.");
                res.send(book);
            } else {
                console.log(err);
            }
        });
    });
});


router.delete("/:id", function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            console.log(err);
            return;
        }
        
        book.remove(function (err) {
            if (!err) {
                console.log("Book successfully removed.");
                res.send("");
            } else {
                console.log(err);
            }
        });
    });
});

module.exports = router;