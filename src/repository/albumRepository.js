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

  function getIdFromTitleAndArtist(title, artist) {
    const promise = new Promise((resolve, reject) => {
      connection.query(
        'SELECT Id FROM ALBUM WHERE Title = ? AND Artist = ?;',
        [title, artist],
        (error, results) => {
          if (error) reject(error);
          const resultId = results.length > 0 ? results[0].Id : 0;
          resolve(resultId);
        }
      );
    });

    return promise
  }
  function createAndAddAlbumIntoCollection(collectionId, album) {
    const { Title, Artist, Year, Record_label } = album;
    const promise = new Promise((resolve, reject) => {
      connection.beginTransaction(error => {
        if (error) throw error;
        connection.query(
          'INSERT INTO ALBUM (Title, Artist, Year, Record_label) VALUES (?, ?, ?, ?);',
          [Title, Artist, Year, Record_label],
          (error, results) => {
            if (error) {
              return connection.rollback(() => {
                throw error;
              });
            }
            const albumInsertedId = results.insertId;
            connection.query(
              'INSERT INTO ALBUM_COLLECTION (Collection_Id, Album_Id) VALUES (?, ?);',
              [collectionId, albumInsertedId],
              (erro, results) => {
                if (error) {
                  return connection.rollback(() => {
                    throw error;
                  });
                }
                connection.commit(error => {
                  if (error) {
                    return connection.rollback(() => {
                      throw error;
                    });
                  }
                  resolve(albumInsertedId);
                });
              }
            );
          }
        );
      });
    });

    return promise;
  }

  function addAlbumIntoCollection(collectionId, albumId) {
    const promise = new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO ALBUM_COLLECTION (Collection_Id, Album_Id) VALUES (?, ?);',
        [collectionId, albumId],
        (erro, results) => {
          if (erro) {
              throw erro;
          }
          resolve(results);
        }
      );
    });

    return promise
  }

  function updateAlbum(id, { Title, Artist, Year, Record_label }) {
    const promise = new Promise((resolve, reject) => {
      connection.query(
        'UPDATE ALBUM SET Title = ?, Artist = ?, Year = ?, Record_label = ? WHERE Id = ?;',
        [Title, Artist, Year, Record_label, id],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });

    return promise;
  }

  function removeAlbumFromCollection(collectionId, albumId) {
    const promise = new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM ALBUM_COLLECTION WHERE Collection_Id = ? AND Album_Id = ?;',
        [collectionId, albumId],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });

    return promise;
  }

  function searchAlbum(query) {
    const promise = new Promise((resolve, reject) => {
      connection.query(
        'SELECT * from ALBUM WHERE match (Title) AGAINST (? IN NATURAL LANGUAGE MODE);',
        [query],
        (error, results) => {
          if (error) reject(error);
          resolve(results);
        }
      );
    });

    return promise;
  }

  return {
    getAlbumsFromCollection,
    getIdFromTitleAndArtist,
    createAndAddAlbumIntoCollection,
    addAlbumIntoCollection,
    updateAlbum,
    removeAlbumFromCollection,
    searchAlbum
  };
}

module.exports = { albumRepository };
