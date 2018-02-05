const express = require('express');

function router(collectionController, albumController) {
  const router = express.Router();

  router.route('/collections')
    .get(collectionController.getCollections)
    .post(collectionController.addCollection);
  
  router.route('/collections/:id')
    .put(collectionController.updateCollection)
    .delete(collectionController.deleteCollection);
  
  router.route('/collections/:collectionId/albums')
    .get(albumController.getAlbumsFromCollection)
    .post(albumController.addAlbumIntoCollection);
  
  router.route('/collections/:collectionId/albums/:albumId')
    .put(albumController.updateAlbum)
    .delete(albumController.removeAlbumFromCollection);
  
  router.route('/albums')
    .get(albumController.searchAlbum);

  return router;
}

module.exports = { router };
