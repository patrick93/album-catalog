const express = require('express');

function router(collectionController) {
    const router = express.Router();
    
    router.route('/collections').get(collectionController.getCollections)

    return router;
}

module.exports = { router }