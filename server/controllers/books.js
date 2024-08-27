const books = require('../model/books');

exports.getBooksList = async (req, res) => {
    try {
        const rows = await books.getPaginatedBooks(); 
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }

}

exports.searchBook = async (req, res) => {
    try {
        const search = req.query.search;
        const rows = await books.searchBook(search);
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }
}

exports.getBookById = async (req, res) => {
    try {
        const id = req.params.id;
        const rows = await books.getBook(id);
        if(rows.length == 0){
            return new Error();
        }
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }
}

exports.postBook = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      const {title, description, author_id} = req.body;
     
    const filePath = `http://localhost:8000/uploads/${req.file.filename}`
    try {
        const rows = await books.insertBook(title, description, author_id, filePath);
        return res.status(201).json(rows);
    } catch (error) {
        return new Error();
    }

}


exports.updateBook = async (req, res) => {
    try {
        const filePath = undefined;
    if (req.file) {
        filePath = `http://localhost:8000/uploads/${req.file.filename}`
      }
        const {id, title, description} = req.body;
        console.log(id + title + description);
        const rows = await books.alterBook(id, title, description, filePath);
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }
}

exports.deleteBook = async (req, res) => {
    console.log(req.body);
    const book = req.body.book;
    if(!book){
        return new Error();
    }
    try {
        const rows = await books.deleteBook(book);
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }
}