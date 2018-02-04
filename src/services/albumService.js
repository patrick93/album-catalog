function albumService(albumRepository) {
    function getAlbumsFromCollection(collectionId) {
        return albumRepository.getAlbumsFromCollection(collectionId);
    }

    return { getAlbumsFromCollection }
}

module.exports = { albumService }