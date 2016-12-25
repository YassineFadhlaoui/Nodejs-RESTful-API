var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Book       = require('../models/book');
var getBook={};
 getBook.getbook = function(router){
  router.route('/list/:book_id').get(function(req, res) {
    Book.findById(req.params.book_id, function(err, book) {
          if (err)
              res.send(err);
          res.json(book);
      });
});
};
module.exports = getBook;
