const mysql = require('mysql');

function albumRepository(connectionConfig) {
  const connection = mysql.createConnection(connectionConfig);

  function getAlbumsFromCollection(collectionId) {
    const promise = new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM ALBUM INNER JOIN ALBUM_COLLECTION C ON ALBUM.Id = C.Album_Id WHERE C.Collection_Id = ?;',
        [collectionId],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });

    return promise;
  }

  return { getAlbumsFromCollection }
}

module.exports = { albumRepository };
