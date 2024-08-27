const authors = require('../model/authors');

exports.getAuthorsList = async (req, res) => {
    try { 
        const rows = await authors.getPaginatedAuthors(); 
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }

}


exports.getAuthorById = async (req, res) => {
    try {
        const id = req.params.id;
        const rows = await authors.getAuthor(id);
        const books = await authors.getAuthorBooks(id);
        const author = {author: rows[0], books: books};
        return res.status(200).json(author);
    } catch (error) {
        return new Error();
    }
}

exports.postAuthor = async (req, res) => {
    const author = req.body.author;
    if(!author){
        return new Error();
    }
    try {
        const rows = await authors.insertAuthor(author);
        return res.status(201).json(rows);
    } catch (error) {
        return new Error();
    }

}


exports.updateAuthor = async (req, res) => {
    const author = req.body.author;
    if(!author){
        return new Error();
    }
    try {
        const rows = await authors.alterAuthor(author);
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }
}

exports.deleteAuthor = async (req, res) => {
    const author = req.body.author;
    if(!author){
        return new Error();
    }
    try {
        const rows = await authors.deleteAuthor(author);
        return res.status(200).json(rows);
    } catch (error) {
        return new Error();
    }
}