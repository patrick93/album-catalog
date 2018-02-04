function albumController(albumService) {
    function getAlbumsFromCollection(req, res) {
        const { collectionId } = req.params;
        albumService.getAlbumsFromCollection(collectionId).then(albums => {
            res.status(200).json(albums);
        }).catch(error => {
            res.status(500).send(error);
        });
    }

    return { getAlbumsFromCollection }
}

module.exports = {albumController}