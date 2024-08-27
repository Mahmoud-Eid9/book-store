const pool = require('../config/db_config');

exports.getPaginatedBooks = async () => {
    try {
        const [rows] = await pool.query(`select books.id, books.title, books.description, books.image, authors.name as author, authors.id as author_id from books
                                                 join authors on books.author_id = authors.id order by books.id `);
        return rows;
      } catch (err) {
        return new Error();
      }
}

exports.searchBook = async (searchQuery) => {
  try {
    searchQuery = "%" + searchQuery + "%";
    const [rows] = await pool.query('SELECT * FROM books WHERE title LIKE ?', [searchQuery]);

    return rows;
  } catch (error) {
    return new Error();
  }
}

exports.getBook = async (id) => {
    try {
      
        const [rows] = await pool.query(`select  books.id, books.title, books.description, books.image, authors.name as author from books
                                                 join authors on books.author_id = authors.id where books.id=${id}`);
        return rows;
      } catch (err) {
        return new Error();
      }
}


exports.insertBook = async (title, description, author_id, filePath) => {
    try {
      console.log("Book:  " + typeof (book));
        const [rows] = await pool.query("insert into books (title, description, image, author_id) values (?, ?, ?, ?)", [title, description, filePath, parseInt(author_id)]);
        return rows;
      } catch (err) {
        return new Error();
      }
}


exports.alterBook = async (id, title, description, filePath= undefined) => {
    try {
      ;
      if(filePath){
        console.log("landed with a file");
        const [rows] = await pool.query(`update books set title=?, description=?, image=?
          where id=?`, [title, description, filePath, id]);
          return rows;
      }
        console.log("landed without a file");
        const [rows] = await pool.query(`update books set title=?, description=?
          where id=?`, [title, description, id]);
          return rows;
      } catch (err) {
        return new Error();
      }
}

exports.deleteBook = async (book) => {
    try {
        const [rows] = await pool.query(`delete from books
                                                 where id=${book.id}`);
        return rows;
      } catch (err) {
        return new Error();
      }
}