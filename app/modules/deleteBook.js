var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Book       = require('../models/book');
var deleteBook={};
 deleteBook.deletebook = function(router){
  router.route('/delete/:book_id').delete(function(req, res) {
     Book.remove({
         _id: req.params.book_id
     }, function(err, book) {
         if (err)
             return res.send(err);

         res.json({ message: 'Successfully deleted' });
     });
 });
};
module.exports = deleteBook;
