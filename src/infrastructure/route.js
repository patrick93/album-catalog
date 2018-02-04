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
    .get(albumController.getAlbumsFromCollection);

  return router;
}

module.exports = { router };
