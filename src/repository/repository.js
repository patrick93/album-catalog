const mysql = require('mysql');

function repository(connectionConfig) {
  const connection = mysql.createConnection(connectionConfig);

  function getCollections() {

    const promise = new Promise((resolve, reject) => {
      connection.query('SELECT * FROM COLLECTION;', (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });

    return promise;
  }

  function addCollection(name) {
    const promise = new Promise((resolve, reject) => {
      connection.query('INSERT INTO COLLECTION (Name) VALUES (?);', [name], (error, results) => {
        if (error) reject(error);
        resolve(results.insertId);
      });
    });

    return promise;
  }

  return { getCollections, addCollection };
}

module.exports = { repository };
