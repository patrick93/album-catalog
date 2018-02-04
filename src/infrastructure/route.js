const express = require('express');

function router(collectionController) {
  const router = express.Router();

  router.route('/collections')
    .get(collectionController.getCollections)
    .post(collectionController.addCollection);
  
  router.route('/collections/:id')
    .put(collectionController.updateCollection)
    .delete(collectionController.deleteCollection);

  return router;
}

module.exports = { router };
