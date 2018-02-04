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

  function updateCollection({ id, name }) {
    const promise = new Promise((resolve, reject) => {
      connection.query('UPDATE COLLECTION SET Name = ? WHERE Id = ?;', [name, id], (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });

    return promise;
  }

  function deleteCollection(id) {
    const promise = new Promise((resolve, reject) => {
      connection.query('DELETE FROM COLLECTION WHERE Id = ?;', [id], (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });

    return promise;
  }


  return { getCollections, addCollection, updateCollection, deleteCollection };
}

module.exports = { repository };
