var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var bookSchema   = new Schema({
    title: String,
    author : String,
    pages : String,
    availability : Boolean,
    type : String
});

module.exports = mongoose.model('book', bookSchema);
