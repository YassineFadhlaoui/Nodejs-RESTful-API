var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Book       = require('../models/book');
var getBooks={};
 getBooks.getbooks = function(router){
  router.route('/list').get(function(req, res) {
  Book.find(function(err, books) {
      if (err)
          res.send(err);
      res.json(books);
  });
});
};
module.exports = getBooks;
