const epxress = require("express")
const router = epxress.Router()
const booksController = require('../controllers/books');
const authorsController = require('../controllers/authors');
const upload = require('../config/multer_config');

router.route('/books/search')
.get(booksController.searchBook);

router.route('/books/:id')
.get(booksController.getBookById);

router.route('/books')
.get(booksController.getBooksList)
.post(upload.single('file'), booksController.postBook)
.put(upload.single('file'), booksController.updateBook)
.delete(booksController.deleteBook);


router.route('/authors')
.get(authorsController.getAuthorsList)
.post(authorsController.postAuthor)
.put(authorsController.updateAuthor)
.delete(authorsController.deleteAuthor);

router.route('/authors/:id')
.get(authorsController.getAuthorById);


module.exports = router;