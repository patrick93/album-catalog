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
        });
    }

    function updateCollection(req, res) {
        const collection = { id: req.params.id, name: req.body.name }
        collectionService.updateCollection(collection).then((Id) => {
            res.status(200).send();
        }).catch((err) => {
            res.status(500).send(err);
        });
    }

    function deleteCollection(req, res) {
        collectionService.deleteCollection(req.params.id).then(() => {
            res.status(200).send();
        }).catch((err) => {
            res.status(500).send(err);
        });
    }

    return { getCollections, addCollection, updateCollection, deleteCollection }
}

module.exports = { collectionController }