function collectionController(collectionService) {
    function getCollections(req, res) {
        collectionService.getCollections().then((collections) => {
            res.status(200).json(collections);
        }).catch((err) => {
            res.status(500).send(err);
        })
    }

    function addCollection(req, res) {
        collectionService.addCollection(req.body.Name).then((Id) => {
            res.status(201).json({Id});
        }).catch((err) => {
            res.status(500).send(err);
        })
    }

    return { getCollections, addCollection }
}

module.exports = { collectionController }