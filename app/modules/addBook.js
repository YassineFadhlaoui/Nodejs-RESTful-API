var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Book       = require('../models/book');
var addBook={};
 addBook.saveBook = function(router){
  router.route('/book').post(function(req, res) {
          var book = new Book();
          book.title        = req.body.title;
          book.author       = req.body.author;
          book.pages        = req.body.pages;
          book.availability = req.body.availability
          book.type         = req.body.type;

          book.save(function(err) {
              if (err)
                  res.send(err);
              res.json({ message: 'the new book was successfully added to the database' });
          });
      });
};
module.exports = addBook;
