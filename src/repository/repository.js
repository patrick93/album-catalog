const mysql = require('mysql');

function repository() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'albums_collection'
  });

  function getCollections() {

    const promise = new Promise((resolve, reject) => {
      connection.query('SELECT * FROM COLLECTION;', (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });

    return promise;
  }

  return { getCollections };
}

module.exports = { repository };
