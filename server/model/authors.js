const pool = require('../config/db_config');

exports.getPaginatedAuthors = async () => {
    try {
        const [rows] = await pool.query(`select * from authors order by id `);
        return rows;
      } catch (err) {
        return new Error();
      }
}


exports.getAuthor = async (id) => {
    try {
        const [rows] = await pool.query(`select * from authors where id=${id}`);
        return rows;
      } catch (err) {
        return new Error();
      }
}

exports.getAuthorBooks = async (id) => {
    try {
        const [rows] = await pool.query(`select * from books where author_id=${id}`);
        return rows;
      } catch (err) {
        return new Error();
      }
}


exports.insertAuthor = async (author) => {
    try {
        const [rows] = await pool.query(`insert into authors (name, email, bio) 
                                                 values ('${author.name}', '${author.email}', '${author.bio}')`);
        return rows;
      } catch (err) {
        return new Error();
      }
}


exports.alterAuthor = async (author) => {
    try {
        const [rows] = await pool.query(`update authors set name='${author.name}', email='${author.email}', bio='${author.bio}'
                                                 where id=${author.id}`);
        return rows;
      } catch (err) {
        return new Error();
      }
}

exports.deleteAuthor = async (author) => {
    try {
        const [rows] = await pool.query(`delete from authors
                                                 where id=${author.id}`);
        return rows;
      } catch (err) {
        return new Error();
      }
}