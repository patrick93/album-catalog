function albumService(albumRepository) {
    function getAlbumsFromCollection(collectionId) {
        return albumRepository.getAlbumsFromCollection(collectionId);
    }

    function addAlbumIntoCollection(collectionId, album) {
        return albumRepository.getIdFromTitleAndArtist(album.Title, album.Artist).then(databaseAlbumId => {
            if(databaseAlbumId) {
                return albumRepository.addAlbumIntoCollection(collectionId, databaseAlbumId);
            } else {
                return albumRepository.createAndAddAlbumIntoCollection(collectionId, album);
            }
        });
    }

    function updateAlbum(id, album) {
        return albumRepository.updateAlbum(id, album);
    }

    function removeAlbumFromCollection(collectionId, albumId) {
        return albumRepository.removeAlbumFromCollection(collectionId, albumId);
    }

    function searchAlbum(query) {
        return albumRepository.searchAlbum(query);
    }

    return { getAlbumsFromCollection, addAlbumIntoCollection, updateAlbum, removeAlbumFromCollection, searchAlbum }
}

module.exports = { albumService }