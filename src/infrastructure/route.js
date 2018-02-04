const express = require('express');

function router(collectionController) {
  const router = express.Router();

  router
    .route('/collections')
    .get(collectionController.getCollections)
    .post(collectionController.addCollection);

  return router;
}

module.exports = { router };
