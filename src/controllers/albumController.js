function albumController(albumService) {
    function getAlbumsFromCollection(req, res) {
        const { collectionId } = req.params;
        albumService.getAlbumsFromCollection(collectionId).then(albums => {
            res.status(200).json(albums);
        }).catch(error => {
            res.status(500).send(error);
        });
    }

    function addAlbumIntoCollection(req, res) {
        const { collectionId } = req.params;
        const { album } = req.body;
        albumService.addAlbumIntoCollection(collectionId, album).then(albums => {
            res.status(200).json(albums);
        }).catch(error => {
            res.status(500).send(error);
        });
    }

    function updateAlbum(req, res) {
        const { albumId } = req.params;
        const { album } = req.body;
        albumService.updateAlbum(albumId, album).then(albums => {
            res.status(200).send();
        }).catch(error => {
            res.status(500).send(error);
        });
    }

    function removeAlbumFromCollection(req, res) {
        const { collectionId, albumId } = req.params;
        albumService.removeAlbumFromCollection(collectionId, albumId).then(albums => {
            res.status(200).send();
        }).catch(error => {
            res.status(500).send(error);
        });
    }

    return { getAlbumsFromCollection, addAlbumIntoCollection, updateAlbum, removeAlbumFromCollection }
}

module.exports = {albumController}