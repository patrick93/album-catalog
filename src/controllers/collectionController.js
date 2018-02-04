function collectionController(collectionService) {
    function getCollections(req, res) {
        collectionService.getCollections().then((collections) => {
            res.status(200).json(collections);
        }).catch((err) => {
            res.status(500).send(err);
        })
    }

    return { getCollections }
}

module.exports = { collectionController }