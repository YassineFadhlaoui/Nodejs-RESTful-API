var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Book       = require('../models/book');
var updateBooks={};
 updateBooks.updateBook = function(router){
  router.route('/update/:id').put(function(req, res) {
        Book.findById(req.params.id,{upsert: true}, function(err, book) {
            if (err)
                return res.send(err);
            book.title        = req.body.title;
            book.author       = req.body.author;
            book.pages        = req.body.pages;
            book.availability = req.body.availability
            book.type         = req.body.type;
            book.save(function(err) {
                if (err)
                    return res.send(err);
                res.json({ message: 'Book updated!' });
            });
        });
    });
};
module.exports = updateBooks;
