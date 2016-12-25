var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var Book         = require('./models/book');
var addBook      = require('./modules/addBook');
var getBooks     = require('./modules/getBooks');
var getBook      = require('./modules/FindBook');
var updateBooks  = require('./modules/updateBooks');
var deleteBook   = require('./modules/deleteBook');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res , next){
	res.header('Access-Control-Allow-Origin' , '*');
	res.header('Access-Control-Allow-Methods' , 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

var port =  3000;
var router = express.Router();

addBook.saveBook(router);
getBooks.getbooks(router);
getBook.getbook(router);
updateBooks.updateBook(router);
deleteBook.deletebook(router);

router.get('/', function(req, res) {
    res.json({ message: 'welcome to our library' });
});

app.use('/library', router);
mongoose.connect('mongodb://localhost:27017/Books');
console.log('connected to Books database');
app.listen(port);
console.log('server is running on port 3000' );
