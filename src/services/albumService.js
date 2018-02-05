function albumService(albumRepository) {
    function getAlbumsFromCollection(collectionId) {
        return albumRepository.getAlbumsFromCollection(collectionId);
    }

    function addAlbumIntoCollection(collectionId, album) {
        return albumRepository.addAlbumIntoCollection(collectionId, album);
    }

    function updateAlbum(id, album) {
        return albumRepository.updateAlbum(id, album);
    }

    function removeAlbumFromCollection(collectionId, albumId) {
        return albumRepository.removeAlbumFromCollection(collectionId, albumId);
    }

    return { getAlbumsFromCollection, addAlbumIntoCollection, updateAlbum, removeAlbumFromCollection }
}

module.exports = { albumService }