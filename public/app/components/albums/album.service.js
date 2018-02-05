class AlbumService {
    constructor($http) {
        this.$http = $http;
    }

    getAlbumsFromCollection(collectionId) {
        return this.$http.get(`api/collections/${collectionId}/albums`);
    }

    addAlbumIntoCollection(collectionId, album) {
        return this.$http.post(`api/collections/${collectionId}/albums`, { album });
    }

    updateAlbum(collectionId, album) {
        return this.$http.put(`api/collections/${collectionId}/albums/${album.Id}`, { album });
    }

    removeAlbumFromCollection(collectionId, albumId) {
        return this.$http.delete(`api/collections/${collectionId}/albums/${albumId}`);
    }
}

AlbumService.$inject = ['$http']

export { AlbumService }